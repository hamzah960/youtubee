$(document).ready(function(){                      /* عندما يتم تحميل الملف نفذ الدوال التالية */

    /*دالة الاكتيف للازرار*/ 
    $(".first-index-element").addClass("active");
    $(".nav-item").click(function(){                   /*عند الضغط على العنصر نفذ الدالة */
        $(".nav-item").removeClass("active");          /*قم بازالة الصنف اكتيف من جميع الناف ايتم */
        $(this).addClass("active");                    /*طبق الصنف اكتيف على العنصر المضغوط عليه */
    });

    /* دالة فتح واغلاق القائمة الجانبية*/ 
    /*                                                         طريقتي الاولى
    $("#toggler").click(function(){
        $(".sidebar").toggle();                            نعطي الخاصية توجل    display:none نعطي العنصر 
    });
    */
   /*الطريقة الثانية */

   $("#toggler").click(function(){
       $("#wrap").toggleClass('toglled');

       var right = $(".sidebar").css("right");
       if (right == '0px')
        {  
            $(".sidebar").css({'right': '-17rem'});
            $(".layer").fadeOut();
        }
        else {
            $(".sidebar").css({'right': '0'});
            $(".layer").fadeIn();
        }
   });

   /*دالة الطبقة السوداء عند فتح القائمة الجانبية */
   $('.layer').click(function(){
        $(".sidebar").css({'right': '-17rem'});
        $(".layer").fadeOut();
   });

   
   /*دالة ايقونة البحث عند تصغير الصفحة */
   $(".search-icon").click(function(){
       $(".search-input").slideToggle("slow");
 
   });


});