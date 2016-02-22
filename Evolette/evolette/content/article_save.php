<?php
session_start();
if(!((($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest')||defined('evolette')) && $_SESSION['authorized']===true)) exit();
?>
<?php
if (isset($_POST['create'])) {

?>
<div class="approve"><h2>Article has been successfully created!</h2></div>
<div class="attention">
<h2>Actually, article is not created!</h2></div>
<?php
}
if 	(isset($_POST['update'])) {
?>
<div class="approve"><h2>Article has been successfully updated!</h2></div>
<div class="attention">
<h2>Actually, article is not updated!</h2></div>
<?php } 

?>
<p> Here are parameters that you've posted to this <em><strong>article_save.php</strong></em> file:</p>
<div style="text-decoration:underline">
<p><em><strong>Article Title:</strong></em> <?php echo $_POST['title'] ?></p>
<p><em><strong>Meta Keywords:</strong></em> <?php echo $_POST['keywords'] ?></p>
<p><em><strong>Meta Description:</strong></em> <?php echo $_POST['description'] ?></p>
<p><em><strong>Tags</strong></em>: <?php echo $_POST['tags'] ?></p>
<p><em><strong>Category ID:</strong></em> <?php echo $_POST['category_id'] ?></p>
<p><em><strong>Comments:</strong></em> <?php echo $_POST['comments'] ?></p>
<p><em><strong>Order:</strong></em> <?php echo $_POST['order'] ?></p>
<p><em><strong>Show Title:</strong></em> <?php echo $_POST['show_title'] ?></p>
<p><em><strong>Article is:</strong></em> <?php print_r ($_POST['CheckboxGroup']) ?></p>
</div>
<div style="text-decoration:underline"><p><em><strong>Content:</strong></em> </p></div>
<pre>
<?php echo htmlentities($_POST['content'],ENT_QUOTES,'UTF-8') ?>
</pre>
<div style="text-decoration:underline"><p><em><strong>Button Value:</strong></em> <?php echo $_POST['save'] ?></p></div>
