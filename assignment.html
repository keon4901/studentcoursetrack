<?php
session_start();
require_once __DIR__ . '/db_connect.php';

// assume student login sets $_SESSION['student_id']
if (!isset($_SESSION['student_id'])) {
    header("Location: student_login.php");
    exit();
}

$student_id = (int)$_SESSION['student_id'];
$message    = "";

// Handle submission upload
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['assignment_id'])) {
    $assignment_id = (int)$_POST['assignment_id'];

    if (!empty($_FILES['submission_file']['name'])) {
        $uploadDir = __DIR__ . '/uploads/submissions/';
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }
        $fileName   = time() . "_s{$student_id}_a{$assignment_id}_" .
                      preg_replace('/\s+/', '_', basename($_FILES['submission_file']['name']));
        $targetPath = $uploadDir . $fileName;

        if (move_uploaded_file($_FILES['submission_file']['tmp_name'], $targetPath)) {
            $file_path = 'uploads/submissions/' . $fileName;

            // If student already submitted, update; else insert
            $check = $conn->prepare("SELECT submission_id FROM Submission
                                     WHERE student_id = ? AND assignment_id = ?");
            $check->bind_param("ii", $student_id, $assignment_id);
            $check->execute();
            $cres = $check->get_result();

            if ($row = $cres->fetch_assoc()) {
                $sub_id = (int)$row['submission_id'];
                $upd = $conn->prepare("UPDATE Submission
                                       SET file_path = ?, submitted_at = NOW(), status = 'submitted'
                                       WHERE submission_id = ?");
                $upd->bind_param("si", $file_path, $sub_id);
                $upd->execute();
                $upd->close();
            } else {
                $ins = $conn->prepare("INSERT INTO Submission (student_id, assignment_id, file_path)
                                       VALUES (?, ?, ?)");
                $ins->bind_param("iis", $student_id, $assignment_id, $file_path);
                $ins->execute();
                $ins->close();
            }

            $message = "Assignment submitted successfully.";
        } else {
            $message = "File upload failed.";
        }
    } else {
        $message = "Please choose a file to upload.";
    }
}

// Load assignments
$assignments = [];
$asql = "SELECT assignment_id, course_id, title, description, due_date, file_path, max_score, status
         FROM Assignment
         ORDER BY due_date ASC";
$res = $conn->query($asql);
if ($res) {
    while ($row = $res->fetch_assoc()) {
        $assignments[] = $row;
    }
}

// Load student's submissions keyed by assignment_id
$submissions = [];
$ssql = "SELECT s.assignment_id, s.file_path, s.submitted_at, s.status
         FROM Submission s
         WHERE s.student_id = ?";
$st = $conn->prepare($ssql);
$st->bind_param("i", $student_id);
$st->execute();
$sr = $st->get_result();
while ($row = $sr->fetch_assoc()) {
    $submissions[(int)$row['assignment_id']] = $row;
}
$st->close();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Assignments</title>
  <style>
    body {
      background: #f3f4f6;
      margin: 0;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    /* NAVBAR / DASHBOARD LINKS */
    .topbar {
      background: linear-gradient(135deg,#1d4ed8,#0ea5e9);
      padding: 14px 28px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 10px 25px rgba(15,23,42,0.35);
      color: #e5e7eb;
    }
    .topbar-title {
      font-size: 20px;
      font-weight: 600;
      margin: 0;
    }
    .topbar-nav a {
      color: #e5e7eb;
      text-decoration: none;
      margin-left: 16px;
      font-size: 14px;
      padding-bottom: 2px;
      border-bottom: 2px solid transparent;
    }
    .topbar-nav a:hover {
      border-bottom-color: rgba(248,250,252,0.7);
    }
    .topbar-nav a.active {
      border-bottom-color: #ffffff;
      font-weight: 600;
    }

    .page-wrapper {
      max-width: 1100px;
      margin: 1.75rem auto 3rem;
      padding: 0 1.25rem 2rem;
      color: #111827;
    }
    .page-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.2rem;
    }
    .page-header h1 {
      font-size: 1.8rem;
      margin: 0;
    }
    .page-subtitle {
      font-size: 0.9rem;
      color: #6b7280;
    }

    .assignment-list {
      display: flex;
      flex-direction: column;
      gap: 0.9rem;
      margin-top: 0.5rem;
    }
    .assignment-card {
      display: flex;
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
      border: 1px solid #e5e7eb;
      transition: transform 0.12s ease-out, box-shadow 0.12s ease-out;
    }
    .assignment-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(15, 23, 42, 0.16);
    }
    .assignment-accent {
      width: 6px;
      flex-shrink: 0;
    }
    .assignment-main {
      flex: 1;
      padding: 0.9rem 1.2rem 1rem;
      display: flex;
      justify-content: space-between;
      gap: 0.75rem;
    }
    .assignment-left {
      flex: 1;
    }
    .course-tag {
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: #4b5563;
      margin-bottom: 0.15rem;
    }
    .course-semester {
      font-size: 0.75rem;
      color: #6b7280;
      margin-bottom: 0.35rem;
    }
    .assignment-title a {
      font-size: 1rem;
      font-weight: 600;
      color: #1d4ed8;
      text-decoration: none;
    }
    .assignment-title a:hover {
      text-decoration: underline;
    }
    .assignment-meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      margin-top: 0.35rem;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      padding: 0.12rem 0.55rem;
      border-radius: 999px;
      font-size: 0.75rem;
      border: 1px solid rgba(148, 163, 184, 0.6);
      color: #4b5563;
      background: #f9fafb;
    }
    .badge-dot {
      width: 6px;
      height: 6px;
      border-radius: 999px;
      margin-right: 0.3rem;
    }
    .assignment-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      min-width: 150px;
      text-align: right;
      gap: 0.5rem;
      font-size: 0.85rem;
    }
    .due-date-label {
      font-size: 0.75rem;
      color: #6b7280;
    }
    .due-date-value {
      font-weight: 600;
      color: #111827;
    }
    .status-pill {
      font-size: 0.75rem;
      padding: 0.25rem 0.7rem;
      border-radius: 999px;
      background: #ecfdf3;
      color: #15803d;
      border: 1px solid #bbf7d0;
      white-space: nowrap;
    }

    @media (max-width: 720px) {
      .assignment-main {
        flex-direction: column;
      }
      .assignment-right {
        justify-content: flex-start;
        text-align: left;
      }
    }

    /* small extras for upload form */
    .upload-row {
      margin-top: 0.6rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      align-items: center;
    }
    .upload-row input[type="file"] {
      font-size: 0.8rem;
    }
    .upload-btn {
      border: none;
      border-radius: 999px;
      padding: 0.25rem 0.9rem;
      background: linear-gradient(135deg,#1d4ed8,#22c55e);
      color: #ffffff;
      font-size: 0.8rem;
      cursor: pointer;
    }
    .upload-btn:hover {
      filter: brightness(1.05);
    }
    .message {
      margin-bottom: 0.8rem;
      font-size: 0.9rem;
      color: #166534;
      background: #dcfce7;
      padding: 0.45rem 0.7rem;
      border-radius: 6px;
      border: 1px solid #bbf7d0;
    }
  </style>
</head>
<body>

<!-- NAVBAR / DASHBOARD LINKS -->
<div class="topbar">
  <div class="topbar-title">Student Portal</div>
  <div class="topbar-nav">
    <a href="dashboard.php" class="active">Dashboard</a>
    <a href="calendar.php">Calendar</a>
    <a href="assignment.php">Assignments</a>
    <a href="messages.php">Messages</a>
    <a href="logout.php">Logout</a>
  </div>
</div>

<div class="page-wrapper">
  <div class="page-header">
    <div>
      <h1>My Assignments</h1>
      <div class="page-subtitle">View instructions, download files, and upload your completed work.</div>
    </div>
  </div>

  <?php if ($message): ?>
    <div class="message"><?php echo htmlspecialchars($message); ?></div>
  <?php endif; ?>

  <div class="assignment-list">
    <?php if (empty($assignments)): ?>
      <p>No assignments available.</p>
    <?php else: ?>
      <?php foreach ($assignments as $a):
            $aid = (int)$a['assignment_id'];
            $sub = $submissions[$aid] ?? null;

            // determine accent color and status text
            $accentColor = '#1d4ed8';
            $statusText  = 'Not submitted';
            $statusClass = 'status-pill';

            if ($sub) {
                if ($sub['status'] === 'graded') {
                    $accentColor = '#16a34a';
                    $statusText  = 'Graded';
                } elseif ($sub['status'] === 'returned') {
                    $accentColor = '#ea580c';
                    $statusText  = 'Returned';
                } else {
                    $accentColor = '#0ea5e9';
                    $statusText  = 'Submitted';
                }
            }
      ?>
        <div class="assignment-card">
          <div class="assignment-accent" style="background: <?php echo $accentColor; ?>;"></div>
          <div class="assignment-main">
            <div class="assignment-left">
              <div class="course-tag">
                Course ID: <?php echo htmlspecialchars($a['course_id']); ?>
              </div>
              <div class="course-semester">
                Max Score: <?php echo htmlspecialchars($a['max_score']); ?>
              </div>

              <div class="assignment-title">
                <?php if (!empty($a['file_path'])): ?>
                  <a href="<?php echo htmlspecialchars($a['file_path']); ?>" target="_blank">
                    <?php echo htmlspecialchars($a['title']); ?>
                  </a>
                <?php else: ?>
                  <a href="javascript:void(0);"><?php echo htmlspecialchars($a['title']); ?></a>
                <?php endif; ?>
              </div>

              <?php if (!empty($a['description'])): ?>
                <div style="font-size:0.85rem; color:#4b5563; margin-top:0.25rem;">
                  <?php echo nl2br(htmlspecialchars($a['description'])); ?>
                </div>
              <?php endif; ?>

              <div class="assignment-meta-row">
                <div class="badge">
                  <span class="badge-dot" style="background:#22c55e;"></span>
                  Status: <?php echo htmlspecialchars($a['status']); ?>
                </div>
                <?php if ($sub && !empty($sub['file_path'])): ?>
                  <div class="badge">
                    <span class="badge-dot" style="background:#0ea5e9;"></span>
                    <a href="<?php echo htmlspecialchars($sub['file_path']); ?>" target="_blank"
                       style="text-decoration:none;color:#1d4ed8;">
                      View your upload
                    </a>
                  </div>
                <?php endif; ?>
              </div>

              <form method="post" enctype="multipart/form-data" class="upload-row">
                <input type="hidden" name="assignment_id" value="<?php echo $aid; ?>">
                <input type="file" name="submission_file" required>
                <button type="submit" class="upload-btn">
                  <?php echo $sub ? 'Replace Submission' : 'Upload Submission'; ?>
                </button>
              </form>

              <?php if ($sub): ?>
                <div style="margin-top:0.3rem; font-size:0.8rem; color:#6b7280;">
                  Submitted: <?php echo htmlspecialchars($sub['submitted_at']); ?>
                </div>
              <?php endif; ?>
            </div>

            <div class="assignment-right">
              <div>
                <div class="due-date-label">Due</div>
                <div class="due-date-value">
                  <?php echo htmlspecialchars($a['due_date']); ?>
                </div>
              </div>
              <div class="<?php echo $statusClass; ?>">
                <?php echo htmlspecialchars($statusText); ?>
              </div>
            </div>
          </div>
        </div>
      <?php endforeach; ?>
    <?php endif; ?>
  </div>
</div>

</body>
</html>
