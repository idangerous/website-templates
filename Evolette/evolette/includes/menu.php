<?php
session_start();
if(!((($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest')||defined('evolette')) && $_SESSION['authorized']===true)) exit();
?>
<ul>
  <li class="menu-shortcuts"><a mtip="Control Panel" class="m-ajaxed" href="index.php?content=cp"><img src="images/menu-icons/cp.png" width="20" height="20" alt="Control Panel" /></a><a mtip="Users" class="m-ajaxed" href="index.php?content=users"><img src="images/menu-icons/users.png" width="20" height="18" alt="Users" /></a><a mtip="Send Message" class="m-popup" href="index.php?content=new-message"><img src="images/menu-icons/mail.png" width="20" height="20" alt=" " /></a><a mtip="Site Settings" class="m-popup" href="index.php?content=settings"><img src="images/menu-icons/settings.png" width="20" height="20" alt="settings" /></a><a mtip="To Do" class="m-popup" href="index.php?content=todo"><img src="images/menu-icons/todo.png" width="19" height="20" alt=" " /></a><a mtip="Preview Site" href="#" style="margin:0"><img src="images/menu-icons/preview.png" width="20" height="17" alt="Preview" /></a></li>
  <li><span class="separator">Content</span>
    <ul class="submenu">
      <li><a class="m-ajaxed" href="index.php?content=articles">Articles</a>
        <ul class="submenu">
          <li><a class="m-ajaxed" href="index.php?content=article_add">Add New Article</a></li>
        </ul>
      </li>
      <li><a class="m-popup"  href="index.php?content=categories">Categories</a></li>
      <li><a class="m-popup"  href="index.php?content=sections">Sections</a></li>
    </ul>
  </li>
  <li><a class="m-popup"  href="index.php?content=menu">Site Menu</a></li>
  <li><a class="m-popup"  href="index.php?content=modules">Modules</a></li>
  <li><a class="m-popup"  href="index.php?content=comments">Comments</a></li>
  <li><a class="m-ajaxed" href="index.php?content=help">Evolette Features</a></li>
</ul>
