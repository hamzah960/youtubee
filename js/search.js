$(document).ready(function(){

    $("#search-filter-icon").click(function(){
        $(".filter-column").slideToggle('slow');
    });

    $("input:checkbox").click(function(){
        var box = $(this);
        var name = box.attr("name");
        if (box.is(':checked')) {
            var group = "input:checkbox[name='" + name + "']";
            $(group).prop("checked", false);
            $(box).prop("checked", true);
        }
    });

});
