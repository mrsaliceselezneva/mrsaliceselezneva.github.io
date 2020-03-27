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
        html += '<td> <img src = "input/page'+ (i + 16) % 16 + '.jpg" height = "100px" height = "170px" onclick = "ChangeImg(' + (i + 16) % 16 + ')"> </td>';
        var img = $(html);
    }
    html += '</tr>';
    
    
    html += "<tr>";
    n += 11 + 16;
    n %= 16;
    html += '<td> <img src = "input/page'+ n + '.jpg" height = "100px" height = "170px" onclick = "ChangeImg(' + n + ')"> </td>';
    var img = $(html);
    
    html += '<td colspan = "3" rowspan = "3"><div id = "main"></div></td>';
    var img = $(html);
    
    n -= 10;
    n += 16;
    n %= 16;
    html += '<td> <img src = "input/page'+ n + '.jpg" height = "100px" height = "170px" onclick = "ChangeImg(' + n + ')"> </td>';
    var img = $(html);
    html += '</tr>';
    
    html += "<tr>";
    n += 9;
    n += 16;
    n %= 16;
    html += '<td> <img src = "input/page'+ n + '.jpg" height = "100px" height = "170px" onclick = "ChangeImg(' + n + ')"> </td>';
    var img = $(html);
    
    n -= 8;
    n += 16;
    n %= 16;
    html += '<td> <img src = "input/page'+ n + '.jpg" height = "100px" height = "170px" onclick = "ChangeImg(' + n + ')"> </td>';
    var img = $(html);
    html += '</tr>';
    
    html += "<tr>";
    n += 7;
    n += 16;
    n %= 16;
    html += '<td> <img src = "input/page'+ n + '.jpg" height = "100px" height = "170px" onclick = "ChangeImg(' + n + ')"> </td>';
    var img = $(html);
    
    n -= 6;
    n += 16;
    n %= 16;
    html += '<td> <img src = "input/page'+ n + '.jpg" height = "100px" height = "170px" onclick = "ChangeImg(' + n + ')"> </td>';
    var img = $(html);
    html += '</tr>';
    
    n += 5;
    n += 16;
    n %= 16;
    html += "<tr>";
    for(var i = n; i > n - 5; --i){
        html += '<td> <img src = "input/page'+ (i + 16) % 16 + '.jpg" height = "100px" height = "170px" onclick = "ChangeImg(' + (i + 16) % 16 + ')"> </td>';
        var img = $(html);
    }
    html += '</tr>';
    
    html += '</table>';
    img.appendTo("#slider");
}




$(document).ready(function() {
    CreateSlider(0);
    CreateImg();
    ChangeImg(iActive);
});


