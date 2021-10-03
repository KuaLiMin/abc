numColour = 2

/*localstorage check*/
lsCheck()
function lsCheck() {
    
    if (localStorage.getItem("theme") == null) {
        localStorage.theme = 0
    } else {
        theme = localStorage.getItem("theme")
        if (!(/^\d+$/.test(theme) && theme.length > 0)) {
            localStorage.theme = 0
        } else {
            changecolour(false);
        }
    }

}

// clear sessionstorage
sessionStorage.clear()

/*adding top section*/
addTop();

function addTop() {
    /*check for main*/
    if($('main').length != 1){
        location.href='index.html'
        return
    }

    /*add top section*/
    $(`<!-- logo --><div class=" d-none d-sm-inline-flex flex-nowrap my-4 mx-0"><button class="pl-4 bg-transparent theLogo pr-2 col-2"><img src="media/logo/main.png" style="object-fit: contain; max-width: 100%;" alt="logo"></button><a class="p-0 homeLink my-auto col-10" href="index.html">Hanabi.co | Your Virtual Companion</a></div><!-- Navbar --> <nav class="navbar d-flex flex-nowrap bg-transparent navbar-expand-sm navbar p-0 mx-auto mt-3 col-lg-8 col-11 ">
    <div class="d-flex justify-content between navbar-brand d-sm-none">
    <button class="pl-4 bg-transparent theLogo mb-1 pr-2 col-3"><img src="media/logo/main.png" style="object-fit: contain; max-width: 100%;" alt="logo"></button>
    <a class="p-0 my-auto homeLink col-7" href="index.html">Hanabi.co</a></div> <button class="navbar-toggler p-0 mb-2 ml-auto mr-0 col-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation"> <img class="my-auto aSVG p-0" src="media/icon/menudot.svg" style="max-height:30px" alt="logo"> </button> <div class="collapse navbar-collapse p-0" id="navbarScroll"> <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll col-12 d-flex justify-content-between" style="--bs-scroll-height: 100px;"> <li class="nav-item"> <a class="nav-link active" aria-current="page" id="indexhtml" href="index.html">Home</a> </li> <li class="nav-item"> <a class="nav-link active" aria-current="page" id="therapyhtml" href="therapy.html">Therapy</a> </li> <li class="nav-item"> <a class="nav-link active" aria-current="page" id="shophtml" href="shop.html">Shop</a> </li> <li class="nav-item"> <a class="nav-link active" aria-current="page" id="contacthtml" href="contact.html">Contact</a> </li> <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Other </a> <ul class="dropdown-menu navDrop py-lg-2 p-0" aria-labelledby="navbarScrollingDropdown"> <li><a class="nav-link dropdown-item" id="abouthtml" href="about.html">About</a></li> <li><hr class="nav-link dropdown-divider py-lg-2 p-0 my-1"></li> <li><a class="nav-link dropdown-item" id="hiringhtml" href="hiring.html">We\'re Hiring</a></li> <li><hr class="nav-link dropdown-divider py-lg-2 p-0 my-1"></li> <li><a class="nav-link dropdown-item" id="faqhtml" href="faq.html">FAQ</a></li><li><hr class="nav-link dropdown-divider py-lg-2 p-0 my-1"></li> <li><a class="nav-link dropdown-item" id="tchtml" href="tc.html">T&C</a></li> </ul> </li> </div> </div> </nav>`).insertBefore("main");

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

    if(localStorage.theme == 1){ /* dark mode*/
        ivebeencheckingmyList=['#000', '#FFF' , '#C4F3F3', '#F99C15', '#FFCE4C', '#6E6C80', '#D9D9D9']
        $('label, .readyToGo, .inResult').attr('style','-webkit-filter: invert(100%);filter: invert(100%);');
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
            ")
            .appendTo("head")
            }
    else{
        ivebeencheckingmyList=['#FFF', '#000' , '#C4F3F3', '#FFCE4C', '#F99C15', '#D9D9D9', '#6E6C80']
    }

    colourDic = {
        "Bg": ivebeencheckingmyList[0],
        "BgOpp": ivebeencheckingmyList[1],
        "BgAccent": ivebeencheckingmyList[2],
        "Strong": ivebeencheckingmyList[3],
        "StrongFocus": ivebeencheckingmyList[4],
        "AccentMute": ivebeencheckingmyList[5],
        "BgAccentLoud": ivebeencheckingmyList[6]
    }

    $("body").get(0).style.setProperty('--clrBg', colourDic["Bg"]);
    $("body").get(0).style.setProperty('--clrBgOpp', colourDic["BgOpp"]);
    $("body").get(0).style.setProperty('--clrBgAccent', colourDic["BgAccent"]);
    $("body").get(0).style.setProperty('--clrStrong', colourDic["Strong"]);
    $("body").get(0).style.setProperty('--clrStrongFocus', colourDic["StrongFocus"]);
    $("body").get(0).style.setProperty('--clrBgAccentMute', colourDic["AccentMute"]);
    $("body").get(0).style.setProperty('--clrBgAccentLoud', colourDic["BgAccentLoud"]);

    if(reallyDude){
        location.reload()
    }

}