<?php
// Show errors so we don't get blank pages while developing
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start();
require "config.php";

if (empty($_SESSION['student_id'])) {
    header("Location: index.php");
    exit;
}

$studentId   = $_SESSION['student_id'];
$studentName = $_SESSION['student_name'] ?? "Student";

/* 1. Get all courses for this student */
$coursesSql = "
    SELECT course_id, course_name, semester
    FROM Course
    WHERE student_id = ?
    ORDER BY course_name
";
$stmt = $conn->prepare($coursesSql);
$stmt->bind_param("i", $studentId);
$stmt->execute();
$result = $stmt->get_result();

$courses = [];
while ($row = $result->fetch_assoc()) {
    $courses[] = $row;
}

/* 2. Which course (if any) is selected for Course Messages? */
$selectedCourseId = isset($_GET['course_id']) ? (int)$_GET['course_id'] : 0;
$selectedCourse   = null;

foreach ($courses as $c) {
    if ($c['course_id'] == $selectedCourseId) {
        $selectedCourse = $c;
        break;
    }
}

/* 3. If a course is selected, load its messages */
$messagesRes = null;
if ($selectedCourse) {
    $msgSql = "
        SELECT message_id, sender, message_text, sent_at
        FROM Message
        WHERE course_id = ? AND student_id = ?
        ORDER BY sent_at ASC
    ";
    $ms = $conn->prepare($msgSql);
    $ms->bind_param("ii", $selectedCourseId, $studentId);
    $ms->execute();
    $messagesRes = $ms->get_result();
}
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Messages | Student Course Tracker</title>
  <link rel="stylesheet" href="style.css">
  <style>
    body {
      background: #f5f5f5;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
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
    .course-card-list {
      background: #fafafa;
      border-radius: 10px;
      border: 1px solid #e5e5e5;
      overflow: hidden;
    }
    .course-card-row {
      display: grid;
      grid-template-columns: 6px 1fr auto;
      align-items: center;
      padding: 0.85rem 1.25rem;
      border-bottom: 1px solid #e5e5e5;
      background: #ffffff;
    }
    .course-card-row:last-child {
      border-bottom: none;
    }
    .course-color-strip {
      height: 100%;
      border-radius: 999px;
    }
    .color-orange  { background: #f97316; }
    .color-yellow  { background: #facc15; }
    .color-teal    { background: #14b8a6; }
    .course-main {
      padding-left: 0.9rem;
    }
    .course-id-label {
      font-size: 0.78rem;
      color: #6b7280;
      margin-bottom: 0.15rem;
    }
    .course-name {
      font-size: 1rem;
      font-weight: 600;
      color: #111827;
    }
    .course-semester {
      font-size: 0.8rem;
      color: #6b7280;
      margin-top: 0.05rem;
    }
    .course-actions {
      text-align: right;
    }
    .new-msg-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.35rem 0.9rem;
      border-radius: 999px;
      border: 1px solid #9ca3af;
      background: #ffffff;
      color: #374151;
      font-size: 0.86rem;
      text-decoration: none;
    }
    .new-msg-btn:hover {
      background: #f3f4f6;
    }

    /* Course Messages section */
    .course-messages-wrapper {
      margin-top: 2rem;
      background: #ffffff;
      border-radius: 10px;
      border: 1px solid #e5e5e5;
      padding: 1.25rem 1.5rem 1.5rem;
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
      max-height: 300px;
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
    .message-student {
      margin-left: auto;
      background: #2563eb;
      color: #ffffff;
      border-bottom-right-radius: 2px;
    }
    .message-instructor {
      margin-right: auto;
      background: #e5e7eb;
      color: #111827;
      border-bottom-left-radius: 2px;
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

    @media (max-width: 900px) {
      .course-card-row {
        grid-template-columns: 6px 1fr;
        row-gap: 0.4rem;
      }
      .course-actions {
        justify-self: flex-start;
        padding-left: 0.9rem;
      }
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <h2>Messages - Student Course Tracker</h2>
    <ul>
      <li><a href="dashboard.php">Dashboard</a></li>
      <li><a href="calendar.php">Calendar</a></li>
      <li><a href="assignment.php">Assignments</a></li>
      <li><a href="messages.php" class="active">Messages</a></li>
      <li><a href="logout.php">Logout</a></li>
    </ul>
  </nav>

  <div class="page-wrapper">
    <!-- TOP: list of courses with New Message button (like your screenshot) -->
    <h1 class="messages-title">Messages</h1>

    <div class="course-card-list">
      <?php if (count($courses) === 0): ?>
        <div class="course-card-row">
          <div class="course-color-strip color-orange"></div>
          <div class="course-main">
            <div class="course-name">No courses found</div>
            <div class="course-semester">Add courses for this student in the Course table.</div>
          </div>
        </div>
      <?php else: ?>
        <?php
          $colors = ['color-orange', 'color-yellow', 'color-teal'];
          $i = 0;
        ?>
        <?php foreach ($courses as $c): ?>
          <?php $colorClass = $colors[$i % count($colors)]; $i++; ?>
          <div class="course-card-row">
            <div class="course-color-strip <?= $colorClass ?>"></div>

            <div class="course-main">
              <div class="course-id-label">
                ID: <?= htmlspecialchars('COURSE-' . $c['course_id']) ?>
              </div>
              <div class="course-name">
                <?= htmlspecialchars($c['course_name']) ?>
              </div>
              <div class="course-semester">
                <?= htmlspecialchars($c['semester']) ?>
              </div>
            </div>

            <div class="course-actions">
              <a class="new-msg-btn"
                 href="messages.php?course_id=<?= $c['course_id'] ?>">
                &#9993; New Message
              </a>
            </div>
          </div>
        <?php endforeach; ?>
      <?php endif; ?>
    </div>

    <!-- BOTTOM: Course messages for selected course -->
    <?php if ($selectedCourse): ?>
      <div class="course-messages-wrapper" style="margin-top: 1.75rem;">
        <div class="course-messages-header">
          <div>
            <h3>Course Messages</h3>
            <div class="course-messages-subtitle">
              <?= htmlspecialchars($selectedCourse['course_name']) ?>
              (<?= htmlspecialchars($selectedCourse['semester']) ?>)
            </div>
          </div>
          <div>
            <a href="#new-message-form" class="new-msg-btn">&#9993; New Message</a>
          </div>
        </div>

        <div class="messages-thread">
          <?php if ($messagesRes && $messagesRes->num_rows > 0): ?>
            <?php while ($m = $messagesRes->fetch_assoc()): ?>
              <div class="message-bubble <?= $m['sender'] === 'student' ? 'message-student' : 'message-instructor' ?>">
                <div><?= nl2br(htmlspecialchars($m['message_text'])) ?></div>
                <div class="message-meta">
                  <?= $m['sender'] === 'student' ? 'You' : 'Instructor' ?> •
                  <?= date('M j, Y g:i a', strtotime($m['sent_at'])) ?>
                </div>
              </div>
            <?php endwhile; ?>
          <?php else: ?>
            <p>No messages yet for this course. Start the conversation below.</p>
          <?php endif; ?>
        </div>

        <form id="new-message-form" class="message-form" method="post" action="send_message.php">
          <input type="hidden" name="course_id" value="<?= $selectedCourseId ?>">

          <label>Message</label>
          <textarea name="message_text" required placeholder="Type your message to the instructor..."></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    <?php endif; ?>

  </div>
</body>
</html>
