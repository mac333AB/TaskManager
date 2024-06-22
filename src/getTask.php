<?php
  // Connect to database
  $conn = mysqli_connect("localhost", "root", "", "assignment");

  // Check connection
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }

  $sql = "SELECT * FROM tasks";
  $result = mysqli_query($conn, $sql);

  $tasks = array();
  while ($row = mysqli_fetch_assoc($result)) {
    $tasks[] = $row;
  }

  echo json_encode($tasks);

  mysqli_close($conn);
?>