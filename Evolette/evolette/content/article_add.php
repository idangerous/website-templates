<?php
session_start();
if(!((($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest')||defined('evolette')) && $_SESSION['authorized']===true)) exit();
?>
<h2 class="content-heading h-art">Add New Article</h2>
<form action="content/article_save.php" class="formToPopup" method="post">

<p class="withIcon">
<span class="button" onclick="$('form.formToPopup').submit()"><img src="images/small-icons/save.png" width="16" height="16" alt=" " /> Save new article</span> <a class="button ajaxed" href="index.php?content=articles"><img src="images/small-icons/first.png" width="16" height="16" alt=" " />  &nbsp;Back to Articles</a> <a class="button ajaxed" href="index.php?content=cp"><img src="images/menu-icons/cp.png" width="20" height="20" alt=" " /> Back to Control Panel</a></p>

<div class="pane l-half l-first">
  <h3 class="pane-title">Meta Settings</h3>
  <div class="pane-inner"> 
    <p><label>Article Title:<br />
    	<input class="text" type="text" name="title" size="40" />
    </label></p>
    <p><label>Meta Keywords:<br />
    	<input class="text" type="text" name="keywords" size="40" />
    </label></p>
    <p><label>Meta Description:<br />
    	<input class="text" type="text" name="description" size="40" />
    </label></p>
  	<p><label>Tags:<br />
    	<input class="text" type="text" name="tags" size="40" />
    </label></p>
  </div>
</div>
<div class="pane l-half l-last">
  <h3 class="pane-title">Article Settings</h3>
  <div class="pane-inner"> 
    <p><label>Category: 
    	<select name="category_id" class="select">
        	<option value="-1">None</option>
            <option value="23">Site Templates</option>
            <option value="22">Scripts</option>
            <option value="25">Toys</option>
            <option value="21">Cars</option>
        </select> 
    </label></p>
    <p><label>Comments: 
    	<select name="comments" class="select">
        	<option value="0">Use category settings</option>
            <option value="1">Enabled</option>
            <option value="-1">Disabled</option>
        </select> 
    </label></p>
    <p><label>Order:
    	<input class="text" type="text" name="order" size="10" />
    </label></p>
    <p>Show Title:
    	<label><input type="radio" name="show_title" checked="checked" value="1" />Show Title</label>
        <label><input type="radio" name="show_title" value="0" />Hide Title</label>
    </p>
	<p>Article is:
    	<label>
    	  <input type="checkbox" checked="checked" name="CheckboxGroup[]" value="checkbox1" id="CheckboxGroup1_0" />
    	  Checkbox1</label>
    	
    	<label>
    	  <input type="checkbox" name="CheckboxGroup[]" value="checkbox2" id="CheckboxGroup1_1" />
    	  Checkbox2</label>
    	
    	<label>
    	  <input type="checkbox" name="CheckboxGroup[]" value="checkbox3" id="CheckboxGroup1_2" />
    	  Checkbox3</label>
	</p>
  </div>
</div>
<div class="clear"></div>
<div class="pane">
  <h3 class="pane-title">Article Content</h3>
  <div class="pane-inner  noPadding"> 
    <textarea name="content" class="tinymce getThis"></textarea>
  </div>
</div>

<p style="float:left;margin-right:20px"><input type="submit" class="bb-button" name="create" value="Save New Article" /></p><p class="withIcon"><a class="bb-button ajaxed" href="index.php?content=articles"><img src="images/small-icons/first.png" width="16" height="16" alt=" " />  &nbsp;Back to Articles</a> <a class="bb-button ajaxed" href="index.php?content=cp"><img src="images/menu-icons/cp.png" width="20" height="20" alt=" " /> Back to Control Panel</a></p>
</form>
