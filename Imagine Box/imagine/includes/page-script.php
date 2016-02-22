<script type="text/javascript">
$(function newPage(){
	$(".blink").hover(
		function(){$(this).fadeTo(200,0.5)},
		function(){$(this).fadeTo(200,1)}
	)
	$("a.open").click(function(e){
		e.preventDefault()
		loadContent($(this).attr("href"))	
	})
	$("a.button,input[type=submit],input[type=button}").wrap("<span class='button-l'><span class='button-m'></span></span>")
	/*----------Popup Windows----------*/
	$("#p-layer").click(function(){
		closePopup();
	});
	$("a.pop-image").click(
		function(e){
			popUp($(this).attr("href"),$(this).attr("title"),$(this).attr("rel"),$(this).attr("rev"),'image')
			e.preventDefault();
	})
	$("a.pop-content").click(
	function(e){
		popUp($(this).attr("href"),$(this).attr("title"),$(this).attr("rel"),$(this).attr("rev"),'content')
		e.preventDefault();
	})
	$("a.iframe").click(
	function(e){
		popUp($(this).attr("href"),$(this).attr("title"),$(this).attr("rel"),$(this).attr("rev"),'iframe')
		e.preventDefault();
	})
})
</script>

