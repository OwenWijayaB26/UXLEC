const commBackArr = document.querySelector(".communities-back-arrow");
commBackArr.addEventListener("click",function(){
    window.location.href = "/community.html"
})

document.addEventListener("DOMContentLoaded",function(){
    const fbpoRating = document.querySelectorAll(".fbpo-rating");
    fbpoRating.forEach(rating =>{
        var rng =  Math.floor(Math.random() * 5) + 1;
        let star = rating.querySelectorAll(".star-icon");
        for(let i = 0; i<rng;i++){
            star[i].style.color = "orange";
        } 
    })
    let fbName = ['Leon','User13283','Anonymous2312','AvidGamer123']
    let fbPP = ['purple','orange','red','pink']
    let fbDesc = ['Good Game','Nice game',':D','Easy game']
    const fbpoText = document.querySelectorAll(".fbpo-nested-feedback");
    fbpoText.forEach((text,index) =>{
        var pp = text.closest(".communities-item").querySelector(".fbpo-pp");
        var name = text.querySelector(".communities-item-name");
        var desc = text.querySelector(".communities-item-desc");
        if(index<fbName.length && index<fbDesc.length){
            pp.style.backgroundColor = fbPP[index]
            name.innerHTML = fbName[index]
            desc.innerHTML = fbDesc[index]
        }
    })

    let frPP = ['red','green','blue','pink']
    let frName = ['AA','BB','CC','DD']
    let frStatus = ['Active &#9679;','Inactive &#9675;']
    const frpoItems = document.querySelectorAll(".frpo-item-box");
    frpoItems.forEach((item,index) =>{
        var rng =  Math.floor(Math.random()*2) ;
        if(rng == 0){
            item.querySelector(".frpo-user-status").style.color = "green";
        }else{
            item.querySelector(".frpo-user-status").style.color = "red";
        }
        item.querySelector(".frpo-user-status").innerHTML = frStatus[rng];
        item.querySelector(".frpo-pp").style.backgroundColor =  frPP[index];
        item.querySelector(".frpo-name").innerHTML = frName[index];
        item.querySelector(".frpo-chat-bubble").addEventListener("click",function(){
            console.log("asd")
        })
    })
    const addFriendBox = document.getElementById("add-friend-box");
    if(addFriendBox!=null){
        addFriendBox.addEventListener("click",callDroplist);
    }
    const backArrDL =  document.getElementById("dropdown-back-arrow");
    if(backArrDL!=null){
        backArrDL.addEventListener("click",callDroplist);
    }
    function callDroplist(){
        const dropList = document.querySelector(".frpo-add-friend-box");
        if(!dropList.classList.contains("expose-add-friend")){
            dropList.classList.add("expose-add-friend")
            // console.log("test S")
        }else{
            dropList.classList.remove("expose-add-friend");
            // console.log("test X")
        }
    }
    let acPic = ['gold_trophy_icon.png','silver_trophy_icon.png','bronze_trophy_icon.png']
    let acName = ['A Plague of Plagas',"The Merchant's Best Customer",'Headshot Hunter','Unstoppable Force','No Time to Waste','One-Shot Leon']
    let acDesc = ['Complete the game on any difficulty.','Spend a total of 1,000,000 Pt at the Merchant.','Defeat 100 enemies with headshots.','Defeat an enemy with every weapon in the game','Beat the game under 3 hours.','Complete the game on any difficulty with only manual saves']
    const acList = document.querySelectorAll(".apo-container");
    acList.forEach( (item,index) =>{
        var rng = Math.floor(Math.random()*3);
        console.log(rng)
        item.querySelector(".apo-image").style.backgroundImage = `url(images/icons/misc/${acPic[rng]})`;
        item.querySelector(".apo-name").innerHTML = acName[index];
        item.querySelector(".apo-desc").innerHTML = acDesc[index];
    })
})