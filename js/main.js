var $doc = $(document),
    $win = $(window),
    max = $doc.height() - $win.height() - 7500;


$(window).scroll(function () {

    var scroll = $(window).scrollTop();
    var p = $win.scrollTop() / max;

    if(scroll > 0){
        $('#bol1 p').css({
            "border-bottom": "#996D29 5px solid",
        });
    } else{
        $('#bol1 p').css({
            "border-bottom": "",
        });
    }
    if(scroll > 500){
        $('#bol1 p').css({
            "border-bottom": "",
        });
        $('#bol2 p').css({
            "border-bottom": "#996D29 5px solid",
        });
    } else{
        $('#bol2 p').css({
            "border-bottom": "",
        });
    }
});