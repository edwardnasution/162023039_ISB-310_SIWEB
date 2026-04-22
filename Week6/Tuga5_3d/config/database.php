<?php
$conn = mysqli_connect("localhost", "root", "basdat2024", "crud_user");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
