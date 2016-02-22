<?php
session_start();
if(!((($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest')||defined('evolette')) && $_SESSION['authorized']===true)) exit();
?>
<?php
define ('todo',1);
if(!empty($_POST['updateToDo'])) {
	$newToDo = "<?php if (!defined('todo')) exit();?>\r\n$_POST[todo]";
	
	$fp = fopen('todo-txt.php', 'w');
	if(fwrite ($fp,$newToDo)) $status = '<div class="approve"><p>To Do list has been successfully saved!</p></div>';
	else $status = '<div class="alert"><p>Error occured!</p></div>';;
	fclose($fp);
}

?>
<script type="text/javascript">
$(function(){
	$('#toDoStatus').slideDown(600).delay(3000).slideUp(600)	
})
</script>

<h2 class="content-heading h-todo">To Do:</h2>
<div id="toDoStatus" style="display:none;"><? echo $status ?></div>
<form onsubmit="popUp({url:'content/todo.php'},getFormVars($(this)));return false" method="post" action="content/todo.php">
  <p>
    <textarea name="todo" class="textarea" style="width:690px" rows="12"><?php include('todo-txt.php')?>
</textarea>
  </p>
  <p><span class="bb-button-l"><span class="bb-button-m">
    <input class="bb-button" type="submit" name="updateToDo" value="Save To Do List" />
    </span></span></p>
</form>
