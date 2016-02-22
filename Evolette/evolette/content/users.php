<?php
session_start();
if(!((($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest')||defined('evolette')) && $_SESSION['authorized']===true)) exit();
?>
<?php 
if (isset($_POST['withSelected'])) {
echo '<div class="attention"><h2>&quot;With Selected Users&quot; data has been successfully posted to this page</h2>';		
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
  <h2 class="content-heading h-users">Manage Users</h2>
</div>
<div class="pane l-half l-last">
  <h3 class="pane-title">Ordering Settings</h3>
  <div class="pane-inner"> 
    <form class="formToContent" method="post" action="content/users.php">
    <p>Order Users by:
    	<select class="select" name="order_by">
        	<option value="id">ID</option>
            <option value="name">Name</option>
            <option value="username">Username</option>
            <option value="email">Email</option>
            <option value="date">Registered Date</option>
        </select>
        <select class="select" name="order_by_type">
        	<option value="desc">DESC</option>
            <option value="asc">ASC</option>
        </select>
    </p>
    <p>Filter by permission:
    	<select class="select" name="filter_permission">
        	<option value="all">All</option>
            <option value="user">User</option>
            <option value="admin">Administrator</option>
            <option value="manager">Manager</option>
        </select>
    </p>
    <p>Filter by status:
    	<select class="select" name="filter_status">
        	<option value="all">All</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
        </select>
    </p>
    <p>Number of displayed users per page:
    	<input class="text" type="text" name="users_number" value="10" size="5" />
    </p>
    <input type="submit" class="w-button" name="update_ordering" value="Update Ordering Settings" />
    </form>
  </div>
</div>
<p class="withIcon" style="float: left;margin-top: -47px;"><a class="button popup" href="index.php?content=user_add"><img src="images/small-icons/add.png" width="15" height="15" alt="add" /> Add new user</a> <a class="button ajaxed" href="index.php?content=cp"><img src="images/menu-icons/cp.png" width="20" height="20" alt=" " /> Back to Control Panel</a></p>
<div class="clear"></div>
<p>There are <strong>240 registered users</strong>, but only 10 dispalyed per page:</p>
<form action="content/users.php" method="post" class="formToContent">
<table class="expandable">
  <thead>
    <tr>
      <th>&nbsp;</th>
      <th>ID</th>
      <th>Name</th>
      <th>Username</th>
      <th>Email</th>
      <th>Status</th>
      <th>Account</th>
      <th>Permission</th>
      <th>Registered</th>
      <th>&nbsp;</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input type="checkbox" name="selectedUsers[]" value="18" /></td>
      <td><strong>18</strong></td>
      <td>Administrator</td>
      <td>admin</td>
      <td>demo@idangero.us</td>
      <td><img tip="Online" src="images/small-icons/u-green.png" width="14" height="16" alt=" " /></td>
      <td><img tip="Activated" src="images/small-icons/active.png" width="20" height="20" alt=" " /></td>
      <td>Administrator</td>
      <td>31-12-2010</td>
      <td class="t-icons"><a tip="Edit user profile" class="popup" href="index.php?content=user_edit&id=18"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="Send message to this user" class="sendMessage" href="demo@idangero.us"><img src="images/small-icons/mail.png" width="20" height="11" alt=" " /></a><a tip="Delete User" class="popup" href="index.php?content=delete&delete=user&id=18"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
    </tr>
    <tr>
      <td><input type="checkbox" name="selectedUsers[]" value="17" /></td>
      <td><strong>17</strong></td>
      <td>Ethan Albertson</td>
      <td>ethan2020</td>
      <td>demo2@idangero.us</td>
      <td><img tip="Online" src="images/small-icons/u-green.png" width="14" height="16" alt=" " /></td>
      <td><img tip="Activated" src="images/small-icons/active.png" width="20" height="20" alt=" " /></td>
      <td>User</td>
      <td>30-12-2010</td>
      <td class="t-icons"><a tip="Edit user profile" class="popup" href="index.php?content=user_edit&id=17"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="Send message to this user" class="sendMessage" href="demo2@idangero.us"><img src="images/small-icons/mail.png" width="20" height="11" alt=" " /></a><a tip="Delete User" class="popup" href="index.php?content=delete&delete=user&id=17"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
    </tr>
    <tr>
      <td><input type="checkbox" name="selectedUsers[]" value="16" /></td>
      <td><strong>16</strong></td>
      <td>John Abramson</td>
      <td>john</td>
      <td>demo3@idangero.us</td>
      <td><img tip="Offline" src="images/small-icons/u-red.png" width="14" height="16" alt=" " /></td>
      <td><img tip="Activated" src="images/small-icons/active.png" width="20" height="20" alt=" " /></td>
      <td>Manager</td>
      <td>20-12-2010</td>
      <td class="t-icons"><a tip="Edit user profile" class="popup" href="index.php?content=user_edit&id=16"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="Send message to this user" class="sendMessage" href="demo3@idangero.us"><img src="images/small-icons/mail.png" width="20" height="11" alt=" " /></a><a tip="Delete User" class="popup" href="index.php?content=delete&delete=user&id=16"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
    </tr>
    <tr>
      <td><input type="checkbox" name="selectedUsers[]" value="15" /></td>
      <td><strong>15</strong></td>
      <td>Administrator</td>
      <td>admin</td>
      <td>demo@idangero.us</td>
      <td><img tip="Online" src="images/small-icons/u-green.png" width="14" height="16" alt=" " /></td>
      <td><img tip="Activated" src="images/small-icons/active.png" width="20" height="20" alt=" " /></td>
      <td>Administrator</td>
      <td>31-12-2010</td>
      <td class="t-icons"><a tip="Edit user profile" class="popup" href="index.php?content=user_edit&id=15"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="Send message to this user" class="sendMessage" href="demo@idangero.us"><img src="images/small-icons/mail.png" width="20" height="11" alt=" " /></a><a tip="Delete User" class="popup" href="index.php?content=delete&delete=user&id=15"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
    </tr>
    <tr>
      <td><input type="checkbox" name="selectedUsers[]" value="14" /></td>
      <td><strong>14</strong></td>
      <td>Ethan Albertson</td>
      <td>ethan2020</td>
      <td>demo2@idangero.us</td>
      <td><img tip="Online" src="images/small-icons/u-green.png" width="14" height="16" alt=" " /></td>
      <td><img tip="Activated" src="images/small-icons/active.png" width="20" height="20" alt=" " /></td>
      <td>User</td>
      <td>30-12-2010</td>
      <td class="t-icons"><a tip="Edit user profile" class="popup" href="index.php?content=user_edit&id=14"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="Send message to this user" class="sendMessage" href="demo2@idangero.us"><img src="images/small-icons/mail.png" width="20" height="11" alt=" " /></a><a tip="Delete User" class="popup" href="index.php?content=delete&delete=user&id=14"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
    </tr>
    <tr>
      <td><input type="checkbox" name="selectedUsers[]" value="13" /></td>
      <td><strong>13</strong></td>
      <td>John Abramson</td>
      <td>john</td>
      <td>demo3@idangero.us</td>
      <td><img tip="Offline" src="images/small-icons/u-red.png" width="14" height="16" alt=" " /></td>
      <td><img tip="Not Active" src="images/small-icons/disabled.png" width="20" height="20" alt=" " /></td>
      <td>Manager</td>
      <td>20-12-2010</td>
      <td class="t-icons"><a tip="Edit user profile" class="popup" href="index.php?content=user_edit&id=13"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="Send message to this user" class="sendMessage" href="demo3@idangero.us"><img src="images/small-icons/mail.png" width="20" height="11" alt=" " /></a><a tip="Delete User" class="popup" href="index.php?content=delete&delete=user&id=13"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
    </tr>
    <tr>
      <td><input type="checkbox" name="selectedUsers[]" value="12" /></td>
      <td><strong>12</strong></td>
      <td>Administrator</td>
      <td>admin</td>
      <td>demo@idangero.us</td>
      <td><img tip="Online" src="images/small-icons/u-green.png" width="14" height="16" alt=" " /></td>
      <td><img tip="Activated" src="images/small-icons/active.png" width="20" height="20" alt=" " /></td>
      <td>Administrator</td>
      <td>31-12-2010</td>
      <td class="t-icons"><a tip="Edit user profile" class="popup" href="index.php?content=user_edit&id=12"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="Send message to this user" class="sendMessage" href="demo@idangero.us"><img src="images/small-icons/mail.png" width="20" height="11" alt=" " /></a><a tip="Delete User" class="popup" href="index.php?content=delete&delete=user&id=12"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
    </tr>
    <tr>
      <td><input type="checkbox" name="selectedUsers[]" value="11" /></td>
      <td><strong>11</strong></td>
      <td>Ethan Albertson</td>
      <td>ethan2020</td>
      <td>demo2@idangero.us</td>
      <td><img tip="Online" src="images/small-icons/u-green.png" width="14" height="16" alt=" " /></td>
      <td><img tip="Activated" src="images/small-icons/active.png" width="20" height="20" alt=" " /></td>
      <td>User</td>
      <td>30-12-2010</td>
      <td class="t-icons"><a tip="Edit user profile" class="popup" href="index.php?content=user_edit&id=11"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="Send message to this user" class="sendMessage" href="demo2@idangero.us"><img src="images/small-icons/mail.png" width="20" height="11" alt=" " /></a><a tip="Delete User" class="popup" href="index.php?content=delete&delete=user&id=11"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
    </tr>
    <tr>
      <td><input type="checkbox" name="selectedUsers[]" value="10" /></td>
      <td><strong>10</strong></td>
      <td>John Abramson</td>
      <td>john</td>
      <td>demo3@idangero.us</td>
      <td><img tip="Offline" src="images/small-icons/u-red.png" width="14" height="16" alt=" " /></td>
      <td><img tip="Not Active" src="images/small-icons/disabled.png" width="20" height="20" alt=" " /></td>
      <td>User</td>
      <td>20-12-2010</td>
      <td class="t-icons"><a tip="Edit user profile" class="popup" href="index.php?content=user_edit&id=10"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="Send message to this user" class="sendMessage" href="demo3@idangero.us"><img src="images/small-icons/mail.png" width="20" height="11" alt=" " /></a><a tip="Delete User" class="popup" href="index.php?content=delete&delete=user&id=10"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
    </tr>
    <tr>
      <td><input type="checkbox" name="selectedUsers[]" value="9" /></td>
      <td><strong>9</strong></td>
      <td>John Abramson</td>
      <td>john</td>
      <td>demo3@idangero.us</td>
      <td><img tip="Offline" src="images/small-icons/u-red.png" width="14" height="16" alt=" " /></td>
      <td><img tip="Activated" src="images/small-icons/active.png" width="20" height="20" alt=" " /></td>
      <td>Manager</td>
      <td>20-12-2010</td>
      <td class="t-icons"><a tip="Edit user profile" class="popup" href="index.php?content=user_edit&id=9"><img src="images/small-icons/edit.png" width="15" height="15" alt="edit" /></a><a tip="Send message to this user" class="sendMessage" href="demo3@idangero.us"><img src="images/small-icons/mail.png" width="20" height="11" alt=" " /></a><a tip="Delete User" class="popup" href="index.php?content=delete&delete=user&id=9"><img src="images/small-icons/delete.png" width="16" height="16" alt="x" /></a></td>
    </tr>
  </tbody>
</table>
<p><label>With selected users:  
	<select class="select" name="selected_action">
    	<option value="nothing" selected="selected"> </option>
        <option value="delete">Delete</option>
        <option value="deactivate">Deactivate Account</option>
        <option value="message">Send Message</option>
        <option value="enable">Activate Account</option>
    </select>
</label> <input type="submit" class="button" value="Submit" name="withSelected" /></p>
</form>
<div class="clear"></div>
<div class="pagination">
<a tip="First page" class="w-button ajaxed" href="index.php?content=users&amp;page=1"><img src="images/small-icons/first.png" width="16" height="16" alt="" />&nbsp;</a> <a tip="Previous page" class="w-button ajaxed" href="index.php?content=users&amp;page=4"><img src="images/small-icons/back.png" width="9" height="16" alt=" " />&nbsp;</a> ... <a class="ajaxed" href="index.php?content=users&amp;page=3">3</a> <a class="ajaxed" href="index.php?content=users&amp;page=4">4</a> <span class="active">5</span> <a class="ajaxed" href="index.php?content=users&amp;page=6">6</a> <a class="ajaxed" href="index.php?content=users&amp;page=7">7</a> ... <a tip="Next page" class="w-button ajaxed" href="index.php?content=users&amp;page=6"><img src="images/small-icons/next.png" width="9" height="16" alt=" " />&nbsp;</a> <a class="w-button ajaxed" tip="Last page" href="index.php?content=users&amp;page=8"><img src="images/small-icons/last.png" width="16" height="16" alt=" " />&nbsp;</a>
</div>