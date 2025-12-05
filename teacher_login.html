<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

session_start();
require_once __DIR__ . '/db_connect.php';

$login_error = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // INPUT FIELDS MATCHING YOUR FORM
    $username = trim($_POST['email']);      // form field is called "email" but it's actually username
    $password = trim($_POST['password']);

    // 1. LOAD ADMIN FROM YOUR Admin TABLE
    $sql = "SELECT admin_id, username, password_hash FROM Admin WHERE username = ?";
    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        die("Database error: " . $conn->error);
    }
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($row = $result->fetch_assoc()) {

        // 2. VERIFY PASSWORD (password_hash column means hashing is used)
        if (password_verify($password, $row['password_hash'])) {

            $admin_id = (int)$row['admin_id'];

            // 3. ENSURE ROW EXISTS IN UserAccount FOR ROLE MAPPING
            $ua_sql = "SELECT user_id FROM UserAccount WHERE admin_id = ?";
            $ua_stmt = $conn->prepare($ua_sql);
            if (!$ua_stmt) {
                die("Database error: " . $conn->error);
            }
            $ua_stmt->bind_param("i", $admin_id);
            $ua_stmt->execute();
            $ua_result = $ua_stmt->get_result();

            if ($ua = $ua_result->fetch_assoc()) {
                $user_id = (int)$ua['user_id'];
            } else {
                // create mapping if missing
                $insert = "INSERT INTO UserAccount (student_id, admin_id, role)
                           VALUES (NULL, ?, 'admin')";
                $ins = $conn->prepare($insert);
                if (!$ins) {
                    die("Database error: " . $conn->error);
                }
                $ins->bind_param("i", $admin_id);
                $ins->execute();
                $user_id = (int)$ins->insert_id;
                $ins->close();
            }
            $ua_stmt->close();

            // 4. SET SESSION
            $_SESSION['user_id']        = $user_id;
            $_SESSION['admin_id']       = $admin_id;
            $_SESSION['role']           = 'admin';
            $_SESSION['admin_username'] = $row['username'];   // so dashboard can show the name

            // 5. GO TO DASHBOARD (this is what makes the button redirect *after* successful login)
            header("Location: teacher_dashboard.php");
            exit();

        } else {
            $login_error = "Incorrect password.";
        }

    } else {
        $login_error = "Teacher account not found.";
    }

    $stmt->close();
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Teacher Login</title>
    <style>
        body {
            margin: 0;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            background: radial-gradient(circle at top, #1f4b8f 0, #0b1020 45%, #020617 100%);
            color: #e5e7eb;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .card {
            background: rgba(15, 23, 42, 0.96);
            border-radius: 18px;
            padding: 28px 30px 26px;
            width: 340px;
            box-shadow: 0 20px 60px rgba(0,0,0,.6);
            border: 1px solid rgba(148, 163, 184, 0.25);
        }
        h1 {
            margin: 0 0 6px;
            font-size: 22px;
            color: #f9fafb;
        }
        .subtitle {
            font-size: 13px;
            color: #9ca3af;
            margin-bottom: 18px;
        }
        label {
            font-size: 13px;
            color: #d1d5db;
            display: block;
            margin-bottom: 4px;
        }
        input[type="text"], input[type="password"] {
            width: 100%;
            padding: 9px 11px;
            border-radius: 10px;
            border: 1px solid #4b5563;
            background: #020617;
            color: #e5e7eb;
            font-size: 14px;
            margin-bottom: 12px;
            box-sizing: border-box;
        }
        input[type="text"]:focus, input[type="password"]:focus {
            outline: none;
            border-color: #60a5fa;
            box-shadow: 0 0 0 1px #60a5fa40;
        }
        button {
            width: 100%;
            padding: 10px 14px;
            border-radius: 999px;
            border: none;
            background: linear-gradient(135deg,#1d4ed8,#22c55e);
            color: white;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            margin-top: 4px;
        }
        button:hover {
            filter: brightness(1.05);
        }
        .error {
            color: #fecaca;
            background: #7f1d1d33;
            border-radius: 10px;
            padding: 6px 10px;
            font-size: 13px;
            margin-bottom: 10px;
            border: 1px solid #b91c1c66;
        }
        .footer-link {
            text-align: center;
            margin-top: 12px;
            font-size: 12px;
            color: #9ca3af;
        }
        .footer-link a {
            color: #93c5fd;
            text-decoration: none;
        }
    </style>
</head>
<body>

<div class="card">
    <h1>Teacher Login</h1>
    <div class="subtitle">Student Course Tracker · Admin / Instructor</div>

    <?php if ($login_error): ?>
        <div class="error"><?php echo htmlspecialchars($login_error); ?></div>
    <?php endif; ?>

    <form method="post">
        <label>Username</label>
        <input type="text" name="email" required>

        <label>Password</label>
        <input type="password" name="password" required>

        <!-- This submits the form;
             on success the PHP above redirects to teacher_dashboard.php -->
        <button type="submit">Sign in as Teacher</button>
    </form>

    <div class="footer-link">
        Not a teacher? <a href="index.php">Go to student login</a>
    </div>
</div>

</body>
</html>
