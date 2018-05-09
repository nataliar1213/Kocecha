$("label").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});

 $(function(){ 
     var navMain = $("label");
     navMain.on("click", "a", null, function () {
         navMain.ul('hide');
     });
 });