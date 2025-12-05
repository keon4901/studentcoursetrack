<?php
session_start();
require "config.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email']);
    $pass  = $_POST['password'];

    $sql = "SELECT student_id, first_name, last_name, password_hash
            FROM Student
            WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($row = $result->fetch_assoc()) {
        if (password_verify($pass, $row['password_hash'])) {
            $_SESSION['student_id']   = $row['student_id'];
            $_SESSION['student_name'] = $row['first_name'] . " " . $row['last_name'];
            header("Location: dashboard.php");
            exit;
        }
    }

    $_SESSION['login_error'] = "Invalid email or password.";
    header("Location: index.php");
    exit;
}
