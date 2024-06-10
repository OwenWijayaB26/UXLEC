document.addEventListener("DOMContentLoaded", function(){
    var navPlaceHolder = document.querySelector(".page-header-content");
    var xhr = new XMLHttpRequest();
    xhr.open("GET","navigation.html",true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            navPlaceHolder.innerHTML = xhr.responseText;
        }
    };
    xhr.send();

    let descArr = ['Get Feedbacks And Critiques Directly From Other Players To Tackle The Game in A Different Yet More Spectacular Way', 'Meet New Friends And Chat About The Game With Them! Create A Safe Environment For Players To Talk About Their Gaming Experience','Share Your Game Achievements, Screenshots, And Videos For The World To See And Admire!']
    let imgArr = ['feedback_icon.png','friends_icon.png','achievement_icon.png']
    let charNameArr = ['Leon Kennedy', 'Ashley Graham', 'Ada Wong', 'Luis Serra', 'Bitores Mendez', 'Ramon Salazar', 'Jack Krauser', 'Osmund Saddler', 'Albert Wesker', 'The Merchant']
    let charImgArr = ['leon_kennedy_icon.png','ashley_graham_icon.png','ada_wong_icon.png','luis_serra_icon.png','bitores_mendez_icon.png','ramon_salazar_icon.png','jack_krauser_icon.png','osmund_saddler_icon.png','albert_wesker_icon.png','merchant_icon.png']
    let charLink = ['leon_kennedy.html','ashley_graham.html','ada_wong.html','luis_serra.html','bitores_mendez.html','ramon_salazar.html','jack_krauser.html','osmund_saddler.html','albert_wesker.html','merchant.html']
    let faqTitle = ['What is this website about?','How do i create an account?','How do i participate in events?','What are the forum guidelines?','Are there any unlockables?',"i'm stuck on a puzzle! Can you help?"]
    let faqDesc = ['This website is a fan community for the Resident Evil 4 Remake. Here you can discuss the game, share strategies, participate in events, and connect with other RE4 fans!','Head over to the "Register" section and follow the on-screen instructions to create your free account.','Information about ongoing events will be displayed on the homepage and the forums. Each event will have a dedicated thread outlining the rules and how to submit your entry.','Please be respectful of other users and avoid posting spoilers without proper warnings. You can find the complete forum guidelines by clicking the "Forum Rules".','Yes! The game offers various unlockables like costumes, weapons, and concept art. Explore the game and complete challenges to discover them all.',"Absolutely!  The forums are a great place to ask for help with puzzles or challenging sections of the game.  Describe the puzzle you're facing, and other players might be able to offer some advice."]


    let n = 0;
    const fpoContent = document.querySelectorAll(".fpo-content-items")
    fpoContent.forEach(content=>{
        content.querySelector(".fpo-item-title").innerHTML = faqTitle[n];
        content.dataset.id = n;
        content.addEventListener("click",function(event){
            var parent = event.target.closest('.fpo-content-items');
            if(parent && content.querySelector(".fpo-item-desc").innerHTML == ""){
                var id = parent.dataset.id;
                content.querySelector(".fpo-item-desc").innerHTML = faqDesc[id];
            }else{
                content.querySelector(".fpo-item-desc").innerHTML = "";
            }
            if(!content.classList.contains("expanded-faq")){
                content.classList.add("expanded-faq")
                // content.querySelector(".fpo-item-desc").innerHTML = faqDesc[id];
                content.querySelector(".fpo-item-desc").style.opacity = "1";
                content.querySelector(".fpo-item-desc").style.height = "fit-content";
                content.querySelector(".fpo-item-line").style.opacity = "1";
                
            }else{
                content.classList.remove("expanded-faq");
                content.querySelector(".fpo-item-desc").innerHTML = "";
                content.querySelector(".fpo-item-desc").style.opacity = "0";
                content.querySelector(".fpo-item-desc").style.height = "";
                content.querySelector(".fpo-item-line").style.opacity = "0";
            }
        })
        n++;
    })
    
    let k = 0;
    const mptContent = document.querySelectorAll(".mpt-char-page");
    if(mptContent!=null){
        mptContent.forEach(content=>{
            let mptImg = content.querySelector(".mpt-item-image");
            content.href = charLink[k];
            content.querySelector(".mpt-item-name").innerHTML = charNameArr[k];
            mptImg.src = `images/icons/characters/${charImgArr[k]}`;
    
            if(mptImg.complete){
                topStyling()
            }else{
                mptImg.onload = topStyling;
            }
            function topStyling(){
                setTimeout(function(){
                    var contCent = content.offsetHeight + content.getBoundingClientRect().top;
                    var imgCent =  mptImg.scrollHeight + mptImg.getBoundingClientRect().top;
                    
                    var topVal = (imgCent - contCent);
                    mptImg.style.top = `-${topVal}px`;
                },100)
            }
            k++;
        })
    }
    const comBtnFunc = {gotoFeedbacks:()=>{
        window.location.href = "/feedbacks.html"
    }, gotoFriends:()=>{
        window.location.href = "/friends.html"
    }, gotoAchievements:()=>{
        window.location.href = "/achievements.html"
    }}
    const comBtn = document.querySelectorAll(".hpth-btn");
    const comKey = Object.keys(comBtnFunc);
    comBtn.forEach((btn,index) =>{
        if (index < comKey.length) {
            const functionName = comKey[index];
            btn.setAttribute('data-function', functionName);
            btn.addEventListener("click",function(){
                const funcName = this.getAttribute("data-function");
                if(comBtnFunc[funcName]){
                    comBtnFunc[funcName]();
                }
            })
        } 
    })
    const hpthContent = document.querySelectorAll(".hpth-content-items");
    let i=0;
    hpthContent.forEach(content =>{
        content.querySelector(".hpth-item-desc").innerHTML = descArr[i];
        content.querySelector(".hpth-item-image").style.backgroundImage = `url(images/icons/misc/${imgArr[i]})`;
        content.addEventListener("mouseenter",function(){
            content.querySelector(".hpth-item-desc").style.transition = "height ease-in-out 100ms, opacity ease-in 1000ms";
            content.querySelector(".hpth-btn").style.opacity = "1";
        })
        content.addEventListener("mouseleave",function(){
            content.querySelector(".hpth-item-desc").style.transition = "";
            content.querySelector(".hpth-btn").style.opacity = "0";
        })
        i++;
    })
    let thmbArr = ['LasPagas_thumbnail.png','MercWares_thumbnail.png','ganado_thumbnail.png','regenerator_thumbnail.png','lockdown_thumbnail.png','beautyindecay_thumbnail.png']
    const hpfContent = document.querySelectorAll(".hpf-content-items");
    let j = 0;
    hpfContent.forEach(content =>{
        content.querySelector(".hpf-item-image").style.backgroundImage = `url(images/thumbnails/${thmbArr[j]}`;
        j++;
    })

    const footer =  document.querySelector(".page-footer-content");
    if(footer != null){
        var footerHeight = document.body.offsetHeight - footer.offsetHeight;
        footer.style.top = `${footerHeight}px`
    }

    const charImageCont = document.querySelector(".characters-image-container");
    var charImage;
    if(charImageCont!=null){
         charImage = charImageCont.querySelector(".characters-image");
    }
    if(charImage != null && charImage.complete){
        setTimeout(function(){
            var charBoxVal = charImageCont.offsetHeight + charImageCont.getBoundingClientRect().top;
            var charImgVal = charImage.scrollHeight + charImage.getBoundingClientRect().top;
            var diffTop =  (charImgVal - charBoxVal);
            charImage.style.top = `-${diffTop}px`;
            // console.log(diffTop)
        },100);
    }

    const bks = document.querySelector(".back-arrow-lk");
    if(bks!=null){
        bks.addEventListener("click",function(){
            window.location.href = "/main.html";
        })
    }
    const specContent = document.querySelectorAll(".spec-char-div");
    specContent.forEach((content,index)=>{
        var compInd = index + 1;
        if(compInd == 4){
            compInd = 9;
        }else if(compInd == charImgArr.length){
            compInd = 5;
        }else if(compInd == 8){
            compInd = 4;
        }
        console.log(compInd)
        let specImg = content.querySelector(".spec-char-image");
        content.href = charLink[compInd];
        content.querySelector(".spec-char-name").innerHTML = charNameArr[compInd];
        specImg.src = `images/icons/characters/${charImgArr[compInd]}`;

        if(specImg.complete){
            topStyling()
        }else{
            specImg.onload = topStyling;
        }
        function topStyling(){
            setTimeout(function(){
                var contCent = content.offsetHeight + content.getBoundingClientRect().top;
                var imgCent =  specImg.scrollHeight + specImg.getBoundingClientRect().top;
                
                var topVal = (imgCent - contCent);
                specImg.style.top = `-${topVal}px`;
            },100)
        }
    })
    let chapterArr = ['Chapter 1 - The Village','Chapter 2 - The Valley','Chapter 3 - The Lake','Chapter 4 - The Church','Chapter 5 - The Villa','Chapter 6 - The Checkpoint','Chapter 7 - The Castle','Chapter 8 - The Castle Battlements','Chapter 9 - The Grand Hall','Chapter 10 - The Ballroom','Chapter 11 - The Mines','Chapter 12 - The Clocktower','Chapter 13 - The Island','Chapter 14 - The Cargo Depot','Chapter 15 - The Summit','Chapter 16 - The Escape']
    let chapterTitle = ['The Village','The Valley','The Lake','The Church','The Villa','The Checkpoint','The Castle','The Castle Battlements','The Grand Hall',' The Ballroom',' The Mines',' The Clocktower',' The Island',' The Cargo Depot',' The Summit',' The Escape']
    let chapterDesc = ['After the opening cutscene where Leon is being driven to a remote settlement in Spain, one of the police officers will disappear, prompting you to investigate.','Head back out and down the hall to find a locked door covered in markings, and go right through the other door to meet your first Villager - aka the Ganado.', "Since the Ganado aren't giving chase, you can make your way down the new path at your own pace, and take in the creepy sights. You'll need to cross a rickety bridge before coming to a path leading to another ruined building."]
    let chapterImage = ['village_thumbnail.png','valley_thumbnail.png','lake_thumbnail.png']

    const mpthListText = document.querySelectorAll(".mpth-list-text");
    mpthListText.forEach((list,index) =>{
        list.innerHTML = chapterArr[index];
        list.addEventListener("click",function(){
            document.querySelector(".mpth-box-title").innerHTML = chapterTitle[index]
            document.querySelector(".mpth-box-desc").innerHTML = chapterDesc[index];
            document.querySelector(".mpth-box-image").style.backgroundImage = `url(images/thumbnails/${chapterImage[index]})`;
        })
    })
    
    let weapType = ['Handgun','Magnum','Melee','SMG','Shotgun']
    let weapName = [['Red9','Sentinel Nine'],['Broken Butterfly','Killer7'],['Boot Knife','Primal Knife'],['LE 5','TMP'],['Skull Shaker','Striker']]
    let weapDesc = [['In the middle of the lake, first accessible in Chapter 4 in getting the boat',"Purchase Deluxe or Collector's Edition of the game."],["Purchase from the Merchant from Chapter 7 onwards.",'Purchase from the Merchant from Chapter 11 onwards.'],['Found abundantly while exploring','Find and destroy all Clockwork Castellans'],['In a locked door in the Freezer during Chapter 11.','Purchase from the Merchant from Chapter 3 onwards.'],["Purchase Deluxe or Collector's Edition of the game.",'Purchase from the Merchant from Chapter 10 onwards.']]
    let weapImage = [['red9_icon','sentinelnine_icon'],['brokenbutterfly_icon','killer7_icon'],['bootknife_icon','primalknife_icon'],['le5_icon','tmp_icon'],['skullshaker_icon','striker_icon']]
    const mpfContent = document.querySelectorAll(".mpf-content-items")
    mpfContent.forEach((content,index)=>{
        content.querySelector(".mpf-item-title").innerHTML = `${weapType[index]} Weapons`;
        content.dataset.id = index;
        content.addEventListener("click",function(event){
            var parent = event.target.closest('.mpf-content-items');
            if(parent && content.querySelector(".mpf-weapon-name").innerHTML == ""){
                var id = parent.dataset.id;
                var wImg = content.querySelectorAll(".mpf-weapon-image")
                wImg.forEach((wp,cr) => {
                    wp.src = `images/icons/weapons/${weapImage[id][cr]}.png`;
                });
                var wName = content.querySelectorAll(".mpf-weapon-name")
                wName.forEach((wp,cr) => {
                    wp.innerHTML = weapName[id][cr];
                });
                var wDesc = content.querySelectorAll(".mpf-weapon-desc")
                wDesc.forEach((wp,cr) => {
                    wp.innerHTML = weapDesc[id][cr];
                });
            }else{
                var wName = content.querySelectorAll(".mpf-weapon-name")
                wName.forEach((wp,cr) => {
                    wp.innerHTML = "";
                });
                var wDesc = content.querySelectorAll(".mpf-weapon-desc")
                wDesc.forEach((wp,cr) => {
                    wp.innerHTML = "";
                });
                var wImg = content.querySelectorAll(".mpf-weapon-image")
                wImg.forEach((wp,cr) => {
                    wp.src = "";
                });
            }
            if(!content.classList.contains("expanded-weapon")){
                content.classList.add("expanded-weapon")
                content.querySelector(".mpf-item-desc").style.opacity = "1";
                content.querySelector(".mpf-item-desc").style.height = "fit-content";
            }else{
                content.classList.remove("expanded-weapon");
                content.querySelector(".mpf-item-desc").style.opacity = "0";
                content.querySelector(".mpf-item-desc").style.height = "";
            }
        })
    })
    const epoaddFriendBox = document.getElementById("epo-content-addbutton");
    if(epoaddFriendBox!=null){
        epoaddFriendBox.addEventListener("click",callDroplist);
    }
    const epobackArrDL =  document.getElementById("epo-dropdown-back-arrow");
    if(epobackArrDL!=null){
        epobackArrDL.addEventListener("click",callDroplist);
    }
    function callDroplist(){
        const dropList = document.querySelector(".frpo-add-friend-box");
        if(!dropList.classList.contains("expose-add-friend")){
            dropList.classList.add("expose-add-friend")
        }else{
            dropList.classList.remove("expose-add-friend");
        }
    }
    let evName = ['Las Plagas Outbreak!',"The Merchant's Makeover",'The Ganado Gauntlet','The Regenerator Challenge','The Village On Lockdown','Beauty In Decay']
    let evDesc = ['Share your theories on how a Las Plagas outbreak could occur elsewhere in the world. Maybe tie it to a specific location or black market activity.',"Design a new costume for the Merchant, everyone's favorite traveling salesman. Be it a stylish upgrade or a hilarious parody, unleash your inner artist!","Can you survive the village? The Ganado Gauntlet tests your skills in the RE4 Remake. Prove you're the ultimate monster slayer!","the unkillable enemy that keeps coming back for more. Can you overcome their relentless pursuit in this photographic challenge?","The village is on lockdown! Help Leon identify the hidden culprit behind a series of strange occurrences.",'The RE4 Remake world is unsettlingly beautiful. Capture that in a screenshot!']
    const epoItem = document.querySelectorAll(".epo-item");
    epoItem.forEach((item,index) =>{
        item.querySelector(".epo-image").src = `images/thumbnails/${thmbArr[index]}`
        item.querySelector(".epo-item-name").innerHTML = evName[index];
        item.querySelector(".epo-item-desc").innerHTML = evDesc[index];
        var rH = Math.floor(Math.random()*12);
        var rM = Math.floor(Math.random()*60) + 1;
        if(rH < 3){
            item.querySelector(".epo-item-time").style.color = "red"
        }else{
            item.querySelector(".epo-item-time").style.color = "green"            
        }
        item.querySelector(".epo-item-time").innerHTML = `${rH} Hour(s) ${rM} Minute(s)`;
    })
})

function startExploring(height){
    window.scrollTo({
        top: height, behavior: "smooth"
    })
}
function searchOurWiki(){
    window.location.href = "/main.html";
}
function gotoEvent(){
    window.location.href = "/event.html";
}
function gotoFaq(){
    window.location.href = "/faq.html";
}
