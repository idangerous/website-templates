<h2 class="window-heading">Skyline Windows</h2>
<p>Skyline comes with two window layouts (HTML/iframe and image), three window colors and three toolbar types:</p>
<h3 class="inner-heading normal">Windows with HTML content</h3>
<ul>
  <li>Open <strong>black</strong> window with <a class="new-window set(black,fancy) " href="content/lorem.php"><strong>Fancy Toolbar</strong></a>, <a class="new-window set(black,ribbon) " href="content/lorem.php"><strong>Ribbon Toolbar</strong></a>, <a class="new-window set(black,os) " href="content/lorem.php"><strong>O.S Toolbar</strong></a></li>
  <li>Open <strong>white</strong> window with <a class="new-window set(white,fancy) " href="content/lorem.php"><strong>Fancy Toolbar</strong></a>, <a class="new-window set(white,ribbon) " href="content/lorem.php"><strong>Ribbon Toolbar</strong></a>, <a class="new-window set(white,os) " href="content/lorem.php"><strong>O.S Toolbar</strong></a></li>
  <li>Open <strong>grey</strong> window with <a class="new-window set(grey,fancy) " href="content/lorem.php"><strong>Fancy Toolbar</strong></a>, <a class="new-window set(grey,ribbon) " href="content/lorem.php"><strong>Ribbon Toolbar</strong></a>, <a class="new-window set(grey,os) " href="content/lorem.php"><strong>O.S Toolbar</strong></a></li>
</ul>
<h3 class="inner-heading normal">Special window layout with Image</h3>
<ul>
  <li>Open <strong>black</strong> Image window with <a class="new-window withImg set(black,fancy) " href="images/demo/demo3.jpg" title="Some Photo"><strong>Fancy Toolbar</strong></a>, <a class="new-window withImg set(black,ribbon) " href="images/demo/demo3.jpg" title="Some Photo"><strong>Ribbon Toolbar</strong></a>, <a class="new-window withImg set(black,os) " href="images/demo/demo3.jpg" title="Some Photo"><strong>O.S Toolbar</strong></a></li>
  <li>Open <strong>white</strong> Image window with <a class="new-window withImg set(white,fancy) " href="images/demo/demo3.jpg" title="Some Photo"><strong>Fancy Toolbar</strong></a>, <a class="new-window withImg set(white,ribbon) " href="images/demo/demo3.jpg" title="Some Photo"><strong>Ribbon Toolbar</strong></a>, <a class="new-window withImg set(white,os) " href="images/demo/demo3.jpg" title="Some Photo"><strong>O.S Toolbar</strong></a></li>
  <li>Open <strong>grey</strong> Image window with <a class="new-window withImg set(grey,fancy) " href="images/demo/demo3.jpg" title="Some Photo"><strong>Fancy Toolbar</strong></a>, <a class="new-window withImg set(grey,ribbon) " href="images/demo/demo3.jpg" title="Some Photo"><strong>Ribbon Toolbar</strong></a>, <a class="new-window withImg set(grey,os) " href="images/demo/demo3.jpg" title="Some Photo"><strong>O.S Toolbar</strong></a></li>
</ul>
<h3 class="inner-heading normal">Window with iFrame inside</h3>
<ul>
  <li>Open <strong>black</strong> iFrame window with <a class="new-window iframe set(black,fancy)" href="http://google.com" title="iFrame Demo"><strong>Fancy Toolbar</strong></a>, <a class="new-window iframe set(black,ribbon)" href="http://google.com" title="iFrame Demo"><strong>Ribbon Toolbar</strong></a>, <a class="new-window iframe set(black,os)" href="http://google.com" title="iFrame Demo"><strong>O.S Toolbar</strong></a></li>
  <li>Open <strong>white</strong> iFrame window with <a class="new-window iframe set(white,fancy)" href="http://google.com" title="iFrame Demo"><strong>Fancy Toolbar</strong></a>, <a class="new-window iframe set(white,ribbon)" href="http://google.com" title="iFrame Demo"><strong>Ribbon Toolbar</strong></a>, <a class="new-window iframe set(white,os)" href="http://google.com" title="iFrame Demo"><strong>O.S Toolbar</strong></a></li>
  <li>Open <strong>grey</strong> iFrame window with <a class="new-window iframe set(grey,fancy)" href="http://google.com" title="iFrame Demo"><strong>Fancy Toolbar</strong></a>, <a class="new-window iframe set(grey,ribbon)" href="http://google.com" title="iFrame Demo"><strong>Ribbon Toolbar</strong></a>, <a class="new-window iframe set(grey,os)" href="http://google.com" title="iFrame Demo"><strong>O.S Toolbar</strong></a></li>
</ul>
<h3 class="inner-heading normal">Opening window</h3>
<p>Skyline API allows you to open new window in three ways:</p>
<ul>
  <li>New content could be opened in new window: like <a href="content/lorem.php" class="new-window">this</a> or <a href="images/demo/demo3.jpg" class="new-window withImg" title="Redfield - Resort in Russia">this</a>.</li>
  <li>New content could be opened in new window and <em><strong>this window will close</strong></em>: <a href="content/lorem.php" class="new-window closeWindow">click here</a> or <a href="images/demo/demo3.jpg" class="new-window withImg closeWindow" title="Redfield - Resort in Russia">here</a></li>
  <li>New content could be opened in this window (works only with window with HTML content): <a href="content/lorem.php" class="openHere" rel="800" rev="300">try it</a>.</li>
</ul>
<p>By adding a special attributes to link we could also to call window with a required size (just specify width and height in px):</p>
<ul>
  <li>Default window size : <a href="content/lorem.php" class="new-window">Open</a></li>
  <li>Very narrow window (300px in width): <a href="content/lorem.php" rel="300" class="new-window">Open</a></li>
  <li>Very width window (1200px in width): <a href="content/lorem.php" rel="1200" class="new-window">Open</a></li>
  <li>Big width and height (1200x1000 px): <a href="content/lorem.php" rel="1200" rev="1000" class="new-window">Open</a></li>
</ul>
