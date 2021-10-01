/*modify as needed*/
fileImgCount = 5
numImgNeeded = 4
path = "media/images/indexCollageProf"




/*randomise collage*/
collage()
function collage(){
let nums = new Set();
  while (nums.size < numImgNeeded) {
      nums.add(Math.floor(Math.random() * fileImgCount + 1));
  }

  for(i=0;i<[...nums].length;i++){
    filepath = "'"+path + "/" + String([...nums][i]) + ".jpg'"
    qCLass = ".q" + String(i+1)

    $(qCLass).attr("style", 'background-image: url('+filepath+")")
  }
}