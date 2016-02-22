typeWriterContainer = [];
typeWriterTimeouts = [];
function typeWriter(a,action){
	a['twID']==null?a['twID']=1:a['twID']=a['twID'];
	action==null?action="clear":action=action;
	if (!a['text'] && action=="clear") throw new Error("TypeWriter argument 'text' is undefined!");
	if (!a['id'] && action=="clear") throw new Error("TypeWriter argument 'id' is undefined!");
	if(!typeWriterTimeouts[a['twID']]) typeWriterTimeouts[a['twID']] = new Array();
	if(action == "clear") {
		clearTwTimeouts();
		document.getElementById(a['id']).innerHTML="";
	}
	if(action == "stop") {
		clearTwTimeouts();
		return
	}
	if(action == "add") {
		clearTwTimeouts();
	}
	a['delay'] = a['time']?a['time']/a['text'].length:(a['delay'] || 50);
	a['id'] = a['id'].indexOf("#")>=0?a['id'] = a['id'].substring(1,a['id'].length):a['id'];
	typeWriterContainer[a['twID']] = document.getElementById(a['id']);
	var newType = new Object();
	for (var $i=0,$j=0,$k=0;$i<a['text'].length;) {
	  var specialChar = a['text'].substr($i+1,1)
	  if (a['text'].substr($i,1)!="[" && (specialChar!="#" || specialChar!="&")) {
		 if(!newType['text'+$j]) {
			 newType['text'+$j]={};
			 newType['text'+$j]['phrase']="";
		 }
		 newType['text'+$j]['phrase'] += a['text'].substr($i,1);
		 numberOfPhrases = $j;
		 $i++
	  }
	  else {
		 if (newType['text'+$j]) $j++;
		 var styledPhrase = a['text'].substr($i).split('[/'+specialChar+']')[0].split(']')[1]
		 var phraseStyleClass = a['text'].substr($i).split(styledPhrase+'[/'+specialChar+']')[0].split('['+specialChar+'')[1].split(']')[0];
 		 newType['text'+$j] = {};
 		 newType['text'+$j]['phrase'] = styledPhrase;
 		 var addionalProperty = specialChar=="#"?'style':'class';
		 newType['text'+$j][addionalProperty] = phraseStyleClass;
 		 var styledLenght = ('['+specialChar+''+phraseStyleClass+']'+styledPhrase+'[/'+specialChar+']').length;
 		 $i+=styledLenght;
		 numberOfPhrases = $j;
 		 $j++;
	  }
	}
	var charDelay = 0,newChar,charExtraDelay = 0
	$j=0;
	for (textPart in newType) {
	   for ($i=0; $i< newType['text'+$j]['phrase'].length;$i++) {
		    newChar = newType['text'+$j]['phrase'].substr($i,1)
			charDelay +=(a['delay']+charExtraDelay);
			charExtraDelay =0;
			switch (newChar){
			 case "\n": typeWriterTimeouts[a['twID']].push(setTimeout('typeWriterContainer['+a['twID']+'].innerHTML+="<br/>"',charDelay));
			 case "\0": {
				 charExtraDelay=a['delay']*2;
			 }
			 break;
			 case "\b": {
				 function removeChar() {
					 if (typeWriterContainer[a['twID']].lastChild.nodeValue == null) {
						typeWriterContainer[a['twID']].removeChild(typeWriterContainer[a['twID']].lastChild);
				 	 }
				 	 else typeWriterContainer[a['twID']].innerHTML=typeWriterContainer[a['twID']].innerHTML.substr(0,typeWriterContainer[a['twID']].innerHTML.length-1);
				 }
				 typeWriterTimeouts[a['twID']].push(setTimeout(removeChar,charDelay));
				 
			 }
			 break;
			 case " ":	typeWriterTimeouts[a['twID']].push(setTimeout('typeWriterContainer['+a['twID']+'].innerHTML+=" "',charDelay));
			 break;
			 case "\t":	{
				 typeWriterTimeouts[a['twID']].push(setTimeout('typeWriterContainer['+a['twID']+'].innerHTML+="&emsp;&emsp;&emsp;"',charDelay));
			 }
			 break;
			 default: 
			   if (newType['text'+$j]['style']) {
					 typeWriterTimeouts[a['twID']].push(setTimeout('typeWriterContainer['+a['twID']+'].innerHTML+=\'<span style="'+newType['text'+$j]['style']+'">'+newChar+'</span>\'',charDelay));
			   }
			   else if (newType['text'+$j]['class']) {
					typeWriterTimeouts[a['twID']].push(setTimeout('typeWriterContainer['+a['twID']+'].innerHTML+=\'<span class="'+newType['text'+$j]['class']+'">'+newChar+'</span>\'',charDelay));
			   }
			   else {
					typeWriterTimeouts[a['twID']].push(setTimeout('typeWriterContainer['+a['twID']+'].innerHTML+="'+newChar+'"',charDelay));
			   }
			 break;
			}
	   }
		$j++;
	}
	function clearTwTimeouts(){
		for (var i=0;i<typeWriterTimeouts[a['twID']].length;i++) {
			window.clearTimeout(typeWriterTimeouts[a['twID']][i])
		}
	}
}
window['typeWriter'] = typeWriter;