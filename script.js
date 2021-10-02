

/*localstorage check*/

function lsCheck() {
    /*check for rocket count and main theme colour*/
    var rocount = localStorage.getItem("rocount");
    /*create values if they dont exist*/
    if (rocount == null) {
        rocount = 0;
    }
    if (localStorage.getItem("mainco") == null) {

        document.getElementById("colour").value = "#" + Math.floor(Math.random() * 16777215).toString(16);
    } else {
        document.getElementById("colour").value = "#" + localStorage.getItem("mainco");
    }
    localStorage.clear();
    localStorage.mainco = document.getElementById("colour").value.substring(1);
    localStorage.rocount = rocount;
    changecolour();
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
    $(`<!-- logo --><a class="nameLogo d-none d-sm-inline-flex flex-nowrap my-4 mx-0" href="index.html"><img class="pl-4 pr-2 col-2" src="media/logo/main.png" style="object-fit: contain; max-width: 100px;" alt="logo"><span class="p-0 my-auto col-10">Hanabi.co | Your Virtual Companion</span></a><!-- Navbar --> <nav class="navbar bg-transparent navbar-expand-sm navbar p-0 mx-auto mt-3 col-lg-8 col-11 "> <div class="container-fluid p-0"> <a class="navbar-brand d-sm-none" href="index.html"> <img class="pl-4 pr-2 mb-2 col-6" src="media/logo/main.png" style="object-fit: contain; max-width: 100px;" alt="logo"> <span class="p-0 my-auto col-10">Hanabi.co</span> </a> <button class="navbar-toggler p-0 mb-2 ml-auto mr-0 col-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation"> <img class="my-auto aSVG p-0" src="media/icon/menudot.svg" style="max-height:30px" alt="logo"> </button> <div class="collapse navbar-collapse p-0" id="navbarScroll"> <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll col-12 d-flex justify-content-between" style="--bs-scroll-height: 100px;"> <li class="nav-item"> <a class="nav-link active" aria-current="page" id="indexhtml" href="index.html">Home</a> </li> <li class="nav-item"> <a class="nav-link active" aria-current="page" id="therapyhtml" href="therapy.html">Therapy</a> </li> <li class="nav-item"> <a class="nav-link active" aria-current="page" id="shophtml" href="shop.html">Shop</a> </li> <li class="nav-item"> <a class="nav-link active" aria-current="page" id="contacthtml" href="contact.html">Contact</a> </li> <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Other </a> <ul class="dropdown-menu navDrop py-lg-2 p-0" aria-labelledby="navbarScrollingDropdown"> <li><a class="nav-link dropdown-item" id="abouthtml" href="about.html">About</a></li> <li><hr class="nav-link dropdown-divider py-lg-2 p-0 my-1"></li> <li><a class="nav-link dropdown-item" id="hiringhtml" href="hiring.html">We\'re Hiring</a></li> <li><hr class="nav-link dropdown-divider py-lg-2 p-0 my-1"></li> <li><a class="nav-link dropdown-item" id="faqhtml" href="faq.html">FAQ</a></li><li><hr class="nav-link dropdown-divider py-lg-2 p-0 my-1"></li> <li><a class="nav-link dropdown-item" id="tchtml" href="tc.html">T&C</a></li> </ul> </li> </div> </div> </nav>`).insertBefore("main");

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