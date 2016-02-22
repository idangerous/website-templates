<?php
session_start();
if(!((($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest')||defined('evolette')) && $_SESSION['authorized']===true)) exit();
?>
<h2 class="content-heading h-cp">Control Panel</h2>
<div class="cp-icons"> 
<a class="ajaxed" tip="Add new Article" href="index.php?content=article_add"><img src="images/cp-icons/new-art.jpg" width="105" height="142" alt="new-article" /></a> 
<a class="ajaxed" tip="Manage Articles" href="index.php?content=articles"><img src="images/cp-icons/articles.jpg" width="101" height="117" alt="articles" /></a> 
<a class="popup" tip="Add new Category" href="index.php?content=category_add"><img src="images/cp-icons/new-cat.jpg" width="122" height="147" alt="new-category" /></a> 
<a class="popup" tip="Manage Categories" href="index.php?content=categories"><img src="images/cp-icons/categories.jpg" width="134" height="128" alt="categories" /></a> 
<a class="popup" tip="Add new Section" href="index.php?content=section_add"><img src="images/cp-icons/new-sect.jpg" width="136" height="135" alt=" " /></a> 
<a class="popup" tip="Manage Sections" href="index.php?content=sections"><img src="images/cp-icons/sections.jpg" width="150" height="126" alt=" " /></a> 
<a class="popup" tip="Manage Comments"  href="index.php?content=comments"><img src="images/cp-icons/comments.jpg" width="100" height="105" alt="comments" /></a> 
<a class="ajaxed" tip="Site Users"  href="index.php?content=users"><img src="images/cp-icons/users.jpg" width="100" height="112" alt="users" /></a> <a class="popup" tip="Manage Menu Items"  href="index.php?content=menu"><img src="images/cp-icons/menu.jpg" width="100" height="112" alt="menu" /></a> 
<a tip="Manage Goods" class="popup" href="index.php?content=goods"><img src="images/cp-icons/goods.jpg" width="111" height="92" alt="goods" /></a> 
<a class="popup" tip="Modules"  href="index.php?content=modules"><img src="images/cp-icons/modules.jpg" width="95" height="112" alt="modules" /></a> <a class="popup" tip="Write new message"  href="index.php?content=new-message"><img src="images/cp-icons/message.jpg" width="119" height="95" alt="new-message" /></a> 
<a class="popup" tip="Site Settings"  href="index.php?content=settings"><img src="images/cp-icons/settings.jpg" width="98" height="98" alt="settings" /></a> 
<a tip="File Browser" class="popup" href="index.php?content=filebrowser"><img src="images/cp-icons/fb.jpg" width="100" height="108" alt="File Browser" /></a> 
<a tip="Preview Site"  href="#"><img src="images/cp-icons/preview.jpg" width="81" height="93" alt="preview" /></a> 
<a class="ajaxed" tip="Evolette features and typography"  href="index.php?content=help"><img src="images/cp-icons/help.jpg" width="100" height="110" alt="help" /></a>
<a class="popup" tip="To Do List" href="index.php?content=todo"><img src="images/cp-icons/todo.jpg" width="100" height="119" alt=" " /></a> 
  <div class="clear"></div>
</div>
<h2 class="inner-heading h-stat">Statistics</h2>
<div class="pane l-third l-first">
  <h3 class="pane-title">Todays Statistics</h3>
  <div class="pane-inner">
    <p class="withIcon"><img src="images/small-icons/u-red.png" width="14" height="16" alt=" " /> Visits: 52</p>
    <p class="withIcon"><img src="images/small-icons/u-green.png" width="14" height="16" alt=" " /> Registered Users: 10</p>
    <p class="withIcon"><img src="images/small-icons/comment.png" width="20" height="14" alt=" " /> Comments added: 14</p>
    <p class="withIcon"><img src="images/small-icons/sales.png" width="18" height="17" /> Sales: $50</p>
    <p class="withIcon"><img src="images/small-icons/art.png" width="17" height="19" alt=" " /> Popular page: <a href="#">Licensing Terms</a></p>
  </div>
</div>
<div class="pane l-2third l-last">
  <h3 class="pane-title">Total Statistics</h3>
  <div class="pane-inner">
    <div style="float:left;margin-right:40px;">
      <p class="withIcon"><img src="images/small-icons/u-red.png" width="14" height="16" alt=" " /> Visits: 1572</p>
      <p class="withIcon"><img src="images/small-icons/u-green.png" width="14" height="16" alt=" " /> Registered Users: 240</p>
      <p class="withIcon"><img src="images/small-icons/comment.png" width="20" height="14" alt=" " /> Comments added: 320</p>
      <p class="withIcon"><img src="images/small-icons/sales.png" width="18" height="17" /> Sales: $1230</p>
      <p class="withIcon"><img src="images/small-icons/art.png" width="17" height="19" alt=" " /> Popular page: <a href="#">Site Templates</a></p>
    </div>
    <div style="float:left;">
      <p class="withIcon"><img src="images/small-icons/art.png" width="17" height="19" alt=" " /> Articles: 62</p>
      <p class="withIcon"><img src="images/small-icons/cat.png" width="18" height="19" alt=" " /> Categories: 12</p>
      <p class="withIcon"><img src="images/small-icons/sect.png" width="20" height="20" alt=" " /> Sections: 3</p>
      <p class="withIcon"><img src="images/small-icons/module.png" width="20" height="20" alt=" " /> Modules Installed: 7</p>
      <p class="withIcon"><img src="images/small-icons/goods.png" width="19" height="12" alt=" " /> Goods: 86</p>
    </div>
    <div class="clear"></div>
  </div>
</div>
<div class="clear"></div>
<h2 class="inner-heading h-arts">Latest Articles</h2>
<p>Here are the five recently added articles:</p>
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
<p align="right" class="withIcon"><a class="w-button ajaxed" href="index.php?content=articles">Go to Articles</a>   <a class="button ajaxed" href="index.php?content=article_add"><img src="images/small-icons/add.png" width="15" height="15" alt="add" /> Add new article</a></p>
<h2 class="inner-heading h-art">Most Popular Articles</h2>
<p>Here are the five most popular articles:</p>
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
<p align="right" class="withIcon"><a class="w-button ajaxed" href="index.php?content=articles">Go to Articles</a>   <a class="button ajaxed" href="index.php?content=article_add"><img src="images/small-icons/add.png" width="15" height="15" alt="add" /> Add new article</a></p>
<h2 class="inner-heading h-comments">New Comments</h2>
<p>Here are the 5 recently added comments:</p>
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
<p align="right" class="withIcon"><a class="w-button popup" href="index.php?content=comments"><img src="images/small-icons/comment.png" width="20" height="14" alt=" " />  All comments</a></p>
<h2 class="inner-heading h-goods">Sales</h2>
<div class="pane">
  <div class="tabs">
    <ul class="tabs-head">
      <li class="current">Five Latest Sales</li>
      <li>Bestsellers</li>
      <li>Lowest Sales</li>
    </ul>
    <div class="tabs-pane padding5 current">
      <table class="expandable">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Customer Email</th>
            <th>Payment Type</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Date</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>26</strong></td>
            <td><a tip="Send message" href="demo@idangero.us" class="sendMessage">demo@idangero.us</a></td>
            <td>VISA</td>
            <td>Autumn Field Template</td>
            <td>$10</td>
            <td>06-01-2011 18:56</td>
            <td class="t-icons"><a tip="More transaction details" class="popup" href="index.php?content=transaction&amp;id=26"><img src="images/small-icons/preview.png" width="20" height="16" alt="more" /></a></td>
          </tr>
          <tr>
            <td><strong>25</strong></td>
            <td><a tip="Send message" href="demo@idangero.us" class="sendMessage">demo@idangero.us</a></td>
            <td>Master Card</td>
            <td>Autumn Field Template</td>
            <td>$10</td>
            <td>06-01-2011 13:56</td>
            <td class="t-icons"><a tip="More transaction details" class="popup" href="index.php?content=transaction&amp;id=25"><img src="images/small-icons/preview.png" width="20" height="16" alt="more" /></a></td>
          </tr>
          <tr>
            <td><strong>24</strong></td>
            <td><a tip="Send message" href="demo@idangero.us" class="sendMessage">demo@idangero.us</a></td>
            <td>Deposit</td>
            <td>Photo Exhibition</td>
            <td>$10</td>
            <td>05-01-2011 21:51</td>
            <td class="t-icons"><a tip="More transaction details" class="popup" href="index.php?content=transaction&amp;id=24"><img src="images/small-icons/preview.png" width="20" height="16" alt="more" /></a></td>
          </tr>
          <tr>
            <td><strong>23</strong></td>
            <td><a tip="Send message" href="demo@idangero.us" class="sendMessage">demo@idangero.us</a></td>
            <td>Deposit</td>
            <td>Photo Exhibition</td>
            <td>$10</td>
            <td>05-01-2011 19:37</td>
            <td class="t-icons"><a tip="More transaction details" class="popup" href="index.php?content=transaction&amp;id=23"><img src="images/small-icons/preview.png" width="20" height="16" alt="more" /></a></td>
          </tr>
          <tr>
            <td><strong>22</strong></td>
            <td><a tip="Send message" href="demo@idangero.us" class="sendMessage">demo@idangero.us</a></td>
            <td>VISA</td>
            <td>Imagine Box</td>
            <td>$10</td>
            <td>04-01-2011 12:12</td>
            <td class="t-icons"><a tip="More transaction details" class="popup" href="index.php?content=transaction&amp;id=22"><img src="images/small-icons/preview.png" width="20" height="16" alt="more" /></a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="tabs-pane padding5">
      <table class="expandable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Sales</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>26</strong></td>
            <td>Autumn Field Template</td>
            <td>Site Templates</td>
            <td>$10</td>
            <td>120</td>
            <td class="t-icons"><a tip="Edit This Product" class="popup" href="index.php?content=product_edit&amp;id=26"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a> <a tip="View product page" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="View" /></a></td>
          </tr>
          <tr>
            <td><strong>25</strong></td>
            <td>Photo Exhibition</td>
            <td>Site Templates</td>
            <td>$10</td>
            <td>110</td>
            <td class="t-icons"><a tip="Edit This Product" class="popup" href="index.php?content=product_edit&amp;id=25"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a> <a tip="View product page" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="View" /></a></td>
          </tr>
          <tr>
            <td><strong>24</strong></td>
            <td>Imagine Box</td>
            <td>Site Templates</td>
            <td>$10</td>
            <td>99</td>
            <td class="t-icons"><a tip="Edit This Product" class="popup" href="index.php?content=product_edit&amp;id=24"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a> <a tip="View product page" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="View" /></a></td>
          </tr>
          <tr>
            <td><strong>23</strong></td>
            <td>Marketing Boxes</td>
            <td>Graphics</td>
            <td>$3</td>
            <td>90</td>
            <td class="t-icons"><a tip="Edit This Product" class="popup" href="index.php?content=product_edit&amp;id=23"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a> <a tip="View product page" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="View" /></a></td>
          </tr>
          <tr>
            <td><strong>22</strong></td>
            <td>404 Error Page</td>
            <td>Miscellaneous Templates</td>
            <td>$5</td>
            <td>70</td>
            <td class="t-icons"><a tip="Edit This Product" class="popup" href="index.php?content=product_edit&amp;id=22"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a> <a tip="View product page" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="View" /></a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="tabs-pane padding5">
      <table class="expandable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Sales</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>21</strong></td>
            <td>Mercedes</td>
            <td>Cars</td>
            <td>$10000</td>
            <td>7</td>
            <td class="t-icons"><a tip="Edit This Product" class="popup" href="index.php?content=product_edit&amp;id=21"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a> <a tip="View product page" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="View" /></a></td>
          </tr>
          <tr>
            <td><strong>20</strong></td>
            <td>Audi</td>
            <td>Cars</td>
            <td>$10000</td>
            <td>6</td>
            <td class="t-icons"><a tip="Edit This Product" class="popup" href="index.php?content=product_edit&amp;id=20"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a> <a tip="View product page" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="View" /></a></td>
          </tr>
          <tr>
            <td><strong>52</strong></td>
            <td>Cessna</td>
            <td>Planes</td>
            <td>$10000</td>
            <td>5</td>
            <td class="t-icons"><a tip="Edit This Product" class="popup" href="index.php?content=product_edit&amp;id=52"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a> <a tip="View product page" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="View" /></a></td>
          </tr>
          <tr>
            <td><strong>42</strong></td>
            <td>Helicopter</td>
            <td>Toys</td>
            <td>$3000</td>
            <td>4</td>
            <td class="t-icons"><a tip="Edit This Product" class="popup" href="index.php?content=product_edit&amp;id=42"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a> <a tip="View product page" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="View" /></a></td>
          </tr>
          <tr>
            <td><strong>12</strong></td>
            <td>404 Error Page</td>
            <td>Miscellaneous Templates</td>
            <td>$5</td>
            <td>3</td>
            <td class="t-icons"><a tip="Edit This Product" class="popup" href="index.php?content=product_edit&amp;id=12"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a> <a tip="View product page" href="#"><img src="images/small-icons/preview.png" width="20" height="16" alt="View" /></a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
<p align="right" class="withIcon"><a class="w-button popup" href="index.php?content=transactions"><img src="images/small-icons/sales.png" width="18" height="17" alt=" " />  All Transaction</a> <a class="button popup" href="index.php?content=goods"><img src="images/small-icons/goods.png" width="19" height="12" alt=" " /> Go to Goods</a> </p>
<h2 class="inner-heading h-users">Users</h2>
<div class="pane">
  <div class="accordion time-300">
    <h3 class="acc-title current">Online Users</h3>
    <div class="acc-pane current">
      <div style="float:left;margin-right:20px;">
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-green.png"/> Michael Howard (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-green.png"/> John Abramson (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-green.png"/> Ethan Albertson (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-green.png"/> Ryan Attwood (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
      </div>
      <div style="float:left;margin-right:20px;">
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-green.png"/> Berkhoff (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-green.png"/> James Brickman (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-green.png"/> Aidan Bootman (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-green.png"/> Alliot (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
      </div>
      <div style="float:left">
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-green.png"/> Berkhoff (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-green.png"/> James Brickman (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-green.png"/> Aidan Bootman (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-green.png"/> Alliot (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
      </div>
      <div class="clear"></div>
    </div>
    <h3 class="acc-title">Today Registered Users</h3>
    <div class="acc-pane">
      <div style="float:left;margin-right:20px;">
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-red.png"/> Michael Howard (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-red.png"/> John Abramson (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-red.png"/> Ethan Albertson (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-red.png"/> Ryan Attwood (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
      </div>
      <div style="float:left;margin-right:20px;">
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-red.png"/> Berkhoff (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-red.png"/> James Brickman (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-red.png"/> Aidan Bootman (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-red.png"/> Alliot (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
      </div>
      <div style="float:left">
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-red.png"/> Berkhoff (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-red.png"/> James Brickman (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-red.png"/> Aidan Bootman (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-red.png"/> Alliot (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
      </div>
      <div class="clear"></div>
    </div>
    <h3 class="acc-title">Featured Users</h3>
    <div class="acc-pane">
      <div style="float:left;margin-right:20px;">
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-red.png"/> Michael Howard (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-red.png"/> John Abramson (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-red.png"/> Ethan Albertson (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-red.png"/> Ryan Attwood (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
      </div>
      <div style="float:left;margin-right:20px;">
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-red.png"/> Berkhoff (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-red.png"/> James Brickman (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-red.png"/> Aidan Bootman (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-red.png"/> Alliot (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
      </div>
      <div style="float:left">
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-red.png"/> Berkhoff (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-red.png"/> James Brickman (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-red.png"/> Aidan Bootman (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
        <p class="withIcon"><img height="16" width="14" alt=" " src="images/small-icons/u-red.png"/> Alliot (<a tip="Send Message" class="sendMessage" href="demo@idangero.us">demo@idangero.us</a>)</p>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</div>
<p class="withIcon"><a class="w-button ajaxed" href="index.php?content=users"><img src="images/small-icons/u-red.png" width="14" height="16" alt=" " />  All Users</a></p>
<div class="clear"></div>
