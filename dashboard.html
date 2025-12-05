<?php
// =====================
// Demo / placeholder data
// Replace all of this with your real DB queries
// =====================
session_start();

$student_name = $_SESSION['student_name'] ?? 'keon james';
$current_term = 'Fall 2025';
$overall_gpa  = 3.68;

// Example courses
$courses = [
    ['course_id' => 1, 'course_code' => 'CS101', 'course_name' => 'Intro to Programming'],
    ['course_id' => 2, 'course_code' => 'CS201', 'course_name' => 'Data Structures'],
    ['course_id' => 3, 'course_code' => 'MATH120', 'course_name' => 'College Algebra'],
];

// Get selected course (from dropdown or default to first)
$selected_course_id = isset($_GET['course_id']) ? (int) $_GET['course_id'] : $courses[0]['course_id'];

// Example assignment data keyed by course_id
$allAssignments = [
    1 => [
        ['assignment_name' => 'Lab 1 – Basics', 'due_date' => '2025-09-15', 'grade' => 95, 'status' => 'Completed'],
        ['assignment_name' => 'Quiz 1',        'due_date' => '2025-09-20', 'grade' => 88, 'status' => 'Completed'],
        ['assignment_name' => 'Project 1',     'due_date' => '2025-10-01', 'grade' => null, 'status' => 'Pending'],
    ],
    2 => [
        ['assignment_name' => 'Homework 1',    'due_date' => '2025-09-18', 'grade' => 76, 'status' => 'Completed'],
        ['assignment_name' => 'Midterm',       'due_date' => '2025-10-10', 'grade' => null, 'status' => 'Pending'],
    ],
    3 => [] // no assignments yet
];

$assignments = $allAssignments[$selected_course_id] ?? [];

// Simple stats for side panel (you can compute from real data later)
$total_assignments = count($assignments);
$completed_count   = 0;
$total_percent     = 0;
$graded_count      = 0;

foreach ($assignments as $a) {
    if ($a['status'] === 'Completed') {
        $completed_count++;
    }
    if (!is_null($a['grade'])) {
        $total_percent += $a['grade'];
        $graded_count++;
    }
}

$completion_rate = $total_assignments > 0
    ? round(($completed_count / $total_assignments) * 100)
    : 0;

// Dummy “best / weak” courses (replace with real logic if you want)
$best_course  = 'Intro to Programming';
$weak_course  = 'Data Structures';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Student Course Tracker - Grades</title>

    <!-- Optional fonts / icons -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd2Jx9wA5s7M8ve8V1Yuk7GQfGv4ZCkR7ZxQqrSI5Z1tF1ZpZ8T+qV0YhZz0jvA=="
          crossorigin="anonymous" referrerpolicy="no-referrer" />

    <style>
        :root {
            --primary: #0052cc;
            --primary-light: #3b82f6;
            --bg: #f4f7fb;
            --text-main: #111827;
            --text-muted: #6b7280;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: "Poppins", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
            background: var(--bg);
            color: var(--text-main);
        }

        /* NAVBAR */
        .navbar {
            background: var(--primary);
            color: #ffffff;
            padding: 10px 32px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .nav-left {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .nav-logo {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            background: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            color: var(--primary);
            font-weight: 700;
        }

        .nav-title {
            font-size: 18px;
            font-weight: 600;
        }

        .nav-links {
            display: flex;
            gap: 18px;
            font-size: 14px;
        }

        .nav-links a {
            color: #ffffff;
            text-decoration: none;
            opacity: 0.85;
        }

        .nav-links a:hover,
        .nav-links a.active {
            opacity: 1;
            text-decoration: underline;
        }

        /* PAGE WRAPPER */
        .sct-page {
            padding: 24px 40px 40px;
            background: var(--bg);
            min-height: calc(100vh - 56px);
        }

        /* HEADER */
        .page-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 22px;
            gap: 16px;
        }

        .page-header h1 {
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 4px;
        }

        .page-subtitle {
            font-size: 13px;
            color: var(--text-muted);
        }

        .page-header-badges {
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 11px;
            display: inline-flex;
            flex-direction: column;
            min-width: 120px;
        }

        .pill-primary {
            background: linear-gradient(135deg, #2563eb, #3b82f6);
            color: #fff;
        }

        .pill-soft {
            background: #e0ecff;
            color: #1d4ed8;
        }

        .pill-label {
            opacity: 0.8;
            text-transform: uppercase;
            letter-spacing: 0.04em;
        }

        .pill-value {
            font-weight: 600;
            font-size: 13px;
        }

        /* GRID LAYOUT */
        .grades-layout {
            display: grid;
            grid-template-columns: minmax(0, 3fr) minmax(260px, 1.3fr);
            gap: 20px;
        }

        .card {
            background: #ffffff;
            border-radius: 18px;
            padding: 20px 22px 18px;
            box-shadow: 0 12px 35px rgba(15, 23, 42, 0.10);
        }

        /* CARD HEADER */
        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 14px;
        }

        .card-header h2 {
            font-size: 18px;
            font-weight: 600;
        }

        .card-subtitle {
            font-size: 13px;
            color: var(--text-muted);
        }

        .badge-ghost {
            font-size: 11px;
            padding: 5px 10px;
            border-radius: 999px;
            border: 1px solid #d4d4d8;
            color: #4b5563;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }

        .badge-ghost .dot {
            width: 7px;
            height: 7px;
            border-radius: 999px;
            background: #22c55e;
            box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.25);
        }

        /* CONTROLS ROW */
        .card-controls {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            gap: 16px;
            margin-bottom: 14px;
            flex-wrap: wrap;
        }

        .field-group {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .field-group label {
            font-size: 13px;
            font-weight: 500;
        }

        .field-group select {
            min-width: 230px;
            padding: 7px 10px;
            border-radius: 999px;
            border: 1px solid #d1d5db;
            font-size: 13px;
            background: #f9fafb;
            outline: none;
        }

        .field-group select:focus {
            border-color: #2563eb;
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.18);
            background: #fff;
        }

        .chip-row {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .chip {
            padding: 6px 12px;
            border-radius: 999px;
            border: 1px solid #e5e7eb;
            font-size: 12px;
            color: #4b5563;
            background: #f9fafb;
        }

        .chip-active {
            background: #2563eb;
            border-color: #2563eb;
            color: #fff;
        }

        /* TABLE */
        .table-wrapper {
            margin-top: 6px;
            overflow-x: auto;
        }

        .grades-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }

        .grades-table thead {
            background: #f3f4f6;
        }

        .grades-table th,
        .grades-table td {
            padding: 9px 10px;
            text-align: left;
        }

        .grades-table th {
            font-weight: 600;
            color: #374151;
            border-bottom: 1px solid #e5e7eb;
        }

        .grades-table tbody tr:nth-child(even) {
            background: #f9fafb;
        }

        .status-pill {
            padding: 4px 9px;
            border-radius: 999px;
            font-size: 11px;
            font-weight: 500;
        }

        .status-completed {
            background: #dcfce7;
            color: #15803d;
        }

        .status-pending {
            background: #fef3c7;
            color: #92400e;
        }

        /* EMPTY STATE */
        .empty-state {
            padding: 26px 16px 8px;
            text-align: center;
            color: var(--text-muted);
        }

        .empty-icon {
            font-size: 32px;
            margin-bottom: 6px;
        }

        .empty-state h3 {
            font-size: 16px;
            margin-bottom: 4px;
            color: var(--text-main);
        }

        .empty-state p {
            font-size: 13px;
            margin-bottom: 12px;
        }

        .btn-outline {
            padding: 7px 16px;
            border-radius: 999px;
            border: 1px solid #2563eb;
            background: #fff;
            color: #2563eb;
            font-size: 13px;
            cursor: pointer;
        }

        .btn-outline:hover {
            background: #eff6ff;
        }

        /* SIDE PANEL */
        .side-panel h3 {
            font-size: 15px;
            margin-bottom: 12px;
        }

        .stat {
            margin-bottom: 14px;
        }

        .stat-label {
            font-size: 12px;
            color: var(--text-muted);
            margin-bottom: 4px;
        }

        .stat-value {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 6px;
        }

        .stat-sub {
            font-size: 11px;
            color: var(--text-muted);
            margin-left: 4px;
        }

        .stat-bar {
            width: 100%;
            height: 6px;
            border-radius: 999px;
            background: #e5e7eb;
            overflow: hidden;
        }

        .stat-bar-fill {
            height: 100%;
            background: linear-gradient(90deg, #22c55e, #4ade80);
        }

        .stat-list {
            margin: 10px 0 14px;
            border-top: 1px dashed #e5e7eb;
            padding-top: 10px;
            display: grid;
            gap: 6px;
        }

        .stat-item {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
        }

        .stat-tag {
            color: var(--text-muted);
        }

        .stat-data.warning {
            color: #b45309;
        }

        .tip-box {
            background: #eff6ff;
            border-radius: 12px;
            padding: 10px 11px;
            font-size: 12px;
            color: #1e3a8a;
        }

        .tip-box h4 {
            font-size: 12px;
            font-weight: 600;
            margin-bottom: 4px;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
            .sct-page {
                padding: 18px 16px 24px;
            }

            .grades-layout {
                grid-template-columns: 1fr;
            }

            .page-header {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    </style>
</head>
<body>

<!-- NAVBAR -->
<div class="navbar">
    <div class="nav-left">
        <div class="nav-logo">
            <i class="fa-solid fa-book"></i>
        </div>
        <div class="nav-title">Student Course Tracker</div>
    </div>
    <div class="nav-links">
        <a href="dashboard.php" class="active">Dashboard</a>
        <a href="calendar.php">Calendar</a>
        <a href="assignment.php">Assignments</a>
        <a href="messages.php">Messages</a>
        <a href="logout.php">Logout</a>
    </div>
</div>

<!-- PAGE CONTENT -->
<div class="sct-page grades-page">
    <div class="page-header">
        <div>
            <h1>Welcome back, <?php echo htmlspecialchars(ucwords($student_name)); ?> 👋</h1>
            <p class="page-subtitle">
                Check your course performance and stay on top of upcoming work.
            </p>
        </div>

        <div class="page-header-badges">
            <div class="pill pill-primary">
                <span class="pill-label">Current Term</span>
                <span class="pill-value">
                    <?php echo htmlspecialchars($current_term); ?>
                </span>
            </div>
            <div class="pill pill-soft">
                <span class="pill-label">Overall GPA</span>
                <span class="pill-value">
                    <?php echo number_format($overall_gpa, 2); ?>
                </span>
            </div>
        </div>
    </div>

    <div class="grades-layout">
        <!-- MAIN GRADES CARD -->
        <section class="card grades-card">
            <div class="card-header">
                <div>
                    <h2>Grades</h2>
                    <p class="card-subtitle">
                        Select a course to view assignments, scores, and feedback.
                    </p>
                </div>
                <span class="badge-ghost">
                    <span class="dot"></span>
                    Live sync
                </span>
            </div>

            <div class="card-controls">
                <form method="get" style="display:flex; gap:16px; flex-wrap:wrap; align-items:flex-end; width:100%;">
                    <div class="field-group">
                        <label for="course_id">Select Course</label>
                        <select id="course_id" name="course_id" onchange="this.form.submit()">
                            <?php foreach ($courses as $course): ?>
                                <option value="<?php echo $course['course_id']; ?>"
                                    <?php if ($selected_course_id == $course['course_id']) echo 'selected'; ?>>
                                    <?php echo htmlspecialchars($course['course_code'] . ' - ' . $course['course_name']); ?>
                                </option>
                            <?php endforeach; ?>
                        </select>
                    </div>

                    <div class="chip-row">
                        <span class="chip chip-active">All</span>
                        <span class="chip">Upcoming</span>
                        <span class="chip">Completed</span>
                    </div>
                </form>
            </div>

            <?php if (!empty($assignments)): ?>
                <div class="table-wrapper">
                    <table class="grades-table">
                        <thead>
                        <tr>
                            <th>Assignment</th>
                            <th>Due Date</th>
                            <th>Score</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($assignments as $assignment): ?>
                            <tr>
                                <td><?php echo htmlspecialchars($assignment['assignment_name']); ?></td>
                                <td><?php echo htmlspecialchars($assignment['due_date']); ?></td>
                                <td>
                                    <?php
                                    echo is_null($assignment['grade'])
                                        ? '—'
                                        : $assignment['grade'] . '%';
                                    ?>
                                </td>
                                <td>
                                    <span class="status-pill
                                        <?php echo $assignment['status'] === 'Completed'
                                            ? 'status-completed'
                                            : 'status-pending'; ?>">
                                        <?php echo htmlspecialchars($assignment['status']); ?>
                                    </span>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            <?php else: ?>
                <div class="empty-state">
                    <div class="empty-icon">📊</div>
                    <h3>No assignments or grades yet</h3>
                    <p>
                        Once your instructor posts grades for this course, you’ll see them here,
                        along with your progress.
                    </p>
                    <button type="button" class="btn-outline" onclick="window.location.href='assignments.php'">
                        View all assignments
                    </button>
                </div>
            <?php endif; ?>
        </section>

        <!-- SIDE PANEL -->
        <aside class="card side-panel">
            <h3>Quick snapshot</h3>

            <div class="stat">
                <div class="stat-label">Assignments completed</div>
                <div class="stat-value">
                    <?php echo $completed_count; ?>
                    <span class="stat-sub">
                        of <?php echo $total_assignments; ?>
                    </span>
                </div>
                <div class="stat-bar">
                    <div class="stat-bar-fill" style="width: <?php echo $completion_rate; ?>%;"></div>
                </div>
            </div>

            <div class="stat-list">
                <div class="stat-item">
                    <span class="stat-tag">Best course</span>
                    <span class="stat-data">
                        <?php echo htmlspecialchars($best_course); ?>
                    </span>
                </div>
                <div class="stat-item">
                    <span class="stat-tag">Needs attention</span>
                    <span class="stat-data warning">
                        <?php echo htmlspecialchars($weak_course); ?>
                    </span>
                </div>
            </div>

            <div class="tip-box">
                <h4>Tip</h4>
                <p>
                    Check your grades weekly and add upcoming deadlines to your calendar
                    so you never miss a submission.
                </p>
            </div>
        </aside>
    </div>
</div>

</body>
</html>
