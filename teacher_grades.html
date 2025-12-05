<?php
// teacher_grades.php
error_reporting(E_ALL);
ini_set('display_errors', 1);

session_start();
require_once __DIR__ . '/db_connect.php';

if (!isset($_SESSION['role']) || $_SESSION['role'] !== 'admin') {
    header("Location: teacher_login.php");
    exit();
}

$admin_username = $_SESSION['admin_username'] ?? 'Teacher';
$message        = "";

// Load students
$students = [];
$ssql = "SELECT student_id, first_name, last_name 
         FROM Student 
         ORDER BY last_name, first_name";
$sres = $conn->query($ssql);
if ($sres) {
    while ($row = $sres->fetch_assoc()) {
        $students[] = $row;
    }
}

// Load all assignments (you can later filter by course/teacher)
$assignments = [];
$asql = "SELECT assignment_id, title, due_date, course_id 
         FROM Assignment 
         ORDER BY due_date ASC";
$ares = $conn->query($asql);
if ($ares) {
    while ($row = $ares->fetch_assoc()) {
        $assignments[] = $row;
    }
}

// Handle grade form
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $student_id    = (int)($_POST['student_id'] ?? 0);
    $assignment_id = (int)($_POST['assignment_id'] ?? 0);
    $score_input   = trim($_POST['score'] ?? '');
    $letter_grade  = trim($_POST['letter_grade'] ?? '');
    $feedback      = trim($_POST['feedback'] ?? '');

    if ($student_id && $assignment_id && $score_input !== '') {
        if (!is_numeric($score_input)) {
            $message = "Score must be a number (e.g., 85 or 92.5).";
        } else {
            $score = (float)$score_input;

            // Get course_id from Assignment
            $course_id = null;
            $csql = "SELECT course_id FROM Assignment WHERE assignment_id = ?";
            $cstmt = $conn->prepare($csql);
            if ($cstmt) {
                $cstmt->bind_param("i", $assignment_id);
                $cstmt->execute();
                $cres = $cstmt->get_result();
                if ($crow = $cres->fetch_assoc()) {
                    $course_id = (int)$crow['course_id'];
                }
                $cstmt->close();
            }

            if ($course_id === null) {
                $message = "Could not find course for the selected assignment.";
            } else {
                // Check if grade already exists for this student + assignment
                $gsql = "SELECT grade_id FROM Grade WHERE student_id = ? AND assignment_id = ?";
                $gstmt = $conn->prepare($gsql);
                $gstmt->bind_param("ii", $student_id, $assignment_id);
                $gstmt->execute();
                $gres = $gstmt->get_result();

                if ($g = $gres->fetch_assoc()) {
                    // Update existing grade
                    $grade_id = (int)$g['grade_id'];
                    $usql = "UPDATE Grade 
                             SET score = ?, letter_grade = ?, feedback = ?
                             WHERE grade_id = ?";
                    $ustmt = $conn->prepare($usql);
                    $ustmt->bind_param("dssi", $score, $letter_grade, $feedback, $grade_id);
                    if ($ustmt->execute()) {
                        $message = "Grade updated successfully.";
                    } else {
                        $message = "Error updating grade: " . $ustmt->error;
                    }
                    $ustmt->close();
                } else {
                    // Insert new grade
                    $isql = "INSERT INTO Grade (student_id, course_id, assignment_id, score, letter_grade, feedback)
                             VALUES (?, ?, ?, ?, ?, ?)";
                    $istmt = $conn->prepare($isql);
                    $istmt->bind_param("iiidss", $student_id, $course_id, $assignment_id, $score, $letter_grade, $feedback);
                    if ($istmt->execute()) {
                        $message = "Grade recorded successfully.";
                    } else {
                        $message = "Error recording grade: " . $istmt->error;
                    }
                    $istmt->close();
                }

                $gstmt->close();
            }
        }
    } else {
        $message = "Please select a student, assignment, and enter a numeric score.";
    }
}

// Load existing grades for display
$grades = [];
$listSql = "
    SELECT 
        g.grade_id,
        g.score,
        g.letter_grade,
        g.feedback,
        s.first_name,
        s.last_name,
        a.title AS assignment_title
    FROM Grade g
    JOIN Student s   ON g.student_id = s.student_id
    JOIN Assignment a ON g.assignment_id = a.assignment_id
    ORDER BY s.last_name, s.first_name, a.due_date
";
$lres = $conn->query($listSql);
if ($lres) {
    while ($row = $lres->fetch_assoc()) {
        $grades[] = $row;
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Teacher Grades</title>
    <style>
        body {
            margin: 0;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            background: #020617;
            color: #e5e7eb;
        }
        .topbar {
            background: linear-gradient(135deg,#1d4ed8,#0ea5e9);
            padding: 16px 32px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 10px 30px rgba(15,23,42,.5);
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
        }
        .topbar-nav a:hover { text-decoration: underline; }

        .page {
            max-width: 1100px;
            margin: 26px auto 40px;
            padding: 0 16px;
        }
        .card {
            background: #020617;
            border-radius: 16px;
            padding: 16px 18px;
            box-shadow: 0 14px 30px rgba(15,23,42,.8);
            border: 1px solid rgba(31,41,55,.9);
            margin-bottom: 20px;
        }
        .card h2 {
            margin: 0 0 10px;
            font-size: 18px;
        }
        label {
            display: block;
            font-size: 13px;
            margin-bottom: 4px;
        }
        select, input[type="text"], textarea {
            width: 100%;
            padding: 8px 10px;
            border-radius: 8px;
            border: 1px solid #4b5563;
            background: #020617;
            color: #e5e7eb;
            font-size: 14px;
            margin-bottom: 10px;
            box-sizing: border-box;
        }
        textarea { min-height: 70px; resize: vertical; }
        select:focus, input:focus, textarea:focus {
            outline: none;
            border-color: #60a5fa;
            box-shadow: 0 0 0 1px #60a5fa40;
        }
        button {
            padding: 8px 16px;
            border-radius: 999px;
            border: none;
            background: linear-gradient(135deg,#1d4ed8,#22c55e);
            color: white;
            font-size: 14px;
            cursor: pointer;
        }
        button:hover { filter: brightness(1.05); }
        .message {
            margin-bottom: 10px;
            font-size: 13px;
            color: #bbf7d0;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }
        th, td {
            padding: 8px 10px;
            border-bottom: 1px solid #1f2933;
            text-align: left;
        }
        th { color: #9ca3af; text-transform: uppercase; letter-spacing: .08em; font-size: 11px; }
    </style>
</head>
<body>

<div class="topbar">
    <div>
        <h1>Grades</h1>
        <small>Welcome, <?php echo htmlspecialchars($admin_username); ?></small>
    </div>
    <div class="topbar-nav">
        <a href="teacher_dashboard.php">Dashboard</a>
        <a href="teacher_assignments.php">Assignments</a>
        <a href="teacher_grades.php">Grades</a>
        <a href="teacher_messages.php">Messages</a>
        <a href="teacher_logout.php">Logout</a>
    </div>
</div>

<div class="page">
    <div class="card">
        <h2>Record / Update Grade</h2>
        <?php if ($message): ?>
            <div class="message"><?php echo htmlspecialchars($message); ?></div>
        <?php endif; ?>
        <form method="post">
            <label>Student</label>
            <select name="student_id" required>
                <option value="">Select a student</option>
                <?php foreach ($students as $s): ?>
                    <option value="<?php echo (int)$s['student_id']; ?>">
                        <?php echo htmlspecialchars($s['last_name'] . ', ' . $s['first_name']); ?>
                    </option>
                <?php endforeach; ?>
            </select>

            <label>Assignment</label>
            <select name="assignment_id" required>
                <option value="">Select an assignment</option>
                <?php foreach ($assignments as $a): ?>
                    <option value="<?php echo (int)$a['assignment_id']; ?>">
                        <?php
                        echo htmlspecialchars($a['title']);
                        if (!empty($a['due_date'])) {
                            echo " (Due: " . htmlspecialchars($a['due_date']) . ")";
                        }
                        ?>
                    </option>
                <?php endforeach; ?>
            </select>

            <label>Score (numeric, e.g., 85 or 92.5)</label>
            <input type="text" name="score" required>

            <label>Letter Grade (optional, e.g., A, B+)</label>
            <input type="text" name="letter_grade" maxlength="5">

            <label>Feedback (optional)</label>
            <textarea name="feedback"></textarea>

            <button type="submit">Save Grade</button>
        </form>
    </div>

    <div class="card">
        <h2>Existing Grades</h2>
        <?php if (empty($grades)): ?>
            <p>No grades recorded yet.</p>
        <?php else: ?>
            <table>
                <thead>
                    <tr>
                        <th>Student</th>
                        <th>Assignment</th>
                        <th>Score</th>
                        <th>Letter</th>
                        <th>Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($grades as $g): ?>
                        <tr>
                            <td><?php echo htmlspecialchars($g['last_name'] . ', ' . $g['first_name']); ?></td>
                            <td><?php echo htmlspecialchars($g['assignment_title']); ?></td>
                            <td><?php echo htmlspecialchars($g['score']); ?></td>
                            <td><?php echo htmlspecialchars($g['letter_grade']); ?></td>
                            <td><?php echo nl2br(htmlspecialchars($g['feedback'])); ?></td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        <?php endif; ?>
    </div>
</div>

</body>
</html>
