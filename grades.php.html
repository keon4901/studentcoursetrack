<?php
session_start();
require "config.php";

if (!isset($_SESSION['student_id'])) {
    header("Location: index.php");
    exit;
}

$student_id = $_SESSION['student_id'];

// Fetch all courses for this student
$courses_sql = "
    SELECT course_id, course_name, semester
    FROM Course
    WHERE student_id = ?
";
$stmt = $conn->prepare($courses_sql);
$stmt->bind_param("i", $student_id);
$stmt->execute();
$courses = $stmt->get_result();
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Grades</title>
<link rel="stylesheet" href="style.css">
<style>
.course-card {
    background: white;
    margin: 15px 0;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}
.course-bar {
    height: 5px;
    border-radius: 3px;
    margin-bottom: 15px;
}
.grade-green { background: #2ecc71; }
.grade-yellow { background: #f1c40f; }
.grade-orange { background: #e67e22; }
.grade-red { background: #e74c3c; }

.assignment-row {
    padding: 10px 0;
    border-bottom: 1px solid #eee;
}
.assignment-row:last-child { border-bottom: none; }

.view-link {
    display: inline-block;
    margin-top: 10px;
    color: #0073ff;
    font-weight: bold;
}
</style>
</head>
<body>

<h2>Grades</h2>

<?php while($course = $courses->fetch_assoc()): 
    $course_id = $course['course_id'];

    // Fetch assignments with grades
    $sql = "
        SELECT a.assignment_id, a.title, a.due_date, a.max_score,
               g.score, g.letter_grade
        FROM Assignment a
        LEFT JOIN Grade g
        ON g.assignment_id = a.assignment_id
        AND g.student_id = ?
        WHERE a.course_id = ?
        ORDER BY a.due_date DESC
    ";
    $st = $conn->prepare($sql);
    $st->bind_param("ii", $student_id, $course_id);
    $st->execute();
    $assignments = $st->get_result();

    // Calculate overall grade
    $total_score = 0;
    $total_max   = 0;

    while($row = $assignments->fetch_assoc()) {
        if ($row['score'] !== null) {
            $total_score += $row['score'];
            $total_max   += $row['max_score'];
        }
        $all_rows[] = $row;
    }
    $assignments->data_seek(0);

    $overall = ($total_max > 0) ? ($total_score / $total_max) * 100 : 0;

    // Determine color bar
    if ($overall >= 90) $bar = "grade-green";
    else if ($overall >= 80) $bar = "grade-yellow";
    else if ($overall >= 70) $bar = "grade-orange";
    else $bar = "grade-red";
?>

<div class="course-card">
    <div class="course-bar <?= $bar ?>"></div>

    <h3><?= htmlspecialchars($course['course_name']) ?> (<?= $course['semester'] ?>)</h3>
    <p><strong>Overall:</strong> <?= number_format($overall, 2) ?>%</p>

    <h4>Recent Grades</h4>

    <?php
    $count = 0;
    while($row = $assignments->fetch_assoc()):
        if ($row['score'] === null) continue;
        $count++;
    ?>
        <div class="assignment-row">
            <strong><?= htmlspecialchars($row['title']) ?></strong><br>
            Score: <?= $row['score'] ?>/<?= $row['max_score'] ?><br>
            Grade: <?= htmlspecialchars($row['letter_grade']) ?>
        </div>
    <?php endwhile; ?>

    <a href="view_course.php?course_id=<?= $course_id ?>" class="view-link">
        View all work (<?= $count ?>)
    </a>
</div>

<?php endwhile; ?>

</body>
</html>
