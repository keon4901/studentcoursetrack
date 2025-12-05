<?php
// Show errors while building
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start();
require "config.php";

if (empty($_SESSION['student_id'])) {
    header("Location: index.php");
    exit;
}

$studentId = $_SESSION['student_id'];

// ----- Get current month/year or from query -----
$year  = isset($_GET['year'])  ? (int)$_GET['year']  : (int)date('Y');
$month = isset($_GET['month']) ? (int)$_GET['month'] : (int)date('n');

// Make sure month is 1–12
if ($month < 1) { $month = 12; $year--; }
if ($month > 12) { $month = 1; $year++; }

$firstDay  = sprintf('%04d-%02d-01', $year, $month);
$lastDay   = date('Y-m-t', strtotime($firstDay));
$daysInMonth = (int)date('t', strtotime($firstDay));
// 0 (Sun) – 6 (Sat)
$firstWeekday = (int)date('w', strtotime($firstDay));

$monthName = date('F Y', strtotime($firstDay));

// Prev / Next month links
$prevMonth = $month - 1;
$prevYear  = $year;
if ($prevMonth < 1) { $prevMonth = 12; $prevYear--; }

$nextMonth = $month + 1;
$nextYear  = $year;
if ($nextMonth > 12) { $nextMonth = 1; $nextYear++; }

// ----- Fetch student's courses -----
$sqlCourses = "
    SELECT course_id, course_name, semester
    FROM Course
    WHERE student_id = ?
    ORDER BY semester, course_name
";
$stmt = $conn->prepare($sqlCourses);
$stmt->bind_param("i", $studentId);
$stmt->execute();
$coursesRes = $stmt->get_result();
$courses = [];
while ($row = $coursesRes->fetch_assoc()) {
    $courses[] = $row;
}

// ----- Fetch assignments for this month -----
$sqlAssignments = "
    SELECT a.assignment_id, a.title, a.due_date, a.status,
           c.course_name, c.course_id
    FROM Assignment a
    JOIN Course c ON a.course_id = c.course_id
    WHERE c.student_id = ?
      AND a.due_date BETWEEN ? AND ?
    ORDER BY a.due_date
";
$st = $conn->prepare($sqlAssignments);
$st->bind_param("iss", $studentId, $firstDay, $lastDay);
$st->execute();
$assignRes = $st->get_result();

// Group assignments by date (YYYY-MM-DD)
$assignmentsByDate = [];
while ($row = $assignRes->fetch_assoc()) {
    $dateKey = $row['due_date']; // already YYYY-MM-DD
    if (!isset($assignmentsByDate[$dateKey])) {
        $assignmentsByDate[$dateKey] = [];
    }
    $assignmentsByDate[$dateKey][] = $row;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Calendar | Student Course Tracker</title>
  <link rel="stylesheet" href="style.css" />
  <style>
    .layout {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1.5rem 1.25rem 2.5rem;
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 1.5rem;
    }
    @media (max-width: 900px) {
      .layout {
        grid-template-columns: 1fr;
      }
    }

    /* Course list (left) */
    .course-list-box {
      background: #ffffff;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      border: 1px solid #e5e7eb;
      padding: 1rem;
      height: fit-content;
    }
    .course-list-box h3 {
      margin-bottom: 0.75rem;
      font-size: 1.1rem;
    }
    .course-item {
      border-left: 4px solid #3b82f6;
      padding: 0.5rem 0.7rem;
      margin-bottom: 0.4rem;
      background: #f9fafb;
      border-radius: 6px;
      font-size: 0.9rem;
    }
    .course-item strong {
      display: block;
      color: #111827;
    }
    .course-item span {
      font-size: 0.78rem;
      color: #6b7280;
    }

    /* Calendar area (right) */
    .calendar-container {
      background: #ffffff;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      border: 1px solid #e5e7eb;
      padding: 1.25rem 1.5rem 1.75rem;
    }
    .calendar-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.75rem;
    }
    .calendar-header h2 {
      margin: 0;
      font-size: 1.3rem;
    }
    .month-nav a {
      padding: 0.25rem 0.6rem;
      border-radius: 999px;
      border: 1px solid #d1d5db;
      text-decoration: none;
      color: #374151;
      font-size: 0.85rem;
      margin: 0 0.1rem;
      background: #f9fafb;
    }
    .month-nav a:hover {
      background: #e5e7eb;
    }

    .calendar-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 0.6rem;
      margin-top: 0.75rem;
    }
    .day-name {
      font-size: 0.78rem;
      font-weight: 600;
      text-align: center;
      color: #6b7280;
    }
    .day-cell {
      background: #ffffff;
      min-height: 90px;
      border-radius: 8px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.05);
      padding: 0.4rem 0.45rem 0.35rem;
      font-size: 0.8rem;
      display: flex;
      flex-direction: column;
    }
    .day-number {
      font-weight: 600;
      font-size: 0.8rem;
      color: #374151;
      margin-bottom: 0.2rem;
    }
    .day-empty {
      background: transparent;
      box-shadow: none;
    }
    .calendar-assignment {
      display: block;
      margin-bottom: 0.18rem;
      padding: 0.15rem 0.25rem;
      border-radius: 5px;
      font-size: 0.72rem;
      text-decoration: none;
      color: #111827;
      background: #e0f2fe;
      border-left: 3px solid #3b82f6;
    }
    .calendar-assignment span.course {
      font-weight: 600;
    }
    .calendar-assignment.pending { background:#fef3c7; border-color:#f59e0b; }
    .calendar-assignment.in_progress { background:#dbeafe; border-color:#3b82f6; }
    .calendar-assignment.completed { background:#dcfce7; border-color:#10b981; }

    .legend {
      margin-top: 0.6rem;
      font-size: 0.75rem;
      color: #6b7280;
      display: flex;
      flex-wrap: wrap;
      gap: 0.7rem;
    }
    .legend span {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
    }
    .legend-box {
      width: 10px;
      height: 10px;
      border-radius: 2px;
      display: inline-block;
    }
    .legend-pending { background:#fef3c7; border:1px solid #f59e0b; }
    .legend-progress { background:#dbeafe; border:1px solid #3b82f6; }
    .legend-completed { background:#dcfce7; border:1px solid #10b981; }
  </style>
</head>
<body>
  <nav class="navbar">
    <h2>📚 Student Course Tracker</h2>
    <ul>
      <li><a href="dashboard.php">Dashboard</a></li>
      <li><a href="calendar.php" class="active">Calendar</a></li>
      <li><a href="assignment.php">Assignments</a></li>
      <li><a href="messages.php">Messages</a></li>
      <li><a href="logout.php">Logout</a></li>
    </ul>
  </nav>

  <div class="layout">
    <!-- LEFT: Courses -->
    <aside class="course-list-box">
      <h3>Your Courses</h3>
      <?php if (count($courses) === 0): ?>
        <p style="font-size:0.85rem;color:#6b7280;">No courses found for this student.</p>
      <?php else: ?>
        <?php foreach ($courses as $c): ?>
          <div class="course-item">
            <strong><?= htmlspecialchars($c['course_name']) ?></strong>
            <span><?= htmlspecialchars($c['semester']) ?></span>
          </div>
        <?php endforeach; ?>
      <?php endif; ?>
    </aside>

    <!-- RIGHT: Calendar -->
    <section class="calendar-container">
      <div class="calendar-header">
        <h2><?= htmlspecialchars($monthName) ?></h2>
        <div class="month-nav">
          <a href="calendar.php?month=<?= $prevMonth ?>&year=<?= $prevYear ?>">&laquo; Prev</a>
          <a href="calendar.php?month=<?= $nextMonth ?>&year=<?= $nextYear ?>">Next &raquo;</a>
        </div>
      </div>

      <div class="calendar-grid">
        <!-- Day names -->
        <?php
          $dayNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
          foreach ($dayNames as $dn) {
              echo '<div class="day-name">'.$dn.'</div>';
          }

          // Empty cells before the 1st
          for ($i = 0; $i < $firstWeekday; $i++) {
              echo '<div class="day-cell day-empty"></div>';
          }

          // Actual days
          for ($day = 1; $day <= $daysInMonth; $day++) {
              $dateStr = sprintf('%04d-%02d-%02d', $year, $month, $day);
              echo '<div class="day-cell">';
              echo '<div class="day-number">'.$day.'</div>';

              if (isset($assignmentsByDate[$dateStr])) {
                  foreach ($assignmentsByDate[$dateStr] as $a) {
                      $statusClass = strtolower($a['status']); // pending, in_progress, completed
                      echo '<a href="assignment.php?id='.$a['assignment_id'].'" '.
                           'class="calendar-assignment '.$statusClass.'">';
                      echo '<span class="course">'.htmlspecialchars($a['course_name']).'</span><br>';
                      echo htmlspecialchars($a['title']);
                      echo '</a>';
                  }
              }

              echo '</div>';
          }
        ?>
      </div>

      <div class="legend">
        <span><span class="legend-box legend-pending"></span> Pending</span>
        <span><span class="legend-box legend-progress"></span> In Progress</span>
        <span><span class="legend-box legend-completed"></span> Completed</span>
      </div>
    </section>
  </div>
</body>
</html>
