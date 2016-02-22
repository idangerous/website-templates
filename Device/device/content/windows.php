<h2 class="content-heading cufoned">Window Layouts</h2>
<p>Device has three different type of window layouts. Template API allows you to call window with any size:</p>
<h3 class="inner-heading cufoned">Window With HTML Content</h3>
<p>Click on these links to look at the windows with HTML content:</p>
<p><a href="content/services.php" class="new-window">Default window size</a> | <a href="content/services.php" class="new-window" rel="800">Width window</a> | <a href="content/services.php" class="new-window" rel="1200">Very width window</a> | <a href="content/services.php" class="new-window" rel="300" rev="900">Very narrow and long window</a></p>
<h3 class="inner-heading cufoned">Window With iFrame Inside</h3>
<p><a href="http://www.idangero.us" class="new-window iframe">Default iFrame window</a> | <a href="http://www.idangero.us" class="new-window iframe" rel="1000" rev="600">Width iFrame window</a></p>
<h3 class="inner-heading cufoned">Window With Image (Photo)</h3>
<p>This is the special window type with image inside. It has awesome image controller which allows you to rotate and scale window with image:</p>
<p><a href="images/demo3.jpg" class="new-window withImg" title="Redfield - Resort in Russia">Width image</a> or <a href="images/demo9.jpg" class="new-window withImg" title="Don River">Narrow image</a></p>

<h3 class="inner-heading cufoned">Opening window</h3>
<p>Device API allows you to open new window in three ways:</p>
<ul>
<li>New content could be opened in new window: like <a href="content/services.php" class="new-window">this</a> or <a href="images/demo3.jpg" class="new-window withImg" title="Redfield - Resort in Russia">this</a>.</li>
<li>New content could be opened in new window and <em><strong>this window will close</strong></em>: <a href="content/services.php" class="new-window closeWindow" rel="1200">click here</a> or <a href="images/demo3.jpg" class="new-window withImg closeWindow" title="Redfield - Resort in Russia">here</a></li>
<li>New content could be opened in this window (works only with window with HTML content): <a href="content/features.php" class="openHere" rel="800" rev="700">try it</a>.</li>
</ul>
