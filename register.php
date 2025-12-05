<?php
session_start();
require "config.php";

$error = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $first  = trim($_POST['first_name']);
    $last   = trim($_POST['last_name']);
    $email  = trim($_POST['email']);
    $pass   = $_POST['password'];

    if ($first && $last && $email && $pass) {
        $hash = password_hash($pass, PASSWORD_DEFAULT);

        $sql = "INSERT INTO Student (first_name, last_name, email, password_hash)
                VALUES (?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssss", $first, $last, $email, $hash);

        if ($stmt->execute()) {
            $_SESSION['student_id'] = $stmt->insert_id;
            $_SESSION['student_name'] = $first . " " . $last;
            header("Location: dashboard.php");
            exit;
        } else {
            $error = "Could not register. Email might already exist.";
        }
    } else {
        $error = "All fields are required.";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Register | Student Course Tracker</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<section class="auth-container">
  <h2>Create Account</h2>
  <?php if ($error): ?><p class="error"><?= htmlspecialchars($error) ?></p><?php endif; ?>

  <form method="post" class="auth-form">
    <label>First Name</label>
    <input type="text" name="first_name" required>

    <label>Last Name</label>
    <input type="text" name="last_name" required>

    <label>Email</label>
    <input type="email" name="email" required>

    <label>Password</label>
    <input type="password" name="password" required>

    <button type="submit">Register</button>
  </form>

  <p>Already registered? <a href="index.php">Login</a></p>
</section>
</body>
</html>
