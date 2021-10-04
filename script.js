numColour = 6

/*localstorage check*/
lsCheck()
function lsCheck() {
    if (!(localStorage.hasOwnProperty("theme"))) {
        localStorage.theme = 0
        addTop();
        changecolour(false);
    } else {
        theme = localStorage.getItem("theme")
        if (!(/^\d+$/.test(theme) && theme.length > 0)) {
            localStorage.theme = 0
            addTop();
            changecolour(false);
        } else {
            addTop();
            changecolour(false);
        }
    }

}

// clear sessionstorage
sessionStorage.clear()

/*adding top section*/


function addTop() {
    /*check for main*/
    if($('main').length != 1){
        location.href='index.html'
        return
    }

    /*add top section*/
    $(`<!-- logo --><div class=" d-none d-sm-inline-flex flex-nowrap my-4 mx-0"><button class="pl-4 bg-transparent theLogo pr-2 col-2"><img src="media/logo/main.png" style="object-fit: contain; max-width: 100%;" alt="logo"></button><a class="p-0 homeLink my-auto col-10" href="index.html">Hanabi.co | Your Virtual Companion</a></div><!-- Navbar --> <nav class="navbar d-flex bg-transparent navbar-expand-sm navbar p-0 mx-auto mt-3 col-lg-8 col-11 ">
    <div class="d-flex navbar-brand m-0 col-10 d-sm-none">
    <button class="bg-transparent theLogo mb-1 pr-2 col-3"><img src="media/logo/main.png" style="object-fit: contain; max-width: 100%;" alt="logo"></button>
    <a class="p-0 my-auto homeLink col-7" href="index.html">Hanabi.co</a></div>
    <button class="navbar-toggler p-0 mb-2 col-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation"> <img class="my-auto aSVG p-0" src="media/icon/menudot.svg" style="max-height:30px" alt="logo"> </button> <div class="collapse navbar-collapse p-0" id="navbarScroll"> <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll col-12 d-flex justify-content-between" style="--bs-scroll-height: 100px;"> <li class="nav-item"> <a class="nav-link active" aria-current="page" id="indexhtml" href="index.html">Home</a> </li> <li class="nav-item"> <a class="nav-link active" aria-current="page" id="therapyhtml" href="therapy.html">Therapy</a> </li> <li class="nav-item"> <a class="nav-link active" aria-current="page" id="shophtml" href="shop.html">Shop</a> </li> <li class="nav-item"> <a class="nav-link active" aria-current="page" id="contacthtml" href="contact.html">Contact</a> </li> <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> About </a> <ul class="dropdown-menu navDrop py-lg-2 p-0" aria-labelledby="navbarScrollingDropdown"> <li><a class="nav-link dropdown-item" id="abouthtml" href="about.html">About</a></li> <li><hr class="nav-link dropdown-divider py-lg-2 p-0 my-1"></li> <li><a class="nav-link dropdown-item" id="hiringhtml" href="hiring.html">We\'re Hiring</a></li> <li><hr class="nav-link dropdown-divider py-lg-2 p-0 my-1"></li> <li><a class="nav-link dropdown-item" id="faqhtml" href="faq.html">FAQ</a></li><li><hr class="nav-link dropdown-divider py-lg-2 p-0 my-1"></li> <li><a class="nav-link dropdown-item" id="tchtml" href="tc.html">T&C</a></li> </ul> </li> </div> </div> </nav>`).insertBefore("main");

    /*colour correct item*/
    var page = $('main').attr('id');

    isOther = true

    $(".nav-link.active").each(function() { 
        if(page == $(this).attr('id').slice(0, -4)){
            $(this).attr('style', 'color: var(--clrStrong)');
            isOther = false
        }
     });

     if (isOther){
        $(".nav-link.dropdown-item").each(function() { 
            if(page == $(this).attr('id').slice(0, -4)){
                /* change other */
                $(".nav-link.dropdown-toggle").attr('style', 'color: var(--clrStrong)');
                $(".nav-link.dropdown-toggle").text($(this).text());

                /* change popup menu */
                if($( ".navDrop li" ).last().text() == $(this).text()){
                    $(this).parent().prev().remove()
                }
                else{
                    $(this).parent().next().remove()
                }
                $(this).parent().remove()


            }
         });
    }
}

// timing clicked
$(document).on('click', '.theLogo', function(e){
    changecolour(true);
})

function changecolour(reallyDude){
    if(reallyDude){
        localStorage.theme = Math.floor(Math.random() * numColour)
    }
    if(localStorage.theme == '1'){ /* dark mode*/
        ivebeencheckingmyList=['#000', '#FFF' , '#C4F3F3', '#F99C15', '#FFCE4C', '#6E6C80', '#D9D9D9']
        $("<style>")
            .prop("type", "text/css")
            .html("\
            #formMatch, .result {\
                -webkit-filter: invert(100%);\
                filter: invert(100%);\
            }\
            label, .readyToGo, .inResult {\
                -webkit-filter: invert(100%);\
                filter: invert(100%);\
            }\
            .aSVG {\
                filter: invert(100%);\
            }\
            ")
            .appendTo("head")
            setColours(ivebeencheckingmyList, reallyDude)
    }
    else if(localStorage.theme == '2'){ /* galaxy-ish mania-ish*/
        ivebeencheckingmyList=['#140226', '#f5bcda' , '#f2e8a5', '#474585', '#5337b8', '#6E6C80', '#827a58']
        $("<style>")
            .prop("type", "text/css")
            .html("\
            #formMatch, .result {\
                filter: invert(90%) hue-rotate(80deg) contrast(150%)\
            }\
            label, .readyToGo, .inResult {\
                filter: invert(90%) hue-rotate(-80deg);\
            }\
            .aSVG {\
                filter: invert(81%) sepia(9%) saturate(965%) hue-rotate(281deg) brightness(100%) contrast(93%);\
            }\
            ")
            .appendTo("head")
            setColours(ivebeencheckingmyList, reallyDude)
    }
    else if(localStorage.theme == '3'){ /* sage */
        ivebeencheckingmyList=['#BED2C7', '#384031', '#78887D', '#8c916a', '#424530', '#a3b097', '#678072']
        $("<style>")
            .prop("type", "text/css")
            .html("\
            #formMatch, .result {\
                filter: invert(10%) saturate(50%) hue-rotate(120deg)\
            }\
            label, .readyToGo, .inResult {\
                filter: invert(10%) saturate(200%) hue-rotate(-120deg);\
            }\
            .aSVG {\
                filter: invert(19%) sepia(9%) saturate(1136%) hue-rotate(49deg) brightness(101%) contrast(86%);\
            }\
            ")
            .appendTo("head")
            setColours(ivebeencheckingmyList, reallyDude)
    }
    else if(localStorage.theme == '4'){ /* vscode */
        ivebeencheckingmyList=['#060621', '#1FAF45', '#6487CC', '#ab395b', '#770811', '#ddbb88', '#25375daa']
        $("<style>")
            .prop("type", "text/css")
            .html("\
            #formMatch, .result {\
                filter: invert(100%) hue-rotate(30deg) contrast(130%)\
            }\
            label, .readyToGo, .inResult {\
                filter: invert(100%) hue-rotate(-30deg) brightness(100%);\
            }\
            .aSVG {\
                filter: invert(48%) sepia(11%) saturate(2168%) hue-rotate(222deg) brightness(91%) contrast(82%)\
            }\
            ")
            .appendTo("head")
            setColours(ivebeencheckingmyList, reallyDude)
    }
    else if(localStorage.theme == '5'){ /* razzmatazz */
        ivebeencheckingmyList=['#E7E6D4', '#332E34', '#F5812A', '#EE2E2B', '#F5812A', '#FFD42F', '#e3985f']
        $("<style>")
            .prop("type", "text/css")
            .html("\
            #formMatch, .result {\
                filter: hue-rotate(30deg) saturate(55%);\
            }\
            label, .readyToGo, .inResult {\
                filter: hue-rotate(-30deg) saturate(230%);\
            }\
            .aSVG {\
                filter: invert(74%) sepia(77%) saturate(3698%) hue-rotate(340deg) brightness(97%) contrast(98%)\
            }\
            ")
            .appendTo("head")
            setColours(ivebeencheckingmyList, reallyDude)
    }
    else{
        ivebeencheckingmyList=['#FFF', '#000', '#C4F3F3', '#FFCE4C', '#F99C15', '#D9D9D9', '#6E6C80']
        setColours(ivebeencheckingmyList, reallyDude)
    }


}

function setColours(ivebeencheckingmyList, reallyDude){
    colourDic = {
        "Bg": ivebeencheckingmyList[0],
        "BgOpp": ivebeencheckingmyList[1],
        "BgAccent": ivebeencheckingmyList[2],
        "Strong": ivebeencheckingmyList[3],
        "StrongFocus": ivebeencheckingmyList[4],
        "AccentMute": ivebeencheckingmyList[5],
        "AccentLoud": ivebeencheckingmyList[6]
    }


    $("body").get(0).style.setProperty('--clrBg', colourDic["Bg"]);
    $("body").get(0).style.setProperty('--clrBgOpp', colourDic["BgOpp"]);
    $("body").get(0).style.setProperty('--clrBgAccent', colourDic["BgAccent"]);
    $("body").get(0).style.setProperty('--clrStrong', colourDic["Strong"]);
    $("body").get(0).style.setProperty('--clrStrongFocus', colourDic["StrongFocus"]);
    $("body").get(0).style.setProperty('--clrBgAccentMute', colourDic["AccentMute"]);
    $("body").get(0).style.setProperty('--clrBgAccentLoud', colourDic["AccentLoud"]);


    if(reallyDude){
        location.reload()
    }
}