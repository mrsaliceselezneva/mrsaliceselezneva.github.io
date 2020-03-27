
function YaCalendar(el){
    var count = 31;
    var result = "";
    var month = (el.value<8)? el.value : el.value * 1+1;

    if (month % 2 == 0) count = 30;
    else if (month == 2) count = 28;

    for (var i = 1; i <= count; i++)
    {
        result += "<span class= " +
                ((i % 7 == 6 || i % 7 == 0)? "'bg-light-new'>":">") +
                ((i < 10)?"&nbsp;&nbsp;":"") + i + "</span>"
        if (i % 7 == 0)
            result += "<br>";
    }
    
    $('#calc').html(result);
}