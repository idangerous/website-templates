<?php
session_start();
if(!((($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest')||defined('evolette')) && $_SESSION['authorized']===true)) exit();
?>

<div id="ev-typo" style="display:none">
<h2 class="content-heading h-help">Evolette Typography</h2>
<div class="pane">
  <h2 class="inner-heading  h-help">Headings Icons</h2>
  <img src="images/head-icons/article.png" width="35" height="40" /> <img src="images/head-icons/articles.png" width="40" height="39" /> <img src="images/head-icons/categories.png" width="40" height="31" /> <img src="images/head-icons/category.png" width="38" height="40" /> <img src="images/head-icons/comments.png" width="40" height="28" /> <img src="images/head-icons/cp.png" width="40" height="40" /> <img src="images/head-icons/fb.png" width="40" height="34" /> <img src="images/head-icons/goods.png" width="40" height="33" /> <img src="images/head-icons/help.png" width="40" height="40" /> <img src="images/head-icons/menu.png" width="40" height="36" /> <img src="images/head-icons/message.png" width="40" height="22" /> <img src="images/head-icons/modules.png" width="40" height="40" /> <img src="images/head-icons/section.png" width="40" height="32" /> <img src="images/head-icons/sections.png" width="40" height="27" /> <img src="images/head-icons/settings.png" width="40" height="40" /> <img src="images/head-icons/stat.png" width="40" height="40" /> <img src="images/head-icons/todo.png" width="38" height="40" /> <img src="images/head-icons/users.png" width="40" height="40" /> </div>
<div class="pane">
  <h2 class="inner-heading  h-help">Small Icons</h2>
  <div style="text-align:center;background:#666;padding:20px"> <img src="images/small-icons/active.png" width="20" height="20" alt=" " /> <img src="images/small-icons/add.png" width="15" height="15" /> <img src="images/small-icons/art.png" width="17" height="19" /> <img src="images/small-icons/back.png" width="9" height="16" /> <img src="images/small-icons/cat.png" width="18" height="19" /> <img src="images/small-icons/comment.png" width="20" height="14" /> <img src="images/small-icons/delete.png" width="16" height="16" /> <img src="images/small-icons/disabled.png" width="20" height="20" /> <img src="images/small-icons/edit.png" width="15" height="15" /> <img src="images/small-icons/first.png" width="16" height="16" /> <img src="images/small-icons/folder.png" width="19" height="16" /> <img src="images/small-icons/goods.png" width="19" height="12" /> <img src="images/small-icons/help.png" width="20" height="20" /> <img src="images/small-icons/last.png" width="16" height="16" /> <img src="images/small-icons/mail.png" width="20" height="11" /> <img src="images/small-icons/module.png" width="20" height="20" /> <img src="images/small-icons/next.png" width="9" height="16" /> <img src="images/small-icons/preview.png" width="20" height="16" /> <img src="images/small-icons/sales.png" width="18" height="17" /> <img src="images/small-icons/save.png" width="16" height="16" /> <img src="images/small-icons/sect.png" width="20" height="20" /> <img src="images/small-icons/settings.png" width="20" height="20" /> <img src="images/small-icons/u-green.png" width="14" height="16" /> <img src="images/small-icons/u-red.png" width="14" height="16" /> </div>
</div>
<h2 class="inner-heading  h-help">Notifications</h2>
<div class="alert" style="float:left;margin-right:50px;">
  <h2>Alert Notification</h2>
</div>
<div class="approve"  style="float:left">
  <h2>Approve Notification</h2>
</div>
<div class="clear"></div>
<div class="attention">
  <h2>Attention Notification</h2>
</div>
<div class="pane">
  <h2 class="inner-heading  h-help">Predefined Text</h2>
  <pre>
&lt;p&gt;Hello, i\'m a predefined text!&lt;/p&gt
&lt;p&gt;You should use the following formatting to use it: &lt;pre&gt;....&lt;/pre&gt;&lt;/p&gt;
&lt;p&gt;Hello, i\'m a predefined text!&lt;/p&gt
&lt;p&gt;You should use the following formatting to use it: &lt;pre&gt;....&lt;/pre&gt;&lt;/p&gt; &lt;p&gt;You should use the following formatting to use it: &lt;pre&gt;....&lt;/pre&gt;&lt;/p&gt;
    </pre>
</div>
<div class="pane">
  <h2 class="inner-heading  h-help">Buttons</h2>
  <p><span class="button">Default Button</span> <span class="w-button">White Button</span></p>
  <p><span class="bb-button">Black Big Button</span> <span class="bw-button">White Big Button</span></p>
</div>
<div class="pane">
  <h2 class="inner-heading  h-help">Tips</h2>
  <p>Tip can be added to any element</p>
  <p><span tip="Lorem ipsum dolor sit amet" class="button">Hover this button</span> or <span tip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet, sem id posuere molestie, elit tellus facilisis augue, sit amet suscipit mauris justo sit amet dui. Duis eu suscipit augue. Suspendisse eget orci eu lacus posuere congue. Pellentesque habitant morbi tristique senectus et netus" class="button">Hover this button</span></p>
</div>
<div class="pane">
  <h2 class="inner-heading  h-help">Tables</h2>
  <p>Click on the table heading row to expand it.</p>
  <table class="expandable">
    <thead>
      <tr>
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
        <td><strong>18</strong></td>
        <td>Autumn Field Template</td>
        <td>145</td>
        <td>Site Templates</td>
        <td>2</td>
        <td>31-12-2010</td>
        <td>12</td>
        <td>Admin</td>
        <td class="t-icons"><a tip="Edit This Article" class="ajaxed" href="index.php?content=article_edit&amp;id=18"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="Preview This Article" class="" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="preview" /></a><a tip="Delete This Article" class="popup" href="index.php?content=delete&amp;delete=article&amp;id=18"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
      </tr>
      <tr>
        <td><strong>17</strong></td>
        <td>Imagine Box</td>
        <td>127</td>
        <td>Site Templates</td>
        <td>4</td>
        <td>29-12-2010</td>
        <td>1</td>
        <td>Admin</td>
        <td class="t-icons"><a tip="Edit This Article" class="ajaxed" href="index.php?content=article_edit&amp;id=18"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="Preview This Article" class="" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="preview" /></a><a tip="Delete This Article" class="popup" href="index.php?content=delete&amp;delete=article&amp;id=18"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
      </tr>
      <tr>
        <td><strong>16</strong></td>
        <td>OS - Desktop Style Template</td>
        <td>120</td>
        <td>Site Templates</td>
        <td>6</td>
        <td>28-12-2010</td>
        <td>3</td>
        <td>Admin</td>
        <td class="t-icons"><a tip="Edit This Article" class="ajaxed" href="index.php?content=article_edit&amp;id=18"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="Preview This Article" class="" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="preview" /></a><a tip="Delete This Article" class="popup" href="index.php?content=delete&amp;delete=article&amp;id=18"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
      </tr>
      <tr>
        <td><strong>15</strong></td>
        <td>Photo Exhibition</td>
        <td>105</td>
        <td>Site Templates</td>
        <td>5</td>
        <td>27-12-2010</td>
        <td>1</td>
        <td>Admin</td>
        <td class="t-icons"><a tip="Edit This Article" class="ajaxed" href="index.php?content=article_edit&amp;id=18"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="Preview This Article" class="" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="preview" /></a><a tip="Delete This Article" class="popup" href="index.php?content=delete&amp;delete=article&amp;id=18"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
      </tr>
      <tr>
        <td><strong>14</strong></td>
        <td>Redfield - Photo Portfolio</td>
        <td>102</td>
        <td>Site Templates</td>
        <td>9</td>
        <td>26-12-2010</td>
        <td>9</td>
        <td>Admin</td>
        <td class="t-icons"><a tip="Edit This Article" class="ajaxed" href="index.php?content=article_edit&amp;id=18"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="Preview This Article" class="" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="preview" /></a><a tip="Delete This Article" class="popup" href="index.php?content=delete&amp;delete=article&amp;id=18"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
      </tr>
    </tbody>
  </table>
  <table class="expandable t-white">
    <thead>
      <tr>
        <th>ID</th>
        <th>Author</th>
        <th>Email</th>
        <th>Comment To</th>
        <th>Starts from</th>
        <th>Added</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>26</strong></td>
        <td>Admin</td>
        <td><a tip="Send message" href="demo@idangero.us" class="sendMessage">demo@idangero.us</a></td>
        <td>Autumn Field Template</td>
        <td>Vestibulum vel ipsum a nullam...</td>
        <td>06-01-2011 18:56</td>
        <td class="t-icons"><a tip="Edit This Comment" class="popup" href="index.php?content=comment_edit&amp;id=26"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="View page with this comment" class="" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="preview" /></a><a tip="Delete This Comment" class="popup" href="index.php?content=delete&amp;delete=comment&amp;id=26"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
      </tr>
      <tr>
        <td><strong>25</strong></td>
        <td>Admin</td>
        <td><a tip="Send message" href="demo@idangero.us" class="sendMessage">demo@idangero.us</a></td>
        <td>Autumn Field Template</td>
        <td>Vivamus volutpat, sapien amet...</td>
        <td>06-01-2011 16:32</td>
        <td class="t-icons"><a tip="Edit This Comment" class="popup" href="index.php?content=comment_edit&amp;id=25"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="View page with this comment" class="" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="preview" /></a><a tip="Delete This Comment" class="popup" href="index.php?content=delete&amp;delete=comment&amp;id=25"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
      </tr>
      <tr>
        <td><strong>24</strong></td>
        <td>Fred Pat</td>
        <td><a tip="Send message" href="demo@idangero.us" class="sendMessage">demo@idangero.us</a></td>
        <td>Photo Exhibition</td>
        <td>Pellentesque habitant posuere...</td>
        <td>05-01-2011 17:10</td>
        <td class="t-icons"><a tip="Edit This Comment" class="popup" href="index.php?content=comment_edit&amp;id=24"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="View page with this comment" class="" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="preview" /></a><a tip="Delete This Comment" class="popup" href="index.php?content=delete&amp;delete=comment&amp;id=24"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
      </tr>
      <tr>
        <td><strong>23</strong></td>
        <td>Michael</td>
        <td><a tip="Send message" href="demo@idangero.us" class="sendMessage">demo@idangero.us</a></td>
        <td>Imagine Box</td>
        <td>Ut scelerisque neque dui amet...</td>
        <td>05-01-2011 17:05</td>
        <td class="t-icons"><a tip="Edit This Comment" class="popup" href="index.php?content=comment_edit&amp;id=23"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="View page with this comment" class="" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="preview" /></a><a tip="Delete This Comment" class="popup" href="index.php?content=delete&amp;delete=comment&amp;id=23"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
      </tr>
      <tr>
        <td><strong>22</strong></td>
        <td>Admin</td>
        <td><a tip="Send message" href="demo@idangero.us" class="sendMessage">demo@idangero.us</a></td>
        <td>Imagine Box</td>
        <td>Lorem ipsum dolor sit posuere...</td>
        <td>04-01-2011 12:05</td>
        <td class="t-icons"><a tip="Edit This Comment" class="popup" href="index.php?content=comment_edit&amp;id=22"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="View page with this comment" class="" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="preview" /></a><a tip="Delete This Comment" class="popup" href="index.php?content=delete&amp;delete=comment&amp;id=22"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
      </tr>
    </tbody>
  </table>
</div>
<div class="pane">
  <h2 class="inner-heading  h-help">Tabs</h2>
  <div class="tabs">
    <ul class="tabs-head">
      <li class="current">First Tab</li>
      <li class="">Second Tab</li>
      <li class="">Third Tab </li>
    </ul>
    <div class="tabs-pane current" style="display: block;">
      <p>First Tab content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet, sem id posuere molestie, elit tellus facilisis augue, sit amet suscipit mauris justo sit amet dui. Duis eu suscipit augue. Suspendisse eget orci eu lacus posuere congue. Pellentesque habitant morbi tristique senectus et netus.</p>
    </div>
    <div class="tabs-pane" style="display: none;">
      <p>Second Tab content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet, sem id posuere molestie, elit tellus facilisis augue, sit amet suscipit mauris justo sit amet dui. Duis eu suscipit augue. Suspendisse eget orci eu lacus posuere congue. Pellentesque habitant morbi tristique senectus et netus.</p>
    </div>
    <div class="tabs-pane" style="display: none;">
      <p>Third Tab content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet, sem id posuere molestie, elit tellus facilisis augue, sit amet suscipit mauris justo sit amet dui. Duis eu suscipit augue. Suspendisse eget orci eu lacus posuere congue. Pellentesque habitant morbi tristique senectus et netus.</p>
    </div>
  </div>
</div>
<div class="pane">
  <h2 class="inner-heading  h-help">Accordion</h2>
  <div class="accordion time-300">
    <h3 class="acc-title current">First Pane</h3>
    <div class="acc-pane current">
      <p>First pane content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet, sem id posuere molestie, elit tellus facilisis augue, sit amet suscipit mauris justo sit amet dui. Duis eu suscipit augue. Suspendisse eget orci eu lacus posuere congue. Pellentesque habitant morbi tristique senectus et netus.</p>
    </div>
    <h3 class="acc-title">Second Pane</h3>
    <div class="acc-pane">
      <p>Second pane content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet, sem id posuere molestie, elit tellus facilisis augue, sit amet suscipit mauris justo sit amet dui. Duis eu suscipit augue. Suspendisse eget orci eu lacus posuere congue. Pellentesque habitant morbi tristique senectus et netus.</p>
    </div>
    <h3 class="acc-title">Third Pane</h3>
    <div class="acc-pane">
      <p>Third pane content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet, sem id posuere molestie, elit tellus facilisis augue, sit amet suscipit mauris justo sit amet dui. Duis eu suscipit augue. Suspendisse eget orci eu lacus posuere congue. Pellentesque habitant morbi tristique senectus et netus.</p>
    </div>
  </div>
</div>
<div class="pane">
  <h2 class="inner-heading  h-help">Layouts and Panes</h2>
  <div class="pane">
    <h3 class="pane-title">Full Width</h3>
    <div class="pane-inner">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet, sem id posuere molestie, elit tellus facilisis augue, sit amet suscipit mauris justo sit amet dui. Duis eu suscipit augue. Suspendisse eget orci eu lacus posuere congue. Pellentesque habitant morbi tristique senectus et netus</p>
    </div>
  </div>
  <div class="pane l-half l-first">
    <h3 class="pane-title">One Half</h3>
    <div class="pane-inner">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet, sem id posuere molestie, elit tellus facilisis augue, sit amet suscipit mauris justo sit amet dui. Duis eu suscipit augue. Suspendisse eget orci eu lacus posuere congue. Pellentesque habitant morbi tristique senectus et netus</p>
    </div>
  </div>
  <div class="pane l-half l-last">
    <h3 class="pane-title">One Half</h3>
    <div class="pane-inner">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet, sem id posuere molestie, elit tellus facilisis augue, sit amet suscipit mauris justo sit amet dui. Duis eu suscipit augue. Suspendisse eget orci eu lacus posuere congue. Pellentesque habitant morbi tristique senectus et netus</p>
    </div>
  </div>
  <div class="clear"></div>
  <div class="pane l-third l-first">
    <h3 class="pane-title">One Third</h3>
    <div class="pane-inner">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet, sem id posuere molestie, elit tellus facilisis augue, sit amet suscipit mauris justo sit amet dui. Duis eu suscipit augue. Suspendisse eget orci eu lacus posuere congue. Pellentesque habitant morbi tristique senectus et netus</p>
    </div>
  </div>
  <div class="pane l-third">
    <h3 class="pane-title">One Third</h3>
    <div class="pane-inner">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet, sem id posuere molestie, elit tellus facilisis augue, sit amet suscipit mauris justo sit amet dui. Duis eu suscipit augue. Suspendisse eget orci eu lacus posuere congue. Pellentesque habitant morbi tristique senectus et netus</p>
    </div>
  </div>
  <div class="pane l-third l-last">
    <h3 class="pane-title">One Third</h3>
    <div class="pane-inner">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet, sem id posuere molestie, elit tellus facilisis augue, sit amet suscipit mauris justo sit amet dui. Duis eu suscipit augue. Suspendisse eget orci eu lacus posuere congue. Pellentesque habitant morbi tristique senectus et netus</p>
    </div>
  </div>
  <div class="clear"></div>
  <div class="pane l-third l-first">
    <h3 class="pane-title">One Third</h3>
    <div class="pane-inner">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet, sem id posuere molestie, elit tellus facilisis augue, sit amet suscipit mauris justo sit amet dui. Duis eu suscipit augue. Suspendisse eget orci eu lacus posuere congue. Pellentesque habitant morbi tristique senectus et netus</p>
    </div>
  </div>
  <div class="pane l-2third l-last">
    <h3 class="pane-title">Two Third</h3>
    <div class="pane-inner">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet, sem id posuere molestie, elit tellus facilisis augue, sit amet suscipit mauris justo sit amet dui. Duis eu suscipit augue. Suspendisse eget orci eu lacus posuere congue. Pellentesque habitant morbi tristique senectus et netus</p>
    </div>
  </div>
  <div class="clear"></div>
  <div class="pane l-fourth l-first">
    <h3 class="pane-title">One Fourth</h3>
    <div class="pane-inner">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet, sem id posuere molestie, elit tellus facilisis augue, sit amet suscipit mauris justo sit amet dui. Duis eu suscipit augue. Suspendisse eget orci eu lacus posuere congue. Pellentesque habitant morbi tristique senectus et netus</p>
    </div>
  </div>
  <div class="pane l-fourth">
    <h3 class="pane-title">One Fourth</h3>
    <div class="pane-inner">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet, sem id posuere molestie, elit tellus facilisis augue, sit amet suscipit mauris justo sit amet dui. Duis eu suscipit augue. Suspendisse eget orci eu lacus posuere congue. Pellentesque habitant morbi tristique senectus et netus</p>
    </div>
  </div>
  <div class="pane l-fourth">
    <h3 class="pane-title">One Fourth</h3>
    <div class="pane-inner">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet, sem id posuere molestie, elit tellus facilisis augue, sit amet suscipit mauris justo sit amet dui. Duis eu suscipit augue. Suspendisse eget orci eu lacus posuere congue. Pellentesque habitant morbi tristique senectus et netus</p>
    </div>
  </div>
  <div class="pane l-fourth l-last">
    <h3 class="pane-title">One Fourth</h3>
    <div class="pane-inner">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet, sem id posuere molestie, elit tellus facilisis augue, sit amet suscipit mauris justo sit amet dui. Duis eu suscipit augue. Suspendisse eget orci eu lacus posuere congue. Pellentesque habitant morbi tristique senectus et netus</p>
    </div>
  </div>
  <div class="clear"></div>
  <div class="pane l-fourth l-first">
    <h3 class="pane-title">One Fourth</h3>
    <div class="pane-inner">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet, sem id posuere molestie, elit tellus facilisis augue, sit amet suscipit mauris justo sit amet dui. Duis eu suscipit augue. Suspendisse eget orci eu lacus posuere congue. Pellentesque habitant morbi tristique senectus et netus</p>
    </div>
  </div>
  <div class="pane l-3fourth l-last">
    <h3 class="pane-title">Three Fourth</h3>
    <div class="pane-inner">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet, sem id posuere molestie, elit tellus facilisis augue, sit amet suscipit mauris justo sit amet dui. Duis eu suscipit augue. Suspendisse eget orci eu lacus posuere congue. Pellentesque habitant morbi tristique senectus et netus</p>
    </div>
  </div>
  <div class="clear"></div>
</div>
