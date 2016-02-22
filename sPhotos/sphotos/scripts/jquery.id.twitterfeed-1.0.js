/*
iDangero.us jQuery Twitter Feed
------------------------
Version - 1.0
------------------------
More information on http://www.idangero.us/
*/
(function($) {
	$.fn.idTwitter = function(a) {
		var tweetContainer = this;
		$.getJSON("http://api.twitter.com/1/statuses/user_timeline.json?screen_name="+a.username+"&count="+a.numberOfTweets+"&include_entities=true&include_rts=true&callback=?",
		function(tweetData){
			$.each(tweetData, function(i,tweet) {
				var tweetDate = tweet.created_at.substr(0,20);
				var tweetText = tweet.text;
				for (var i =0; i<tweet.entities.user_mentions.length; i++) {
					var mentioned = tweet.entities.user_mentions[i].screen_name;
					tweetText = tweetText.replace('@'+mentioned,'<a href="http://twitter.com/'+mentioned+'">@'+mentioned+'</a>')	
				}
				for (var i =0; i<tweet.entities.urls.length; i++) {
					var uRL = tweet.entities.urls[i].url;
					tweetText = tweetText.replace(uRL,'<a href="'+uRL+'">'+uRL+'</a>')	
				}
				var readyTweet = a.tweetFormat.replace(/%username/g,a.username)
					readyTweet = readyTweet.replace(/%tweetDate/g,tweetDate)
					readyTweet = readyTweet.replace(/%tweetText/g,tweetText)
				tweetContainer.append(readyTweet);
			})
		})
	}
})(jQuery)