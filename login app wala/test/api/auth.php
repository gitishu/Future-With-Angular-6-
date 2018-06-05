<?php

header('Access-Control-Allow-Origin: *');//server is not allowing this thing now ..

//header('Content-Type: application/json');//yha application/json se vo show hoga site pe but when we use the .php then it will begins to download ..
#header('Application-Type: application/json');

# in cheezo se chutkara mil gya tha when we are using the api technique here but uske lie alag se object define karo andthe nwith the use of that object url define karna pad rha tha o avoid tha thing hamne api use kiya or ya phir direct URL PE hi call kar dalo which is error free and safe ... 





session_start();

$_POST = json_decode(file_get_contents('php://input'), true);//reading from the php input stream 

if(isset($_POST) && !empty($_POST)) {
  $username = $_POST['username'];
  $password = $_POST['password'];

  if($username == 'admin' && $password == 'admin') {
    $_SESSION['user'] = 'admin';
    ?>
{
  "success": true,
  "secret": "This is the secret no one knows but the admin"
}
    <?php
  } else {
    ?>
{
  "success": false,
  "message": "Invalid credentials"
}
    <?php
  }
} else {
  //var_dump($_POST)
  ?>
{
  "success": false,
  "message": "Only POST access accepted"
}
  <?php
}

?>
