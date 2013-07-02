$(function() {
    $(".urlize").each(function(i, elm) {
        var url = $(elm).text();
        $(elm).text("");
        $("<a>").attr("href", url).text(url).appendTo($(elm));
    });

})