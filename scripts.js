var countDiv = 10;
var countImg = 16;
var iActive = 0;
var iActiveSlide = 0;
var path = "input/page";
var vol = 10;
var num = 0;

function CreateImg() {

        for(var j = 0; j < countDiv; ++j){
            for(var i = 0; i < countDiv; ++i){
                var html = "<div class = 'img" + i + "'></div>";
                var img = $(html);
                img.css("background-position", "-" + i * 510 / countDiv + "px -" + j * 300 / countDiv + "px");
                img.css("width", 510 / countDiv + "px"); //$('#main').css('width');
                img.css("height", 300 / countDiv + "px"); //$('#main').css('width');
                img.appendTo("#main");
            }
        }

}

function ChangeImg(a) {

        if (a != -1)
            iActive = a;
        var j = 1;
        $("#main div").each(function() {
            ++j;
                $(this).fadeOut(vol * j, function() {
                $(this).css('background-image', 'url("' + path + iActive + '.jpg")');
                $(this).fadeIn(vol * j);
            });
        });

}


function LeftImg(){
    --iActive;
    if (iActive < 0){
        iActive = countImg - 1;
    }
    ChangeImg(-1);
}

function RightImg(){
    ++iActive;
    if (iActive >= countImg){
        iActive = 0;
    }
    ChangeImg(-1);
}

function CreateSlider(a) {
    var html = "<table><tr>";
    a %= 16;
    var n = a;
    for(var i = a; i < a + 5; ++i){
        n = i;
        var vhtml = '<td> <div id = "cell' + i + '" class = "cell' + i + '"> </td>';
        html += vhtml;
        var img = $(vhtml);
        img.css("width", 170 + "px"); 
        img.css("height", 100 + "px"); 
        img.appendTo("#slider");
    }
    html += '</tr>';
    
    html += '</table>';
    img.appendTo("#slider");
}


function ChangeCell(a, n) {
    var sl = document.getElementById("slider");
    var slChildren = sl.querySelectorAll("div");

    for(var i = 0; i < slChildren.length; ++i){
       if((slChildren[i].id).indexOf("cell" + a) == 0){
            var j = 1;
            $(slChildren[i]).each(function() {
                ++j;
                    $(this).fadeOut(vol * j, function() {
                    $(this).css('background-image', 'url("' + path + n + '.jpg")');
                    $(this).fadeIn(vol * j);
                });
            });
       }
    }

}

$(document).ready(function() {
    CreateSlider(0);
    for(var i = 0; i < 5; ++i){
        ChangeCell(i, i);
    }
    num = 1;
});

setInterval(function(){
    var v = 0;
     for(var i = num; i < num + 5; ++i){
        ChangeCell((i + 5) % 5, v);
         ++v;
    }
    ++num;
    num %= 5;
   }, 5000);







