$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hellow there!</li>")
    $("ul#user").children("li").first().click(function() {
    $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
    $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>bye felicia!</li>")
    $("ul#user").children("li").first().click(function() {
    $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
    $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>You stop!</li>")
    $("ul#user").children("li").first().click(function() {
    $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
    $(this).remove();
    });
  });
});
