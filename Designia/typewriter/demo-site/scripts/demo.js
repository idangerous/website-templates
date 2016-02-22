var carriage1;
var carriage2;
var image1 = new Image();
image1.src = "images/l1.png";
var image2 = new Image();
image2.src = "images/l2.png";
window.onload = function(){
	var toType = "Hello, my name is [#color:#777;font-weight:bold;]TypeWriter![/#]\n";
    toType += "I'm very cool\0\0\b\b\b\b\b\b\b\b\bcool and funny)\n";
    toType += "I can be [#color:#000;]Black[/#] or [#color:#f00]Red[/#] \n";
    toType += "... or like ";
	toType += "a [#color:#f00]R[/#][#color:#ff7200]A[/#][#color:#eddf00]I[/#][#color:#22ce00]N[/#][#color:#04b3ed]B[/#][#color:#046ced]O[/#][#color:#9d04ed]W[/#] \n";
	toType += "Sometimes i'm [#font-weight:bold]Bold[/#] or [#font-style:italic]Italic[/#]\n";
	toType += "TypeWriter :-P\0\0\b\b\b:-)";
	
	var conversation = "[#color:#da7d04]Mike:[/#] Hello! What is your name?\n";
	conversation += "[#color:#0565af]TypeWriter:[/#] Hi! My name is TypeWriter\n";
	conversation += "[#color:#da7d04]Mike:[/#] Who are you?\n";
	conversation += "[#color:#0565af]TypeWriter:[/#] I'm a premium JavaScript\n";
	conversation += "[#color:#da7d04]Mike:[/#] Who is your author?\n";
	conversation += "[#color:#0565af]TypeWriter:[/#] iDangero.us - www.idangero.us\n";
	conversation += "[#color:#da7d04]Mike:[/#] And how are you?\n";
	conversation += "[#color:#0565af]TypeWriter:[/#] Ooh, i feel great!...Yep, great!\0\0\0\0\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\0\0\0 I'm fine, thanks!";
	
	var faqs = new Array();
	faqs[0] = "TypeWriter is a premium JavaScript which allows you to print any phrases. It can be used in any purpose, such as welcome message, FAQ, conversation, advertisement, AutoFill etc.";
	faqs[1] = "iDangero.us - it's an e-shop specialized in software selling used for web-sites creation.";
	faqs[2] = "Phasellus consectetur consequat augue, id pretium turpis commodo eget. Phasellus quis tellus sed erat pharetra congue in vitae odio. Curabitur egestas dignissim laoreet. Quisque suscipit est in ligula ornare consectetur.";
	faqs[3] = "Maecenas vitae leo tellus. Maecenas urna leo, laoreet elementum dictum sit amet, lobortis sed tortor. Curabitur eu tempus justo. Cras vulputate elit sit amet mi laoreet congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";
	
	var fun = "[&f1]L[/&]E[&f2]T[/&]'S\n";
	fun += "[&f2]F[/&]U[&f1]N[/&]\0\b\b\b[&f2]R[/&]O[&f1]C[/&]K\0\b\b\b\b[&f2]D[/&]A[&f1]N[/&]C[&f2]E[/&]";
	document.getElementById('print-welcome').onclick = function() {
		typeWriter({twID:123,text:toType,id:'welcome-message',delay:100})
	}
	document.getElementById('stop-welcome').onclick = function() {
		typeWriter({twID:123},"stop")
	}
	document.getElementById('add-welcome').onclick = function() {
		typeWriter({twID:123,text:" Hello World ",id:'welcome-message',delay:100},"add")
	}
	document.getElementById('start-conversation').onclick = function() {
		typeWriter({twID:283,text:conversation,id:'conversation',delay:40})
	}
	document.getElementById('start-fun').onclick = function() {
		typeWriter({twID:2283,text:fun,id:'fun',delay:200},"clear")
	}
	document.getElementById('question0').onclick = function() {typeWriter({twID:0,text:faqs[0],id:'faq0',delay:15})}
	document.getElementById('question1').onclick = function() {typeWriter({twID:1,text:faqs[1],id:'faq1',delay:15})}
	document.getElementById('question2').onclick = function() {typeWriter({twID:2,text:faqs[2],id:'faq2',delay:15})}
	document.getElementById('question3').onclick = function() {typeWriter({twID:3,text:faqs[3],id:'faq3',delay:15})}
	carriage1 = document.getElementById("carriage1");
	carriage2 = document.getElementById("carriage2");
	setInterval('carriage1.style.visibility="hidden";setTimeout(\'carriage1.style.visibility="visible"\',500)',1000)
	setInterval('carriage2.style.visibility="hidden";setTimeout(\'carriage2.style.visibility="visible"\',500)',1000)
}
