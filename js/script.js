$(document).ready(function(){ 

$( ".s11" ).each(function(index) { 
    $(this).addClass('groupNum' + index);

    let value = $(this).text(); 
    if (index<51){
        $(".groupList").append('<option value="' + value + '">' + value + '</option>');
    };
});

let map = {};
$( ".s3" ).each(function() {
    let value = $(this).text();
    if (map[value] == null){
        map[value] = true;
        $(".dateList").append('<option value="' + value + '">' + value + '</option>');
    }    
});

$(".groupList").change(function(){
    console.clear();

    let together1;
    let together2;
    let together3;
    let together4;
    let together5;
    let together6;


    $('td').removeClass('fourLessonName');
    $('td').removeClass('thirdLessonName');
    $('td').removeClass('secondLessonName');
    $('td').removeClass('youGroupName'); 
    $('tr').removeClass('parent');
    $('td').removeClass('firstLessonName');
    let youGroupName = $(".groupList option:selected").val(); 
    console.log("Выбранная группа: "+youGroupName);
    $('td:contains(' + youGroupName + ')').toggleClass('youGroupName'); 
    $(".youGroupName").parent().addClass('parent'); 

    let column = $(".youGroupName").index(); 
    
    if (column==2){
        $('.parent').next('tr').find("td:eq("+(column-1)+")").addClass('firstLessonName'); // Получаем первую пару для выбранной группы
        if (   $(".firstLessonName").attr('colspan')==3   )   { // Если первая пара общая
            together1 = true;
            $('td').removeClass('firstClassNum');
            $('td').removeClass('firstLessonTeacher');
            let firstClassNum = "";
            let firstLessonTeacher = "";

                firstLessonName = $(".firstLessonName").text();
                $(".firstLessonName").next('td').addClass('firstClassNum'); // получаем аудиторию для первой пары
                firstClassNum = $(".firstClassNum").text();
                $('.firstLessonName').parent().next('tr').find("td:eq("+(column-2)+")").addClass('firstLessonTeacher');
                firstLessonTeacher = $(".firstLessonTeacher").text();
                console.log("Первая пара: "+firstLessonName);
                console.log("Аудитория: "+firstClassNum);
                console.log("Преподаватель: "+firstLessonTeacher);
        } else { // если первая пара по подгруппам
            together1 = false;
            $('td').removeClass('firstLesson_firstSubGroupLessonName'); 
            $('td').removeClass('firstLesson_firstSubGroupClassNum'); 
            $('td').removeClass('firstLesson_secondSubGroupLessonName'); 
            $('td').removeClass('firstLesson_secondSubGroupClassNum'); 
            $('td').removeClass('firstLesson_firstSubGroupTeacher'); 
            $('td').removeClass('firstLesson_secondSubGroupTeacher'); 
            let firstLesson_firstSubGroupLessonName = "";
            let firstLesson_firstSubGroupClassNum = "";
            let firstLesson_secondSubGroupLessonName = "";
            let firstLesson_secondSubGroupClassNum = "";
            let firstLesson_firstSubGroupTeacher = "";
            let firstLesson_secondSubGroupTeacher = "";

            $(".firstLessonName").addClass('firstLesson_firstSubGroupLessonName');
            $(".firstLesson_firstSubGroupLessonName").next('td').addClass('firstLesson_firstSubGroupClassNum');
            $('.firstLesson_firstSubGroupClassNum').next('td').addClass('firstLesson_secondSubGroupLessonName');
            $('.firstLesson_secondSubGroupLessonName').next('td').addClass('firstLesson_secondSubGroupClassNum');
            $('.firstLesson_firstSubGroupLessonName').parent().next('tr').find("td:eq("+(column-2)+")").addClass('firstLesson_firstSubGroupTeacher');
            $('.firstLesson_secondSubGroupLessonName').parent().next('tr').find("td:eq("+(column-1)+")").addClass('firstLesson_secondSubGroupTeacher');
            
            firstLesson_firstSubGroupLessonName = $(".firstLesson_firstSubGroupLessonName").text();
            firstLesson_firstSubGroupClassNum = $(".firstLesson_firstSubGroupClassNum").text();
            firstLesson_firstSubGroupTeacher = $(".firstLesson_firstSubGroupTeacher").text();
            firstLesson_secondSubGroupLessonName = $(".firstLesson_secondSubGroupLessonName").text();
            firstLesson_secondSubGroupClassNum = $(".firstLesson_secondSubGroupClassNum").text();
            firstLesson_secondSubGroupTeacher = $(".firstLesson_secondSubGroupTeacher").text();
            console.log("Первая пара первой подгруппы: "+firstLesson_firstSubGroupLessonName);
            console.log("Аудитория: "+firstLesson_firstSubGroupClassNum); 
            console.log("Преподаватель: "+firstLesson_firstSubGroupTeacher); 
            console.log("Первая пара второй подгруппы: "+firstLesson_secondSubGroupLessonName);
            console.log("Аудитория: "+firstLesson_secondSubGroupClassNum); 
            console.log("Преподаватель: "+firstLesson_secondSubGroupTeacher); 
        };



        if (   $(".firstLessonName").attr('colspan')==3   )   {
            $('.firstLessonTeacher').parent().next('tr').find("td:eq("+(column-1)+")").addClass('secondLessonName'); // 
        } else {
            $('.firstLesson_firstSubGroupTeacher').parent().next('tr').find("td:eq("+(column-1)+")").addClass('secondLessonName'); //
        };


        if (   $(".secondLessonName").attr('colspan')==3   )   { // Если вторая пара общая
            
            $('td').removeClass('secondClassNum');
            $('td').removeClass('secondLessonTeacher');
            let secondClassNum = "";
            let secondLessonTeacher = "";

                secondLessonName = $(".secondLessonName").text();
                $(".secondLessonName").next('td').addClass('secondClassNum'); // получаем аудиторию для второй пары
                secondClassNum = $(".secondClassNum").text();
                $('.secondLessonName').parent().next('tr').find("td:eq("+(column-2)+")").addClass('secondLessonTeacher');
                secondLessonTeacher = $(".secondLessonTeacher").text();
                console.log("Вторая пара: "+secondLessonName);
                console.log("Аудитория: "+secondClassNum);
                console.log("Преподаватель: "+secondLessonTeacher);
        } else { // если вторая пара по подгруппам

            $('td').removeClass('secondLesson_firstSubGroupLessonName'); 
            $('td').removeClass('secondLesson_firstSubGroupClassNum'); 
            $('td').removeClass('secondLesson_secondSubGroupLessonName'); 
            $('td').removeClass('secondLesson_secondSubGroupClassNum'); 
            $('td').removeClass('secondLesson_firstSubGroupTeacher'); 
            $('td').removeClass('secondLesson_secondSubGroupTeacher'); 
            let secondLesson_firstSubGroupLessonName = "";
            let secondLesson_firstSubGroupClassNum = "";
            let secondLesson_secondSubGroupLessonName = "";
            let secondLesson_secondSubGroupClassNum = "";
            let secondLesson_firstSubGroupTeacher = "";
            let secondLesson_secondSubGroupTeacher = "";

            $(".secondLessonName").addClass('secondLesson_firstSubGroupLessonName');
            $(".secondLesson_firstSubGroupLessonName").next('td').addClass('secondLesson_firstSubGroupClassNum');
            $('.secondLesson_firstSubGroupClassNum').next('td').addClass('secondLesson_secondSubGroupLessonName');
            $('.secondLesson_secondSubGroupLessonName').next('td').addClass('secondLesson_secondSubGroupClassNum');
            $('.secondLesson_firstSubGroupLessonName').parent().next('tr').find("td:eq("+(column-2)+")").addClass('secondLesson_firstSubGroupTeacher');
            $('.secondLesson_secondSubGroupLessonName').parent().next('tr').find("td:eq("+(column-1)+")").addClass('secondLesson_secondSubGroupTeacher');
            
            secondLesson_firstSubGroupLessonName = $(".secondLesson_firstSubGroupLessonName").text();
            secondLesson_firstSubGroupClassNum = $(".secondLesson_firstSubGroupClassNum").text();
            secondLesson_firstSubGroupTeacher = $(".secondLesson_firstSubGroupTeacher").text();
            secondLesson_secondSubGroupLessonName = $(".secondLesson_secondSubGroupLessonName").text();
            secondLesson_secondSubGroupClassNum = $(".secondLesson_secondSubGroupClassNum").text();
            secondLesson_secondSubGroupTeacher = $(".secondLesson_secondSubGroupTeacher").text();
            console.log("Вторая пара первой подгруппы: "+secondLesson_firstSubGroupLessonName);
            console.log("Аудитория: "+secondLesson_firstSubGroupClassNum); 
            console.log("Преподаватель: "+secondLesson_firstSubGroupTeacher); 
            console.log("Вторая пара второй подгруппы: "+secondLesson_secondSubGroupLessonName);
            console.log("Аудитория: "+secondLesson_secondSubGroupClassNum); 
            console.log("Преподаватель: "+secondLesson_secondSubGroupTeacher); 
        };

        if (   $(".secondLessonName").attr('colspan')==3   )   {
            $('.secondLessonTeacher').parent().next('tr').find("td:eq("+(column-1)+")").addClass('thirdLessonName'); // 
        } else {
            $('.secondLesson_firstSubGroupTeacher').parent().next('tr').find("td:eq("+(column-1)+")").addClass('thirdLessonName'); //
        };


        if (   $(".thirdLessonName").attr('colspan')==3   )   { // Если третяя пара общая
            
            $('td').removeClass('thirdClassNum');
            $('td').removeClass('thirdLessonTeacher');
            let thirdClassNum = "";
            let thirdLessonTeacher = "";

                thirdLessonName = $(".thirdLessonName").text();
                $(".thirdLessonName").next('td').addClass('thirdClassNum'); // получаем аудиторию для третей пары
                thirdClassNum = $(".thirdClassNum").text();
                $('.thirdLessonName').parent().next('tr').find("td:eq("+(column-2)+")").addClass('thirdLessonTeacher');
                thirdLessonTeacher = $(".thirdLessonTeacher").text();
                console.log("Третяя пара: "+thirdLessonName);
                console.log("Аудитория: "+thirdClassNum);
                console.log("Преподаватель: "+thirdLessonTeacher);
        } else { // если третяя пара по подгруппам

            $('td').removeClass('thirdLesson_firstSubGroupLessonName'); 
            $('td').removeClass('thirdLesson_firstSubGroupClassNum'); 
            $('td').removeClass('thirdLesson_secondSubGroupLessonName'); 
            $('td').removeClass('thirdLesson_secondSubGroupClassNum'); 
            $('td').removeClass('thirdLesson_firstSubGroupTeacher'); 
            $('td').removeClass('thirdLesson_secondSubGroupTeacher'); 
            let thirdLesson_firstSubGroupLessonName = "";
            let thirdLesson_firstSubGroupClassNum = "";
            let thirdLesson_secondSubGroupLessonName = "";
            let thirdLesson_secondSubGroupClassNum = "";
            let thirdLesson_firstSubGroupTeacher = "";
            let thirdLesson_secondSubGroupTeacher = "";

            $(".thirdLessonName").addClass('thirdLesson_firstSubGroupLessonName');
            $(".thirdLesson_firstSubGroupLessonName").next('td').addClass('thirdLesson_firstSubGroupClassNum');
            $('.thirdLesson_firstSubGroupClassNum').next('td').addClass('thirdLesson_secondSubGroupLessonName');
            $('.thirdLesson_secondSubGroupLessonName').next('td').addClass('thirdLesson_secondSubGroupClassNum');
            $('.thirdLesson_firstSubGroupLessonName').parent().next('tr').find("td:eq("+(column-2)+")").addClass('thirdLesson_firstSubGroupTeacher');
            $('.thirdLesson_secondSubGroupLessonName').parent().next('tr').find("td:eq("+(column-1)+")").addClass('thirdLesson_secondSubGroupTeacher');
            
            thirdLesson_firstSubGroupLessonName = $(".thirdLesson_firstSubGroupLessonName").text();
            thirdLesson_firstSubGroupClassNum = $(".thirdLesson_firstSubGroupClassNum").text();
            thirdLesson_firstSubGroupTeacher = $(".thirdLesson_firstSubGroupTeacher").text();
            thirdLesson_secondSubGroupLessonName = $(".thirdLesson_secondSubGroupLessonName").text();
            thirdLesson_secondSubGroupClassNum = $(".thirdLesson_secondSubGroupClassNum").text();
            thirdLesson_secondSubGroupTeacher = $(".thirdLesson_secondSubGroupTeacher").text();
            console.log("Третяя пара первой подгруппы: "+thirdLesson_firstSubGroupLessonName);
            console.log("Аудитория: "+thirdLesson_firstSubGroupClassNum); 
            console.log("Преподаватель: "+thirdLesson_firstSubGroupTeacher); 
            console.log("Третяя пара второй подгруппы: "+thirdLesson_secondSubGroupLessonName);
            console.log("Аудитория: "+thirdLesson_secondSubGroupClassNum); 
            console.log("Преподаватель: "+thirdLesson_secondSubGroupTeacher); 
        };


        if (   $(".thirdLessonName").attr('colspan')==3   )   {
            $('.thirdLessonTeacher').parent().next('tr').find("td:eq("+(column-1)+")").addClass('fourLessonName'); // 
        } else {
            $('.thirdLesson_firstSubGroupTeacher').parent().next('tr').find("td:eq("+(column-1)+")").addClass('fourLessonName'); //
        };


        if (   $(".fourLessonName").attr('colspan')==3   )   { // Если четвертая пара общая
            
            $('td').removeClass('fourClassNum');
            $('td').removeClass('fourLessonTeacher');
            let fourClassNum = "";
            let fourLessonTeacher = "";

                fourLessonName = $(".fourLessonName").text();
                $(".fourLessonName").next('td').addClass('fourClassNum'); // получаем аудиторию для четвертой пары
                fourClassNum = $(".fourClassNum").text();
                $('.fourLessonName').parent().next('tr').find("td:eq("+(column-2)+")").addClass('fourLessonTeacher');
                fourLessonTeacher = $(".fourLessonTeacher").text();
                console.log("Четвертая пара: "+fourLessonName);
                console.log("Аудитория: "+fourClassNum);
                console.log("Преподаватель: "+fourLessonTeacher);
        } else { // если четвертая пара по подгруппам

            $('td').removeClass('fourLesson_firstSubGroupLessonName'); 
            $('td').removeClass('fourLesson_firstSubGroupClassNum'); 
            $('td').removeClass('fourLesson_secondSubGroupLessonName'); 
            $('td').removeClass('fourLesson_secondSubGroupClassNum'); 
            $('td').removeClass('fourLesson_firstSubGroupTeacher'); 
            $('td').removeClass('fourLesson_secondSubGroupTeacher'); 
            let fourLesson_firstSubGroupLessonName = "";
            let fourLesson_firstSubGroupClassNum = "";
            let fourLesson_secondSubGroupLessonName = "";
            let fourLesson_secondSubGroupClassNum = "";
            let fourLesson_firstSubGroupTeacher = "";
            let fourLesson_secondSubGroupTeacher = "";

            $(".fourLessonName").addClass('fourLesson_firstSubGroupLessonName');
            $(".fourLesson_firstSubGroupLessonName").next('td').addClass('fourLesson_firstSubGroupClassNum');
            $('.fourLesson_firstSubGroupClassNum').next('td').addClass('fourLesson_secondSubGroupLessonName');
            $('.fourLesson_secondSubGroupLessonName').next('td').addClass('fourLesson_secondSubGroupClassNum');
            $('.fourLesson_firstSubGroupLessonName').parent().next('tr').find("td:eq("+(column-2)+")").addClass('fourLesson_firstSubGroupTeacher');
            $('.fourLesson_secondSubGroupLessonName').parent().next('tr').find("td:eq("+(column-1)+")").addClass('fourLesson_secondSubGroupTeacher');
            
            fourLesson_firstSubGroupLessonName = $(".fourLesson_firstSubGroupLessonName").text();
            fourLesson_firstSubGroupClassNum = $(".fourLesson_firstSubGroupClassNum").text();
            fourLesson_firstSubGroupTeacher = $(".fourLesson_firstSubGroupTeacher").text();
            fourLesson_secondSubGroupLessonName = $(".fourLesson_secondSubGroupLessonName").text();
            fourLesson_secondSubGroupClassNum = $(".fourLesson_secondSubGroupClassNum").text();
            fourLesson_secondSubGroupTeacher = $(".fourLesson_secondSubGroupTeacher").text();
            console.log("Четвертая пара первой подгруппы: "+fourLesson_firstSubGroupLessonName);
            console.log("Аудитория: "+fourLesson_firstSubGroupClassNum); 
            console.log("Преподаватель: "+fourLesson_firstSubGroupTeacher); 
            console.log("Четвертая пара второй подгруппы: "+fourLesson_secondSubGroupLessonName);
            console.log("Аудитория: "+fourLesson_secondSubGroupClassNum); 
            console.log("Преподаватель: "+fourLesson_secondSubGroupTeacher); 
        };


    }
    















    if (column==3){

       
        $('.parent').next('tr').find("td:eq(6)").addClass('firstLessonName'); // Получаем первую пару для выбранной группы
        
        if (   $(".firstLessonName").attr('colspan')==3   )   { // Если первая пара общая
            together1 = true;
            $('td').removeClass('firstClassNum');
            $('td').removeClass('firstLessonTeacher');
            let firstClassNum = "";
            let firstLessonTeacher = "";

                firstLessonName = $(".firstLessonName").text();
                $(".firstLessonName").next('td').addClass('firstClassNum'); // получаем аудиторию для первой пары
                firstClassNum = $(".firstClassNum").text();
                $('.firstLessonName').parent().next('tr').find("td:eq("+(column-2)+")").addClass('firstLessonTeacher');
                firstLessonTeacher = $(".firstLessonTeacher").text();
                console.log("Первая пара: "+firstLessonName);
                console.log("Аудитория: "+firstClassNum);
                console.log("Преподаватель: "+firstLessonTeacher);
        } else { // если первая пара по подгруппам
            together1 = false;
            $('td').removeClass('firstLesson_firstSubGroupLessonName'); 
            $('td').removeClass('firstLesson_firstSubGroupClassNum'); 
            $('td').removeClass('firstLesson_secondSubGroupLessonName'); 
            $('td').removeClass('firstLesson_secondSubGroupClassNum'); 
            $('td').removeClass('firstLesson_firstSubGroupTeacher'); 
            $('td').removeClass('firstLesson_secondSubGroupTeacher'); 
            let firstLesson_firstSubGroupLessonName = "";
            let firstLesson_firstSubGroupClassNum = "";
            let firstLesson_secondSubGroupLessonName = "";
            let firstLesson_secondSubGroupClassNum = "";
            let firstLesson_firstSubGroupTeacher = "";
            let firstLesson_secondSubGroupTeacher = "";

            $(".firstLessonName").addClass('firstLesson_firstSubGroupLessonName');
            $(".firstLesson_firstSubGroupLessonName").next('td').addClass('firstLesson_firstSubGroupClassNum');
            $('.firstLesson_firstSubGroupClassNum').next('td').addClass('firstLesson_secondSubGroupLessonName');
            $('.firstLesson_secondSubGroupLessonName').next('td').addClass('firstLesson_secondSubGroupClassNum');
            $('.firstLesson_firstSubGroupLessonName').parent().next('tr').find("td:eq("+(column-2)+")").addClass('firstLesson_firstSubGroupTeacher');
            $('.firstLesson_secondSubGroupLessonName').parent().next('tr').find("td:eq("+(column-1)+")").addClass('firstLesson_secondSubGroupTeacher');
            
            firstLesson_firstSubGroupLessonName = $(".firstLesson_firstSubGroupLessonName").text();
            firstLesson_firstSubGroupClassNum = $(".firstLesson_firstSubGroupClassNum").text();
            firstLesson_firstSubGroupTeacher = $(".firstLesson_firstSubGroupTeacher").text();
            firstLesson_secondSubGroupLessonName = $(".firstLesson_secondSubGroupLessonName").text();
            firstLesson_secondSubGroupClassNum = $(".firstLesson_secondSubGroupClassNum").text();
            firstLesson_secondSubGroupTeacher = $(".firstLesson_secondSubGroupTeacher").text();
            console.log("Первая пара первой подгруппы: "+firstLesson_firstSubGroupLessonName);
            console.log("Аудитория: "+firstLesson_firstSubGroupClassNum); 
            console.log("Преподаватель: "+firstLesson_firstSubGroupTeacher); 
            console.log("Первая пара второй подгруппы: "+firstLesson_secondSubGroupLessonName);
            console.log("Аудитория: "+firstLesson_secondSubGroupClassNum); 
            console.log("Преподаватель: "+firstLesson_secondSubGroupTeacher); 
        };



        if (   $(".firstLessonName").attr('colspan')==3   )   {
            $('.firstLessonTeacher').parent().next('tr').find("td:eq("+(column-1)+")").addClass('secondLessonName'); // 
        } else {
            $('.firstLesson_firstSubGroupTeacher').parent().next('tr').find("td:eq("+(column-1)+")").addClass('secondLessonName'); //
        };


        if (   $(".secondLessonName").attr('colspan')==3   )   { // Если вторая пара общая
            
            $('td').removeClass('secondClassNum');
            $('td').removeClass('secondLessonTeacher');
            let secondClassNum = "";
            let secondLessonTeacher = "";

                secondLessonName = $(".secondLessonName").text();
                $(".secondLessonName").next('td').addClass('secondClassNum'); // получаем аудиторию для второй пары
                secondClassNum = $(".secondClassNum").text();
                $('.secondLessonName').parent().next('tr').find("td:eq("+(column-2)+")").addClass('secondLessonTeacher');
                secondLessonTeacher = $(".secondLessonTeacher").text();
                console.log("Вторая пара: "+secondLessonName);
                console.log("Аудитория: "+secondClassNum);
                console.log("Преподаватель: "+secondLessonTeacher);
        } else { // если вторая пара по подгруппам

            $('td').removeClass('secondLesson_firstSubGroupLessonName'); 
            $('td').removeClass('secondLesson_firstSubGroupClassNum'); 
            $('td').removeClass('secondLesson_secondSubGroupLessonName'); 
            $('td').removeClass('secondLesson_secondSubGroupClassNum'); 
            $('td').removeClass('secondLesson_firstSubGroupTeacher'); 
            $('td').removeClass('secondLesson_secondSubGroupTeacher'); 
            let secondLesson_firstSubGroupLessonName = "";
            let secondLesson_firstSubGroupClassNum = "";
            let secondLesson_secondSubGroupLessonName = "";
            let secondLesson_secondSubGroupClassNum = "";
            let secondLesson_firstSubGroupTeacher = "";
            let secondLesson_secondSubGroupTeacher = "";

            $(".secondLessonName").addClass('secondLesson_firstSubGroupLessonName');
            $(".secondLesson_firstSubGroupLessonName").next('td').addClass('secondLesson_firstSubGroupClassNum');
            $('.secondLesson_firstSubGroupClassNum').next('td').addClass('secondLesson_secondSubGroupLessonName');
            $('.secondLesson_secondSubGroupLessonName').next('td').addClass('secondLesson_secondSubGroupClassNum');
            $('.secondLesson_firstSubGroupLessonName').parent().next('tr').find("td:eq("+(column-2)+")").addClass('secondLesson_firstSubGroupTeacher');
            $('.secondLesson_secondSubGroupLessonName').parent().next('tr').find("td:eq("+(column-1)+")").addClass('secondLesson_secondSubGroupTeacher');
            
            secondLesson_firstSubGroupLessonName = $(".secondLesson_firstSubGroupLessonName").text();
            secondLesson_firstSubGroupClassNum = $(".secondLesson_firstSubGroupClassNum").text();
            secondLesson_firstSubGroupTeacher = $(".secondLesson_firstSubGroupTeacher").text();
            secondLesson_secondSubGroupLessonName = $(".secondLesson_secondSubGroupLessonName").text();
            secondLesson_secondSubGroupClassNum = $(".secondLesson_secondSubGroupClassNum").text();
            secondLesson_secondSubGroupTeacher = $(".secondLesson_secondSubGroupTeacher").text();
            console.log("Вторая пара первой подгруппы: "+secondLesson_firstSubGroupLessonName);
            console.log("Аудитория: "+secondLesson_firstSubGroupClassNum); 
            console.log("Преподаватель: "+secondLesson_firstSubGroupTeacher); 
            console.log("Вторая пара второй подгруппы: "+secondLesson_secondSubGroupLessonName);
            console.log("Аудитория: "+secondLesson_secondSubGroupClassNum); 
            console.log("Преподаватель: "+secondLesson_secondSubGroupTeacher); 
        };

        if (   $(".secondLessonName").attr('colspan')==3   )   {
            $('.secondLessonTeacher').parent().next('tr').find("td:eq("+(column-1)+")").addClass('thirdLessonName'); // 
        } else {
            $('.secondLesson_firstSubGroupTeacher').parent().next('tr').find("td:eq("+(column-1)+")").addClass('thirdLessonName'); //
        };


        if (   $(".thirdLessonName").attr('colspan')==3   )   { // Если третяя пара общая
            
            $('td').removeClass('thirdClassNum');
            $('td').removeClass('thirdLessonTeacher');
            let thirdClassNum = "";
            let thirdLessonTeacher = "";

                thirdLessonName = $(".thirdLessonName").text();
                $(".thirdLessonName").next('td').addClass('thirdClassNum'); // получаем аудиторию для третей пары
                thirdClassNum = $(".thirdClassNum").text();
                $('.thirdLessonName').parent().next('tr').find("td:eq("+(column-2)+")").addClass('thirdLessonTeacher');
                thirdLessonTeacher = $(".thirdLessonTeacher").text();
                console.log("Третяя пара: "+thirdLessonName);
                console.log("Аудитория: "+thirdClassNum);
                console.log("Преподаватель: "+thirdLessonTeacher);
        } else { // если третяя пара по подгруппам

            $('td').removeClass('thirdLesson_firstSubGroupLessonName'); 
            $('td').removeClass('thirdLesson_firstSubGroupClassNum'); 
            $('td').removeClass('thirdLesson_secondSubGroupLessonName'); 
            $('td').removeClass('thirdLesson_secondSubGroupClassNum'); 
            $('td').removeClass('thirdLesson_firstSubGroupTeacher'); 
            $('td').removeClass('thirdLesson_secondSubGroupTeacher'); 
            let thirdLesson_firstSubGroupLessonName = "";
            let thirdLesson_firstSubGroupClassNum = "";
            let thirdLesson_secondSubGroupLessonName = "";
            let thirdLesson_secondSubGroupClassNum = "";
            let thirdLesson_firstSubGroupTeacher = "";
            let thirdLesson_secondSubGroupTeacher = "";

            $(".thirdLessonName").addClass('thirdLesson_firstSubGroupLessonName');
            $(".thirdLesson_firstSubGroupLessonName").next('td').addClass('thirdLesson_firstSubGroupClassNum');
            $('.thirdLesson_firstSubGroupClassNum').next('td').addClass('thirdLesson_secondSubGroupLessonName');
            $('.thirdLesson_secondSubGroupLessonName').next('td').addClass('thirdLesson_secondSubGroupClassNum');
            $('.thirdLesson_firstSubGroupLessonName').parent().next('tr').find("td:eq("+(column-2)+")").addClass('thirdLesson_firstSubGroupTeacher');
            $('.thirdLesson_secondSubGroupLessonName').parent().next('tr').find("td:eq("+(column-1)+")").addClass('thirdLesson_secondSubGroupTeacher');
            
            thirdLesson_firstSubGroupLessonName = $(".thirdLesson_firstSubGroupLessonName").text();
            thirdLesson_firstSubGroupClassNum = $(".thirdLesson_firstSubGroupClassNum").text();
            thirdLesson_firstSubGroupTeacher = $(".thirdLesson_firstSubGroupTeacher").text();
            thirdLesson_secondSubGroupLessonName = $(".thirdLesson_secondSubGroupLessonName").text();
            thirdLesson_secondSubGroupClassNum = $(".thirdLesson_secondSubGroupClassNum").text();
            thirdLesson_secondSubGroupTeacher = $(".thirdLesson_secondSubGroupTeacher").text();
            console.log("Третяя пара первой подгруппы: "+thirdLesson_firstSubGroupLessonName);
            console.log("Аудитория: "+thirdLesson_firstSubGroupClassNum); 
            console.log("Преподаватель: "+thirdLesson_firstSubGroupTeacher); 
            console.log("Третяя пара второй подгруппы: "+thirdLesson_secondSubGroupLessonName);
            console.log("Аудитория: "+thirdLesson_secondSubGroupClassNum); 
            console.log("Преподаватель: "+thirdLesson_secondSubGroupTeacher); 
        };


        if (   $(".thirdLessonName").attr('colspan')==3   )   {
            $('.thirdLessonTeacher').parent().next('tr').find("td:eq("+(column-1)+")").addClass('fourLessonName'); // 
        } else {
            $('.thirdLesson_firstSubGroupTeacher').parent().next('tr').find("td:eq("+(column-1)+")").addClass('fourLessonName'); //
        };


        if (   $(".fourLessonName").attr('colspan')==3   )   { // Если четвертая пара общая
            
            $('td').removeClass('fourClassNum');
            $('td').removeClass('fourLessonTeacher');
            let fourClassNum = "";
            let fourLessonTeacher = "";

                fourLessonName = $(".fourLessonName").text();
                $(".fourLessonName").next('td').addClass('fourClassNum'); // получаем аудиторию для четвертой пары
                fourClassNum = $(".fourClassNum").text();
                $('.fourLessonName').parent().next('tr').find("td:eq("+(column-2)+")").addClass('fourLessonTeacher');
                fourLessonTeacher = $(".fourLessonTeacher").text();
                console.log("Четвертая пара: "+fourLessonName);
                console.log("Аудитория: "+fourClassNum);
                console.log("Преподаватель: "+fourLessonTeacher);
        } else { // если четвертая пара по подгруппам

            $('td').removeClass('fourLesson_firstSubGroupLessonName'); 
            $('td').removeClass('fourLesson_firstSubGroupClassNum'); 
            $('td').removeClass('fourLesson_secondSubGroupLessonName'); 
            $('td').removeClass('fourLesson_secondSubGroupClassNum'); 
            $('td').removeClass('fourLesson_firstSubGroupTeacher'); 
            $('td').removeClass('fourLesson_secondSubGroupTeacher'); 
            let fourLesson_firstSubGroupLessonName = "";
            let fourLesson_firstSubGroupClassNum = "";
            let fourLesson_secondSubGroupLessonName = "";
            let fourLesson_secondSubGroupClassNum = "";
            let fourLesson_firstSubGroupTeacher = "";
            let fourLesson_secondSubGroupTeacher = "";

            $(".fourLessonName").addClass('fourLesson_firstSubGroupLessonName');
            $(".fourLesson_firstSubGroupLessonName").next('td').addClass('fourLesson_firstSubGroupClassNum');
            $('.fourLesson_firstSubGroupClassNum').next('td').addClass('fourLesson_secondSubGroupLessonName');
            $('.fourLesson_secondSubGroupLessonName').next('td').addClass('fourLesson_secondSubGroupClassNum');
            $('.fourLesson_firstSubGroupLessonName').parent().next('tr').find("td:eq("+(column-2)+")").addClass('fourLesson_firstSubGroupTeacher');
            $('.fourLesson_secondSubGroupLessonName').parent().next('tr').find("td:eq("+(column-1)+")").addClass('fourLesson_secondSubGroupTeacher');
            
            fourLesson_firstSubGroupLessonName = $(".fourLesson_firstSubGroupLessonName").text();
            fourLesson_firstSubGroupClassNum = $(".fourLesson_firstSubGroupClassNum").text();
            fourLesson_firstSubGroupTeacher = $(".fourLesson_firstSubGroupTeacher").text();
            fourLesson_secondSubGroupLessonName = $(".fourLesson_secondSubGroupLessonName").text();
            fourLesson_secondSubGroupClassNum = $(".fourLesson_secondSubGroupClassNum").text();
            fourLesson_secondSubGroupTeacher = $(".fourLesson_secondSubGroupTeacher").text();
            console.log("Четвертая пара первой подгруппы: "+fourLesson_firstSubGroupLessonName);
            console.log("Аудитория: "+fourLesson_firstSubGroupClassNum); 
            console.log("Преподаватель: "+fourLesson_firstSubGroupTeacher); 
            console.log("Четвертая пара второй подгруппы: "+fourLesson_secondSubGroupLessonName);
            console.log("Аудитория: "+fourLesson_secondSubGroupClassNum); 
            console.log("Преподаватель: "+fourLesson_secondSubGroupTeacher); 
        };


    }












    

    
});

let th = 0;
$(".theme").click(function(){ 
    $(".body").toggleClass("black-theme");
    th++;
    if (th & 1){
        $(this).html("Отключить темную тему");
    } else {
        $(this).html("Включить темную тему");
    }
});

});
