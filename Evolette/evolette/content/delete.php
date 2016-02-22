<?php
session_start();
if(!((($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest')||defined('evolette')) && $_SESSION['authorized']===true)) exit();
?>
<div class="alert"><p>Not available</p></div>
<p>This page does nothing, but it is opened with the following posted variables that you can operate:</p>
<p><strong>Delete</strong>: <?php echo $_POST['delete'] ?></p>
<p><strong>ID</strong>: <?php echo $_POST['id'] ?></p>
