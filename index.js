/*modify as needed*/
fileImgCount = 5
numImgNeeded = 4
collageSwapSeconds = 20
path = "media/images/indexCollageProf"

$(document).ready(function() {
  $(window).scroll( function(){
      $('.aReview').each( function(i){
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
          console.log("a")
          $(this).animate({'opacity':'1'},500);
          }
          
      }); 
  });
});


/*randomise collage, fade*/
collage()
function collage(){
let nums = new Set();
  while (nums.size < numImgNeeded) {
      nums.add(Math.floor(Math.random() * fileImgCount + 1));
  }

  for(i=0;i<[...nums].length;i++){
    filepath = "'"+path + "/" + String([...nums][i]) + ".jpg'"
    qCLass = ".q" + String(i+1)

  
    $(qCLass).fadeOut(Math.floor(Math.random()*(900)+300))
    $(qCLass).attr("style", 'background-image: url('+filepath+")")
    $(qCLass).hide().fadeIn(Math.floor(Math.random()*(800)+600))
  }
}

// reload when button to email is clicked
$(document).on('click', '#downArrow', function(){
  console.log('a')
  $('html, body').animate({
    scrollTop: $("#downArrow").offset().top
}, 500);
})

//change collage
const interval = setInterval(function() {
  collage()
}, collageSwapSeconds*1000);