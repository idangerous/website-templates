<?php
session_start();
if(!((($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest')||defined('evolette')) && $_SESSION['authorized']===true)) exit();
?>
<?php 
if (isset($_POST['selected_action'])) {
echo '<div class="attention"><h2>&quot;With Selected Articles&quot; data has been successfully posted to this page</h2>';		
echo '<h3>Here is standard POST data which you\'ll need to process (shown with a <em>print_r</em> function):</h3>';	
echo '<p>';print_r($_POST);echo '</p></div>';	
}
?>
<?php 
if (isset($_POST['update_ordering'])) {
echo '<div class="attention"><h2>&quot;Ordering&quot; data has been successfully posted to this page</h2>';		
echo '<h3>Here is standard POST data which you\'ll need to process (shown with a <em>print_r</em> function):</h3>';	
echo '<p>';print_r($_POST);echo '</p></div>';	
}
?>
<?php 
if (isset($_POST['page'])) {
echo '<div class="attention"><h2>You have requested this page with a &quot;page&quot; parameter = '.$_POST['page'].'</h2>';		
echo '</div>';	
}
?>
<div class="pane l-half l-first">
  <h2 class="content-heading h-arts">Manage Articles</h2>
</div>
<div class="pane l-half l-last">
  <h3 class="pane-title">Ordering Settings</h3>
  <div class="pane-inner"> 
    <form class="formToContent" method="post" action="content/articles.php">
    <p>Order Articles by:
    	<select class="select" name="order_by">
        	<option value="id">ID</option>
            <option value="category">Category</option>
            <option value="title">Title</option>
            <option value="views">Views</option>
            <option value="order">Order</option>
            <option value="created">Created Date</option>
            <option value="comments">Comments</option>
            <option value="author">Author</option>
        </select>
        <select class="select" name="order_by_type">
        	<option value="desc">DESC</option>
            <option value="asc">ASC</option>
        </select>
    </p>
    <p>Filter by category:
    	<select class="select"  name="filter_category">
        	<option value="all">All</option>
            <option value="-1">None</option>
            <option value="1">Site Templates</option>
            <option value="2">Graphics</option>
            <option value="3">Scripts</option>
        </select>
    </p>
    <p>Number of displayed articles per page:
    	<input type="text" class="text" name="articles_number" value="10" size="5" />
    </p>
    <input type="submit" class="w-button " name="update_ordering" value="Update Ordering Settings" />
    </form>
  </div>
</div>
<p class="withIcon" style="float: left;margin-top: -47px;"><a class="button ajaxed" href="index.php?content=article_add"><img src="images/small-icons/add.png" width="15" height="15" alt="add" /> Add new article</a> <a class="button ajaxed" href="index.php?content=cp"><img src="images/menu-icons/cp.png" width="20" height="20" alt=" " /> Back to Control Panel</a></p>
<div class="clear"></div>
<p>You have <strong>63 articles</strong>, but only 10 dispalyed per page:</p>
<form action="content/articles.php" method="post" class="formToContent">
<table class="expandable">
  <thead>
    <tr>
      <th>&nbsp;</th>
      <th>ID</th>
      <th>Title</th>
      <th>Views</th>
      <th>Category</th>
      <th>Order</th>
      <th>Created</th>
      <th>Comments</th>
      <th>Author</th>
      <th>&nbsp;</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input type="checkbox" name="selectedArticles[]" value="18" /></td>
      <td><strong>18</strong></td>
      <td>Autumn Field Template</td>
      <td>145</td>
      <td>Site Templates</td>
      <td>2</td>
      <td>31-12-2010</td>
      <td>12</td>
      <td>Admin</td>
      <td class="t-icons"><a tip="Edit This Article" class="ajaxed" href="index.php?content=article_edit&id=18"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="Preview This Article" class="" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="preview" /></a><a tip="Delete This Article" class="popup" href="index.php?content=delete&delete=article&id=18"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
    </tr>
    <tr>
      <td><input type="checkbox" name="selectedArticles[]" value="17" /></td>
      <td><strong>17</strong></td>
      <td>Imagine Box</td>
      <td>127</td>
      <td>Site Templates</td>
      <td>4</td>
      <td>29-12-2010</td>
      <td>1</td>
      <td>Admin</td>
      <td class="t-icons"><a tip="Edit This Article" class="ajaxed" href="index.php?content=article_edit&id=17"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="Preview This Article" class="" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="preview" /></a><a tip="Delete This Article" class="popup" href="index.php?content=delete&delete=article&id=17"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
    </tr>
    <tr>
      <td><input type="checkbox" name="selectedArticles[]" value="16" /></td>
      <td><strong>16</strong></td>
      <td>OS - Desktop Style Template</td>
      <td>120</td>
      <td>Site Templates</td>
      <td>6</td>
      <td>28-12-2010</td>
      <td>3</td>
      <td>Admin</td>
      <td class="t-icons"><a tip="Edit This Article" class="ajaxed" href="index.php?content=article_edit&id=16"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="Preview This Article" class="" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="preview" /></a><a tip="Delete This Article" class="popup" href="index.php?content=delete&delete=article&id=16"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
    </tr>
    <tr>
      <td><input type="checkbox" name="selectedArticles[]" value="15" /></td>
      <td><strong>15</strong></td>
      <td>Photo Exhibition</td>
      <td>105</td>
      <td>Graphics</td>
      <td>5</td>
      <td>27-12-2010</td>
      <td>1</td>
      <td>Admin</td>
      <td class="t-icons"><a tip="Edit This Article" class="ajaxed" href="index.php?content=article_edit&id=15"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="Preview This Article" class="" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="preview" /></a><a tip="Delete This Article" class="popup" href="index.php?content=delete&delete=article&id=15"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
    </tr>
    <tr>
      <td><input type="checkbox" name="selectedArticles[]" value="14" /></td>
      <td><strong>14</strong></td>
      <td>Redfield - Photo Portfolio</td>
      <td>102</td>
      <td>Scripts</td>
      <td>9</td>
      <td>26-12-2010</td>
      <td>9</td>
      <td>Admin</td>
      <td class="t-icons"><a tip="Edit This Article" class="ajaxed" href="index.php?content=article_edit&id=14"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="Preview This Article" class="" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="preview" /></a><a tip="Delete This Article" class="popup" href="index.php?content=delete&delete=article&id=14"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
    </tr>
    <tr>
      <td><input type="checkbox" name="selectedArticles[]" value="13" /></td>
      <td><strong>13</strong></td>
      <td>Autumn Field Template</td>
      <td>145</td>
      <td>Site Templates</td>
      <td>2</td>
      <td>31-12-2010</td>
      <td>12</td>
      <td>Admin</td>
      <td class="t-icons"><a tip="Edit This Article" class="ajaxed" href="index.php?content=article_edit&id=13"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="Preview This Article" class="" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="preview" /></a><a tip="Delete This Article" class="popup" href="index.php?content=delete&delete=article&id=13"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
    </tr>
    <tr>
      <td><input type="checkbox" name="selectedArticles[]" value="12" /></td>
      <td><strong>12</strong></td>
      <td>Imagine Box</td>
      <td>127</td>
      <td>Site Templates</td>
      <td>4</td>
      <td>29-12-2010</td>
      <td>1</td>
      <td>Admin</td>
      <td class="t-icons"><a tip="Edit This Article" class="ajaxed" href="index.php?content=article_edit&id=12"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="Preview This Article" class="" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="preview" /></a><a tip="Delete This Article" class="popup" href="index.php?content=delete&delete=article&id=12"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
    </tr>
    <tr>
      <td><input type="checkbox" name="selectedArticles[]" value="11" /></td>
      <td><strong>11</strong></td>
      <td>OS - Desktop Style Template</td>
      <td>120</td>
      <td> </td>
      <td>6</td>
      <td>28-12-2010</td>
      <td>3</td>
      <td>Admin</td>
      <td class="t-icons"><a tip="Edit This Article" class="ajaxed" href="index.php?content=article_edit&id=11"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="Preview This Article" class="" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="preview" /></a><a tip="Delete This Article" class="popup" href="index.php?content=delete&delete=article&id=11"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
    </tr>
    <tr>
      <td><input type="checkbox" name="selectedArticles[]" value="10" /></td>
      <td><strong>10</strong></td>
      <td>Photo Exhibition</td>
      <td>105</td>
      <td>Site Templates</td>
      <td>5</td>
      <td>27-12-2010</td>
      <td>1</td>
      <td>Admin</td>
      <td class="t-icons"><a tip="Edit This Article" class="ajaxed" href="index.php?content=article_edit&id=10"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="Preview This Article" class="" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="preview" /></a><a tip="Delete This Article" class="popup" href="index.php?content=delete&delete=article&id=10"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
    </tr>
    <tr>
      <td><input type="checkbox" name="selectedArticles[]" value="9" /></td>
      <td><strong>9</strong></td>
      <td>Redfield - Photo Portfolio</td>
      <td>102</td>
      <td>Site Templates</td>
      <td>9</td>
      <td>26-12-2010</td>
      <td>9</td>
      <td>Admin</td>
      <td class="t-icons"><a tip="Edit This Article" class="ajaxed" href="index.php?content=article_edit&id=9"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="Preview This Article" class="" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="preview" /></a><a tip="Delete This Article" class="popup" href="index.php?content=delete&delete=article&id=9"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
    </tr>
  </tbody>
</table>
<p><label>With selected articles:  
	<select class="select" name="selected_action">
    	<option value="nothing" selected="selected"> </option>
        <option value="delete">Delete</option>
        <option value="copy">Copy</option>
        <option value="disable">Disable</option>
        <option value="enable">Eisable</option>
    </select>
</label> <input type="submit" class="button" value="Submit" name="withSelected" /></p>
</form>
<div class="clear"></div>
<div class="pagination">
<a tip="First page" class="w-button ajaxed" href="index.php?content=articles&page=1"><img src="images/small-icons/first.png" width="16" height="16" alt="" />&nbsp;</a> <a tip="Previous page" class="w-button ajaxed" href="index.php?content=articles&page=4"><img src="images/small-icons/back.png" width="9" height="16" alt=" " />&nbsp;</a> ... <a class="ajaxed" href="index.php?content=articles&page=3">3</a> <a class="ajaxed" href="index.php?content=articles&page=4">4</a> <span class="active">5</span> <a class="ajaxed" href="index.php?content=articles&page=6">6</a> <a class="ajaxed" href="index.php?content=articles&page=7">7</a> ... <a tip="Next page" class="w-button ajaxed" href="index.php?content=articles&page=6"><img src="images/small-icons/next.png" width="9" height="16" alt=" " />&nbsp;</a> <a class="w-button ajaxed" tip="Last page" href="index.php?content=articles&page=8"><img src="images/small-icons/last.png" width="16" height="16" alt=" " />&nbsp;</a>
</div>