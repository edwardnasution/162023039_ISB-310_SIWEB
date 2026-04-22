<?php
include 'config/database.php';

// Ambil data lama berdasarkan ID
$id = $_GET['id'];
$query = mysqli_query($conn, "SELECT * FROM users WHERE id = '$id'");
$data = mysqli_fetch_array($query);

$error = "";
$success = "";

if (isset($_POST['update'])) {
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);

    if (empty($username) || empty($email)) {
        $error = "Data tidak boleh kosong";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = "Invalid email format";
    } else {
        // Update data
        $update = mysqli_query($conn, "UPDATE users SET name='$username', email='$email' WHERE id='$id'");
        if ($update) {
            echo "<script>alert('User updated successfully'); window.location='read.php';</script>";
        } else {
            $error = "Failed to update user";
        }
    }
}
?>

<!DOCTYPE html>
<html>

<head>
    <title>Update User</title>
    <link rel="stylesheet" href="assets/style.css">
</head>

<body>
    <div class="container">
        <h2>Update User</h2>
        <form method="POST">
            <div class="input-group">
                <label>Name:</label>
                <input type="text" name="username" value="<?php echo $data['name']; ?>">
            </div>
            <div class="input-group">
                <label>Email:</label>
                <input type="text" name="email" value="<?php echo $data['email']; ?>">
            </div>

            <?php if ($error) echo "<div class='error-msg'>$error</div>"; ?>

            <button class="btn-insert" name="update">Update Data</button>
        </form>

        <div class="nav-bottom">
            <a href="create.php" class="nav-link">CREATE</a>
            <a href="read.php" class="nav-link">READ</a>
        </div>
    </div>
</body>

</html>