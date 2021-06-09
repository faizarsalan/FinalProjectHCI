$("div li").hide()
    var currImg = $("li").first()
    var currIdx = 0
    currImg.show()

    $("#nextBtn").click(function(){
        if(currIdx == $("div li").lentgh - 1){
            currIdx = 0
            currImg = $("div li").first()
        } else {
            currIdx += 1
            currImg = currImg.next()
        }
        currImg.show()
    })