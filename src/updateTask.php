<?php
  // Connect to database
  $conn = mysqli_connect("localhost", "root", "", "assignment");

  // Check connection
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }

  $id = $_POST['id'];
  $title = $_POST['title'];
  $description = $_POST['description'];
  $dueDate = $_POST['dueDate'];

  $sql = "UPDATE tasks SET Title='$title', Description='$description', DueDate='$dueDate' WHERE Tid=$id";
  mysqli_query($conn, $sql);

  mysqli_close($conn);
?>