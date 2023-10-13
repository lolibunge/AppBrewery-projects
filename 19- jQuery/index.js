$("a").attr("href", "https://www.yahoo.com");

$("button").click(function(){
  $("h1").css("color","purple");
});

$(document).keypress(function(event){
  $("h1").text(event.key);
});
