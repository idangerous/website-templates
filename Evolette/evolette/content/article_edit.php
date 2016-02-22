<?php
session_start();
if(!((($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest')||defined('evolette')) && $_SESSION['authorized']===true)) exit();
?>
<h2 class="content-heading h-art">Editing Article </h2>
<h2 class="inner-heading">&quot;Autumn Field Template&quot; (ID <?php echo $_POST['id'] ?>)</h2>
<form action="content/article_save.php" class="formToPopup" method="post">

<p class="withIcon">
<span class="button" onclick="$('form.formToPopup').submit()"><img src="images/small-icons/save.png" width="16" height="16" alt=" " /> Update this article</span> <a class="button ajaxed" href="index.php?content=articles"><img src="images/small-icons/first.png" width="16" height="16" alt=" " />  &nbsp;Back to Articles</a> <a class="button ajaxed" href="index.php?content=cp"><img src="images/menu-icons/cp.png" width="20" height="20" alt=" " /> Back to Control Panel</a></p>

<div class="pane l-half l-first">
  <h3 class="pane-title">Meta Settings</h3>
  <div class="pane-inner"> 
    <p><label>Article Title:<br />
    	<input class="text" value="Autumn Field Template" type="text" name="title" size="40" />
    </label></p>
    <p><label>Meta Keywords:<br />
    	<input class="text" value="ajax, jquery, template, javascript, portfolio template, site template, ajax template, popup window" type="text" name="keywords" size="40" />
    </label></p>
    <p><label>Meta Description:<br />
    	<input class="text" value="Autumn Field is a premium ajax based web-site template, designed and created by iDangero.us" type="text" name="description" size="40" />
    </label></p>
  	<p><label>Tags:<br />
    	<input class="text" value="animated, slide, jquery, ajax, social bar, colorful, popup" type="text" name="tags" size="40" />
    </label></p>
  </div>
</div>
<div class="pane l-half l-last">
  <h3 class="pane-title">Article Settings</h3>
  <div class="pane-inner"> 
    <p><label>Category: 
    	<select name="category_id" class="select">
        	<option value="-1">None</option>
            <option value="23" selected="selected">Site Templates</option>
            <option value="22">Scripts</option>
            <option value="25">Toys</option>
            <option value="21">Cars</option>
        </select> 
    </label></p>
    <p><label>Comments: 
    	<select name="comments" class="select">
        	<option value="0" selected="selected">Use category settings</option>
            <option value="1">Enabled</option>
            <option value="-1">Disabled</option>
        </select> 
    </label></p>
    <p><label>Order:
    	<input class="text" type="text" value="20" name="order" size="10" />
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
    	  <input type="checkbox" checked="checked" name="CheckboxGroup[]" value="checkbox2" id="CheckboxGroup1_1" />
    	  Checkbox2</label>
    	
    	<label>
    	  <input type="checkbox" checked="checked" name="CheckboxGroup[]" value="checkbox3" id="CheckboxGroup1_2" />
    	  Checkbox3</label>
	</p>
  </div>
</div>
<div class="clear"></div>
<div class="pane">
  <h3 class="pane-title">Article Content</h3>
  <div class="pane-inner  noPadding"> 
    <?php
	$content = '<p>Autumn Field is an Ajax based animated site template.&nbsp;This template is good to use for small business websites, projects, or it can be used as a fashion site.</p>
<p>The main advantage of this template is that it uses only one page. Content pages slides across the screen. This site and all its pages load at a time, no need to use internal links and no need to wait until the user will load the desired content. If you want to use the extra content, you can use the Ajax features of this template.</p>
<p>Autumn Field has the great looking double slide effect. When the content pages are slide across the screen, the large background image slides too, but with a less speed.</p>
<p>Template is fully animated without the use of Flash technology. Smooth and good looking animation and Ajax features of this template are realized by using the JavaScript jQuery library.</p>
<p>Here are Autumn Field features:</p>
<ul>
<li>Powered with jQuery</li>
<li>Social.Bar - a panel with the animated social icons which you can link to your relevant social pages (profiles)</li>
<li>Comes with ready to use popup engine, which allows you to call a popup window with a HTML content from file, iframe or simple image inside</li>
<li>Ajax Contact Form with validation</li>
<li>100% tableless CSS</li>
<li>Validates with XHTML 1.0 Transitional</li>
<li>Easy to redesign, has very simple and clear API</li>
</ul>
<p>Compatible with:</p>
<ul>
<li>Internet Explorer 7+</li>
<li>Internet Explorer 6 (Limited functionality)</li>
<li>Google Chrome 6+</li>
<li>Safari 4+&nbsp;</li>
<li>FireFox 3.6+</li>
<li>Opera 9+</li>
</ul>
<p>With this template you\'ll also get full PDF documentation and layered PSD files.</p> ';
	?>
    <textarea name="content" class="tinymce getThis">
    <?php echo $content; ?>
    </textarea>
  </div>
</div>
<p style="float:left;margin-right:20px"><input type="submit" class="bb-button" name="update" value="Update this Article" /></p><p class="withIcon"><a class="bb-button ajaxed" href="index.php?content=articles"><img src="images/small-icons/first.png" width="16" height="16" alt=" " />  &nbsp;Back to Articles</a> <a class="bb-button ajaxed" href="index.php?content=cp"><img src="images/menu-icons/cp.png" width="20" height="20" alt=" " /> Back to Control Panel</a></p>
</form>
