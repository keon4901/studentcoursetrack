<?php
// teacher_logout.php
session_start();

// Clear only teacher/admin session data
if (isset($_SESSION['role']) && $_SESSION['role'] === 'admin') {

    // Unset all stored session values
    $_SESSION = [];

    // Destroy session cookie
    if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(
            session_name(),
            '',
            time() - 42000,
            $params["path"],
            $params["domain"],
            $params["secure"],
            $params["httponly"]
        );
    }

    // Destroy entire session
    session_destroy();
}

// Redirect to TEACHER login page
header("Location: teacher_login.php");
exit;
