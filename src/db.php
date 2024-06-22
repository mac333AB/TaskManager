<?php

$con =mysqli_connect('localhost','root','','assignment');




if($con)
{
    
 if (isset($_POST['title']))
    $title = $_POST['title'];
  if (isset($_POST['description']))
    $des = $_POST['description'];
  if (isset($_POST['dueDate']))
    $due = $_POST['dueDate'];

  if ($title === '') {
    echo "Title  cannot be empty.";
    die();
  }
  if ($des === '') {
    echo "Description Name cannot be empty.";
    die();
  }
  if ($due === '') {
    echo "Due Date cannot be empty.";
    die();
  }
}
  $query="INSERT INTO `tasks` ( `Title`, `Description`, `DueDate`)
   VALUES ( '$title', '$des', '$due')";
  mysqli_query($con,$query);

  header('location:home.html');

?>