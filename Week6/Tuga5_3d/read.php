<?php
include 'config/database.php';
?>
<!DOCTYPE html>
<html>

<head>
    <title>Read Data</title>
    <link rel="stylesheet" href="assets/style.css">
</head>

<body>
    <div class="container">
        <h2>Read Data</h2>
        <table border="1" width="100%" style="border-collapse: collapse;">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
            <?php
            $query = mysqli_query($conn, "SELECT * FROM users ORDER BY id DESC");
            while ($data = mysqli_fetch_array($query)) {
            ?>
                <tr>
                    <td><?php echo $data['name']; ?></td>
                    <td><?php echo $data['email']; ?></td>
                    <td>
                        <a href="update.php?id=<?php echo $data['id']; ?>">Edit</a> |
                        <a href="delete.php?id=<?php echo $data['id']; ?>" onclick="return confirm('Are you sure?')">Delete</a>
                    </td>
                </tr>
            <?php } ?>
        </table>

        <div class="nav-bottom">
            <a href="create.php" class="nav-link">CREATE</a>
            <a href="read.php" class="nav-link active">READ</a>
        </div>
    </div>
</body>

</html>