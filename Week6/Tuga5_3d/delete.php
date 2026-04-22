<?php
include 'config/database.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $delete = mysqli_query($conn, "DELETE FROM users WHERE id = '$id'");

    if ($delete) {
        echo "<script>alert('Data deleted successfully'); window.location='read.php';</script>";
    } else {
        echo "<script>alert('Failed to delete data'); window.location='read.php';</script>";
    }
}
