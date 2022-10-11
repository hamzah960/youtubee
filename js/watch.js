
/*تنسيق زر عرض المزيد*/

$(document).ready(function (){
    /*$("#myBtn").on("click", function(){                      الطريقة الاولى لزر عرض المزيد
        read();
    });
    */
   /* برمجة زر الردود */
   $(".replay").click(function(){
        $(this).parents("div.row").next("div.card").toggle();
   });
});

var dots = document.getElementById("dots");
var moreText = document.getElementById("more");
var btnText = document.getElementById("myBtn");

function read() {  
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "عرض المزيد";
        moreText.style.display = "none";
    }else {
        dots.style.display = "none";
        btnText.innerHTML = "عرض عناصر اقل";
        moreText.style.display = "inline";
    }
}
/*الطريقة الثانية لزر عرض المزيد */
btnText.addEventListener('click', function(){
    read();
});

