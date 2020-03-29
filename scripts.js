var countDiv = 10;
var countImg = 16;
var iActive = 0;
var iActiveSlide = 0;
var path = "input/page";
var volImg = 10;
var volSlider = 200;
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
                $(this).fadeOut(volImg * j, function() {
                $(this).css('background-image', 'url("' + path + iActive + '.jpg")');
                $(this).fadeIn(volImg * j);
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
        html += '<td> <div id = "cell' + (i + 16) % 16 + ' class = "sliderImg"> </td>';
        var img = $(html);
    }
    html += '</tr>';


    html += "<tr>";
    n += 11 + 16;
    n %= 16;
    html += '<td> <div id = "cell' + (n + 16) % 16 + ' class = "sliderImg"> </td>';
    var img = $(html);

    html += '<td colspan = "3" rowspan = "3"><div id = "main"></div></td>';
    var img = $(html);

    n -= 10;
    n += 16;
    n %= 16;
    html += '<td> <div id = "cell' + (n + 16) % 16 + ' class = "sliderImg"> </td>';
    var img = $(html);
    html += '</tr>';

    html += "<tr>";
    n += 9;
    n += 16;
    n %= 16;
    html += '<td> <div id = "cell' + (n + 16) % 16 + ' class = "sliderImg"> </td>';
    var img = $(html);

    n -= 8;
    n += 16;
    n %= 16;
    html += '<td> <div id = "cell' + (n + 16) % 16 + ' class = "sliderImg"> </td>';
    var img = $(html);
    html += '</tr>';

    html += "<tr>";
    n += 7;
    n += 16;
    n %= 16;
    html += '<td> <div id = "cell' + (n + 16) % 16 + ' class = "sliderImg"> </td>';
    var img = $(html);

    n -= 6;
    n += 16;
    n %= 16;
    html += '<td> <div id = "cell' + (n + 16) % 16 + ' class = "sliderImg"> </td>';
    var img = $(html);
    html += '</tr>';

    n += 5;
    n += 16;
    n %= 16;
    html += "<tr>";
    for(var i = n; i > n - 5; --i){
        html += '<td> <div id = "cell' + (i + 16) % 16 + ' class = "sliderImg"> </td>';
        var img = $(html);
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
                    $(this).fadeOut(volSlider + n * 10, function() {
                    $(this).html('<img src = "input/page' + n + '.jpg" width "170px" height = "100px" onclick = "ChangeImg(' + n + ')">');
                    $(this).fadeIn(volSlider + n * 10);
                });
            });
       }
    }

}

$(document).ready(function() {
    CreateSlider(0);
    for(var i = 0; i < 16; ++i){
        ChangeCell(i, i);
    }
    num = 15;
    CreateImg();
    ChangeImg(iActive);
});

setInterval(function(){
    var v = 0;
     for(var i = num; i < num + 16; ++i){
        ChangeCell(v, (i + 16) % 16);
         ++v;
    }
    --num;
    num = (num + 16) % 16;
}, 5000);


