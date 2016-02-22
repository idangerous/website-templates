<?php
session_start();
$username = trim(strip_tags($_POST['username']));
$password = trim(strip_tags($_POST['password']));
if ($username=="admin" && $password=="demo") {
	echo "1";
	$_SESSION['authorized']=true;
}
else {
	echo "0";
	$_SESSION['authorized']=false;
}
?>