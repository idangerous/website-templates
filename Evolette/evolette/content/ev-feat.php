<?php
session_start();
if(!((($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest')||defined('evolette')) && $_SESSION['authorized']===true)) exit();
?>

<div id="ev-feat" style="display:none">
  <h2 class="content-heading h-help">Evolette Features</h2>
  <p>Evolette has a lot of native scripts for jQuery (no third party hevyweight scripts or plugins). All scripts are well documented, so you'll have no problems to use them. It also powered with TinyMCE WYSIWYG edtor.</p>
  <h2 class="inner-heading h-help">Security</h2>
  <p>Evolette is well secured. In a word, security is based on the dynamic sessions.</p>
  <h2 class="inner-heading h-help">Ajax Features</h2>
  <p>Ajax features of templates are very easy to use. They are based on adding special CLASS attribute value to links or forms, which allows you to load desired file (or post a form fields values) to content section or to popup window, or just to send them to file without any callback.</p>
  <h2 class="inner-heading h-help">To Do List</h2>
  <p>There is an editable To Do list. In this template To Do content is stored in the file. But if your CMS will use not one administrator user, it is better to save it to database for each user. <a class="popup" href="index.php?content=todo">Open To Do</a></p>
  <h2 class="inner-heading h-help">Mailing engine</h2>
  <p>Evolette has its own simple mailing engine.</p>
  <ul>
    <li>Message Form could be opened empty like this: <a class="popup" href="index.php?content=new-message">open form</a>.</li>
    <li>By using a special CLASS for link, form could be opened with prefilled email address: <a class="sendMessage" href="demo@idangero.us">open form</a>.</li>
    <li>Or it can be opened with all prefilled fields by specifying their values in the HREF attribute: <a class="popup" href="?content=new-message&amp;mailto=demo@idangero.us&amp;subject=Demo Subject&amp;message=This message posted from link">open form</a>. </li>
  </ul>
  <p>You can try to send a message to any email. Mailing Engine is fully functioning!</p>
  <h2 class="inner-heading h-help">Popup Engine</h2>
  <p>Evolette has a very simple and powerful popup engine, which allows you to include any file to popup window or to include any text message without including a file. It also allows to open included file with an additional POSTed variables.</p>
  <h2 class="inner-heading h-help">Forms Handling Engine</h2>
  <p>As the Evolette is fully Ajax template, so it's impossible to submit forms with a simple POST or GET methods. Therefore there is a Form Handling engine which takes all form fields values and sends them to target file(specified in the ACTION attribute of form) by one of three ways: first way is to open target file with posted vars in the popup window (like Mailing Engine or To Do), second one is to open target file in content section (like on the article adding/editing page), and the last way is to post vars to file without any callback.</p>
  <p>It's very easy to use form handling, all you'll need is to specify special class for form.</p>
  <h2 class="inner-heading h-help">Wrappers</h2>
  <p>There is a few elements wrappers used in Evolette. Their usage make the creation of some elements much faster. For example good-looking button code looks like: <br />
    <strong>&lt;span class=&quot;button-l&quot;&gt;&lt;span class=&quot;button-m&quot;&gt;&lt;input type=&quot;submit&quot; class=&quot;button&quot;/&gt;&lt;/span&gt;&lt;/span&gt;</strong></p>
  <p>But it is not so easy to write this code every time. Here is why we need a wrappers. With wrapper all you need is to write: <strong>&lt;input type=&quot;submit&quot; class=&quot;button&quot;/&gt;</strong> , and script will wrap this button with spans automatically</p>
</div>
