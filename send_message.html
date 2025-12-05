<?php
session_start();
require "config.php";

if (empty($_SESSION['student_id'])) {
    header("Location: index.php");
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $studentId   = $_SESSION['student_id'];
    $courseId    = isset($_POST['course_id']) ? (int)$_POST['course_id'] : 0;
    $messageText = trim($_POST['message_text'] ?? '');

    if ($courseId > 0 && $messageText !== '') {
        // Assumes Message table has: message_id, course_id, student_id, sender, message_text, sent_at
        $sql = "INSERT INTO Message (course_id, student_id, sender, message_text)
                VALUES (?, ?, 'student', ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("iis", $courseId, $studentId, $messageText);
        $stmt->execute();
    }

    header("Location: messages.php?course_id=" . $courseId);
    exit;
}

header("Location: messages.php");
exit;
