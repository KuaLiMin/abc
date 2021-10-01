swallowTheKey = '4C6268276572206775722062617220756E6F76672056207768666720706E61276720787670780A4C6268276572206775722062617220756E6F76672056207768666720706E61276720787670780A4C6268276572206775722062617220756E6F76672056207768666720706E61276720787670780A4C6268276572206775722062617220756E6F76672056207768666720706E6127672078767078'




if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    alert("Some features of the therapy page aren't available/do not work properly on mobile devices, switch to desktop for a better experience.")
}





checkJSON(false)

function checkJSON(reload){
$.get('counsellor.json')
    .done(function() { 
        $.getJSON("counsellor.json", function(json) {
            if(Object.keys(json).length < 1){
                alert("Some information is unattainable at the moment (CODE I(W%), please reload. If this happens more than twice, please click the 'Tech Support' button so we can work out the issue, thank you.")
                if(reload){
                    window.onbeforeunload = function (e) {return}
                    location.reload()
                }
            }
        });
    }).fail(function() { 
        alert("We have detected some missing functionality on this page (CODE #UW(H), please reload. If this happens more than twice, please go to the contact page and click on the 'Tech Support' button so we can work out the issue, thank you.")
        if(reload){
          window.onbeforeunload = function (e) {return}
          location.reload()
        }
    })
}

checkForm(false)           

function checkForm(done){
    isForm = true
    if($('form#formMatch').length == 1){
        if($('input#matchName').length + $('input#matchAge').length + $('select#genMatch').length + $('select#concern').length + $('select#budget').length == 5){
            if(done){
                if(!($('select#genMatch').val() == null || $('select#concern').val() == null || $('select#budget').val() == null || $('input#matchName').val() == "" || $('input#matchAge').val() == "" || (isNaN($('input#matchAge').val()) && isNaN(parseFloat($('input#matchAge').val()))) )){
                   if($('select#concern').val() == "other"){
                       if($('input#concernOther').length == 1){
                           if($('input#concernOther').val() != ""){
                                  isForm = true
                           }else{
                                isForm = false
                           }
                       }else{
                           isForm = false
                       }
                   }
                }else{
                    isForm = false
                }
            }
        }
        else{
            isForm = false
        }
    }else{
        isForm = false
    }

    if(!isForm){
        if(!done){
            alert("Certain sections are unable to load (CODE R94J), you will be redirected to the home page. If this happens more than twice, please go to the contact page and click the 'Tech Support' button so we can work out the issue, thank you.")
            window.onbeforeunload = function (e) {return}
            location.href='index.html'
        }
        else{
            alert("Certain sections have gone missing (CODE J8WW), you will be redirected to the home page. If this happens more than twice, pleasee go to the contact page click the 'Tech Support' button so we can work out the issue, thank you.")
            window.onbeforeunload = function (e) {return}
            location.href='index.html'
        }
    }
}

function checkSess(){
    if(sessionStorage.getItem(swallowTheKey) == undefined){
        alert('There has been an error CODE #W3WW8, redirecting to home page. If this happens too often please go to the contact page and click the \'Tech Support\' button so we can work out the issue and get you matched, thank you.')
        window.onbeforeunload = function (e) {return}
        location.href = 'index.html'
    }else if(sessionStorage.getItem(swallowTheKey).length <= 0){
        alert('There has been an error CODE #W3WW8, redirecting to home page. If this happens too often please go to the contact page and click the \'Tech Support\' button so we can work out the issue and get you matched, thank you.')
        
        window.onbeforeunload = function (e) {return}
        location.href = 'index.html'
    }
 
}

// reset page
function reset(allgasnobreaks){
        console.log("abc")
    if(allgasnobreaks){
        window.onbeforeunload = function (e) {return}
        $(window).scrollTop(0);
    }
    else{
        $('html, body').animate({
            scrollTop: $("#formMatch").offset().top
        }, 1000);
    }
    location.reload()
}

$(":input").change(function(){ 
    window.onbeforeunload = function (e) {
        e = e || window.event;
    
        // For IE and Firefox prior to version 4
        if (e) {
            e.returnValue = 'Are you sure you want to leave?';
        }
    
        // For Safari
        return 'Are you sure you want to leave?';
    };
});


$( "#concernOther" ).css("display", "none")

// operate dropdown
$( "#concern" ).change(function() {
    if(this.value == "other"){
        $( '<input id="concernOther" placeholder="Please Specify" name="other" class="mt-3 form-control" type="text" required="required">' ).insertAfter(this)
        $('#concernOther').focus()
    }
    else{
        $( "#concernOther" ).remove()
    }
});

function getFormAnswers(){
    
    answers = {}
    answers["name"] = $('input#matchName').val()
    answers["age"] = parseInt($('input#matchAge').val())
    answers["gen"] = $('select#genMatch').val()
    answers["concern"] = $('select#concern').val()
    answers["budget"] = $('select#budget').val()
    if($('select#concern').val() == "other"){
        answers["concern"] = $('input#concernOther').val()        
    }
    return(answers)
}

// matching mechanism (return t/f)
function match(age, gender, budget, profile){
    if(gender == "a"){
        return (budget[0] <= profile["cost"] &&  profile["cost"] <= budget[1])
    }
    else{
        if(gender == "f"){
            return(gender == profile["gender"] && ((age > 23)==(profile["above23"])))
        }
        if(gender == "m"){
            return(gender == profile["gender"] && budget[0] <= profile["cost"] &&  profile["cost"] <= budget[1])
        }
    }
}

function displayManiatch(maniatch){
    credentials = ""
    cred = maniatch["credentials"]
    for (i = 0; i<cred.length; i++){
        credentials += cred[i]
        if(i < cred.length-1){
            credentials += " <b>|</b> "
        }
    }
    $(".result").remove()
    $(".action").append('<div class="col-12 result p-sm-4 px-1 py-4"><h1 class="text-center smile" style="color: var(--clrStrongFocus); font-size:60px; filter: drop-shadow(0px 0px 0.5px rgb(49, 48, 48));">☺</h1><h3 class="head text-center">We Matched You!</h3><br><img class="mx-auto d-block border-white px-1 col-7 my-3 col-sm-3" style="border-top:solid 3px; border-bottom:solid 3px" src="'+maniatch["photo"]+'"> <h1 class="head mb-4 text-center matchName">'+ maniatch["name"] +'</h1><p class="text-center">Cost: $' + maniatch["cost"] +' per 1 hour sesssion '+ maniatch["mode"] +'</p> <section><b>Credentials</b><p>'+ credentials +'</p> </section> <section> <b>Counselling Techniques</b> <p>'+maniatch["techniques"]+'</p> </section> <section> <b>Area of Focus</b> <p>'+ maniatch["areaOfFocus"] +'</p> </section class="mb-2"> <button id="redoMatch" class="bg-transparent col-1 redo p-0 mt-3 mt-sm-4 mr-3 mr-sm-4" data-toggle="tooltip" data-placement="top" title="Restart Matching"> <img class="d-block p-0 p-sm-1 p-lg-3 col-12" src="media/icon/redo.png"> </button> <div class="col-12 d-flex my-4 justify-content-center"> <button class="col-8 mt-5 p-0 avail buttonStrong">See Availability</button> </div> </div>')
    $('[data-toggle="tooltip"]').tooltip()
    $('html, body').animate({
        scrollTop: $("#redoMatch").offset().top
    }, 450);
}
 
function handleAnswers(answers){
    $.getJSON("counsellor.json", function(json) {
        // initiates matching and collates matches
        matches = []
        Object.keys(json).forEach(cNum => {
            profile = json[cNum]
            if(match(answers["age"], answers["gen"].charAt(0), answers["budget"].split("/").map(Number),profile)){
                matches.push(cNum)
            }
        });


        if(matches.length <= 0){
            alert("We could not process your form at the moment. We are redirecting you to the Contact Page, please click on 'Matching Problems' and let us know, we will match you ourselves.")
            window.onbeforeunload = function (e) {return}
            location.href = 'contact.html'
        }
        maniatch = matches[Math.floor(Math.random()*matches.length)];

        
        sessionStorage.setItem(swallowTheKey, maniatch);

        displayManiatch(json[maniatch])
    });
}

// submitted form
$("#formMatch").submit(function(e){
    console.log("asa")
    e.preventDefault();

    if($('#checkbox1').is(":checked") && $('#checkbox2').is(":checked")){
        checkForm(true)
        answers = getFormAnswers()

        //disable form
        var form = document.getElementById("formMatch");
        var elements = form.elements;
        for (var i = 0, len = elements.length; i < len; ++i) {
            elements[i].readOnly = true;
            elements[i].disabled = true
        }
        $( ".readyToGo" ).removeClass( "buttonStrong" ).addClass( "buttonStill" )

        checkJSON(true)
        handleAnswers(answers)
    }
    else{
        window.onbeforeunload = function (e) {return}
        alert('There has been an error (CODE DY#DI), reloading.')
        location.reload();
    }
});


function displayAvailability(availability) {
    weekString = ""
    days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    // force SGT despite time zone, + 48 hours
    curr = new Date(((new Date).toGMTString()).slice(0, -3))
    curr.setTime(curr.getTime() + 201600000);
    
    iftherewereanymoreleftofme = [('0' + curr.getHours()).slice(-2),':',('0' + curr.getMinutes()).slice(-2),':',('0' + curr.getSeconds()).slice(-2)].join('');
    for (i = 0; i < 7; i++) {
        date = new Date((new Date()).setDate(curr.getDate() + i))
        day = days[date.getDay()]
        dayTimes = availability[day]

        if (dayTimes.length > 0) {
            weekString += '<h5 class="mt-5"><b>' + day.charAt(0).toUpperCase() + day.slice(1)+ ", " + date.getDate() + " " + months[date.getMonth()] + " " + (date.getFullYear()).toString().substr(-2) + '</b></h5><div class="d-flex flex-wrap justify-content-start mb-5">'
            Object.keys(dayTimes).forEach(fullTank => {
                idgiveittoyou = dayTimes[fullTank]
                if(i!=0 || iftherewereanymoreleftofme < idgiveittoyou){
                    weekString += '<button class="col-sm-3 col-lg-2 col-4 mt-3 pr-1 mr-sm-5 mr-3 buttonStrong timeSlot">'+idgiveittoyou.slice(0, -3)+'</button>'
                }

            });
            weekString += "</div>"
        }
    }
    $(".booking").remove()
    $(".action").append('<div class="col-12 booking my-5 py-4"><h1 class="text-center col-12 my-4 head">Booking</h1><p class="col-12 p-0 text-center">All dates and timings are in Singapore Time (SGT). Timings are subject to change, we will inform you after booking if there has been a change in schedule. Click on the timing you\'d like to book. :)</p><button id = "redoTimings" class="bg-transparent col-1 redo p-0 mr-3" style="margin-top:2.3em;" data-toggle="tooltip" data-placement="top" title="Restart Matching"><img class="d-block p-0 p-sm-1 p-lg-3 col-12" src="media/icon/redo.png"></button>'+weekString+'</div>')
    $('[data-toggle="tooltip"]').tooltip()
    $('html, body').animate({
        scrollTop: $("#redoTimings").offset().top
    }, 450);
}

// see availability
$(document).on('click', '.avail', function(){
    checkJSON(true)
    checkSess()

    $.getJSON("counsellor.json", function(json) {
        displayAvailability(json[sessionStorage.getItem(swallowTheKey)]["availability"])
    })
})

// timing clicked
$(document).on('click', '.timeSlot', function(e){
    checkJSON(true)
    checkForm(true)
    checkSess()

    // adding & removing borders
    $(".timeSlot").css("border", '')
    $(this).css("border", '3px solid var(--clrStrongFocus)')
    
    $.getJSON("counsellor.json", function(json) {
        profile = json[sessionStorage.getItem(swallowTheKey)]

        answers = getFormAnswers()

        NAME = answers["name"]
        AGE = answers["age"]
        GENDER = answers["gen"]
        CONCERN = answers["concern"]
        BUDGET = answers["budget"]
        MATCH = profile["name"]
        PRICE = profile["cost"]
        BOOK = $(e.target).parent().prev().text() + ", " + e.target.innerHTML
    

    
        mailto = "mailto:xxiiaaoolloonnggbbaaoo@gmail.com?subject=BookinTherapyg&body=%23%20PLEASE%20ATTACH%20PROOF%20OF%20PAYMENT%20AND%20CLICK%20SEND%2C%20THANK%20YOU%20%23%0D%0A%0D%0AAdditional%20comments%3A%20%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%23%20DO%20NOT%20MODIFY%20ANYTHING%20BELOW%20THIS%20LINE%20%23%0D%0A%0D%0A%0D%0A%0D%0A%0D%0Aname%20%3D%20"
                    + escape(NAME) + "%0D%0Aage%20%3D%20"+ escape(AGE) +"%0D%0AprefGen%20%3D%20"
                    + escape(GENDER) + "%0D%0Aconcern%20%3D%20" + escape(CONCERN) + "%0D%0Abudget%20%3D%20"
                    + escape(BUDGET) +"%0D%0Amatch%20%3D%20"+ escape(MATCH)+"%0D%0Aprice%20%3D%20"
                    + escape(PRICE)+"%0D%0Abook%20%3D%20"+ escape(BOOK)+"%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A"
    
        $(".payment").remove()
        $(".action").append(`<div class="col-12 payment min-vh-100 mb-5 d-flex flex-wrap justify-content-center"> 
        <div class="col-sm-8 col-12 align-self-sm-center">
            <h1 class="almost" style="font-family: 'Allison', cursive;font-size: 90px;">Almost Done!<span class="ml-3 ml-lg-4 smileBlack" style="color: var(--clrStrong);font-size:60px; line-height:10px">☺</span></h1>
            <p>Click the button below after completing payment of <b>`+PRICE+` SGD</b> via PayNow QR code for your <b>`+BOOK+`</b> time slot.<br> Do make sure your device has a <u>default email client set</u> for this to work. Please attach proof of payment before sending the email, we will email you once booking is confirmed.</p>
            <div class="col-12 d-flex mb-sm-0 my-4 justify-content-center">
            <button class="col-sm-9 col-11 py-1 px-0 ohnoel buttonStrong" onclick="window.onbeforeunload = function (e) {return};parent.location='`+mailto+`'">Finish Booking <span class="txtButtonSmall">(opens email client)</span></button>
            </div>
        </div>
        <img class="col-sm-4 col-10 align-self-sm-center" src="media/qr/qr.png" alt="qrCode">
        </div>`)
        
        $('html, body').animate({
            scrollTop: $(".payment").offset().top
        }, 450);
    });
})

// reload when button to email is clicked
$(document).on('click', '.ohnoel', function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $(".main").empty()
        $(".main").append(`<p class="col-12 p-0 text-center">Reload once email has been sent.</p>`)
    }else{
    reset(true)
    }
})

// reload when button to email is clicked
$(document).on('click', '.redo', function(){
    reset(false)
})