var config = {
  clientId : "YOUR_CLIENT_ID",
  redirectUri : "http://www.instalker.com/success.php",
  scope : "basic",
  client_secret : "YOUR_CLIENT_SECRET"
}

var instagramLoginUrl = "https://instagram.com/oauth/authorize/?client_id="+config.clientId+"&redirect_uri="+config.redirectUri+"&response_type=token";

$("#instagramLogin").attr("href", instagramLoginUrl);