<?php 
if (isset($_POST['email'])) {
	$email = $_POST['email'];
	if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
		echo 1;
	}
	else echo 0;
}
else echo 0;

?>