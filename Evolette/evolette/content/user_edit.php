<?php
session_start();
if(!((($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest')||defined('evolette')) && $_SESSION['authorized']===true)) exit();
?>
<div class="attention">
<h3>It is not available to edit User</h3>
<p>You are trying to edit user with ID <strong><?php echo $_POST['id'] ?></strong></p>
</div>
<h2>Here are the features realized in this template, which you can to try out:</h2>
<ul>
<li>Try to Add New Article</li>
<li>Try to Edit Article</li>
<li>Try to manage Articles</li>
<li>Try to manage Users</li>
<li>Try to delete something</li>
<li>You can send a message</li>
<li>You can change the To Do list</li>
<li>More information about Evolette on the <a href="index.php?content=help" onclick="loadContent('content/help.php');return false">Template Features</a> page</li>
</ul>
