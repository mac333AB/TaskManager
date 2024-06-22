<?php
$conn = mysqli_connect("localhost", "root", "", "assignment");

// Check connection
if ($conn) {
    echo "Title  cannot be empty.";
  $id = $_POST['id'];
  
  $query = "DELETE FROM tasks WHERE Tid=$id";
  mysqli_query($conn,$query);
    $conn->close();
}
?>
