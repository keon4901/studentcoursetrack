<?php
// teacher_assignments.php
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

// Handle create-assignment form
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $course_id   = trim($_POST['course_id'] ?? '');
    $title       = trim($_POST['title'] ?? '');
    $description = trim($_POST['description'] ?? '');
    $due_date    = trim($_POST['due_date'] ?? '');
    $max_score   = trim($_POST['max_score'] ?? '');
    $status      = trim($_POST['status'] ?? 'pending');

    $file_path   = null;
    $errors      = [];

    if ($course_id === '' || !ctype_digit($course_id)) {
        $errors[] = "Valid course ID is required.";
    }
    if ($title === '') {
        $errors[] = "Title is required.";
    }
    if ($due_date === '') {
        $errors[] = "Due date is required.";
    }
    if ($max_score === '' || !ctype_digit($max_score)) {
        $errors[] = "Max score must be a whole number.";
    }
    if (!in_array($status, ['pending','in_progress','completed'], true)) {
        $errors[] = "Invalid status.";
    }

    // Handle assignment file upload (PDF, DOCX, etc.)
    if (!empty($_FILES['assignment_file']['name'])) {
        $uploadDir = __DIR__ . '/uploads/assignments/';
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }
        $fileName   = time() . '_' . preg_replace('/\s+/', '_', basename($_FILES['assignment_file']['name']));
        $targetPath = $uploadDir . $fileName;

        if (move_uploaded_file($_FILES['assignment_file']['tmp_name'], $targetPath)) {
            // path saved relative to project root
            $file_path = 'uploads/assignments/' . $fileName;
        } else {
            $errors[] = "Failed to upload assignment file.";
        }
    }

    if (empty($errors)) {
        $sql = "INSERT INTO Assignment (course_id, title, description, due_date, file_path, max_score, status)
                VALUES (?, ?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        if (!$stmt) {
            die("Database error: " . $conn->error);
        }
        $course_id_int = (int)$course_id;
        $max_score_int = (int)$max_score;
        $stmt->bind_param("issssis",
            $course_id_int, $title, $description, $due_date, $file_path, $max_score_int, $status
        );
        if ($stmt->execute()) {
            $message = "Assignment created successfully.";
        } else {
            $message = "Error saving assignment: " . $stmt->error;
        }
        $stmt->close();
    } else {
        $message = implode(" ", $errors);
    }
}

// Load assignments
$assignments = [];
$asql = "SELECT assignment_id, course_id, title, due_date, file_path, max_score, status
         FROM Assignment
         ORDER BY due_date ASC";
$res = $conn->query($asql);
if ($res) {
    while ($row = $res->fetch_assoc()) {
        $assignments[] = $row;
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Teacher Assignments</title>
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
        .topbar h1 { margin: 0; font-size: 22px; }
        .topbar small { display: block; font-size: 12px; opacity: .9; }
        .topbar-nav a {
            color: #e5e7eb; text-decoration: none; margin-left: 16px; font-size: 14px;
        }
        .topbar-nav a:hover { text-decoration: underline; }
        .page { max-width: 1100px; margin: 26px auto 40px; padding: 0 16px; }
        .card {
            background: #020617; border-radius: 16px; padding: 16px 18px;
            box-shadow: 0 14px 30px rgba(15,23,42,.8);
            border: 1px solid rgba(31,41,55,.9); margin-bottom: 20px;
        }
        .card h2 { margin: 0 0 10px; font-size: 18px; }
        label { display: block; font-size: 13px; margin-bottom: 4px; }
        input[type="text"], input[type="number"], input[type="date"], textarea, select {
            width: 100%; padding: 8px 10px; border-radius: 8px; border: 1px solid #4b5563;
            background: #020617; color: #e5e7eb; font-size: 14px; margin-bottom: 10px;
            box-sizing: border-box;
        }
        textarea { min-height: 80px; resize: vertical; }
        input:focus, textarea:focus, select:focus {
            outline: none; border-color: #60a5fa; box-shadow: 0 0 0 1px #60a5fa40;
        }
        input[type="file"] { border: none; }
        button {
            padding: 8px 16px; border-radius: 999px; border: none;
            background: linear-gradient(135deg,#1d4ed8,#22c55e);
            color: white; font-size: 14px; cursor: pointer;
        }
        button:hover { filter: brightness(1.05); }
        .message { margin-bottom: 10px; font-size: 13px; color: #bbf7d0; }
        table { width: 100%; border-collapse: collapse; font-size: 13px; }
        th, td { padding: 8px 10px; border-bottom: 1px solid #1f2933; text-align: left; }
        th { color: #9ca3af; text-transform: uppercase; letter-spacing: .08em; font-size: 11px; }
        a.file-link { color: #93c5fd; text-decoration: none; }
        a.file-link:hover { text-decoration: underline; }
    </style>
</head>
<body>

<div class="topbar">
    <div>
        <h1>Assignments</h1>
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
        <h2>Create New Assignment</h2>
        <?php if ($message): ?>
            <div class="message"><?php echo htmlspecialchars($message); ?></div>
        <?php endif; ?>
        <form method="post" enctype="multipart/form-data">
            <label>Course ID</label>
            <input type="number" name="course_id" min="1" required>

            <label>Title</label>
            <input type="text" name="title" required>

            <label>Description</label>
            <textarea name="description"></textarea>

            <label>Due Date</label>
            <input type="date" name="due_date" required>

            <label>Assignment File (PDF, DOCX etc., optional)</label>
            <input type="file" name="assignment_file" accept=".pdf,.doc,.docx,.ppt,.pptx,.txt">

            <label>Max Score</label>
            <input type="number" name="max_score" min="0" required>

            <label>Status</label>
            <select name="status">
                <option value="pending">Pending</option>
                <option value="in_progress">In progress</option>
                <option value="completed">Completed</option>
            </select>

            <button type="submit">Save Assignment</button>
        </form>
    </div>

    <div class="card">
        <h2>All Assignments</h2>
        <?php if (empty($assignments)): ?>
            <p>No assignments created yet.</p>
        <?php else: ?>
            <table>
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Title</th>
                        <th>Due date</th>
                        <th>File</th>
                        <th>Max score</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($assignments as $a): ?>
                        <tr>
                            <td><?php echo (int)$a['course_id']; ?></td>
                            <td><?php echo htmlspecialchars($a['title']); ?></td>
                            <td><?php echo htmlspecialchars($a['due_date']); ?></td>
                            <td>
                                <?php if (!empty($a['file_path'])): ?>
                                    <a class="file-link" href="<?php echo htmlspecialchars($a['file_path']); ?>" target="_blank">Download</a>
                                <?php else: ?>—<?php endif; ?>
                            </td>
                            <td><?php echo htmlspecialchars($a['max_score']); ?></td>
                            <td><?php echo htmlspecialchars($a['status']); ?></td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        <?php endif; ?>
    </div>
</div>

</body>
</html>
