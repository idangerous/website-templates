<?php
session_start();
if(!((($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest')||defined('evolette')) && $_SESSION['authorized']===true)) exit();
?>

<h2 class="content-heading h-help">Evolette</h2>
<div class="pane l-2third l-first">
  <h3 class="pane-title">About Evolette</h3>
  <div class="pane-inner">
    <p><strong>Evolette</strong> is the premium Ajax based Administration Backend template. It's only template, it has not real CMS functionality. It's intended to use as a CMS interface.</p>
    <p>The main advantage of this template is that it uses only one page. All content loaded on the fly. Template is fully animated without the use of Flash technology. Smooth and good looking animation and Ajax features of this template are realized by using the JavaScript jQuery library.</p>
   <p><strong>Evolette</strong> has very simple, interesting and powerful API with a lot of features.</p> 
   <p>With this template you'll also get full PDF documentation and layered PSD files.</p>
  </div>
</div>
<div class="pane l-third l-last">
  <h3 class="pane-title">Evolette Features</h3>
  <div class="pane-inner">
    
    <p align="center"><span class="bb-button" onclick="$('#ev-feat').show();$('#ev-typo').hide()">Evolette Features</span></p>
    <p align="center"><span class="bb-button" onclick="$('#ev-typo').show();$('#ev-feat').hide();contentResize()">Evolette Typography</span></p>
  </div>
</div>
<div class="clear"></div>
<?php include('ev-feat.php'); ?>
<?php include('ev-typography.php'); ?>

