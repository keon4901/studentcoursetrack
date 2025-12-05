<?php
// teacher_messages.php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start();
require_once __DIR__ . '/db_connect.php';

// Only allow logged-in teachers/admins
if (!isset($_SESSION['role']) || $_SESSION['role'] !== 'admin') {
    header("Location: teacher_login.php");
    exit();
}

$admin_id       = $_SESSION['admin_id'];
$admin_username = $_SESSION['admin_username'] ?? 'Teacher';

/*
 * 1. Load all conversation threads (student + course combos that have messages)
 */
$threads = [];
$threadSql = "
    SELECT 
        m.student_id,
        s.first_name,
        s.last_name,
        m.course_id,
        COALESCE(c.course_name, CONCAT('Course ', m.course_id)) AS course_name,
        COALESCE(c.semester, '') AS semester,
        MAX(m.sent_at) AS last_sent_at
    FROM Message m
    JOIN Student s ON m.student_id = s.student_id
    LEFT JOIN Course c ON m.course_id = c.course_id
    GROUP BY 
        m.student_id, s.first_name, s.last_name,
        m.course_id, c.course_name, c.semester
    ORDER BY last_sent_at DESC
";
$tr = $conn->query($threadSql);
if ($tr) {
    while ($row = $tr->fetch_assoc()) {
        $threads[] = $row;
    }
}

/*
 * 2. Determine which conversation is selected
 */
$selectedStudentId = isset($_GET['student_id']) ? (int)$_GET['student_id'] : 0;
$selectedCourseId  = isset($_GET['course_id'])  ? (int)$_GET['course_id']  : 0;

$selectedThread = null;

if ($selectedStudentId && $selectedCourseId) {
    foreach ($threads as $t) {
        if ((int)$t['student_id'] === $selectedStudentId &&
            (int)$t['course_id']  === $selectedCourseId) {
            $selectedThread = $t;
            break;
        }
    }
}

// If nothing explicitly selected, but we have threads, default to the first
if (!$selectedThread && count($threads) > 0) {
    $selectedThread    = $threads[0];
    $selectedStudentId = (int)$threads[0]['student_id'];
    $selectedCourseId  = (int)$threads[0]['course_id'];
}

/*
 * 3. Load messages for the selected thread
 */
$messagesRes = null;
if ($selectedThread) {
    $msgSql = "
        SELECT message_id, sender, message_text, sent_at
        FROM Message
        WHERE student_id = ? AND course_id = ?
        ORDER BY sent_at ASC
    ";
    $ms = $conn->prepare($msgSql);
    $ms->bind_param("ii", $selectedStudentId, $selectedCourseId);
    $ms->execute();
    $messagesRes = $ms->get_result();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Teacher Messages | Student Course Tracker</title>
  <style>
    body {
      background: #f5f5f5;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      margin: 0;
    }

    /* TOPBAR / NAVBAR (teacher style) */
    .topbar {
      background: linear-gradient(135deg,#1d4ed8,#0ea5e9);
      padding: 16px 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 10px 30px rgba(15,23,42,.35);
      color: #e5e7eb;
    }
    .topbar h1 {
      margin: 0;
      font-size: 22px;
    }
    .topbar small {
      display: block;
      font-size: 12px;
      opacity: .9;
    }
    .topbar-nav a {
      color: #e5e7eb;
      text-decoration: none;
      margin-left: 16px;
      font-size: 14px;
      padding-bottom: 2px;
      border-bottom: 2px solid transparent;
    }
    .topbar-nav a:hover { border-bottom-color: rgba(248,250,252,0.8); }
    .topbar-nav a.active {
      border-bottom-color: #ffffff;
      font-weight: 600;
    }

    .page-wrapper {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1.5rem 1.25rem 2.5rem;
    }
    .messages-title {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .layout {
      display: grid;
      grid-template-columns: 340px minmax(0, 1fr);
      gap: 1.5rem;
      align-items: flex-start;
    }

    /* LEFT: conversation list */
    .thread-list {
      background: #fafafa;
      border-radius: 10px;
      border: 1px solid #e5e5e5;
      overflow: hidden;
    }
    .thread-row {
      display: grid;
      grid-template-columns: 6px 1fr auto;
      align-items: center;
      padding: 0.85rem 1.0rem;
      border-bottom: 1px solid #e5e5e5;
      background: #ffffff;
    }
    .thread-row:last-child {
      border-bottom: none;
    }
    .thread-color-strip {
      height: 100%;
      border-radius: 999px;
    }
    .color-orange  { background: #f97316; }
    .color-yellow  { background: #facc15; }
    .color-teal    { background: #14b8a6; }

    .thread-main {
      padding-left: 0.85rem;
    }
    .thread-student-name {
      font-size: 1rem;
      font-weight: 600;
      color: #111827;
    }
    .thread-course-name {
      font-size: 0.85rem;
      color: #4b5563;
      margin-top: 0.1rem;
    }
    .thread-semester {
      font-size: 0.78rem;
      color: #6b7280;
      margin-top: 0.05rem;
    }
    .thread-meta {
      font-size: 0.75rem;
      color: #9ca3af;
      margin-top: 0.15rem;
    }

    .thread-actions {
      text-align: right;
      font-size: 0.8rem;
    }
    .open-thread-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.3rem 0.8rem;
      border-radius: 999px;
      border: 1px solid #9ca3af;
      background: #ffffff;
      color: #374151;
      font-size: 0.8rem;
      text-decoration: none;
    }
    .open-thread-btn:hover {
      background: #f3f4f6;
    }

    .thread-row.active {
      background: #eff6ff;
    }

    /* RIGHT: messages + reply */
    .course-messages-wrapper {
      background: #ffffff;
      border-radius: 10px;
      border: 1px solid #e5e5e5;
      padding: 1.25rem 1.5rem 1.5rem;
      min-height: 320px;
    }
    .course-messages-header {
      border-bottom: 1px solid #e5e5e5;
      padding-bottom: 0.75rem;
      margin-bottom: 0.75rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .course-messages-header h3 {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 600;
    }
    .course-messages-subtitle {
      font-size: 0.85rem;
      color: #6b7280;
    }

    .messages-thread {
      max-height: 320px;
      overflow-y: auto;
      padding-right: 0.5rem;
      margin-bottom: 0.9rem;
    }
    .message-bubble {
      max-width: 70%;
      padding: 0.6rem 0.8rem;
      border-radius: 10px;
      margin-bottom: 0.6rem;
      font-size: 0.9rem;
      line-height: 1.4;
      position: relative;
    }
    /* From teacher's perspective: student on left (gray), instructor on right (blue) */
    .message-student {
      margin-right: auto;
      background: #e5e7eb;
      color: #111827;
      border-bottom-left-radius: 2px;
    }
    .message-instructor {
      margin-left: auto;
      background: #2563eb;
      color: #ffffff;
      border-bottom-right-radius: 2px;
    }
    .message-meta {
      font-size: 0.7rem;
      opacity: 0.8;
      margin-top: 0.2rem;
    }

    .message-form label {
      font-size: 0.85rem;
      font-weight: 500;
      display: block;
      margin-bottom: 0.25rem;
    }
    .message-form textarea {
      width: 100%;
      border-radius: 8px;
      border: 1px solid #d1d5db;
      padding: 0.5rem 0.6rem;
      font-size: 0.9rem;
      margin-bottom: 0.45rem;
      resize: vertical;
      min-height: 70px;
    }
    .message-form button {
      padding: 0.4rem 0.95rem;
      border-radius: 999px;
      border: none;
      background: #2563eb;
      color: #ffffff;
      font-size: 0.9rem;
      cursor: pointer;
    }
    .message-form button:hover {
      background: #1d4ed8;
    }

    @media (max-width: 960px) {
      .layout {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>

<div class="topbar">
  <div>
    <h1>Messages</h1>
    <small>Welcome, <?php echo htmlspecialchars($admin_username); ?></small>
  </div>
  <div class="topbar-nav">
    <a href="teacher_dashboard.php">Dashboard</a>
    <a href="teacher_assignments.php">Assignments</a>
    <a href="teacher_grades.php">Grades</a>
    <a href="teacher_messages.php" class="active">Messages</a>
    <a href="teacher_logout.php">Logout</a>
  </div>
</div>

<div class="page-wrapper">
  <h2 class="messages-title">Student Messages</h2>

  <div class="layout">
    <!-- LEFT: list of conversations (student + course threads) -->
    <div class="thread-list">
      <?php if (count($threads) === 0): ?>
        <div class="thread-row">
          <div class="thread-color-strip color-orange"></div>
          <div class="thread-main">
            <div class="thread-student-name">No conversations yet</div>
            <div class="thread-course-name">
              Messages from students will appear here once they start a thread.
            </div>
          </div>
        </div>
      <?php else: ?>
        <?php
          $colors = ['color-orange', 'color-yellow', 'color-teal'];
          $i = 0;
        ?>
        <?php foreach ($threads as $t): ?>
          <?php
            $colorClass   = $colors[$i % count($colors)];
            $i++;
            $isActive = ($selectedStudentId === (int)$t['student_id']
                      && $selectedCourseId  === (int)$t['course_id']);
          ?>
          <div class="thread-row <?php echo $isActive ? 'active' : ''; ?>">
            <div class="thread-color-strip <?php echo $colorClass; ?>"></div>

            <div class="thread-main">
              <div class="thread-student-name">
                <?php echo htmlspecialchars($t['first_name'] . ' ' . $t['last_name']); ?>
              </div>
              <div class="thread-course-name">
                <?php echo htmlspecialchars($t['course_name']); ?>
              </div>
              <?php if (!empty($t['semester'])): ?>
                <div class="thread-semester">
                  <?php echo htmlspecialchars($t['semester']); ?>
                </div>
              <?php endif; ?>
              <div class="thread-meta">
                Last message: <?php echo htmlspecialchars(date('M j, Y g:i a', strtotime($t['last_sent_at']))); ?>
              </div>
            </div>

            <div class="thread-actions">
              <a class="open-thread-btn"
                 href="teacher_messages.php?student_id=<?php echo (int)$t['student_id']; ?>&course_id=<?php echo (int)$t['course_id']; ?>">
                &#128065; View
              </a>
            </div>
          </div>
        <?php endforeach; ?>
      <?php endif; ?>
    </div>

    <!-- RIGHT: messages of selected thread -->
    <div>
      <?php if ($selectedThread): ?>
        <div class="course-messages-wrapper">
          <div class="course-messages-header">
            <div>
              <h3>
                Conversation with
                <?php echo htmlspecialchars($selectedThread['first_name'] . ' ' . $selectedThread['last_name']); ?>
              </h3>
              <div class="course-messages-subtitle">
                <?php echo htmlspecialchars($selectedThread['course_name']); ?>
                <?php if (!empty($selectedThread['semester'])): ?>
                  (<?php echo htmlspecialchars($selectedThread['semester']); ?>)
                <?php endif; ?>
              </div>
            </div>
          </div>

          <div class="messages-thread">
            <?php if ($messagesRes && $messagesRes->num_rows > 0): ?>
              <?php while ($m = $messagesRes->fetch_assoc()): ?>
                <?php
                  $bubbleClass = ($m['sender'] === 'student')
                    ? 'message-student'
                    : 'message-instructor';
                  $whoLabel = ($m['sender'] === 'student') ? 'Student' : 'You';
                ?>
                <div class="message-bubble <?php echo $bubbleClass; ?>">
                  <div><?php echo nl2br(htmlspecialchars($m['message_text'])); ?></div>
                  <div class="message-meta">
                    <?php echo $whoLabel; ?> •
                    <?php echo date('M j, Y g:i a', strtotime($m['sent_at'])); ?>
                  </div>
                </div>
              <?php endwhile; ?>
            <?php else: ?>
              <p>No messages yet in this conversation.</p>
            <?php endif; ?>
          </div>

          <form class="message-form" method="post" action="teacher_send_message.php">
            <input type="hidden" name="student_id" value="<?php echo $selectedStudentId; ?>">
            <input type="hidden" name="course_id" value="<?php echo $selectedCourseId; ?>">

            <label>Reply to student</label>
            <textarea name="message_text" required placeholder="Type your reply to the student..."></textarea>

            <button type="submit">Send Reply</button>
          </form>
        </div>
      <?php else: ?>
        <div class="course-messages-wrapper">
          <p>Select a conversation on the left to view and reply to messages.</p>
        </div>
      <?php endif; ?>
    </div>

  </div>
</div>

</body>
</html>
