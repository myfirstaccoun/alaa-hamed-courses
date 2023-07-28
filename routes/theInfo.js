<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= namesFiles[courses.indexOf(course)] == 1? `دورة ${course}` : `${course}`; %></title>
</head>
<body>
    <a class="home" href="/">الصفحة الرئيسية</a>

    <section class="lessons-list">
        <div></div>
    </section>

    <section class="lesson-content">
        <iframe  allowfullscreen="1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" src=""></iframe>
        
        <div class="available">
            <a href="" target="_blank">تفريغ فقط</a>
            <a href="" target="_blank">تشجير فقط</a>
            <a href="" target="_blank">تفريغ وتشجير</a>
            <a href="" target="_blank">قراءة من الكتاب</a>
            <a href="" target="_blank">اختبار</a>
        </div>

        <audio id="lesson-player" controls="">
            <source src="" type="audio/mp3">
        </audio>

        <div class="voice-speed">
            <a class="two">x2</a>
            <a class="one-seventy-five">x1.75</a>
            <a class="one-five">x1.5</a>
            <a class="one-twenty-five">x1.25</a>
            <a class="one">x1</a>
        </div>
    </section>
</body>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@700&display=swap');

    body {
        font-family: Tajawal;
    }

    h1 {
        margin: 20px auto;
        text-align: center;
        cursor: pointer;
        width: fit-content;
    }

    @keyframes colors {
        0%   {box-shadow: 0 7px 17px 0 rgb(255 131 131 / 47%);}
        50%  {box-shadow: 0 7px 17px 0 rgba(41, 152, 255, 0.47);}
        100% {box-shadow: 0 7px 17px 0 rgb(255 131 131 / 47%);}
    }

    section {
        position: relative;
        left: 5%;
        width: 90%;
        min-height: 50px;
        border-radius: 15px;
        margin: 50px 0;
        background-color: #b96565;
        box-shadow: 0 7px 13px 0 rgb(255 131 131 / 47%);
        animation: colors 2s infinite;
    }

    .lessons-list {
        max-height: 200px;
        overflow: auto;
    }

    .lessons-list div {
        margin: 0 auto;
        width: fit-content;
        height: fit-content;
    }

    .lessons-list h1 {
        color: #fff;
    }

    .lessons-list h1.active, .lessons-list h1:hover {
        border-bottom: 2px solid #fc4364;
        font-weight: 700;
    }

    iframe {
        position: relative;
        right: -10%;
        width: 80%;
        height: 45rem;
        border-radius: .7rem;
        border: 2px solid #777;
        margin: 2rem 0;
    }

    .available, .voice-speed {
        display: flex;
        margin-right: auto;
        margin-left: auto;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    a {
        margin: .5rem;
        color: #3d4a59;
        display: inline-block;
        text-align: center;
        cursor: pointer;
        border: 1px solid #33557c;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .3rem;
        text-decoration: none;
        font-weight: bold;
        transition: all .5s;
        text-transform: capitalize;

        border: 1px solid #fff;
        color: #fff;
        box-shadow: 0 0 10px #9e4673;
    }
    
    a.home {
        position: relative;
        padding: .375rem 0;
        margin: 30px 0 10px 0;
        width: 80%;
        left: 10%;
        color: #3d4a59;
        transition: all .5s;
    }
    
    a.home:hover {
        color: #fff;
        box-shadow: 10px 10px 10px #9e4673;
    }
    
    a:hover {
        background-color: #fc4364;
        color: #fff;
        font-size: 1.03rem;
    }

    audio {
        position: relative;
        right: -10%;
        width: 80%;
        margin: 10px 0;
    }

    .voice-speed {
        justify-self: space-evenly;
    }
    
    .voice-speed a {
        padding: 6px 30px;
    }

    @media (max-width: 950px) {
        iframe {
            height: 12rem;
        }
    }

    @media (max-width: 620px) {
        .voice-speed a {
            padding: 6px 10px;
        }
    }

    @media (max-width: 560px) {
        .lessons-list h1 {
            font-size: 18px;
        }


        audio {
            right: -2.5%;
            width: 95%;
        }

        .voice-speed a {
            padding: 6px 7.3px;
        }
    }
</style>
<script>
    function searchInd2D(arr, item, column = 0) {// return arrOfIndex
        let indexResults = [];
        for(let i = 0; i < arr.length; i++) {
            if(arr[i][column] == item) {
                indexResults.push(i);
            }
        }

        return indexResults;
    }

    function search2D(arr, item, column_search = 0, column_result = 1) {
        let res = [];
        let i = 0;
        while(i < arr.length) {
            if(arr[i][column_search] == item)
                res.push(arr[i][column_result]);
            i++;
        }

        return res;
    }

    function numTo(str, toLang="ar") {
        if(typeof str == "string") {
            let numsAr = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
            let numsEn = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

            str = str.split("");
            for(let i = 0; i < str.length; i++) {
                toLang.toLowerCase == "ar"? (numsEn.indexOf(str[i]) > -1? str[i] = numsAr[numsEn.indexOf(str[i])] : "") : "";
                toLang.toLowerCase == "en"? (numsAr.indexOf(str[i]) > -1? str[i] = numsEn[numsAr.indexOf(str[i])] : "") : "";
            }

            return str.join("");
        }
    }
    
    function makeZeroNum(num, chars) {// 10, 3 ==> "010"
        num = JSON.stringify(num);
        let arr = [];

        for(let i = 0; i < chars - num.length; i++) {
            arr.push("0");
        }

        for(let i = 0; i < num.length; i++) {
            arr.push(num[i]);
        }

        return arr.join("");
    }

    function makeColumnArr(arr, column) {
        let res = [];
        for(let i = 0; i < arr.length; i++) {
            res.push(arr[i][column]);
        }

        return res;
    }

    // function getVideoIds(playlistId, apiKey) {// max videos 50, without promis
    //     let url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=" + playlistId + "&key=" + apiKey;
    //     let videoIds = [];
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => {
    //             data.items.forEach(function(item) {
    //             videoIds.push(item.snippet.resourceId.videoId);
    //         });
    //         });
    //     return videoIds;
    // }

    async function getVideoIds(playlistId, apiKey) {// without max videos, with promis
        let url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`;
        let videoIds = [];
        let nextPageToken = '';
        do {
            const response = await fetch(url + (nextPageToken ? `&pageToken=${nextPageToken}` : ''));
            const data = await response.json();
            data.items.forEach(item => videoIds.push(item.snippet.resourceId.videoId));
            nextPageToken = data.nextPageToken;
        } while (nextPageToken);
        return videoIds;
    }

    function indexOf2D(arr, item, column = 0) {
        let res = [];

        for(let i = 0; i < arr.length; i++) {
            if(arr[i][column] == item) {
                res.push(i);
            }
        }

        return res;
    }

    function mergeArr(arr, circle = 2) {
        let res = [];
        let cir = [];

        for(let i = 0; i < arr.length; i++) {
            cir.push(arr[i]);
            if(circle > 1 && i != 0 && (i+1)%circle == 0) {
                res.push(cir);
                cir = [];
            }
        }

        return res;
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function in2D(arr, item, column_search = 0) {
        let res = false;
        for(let i = 0; i < arr.length; i++) {
            if(item == arr[i][column_search])
                res = true;
        }

        return res;
    }

    function sort2DByArr(arr2D_toSort, arr_refernce, column_toSort = 0) {
        let res = [];
        for(let i = 0; i < arr_refernce.length; i++) {
            for(let y = 0; y < arr2D_toSort.length; y++) {
                if(arr2D_toSort[y][column_toSort] == arr_refernce[i]) {
                    res.push(arr2D_toSort[y]);
                }
            }
        }
        
        return res;
    }

    function sort(ArrayOrString) {
        ArrayOrString = JSON.stringify(ArrayOrString);
        ArrayOrString = JSON.parse(ArrayOrString);
        
        let typeofInput = typeof ArrayOrString;
        
        if(typeofInput == "object") {
            ArrayOrString.sort();
            ArrayOrString.sort((a,b)=> {
                return a - b;
            });
        } else if(typeofInput == "string") {
            ArrayOrString.split("").sort().join("");
            ArrayOrString.split("").sort((a,b) => {
                return a - b;
            }).join("");
        }
        
        return ArrayOrString;
    }

    function unsort(unsorted, sorted) {
        unsorted = JSON.stringify(unsorted);
        unsorted = JSON.parse(unsorted);
        sorted = JSON.stringify(sorted);
        sorted = JSON.parse(sorted);
        
        let newArr = [];
        for(let i=0; i<unsorted.length; i++) {
            let index = sorted.indexOf(unsorted[i]);
            if(index > -1) {
                newArr.push(sorted[index]);
                sorted = removeFromArr(sorted,index);
            }
        }
        
        return newArr;
    }

    function removeFromArr(arr,index,item = null) {
        arr = JSON.stringify(arr);
        arr = JSON.parse(arr);
        
        let turn;
        
        if(item != null) {
            index = arr.indexOf(item);
        }
        
        if(index <= arr.length-1 && index > -1) {
            arr.splice(index, 1);
            turn = arr;
        } else {
            turn = arr;
        }
        
        return turn;
    }

    function RemoveDuplicates(arr, wantDelete = 0, who = null) {
        arr = JSON.stringify(arr);
        arr = JSON.parse(arr);
        
        let unsorted = arr;
        arr = sort(arr);
        
        for(let i=0; i<arr.length-1; i++) {
            if(arr[i] == arr[i+1]) {
                if(who == null) {
                    if(wantDelete == 1) {
                        arr = removeFromArr(arr,i+1);
                        arr = removeFromArr(arr,i);
                    } else {
                        arr = removeFromArr(arr,i+1);
                    }
                    i--;
                } else {
                    if(arr[i] == who) {
                        if(wantDelete == 1) {
                            arr = removeFromArr(arr,i+1);
                            arr = removeFromArr(arr,i);
                        } else {
                            arr = removeFromArr(arr,i+1);
                        }
                        i--;
                    }
                }
            }
        }
        
        return unsort(unsorted,arr);
    }

    function removeSpaces(text) {// إلغاء   المسافات
        text = RemoveDuplicates(text.split(" "), 1, "").join(" ");
        text = removeFromArr(text.split(" "), -1, "").join(" ");
        return text.trim();
    }
   
    let courseInfo = JSON.parse(`<%= lesInfo %>`.split("&#34;").join(`"`));
    let course = `<%= course %>`;
    let startVideoIn = `<%= startVideoIn %>`.split(",");
    let courses = `<%= courses %>`.split(",");
    let playlistID = `<%= playlistID %>`.split(",");
    let namesFiles = mergeArr(`<%= namesFiles %>`.split(","), 2);
    let tests = mergeArr(`<%= tests %>`.split(","), 2);
    let apiKey = "AIzaSyAW0sQyMBkCSeoPuHxB0eOozsaos3FywMw";
    
    let availableOptions = document.querySelector(".available");
    let availableOptionsChilds = availableOptions.querySelectorAll("a");
    let lessonsList = document.querySelector(".lessons-list");
    let lessonsListChilds = lessonsList.querySelectorAll("div h1");
    let audio = document.querySelector("#lesson-player");
    let lessonPlayer = audio.querySelector("source");
    let theSpeed = document.querySelector(".voice-speed");

    playlistID = mergeArr(playlistID);
    startVideoIn = parseInt(startVideoIn[searchInd2D(playlistID, course)[0]]);
    
    // لو دورة من غير ملفات
    let titles = [];
    let allV = getVideoIds(playlistID[indexOf2D(playlistID, course)[0]][1], apiKey);
    let allVideos;
    let nVideos = []; // main variable
    if(search2D(namesFiles, course)[0] == 0) {
        courseInfo = [];
        availableOptions.style.display = "none";
        audio.style.display = "none";
        audio.style.display = "none";
        theSpeed.style.display = "none";
    }
    else {
        availableOptions.style.display = "";
        audio.style.display = "";
        audio.style.display = "";
        theSpeed.style.display = "";
    }
    
    let idInPlaylist = setInterval(() => {
        allV.then(a => {allVideos = a});
        if(allVideos != undefined) {
            // make titles ==> [video.link, video.title]
            for(let x = 0; x < allVideos.length; x++) {
                const videoId = allVideos[x];
                const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&fields=items(id,snippet)&key=${apiKey}`;
                
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        const title = data.items[0].snippet.title;
                        titles.push([allVideos[x], removeSpaces(title.split("_")[0].split(".").join(""))]);
                    });
            }
            
            // make nVideos ==> titles.sort
            let titlesAllV = setInterval(() => {
                if(titles.length == allVideos.length) {
                    nVideos = sort2DByArr(titles, allVideos);
                    for(let x in nVideos) { courseInfo.push([removeSpaces(nVideos[x][1]), []]) }
                    clearInterval(titlesAllV);
                }
            });
            
            clearInterval(idInPlaylist);
        }
    });

    // الحصول على روابط الدروس في الدورة
    let videos;
    // if(search2D(namesFiles, course)[0] == 0) {
    let videosIdsInterval = setInterval(() => {
        if(nVideos.length > 0 && nVideos.length == titles.length) {
            videos = makeColumnArr(nVideos, 0);
            clearInterval(videosIdsInterval);
        }
    });


    // كتابة أسماء دروس الدورة في القائمة
    let writeLessonsList = setInterval(() => {
        if(courseInfo.length > 0) {
            for(let i = 0; i < courseInfo.length; i++) {
                const lessonClick = document.createElement("h1");
                lessonClick.innerText = courseInfo[i][0];
                lessonsList.querySelector("div").append(lessonClick);
                i == parseInt(localStorage.getItem("active-lesson"))? lessonClick.classList.add("active") : "";
            }
            
            lessonsListChilds = lessonsList.querySelectorAll("div h1");
            search2D(namesFiles, course)[0] == 1? document.querySelector("title").innerText = `دورة ${course} - ${lessonsListChilds[localStorage.getItem("active-lesson")].innerText}` : "";
            search2D(namesFiles, course)[0] == 0? document.querySelector("title").innerText = `${course} - ${lessonsListChilds[localStorage.getItem("active-lesson")].innerText}` : "";
            clearInterval(writeLessonsList);
        }
    });


    // تشغيل صوت الدرس
    localStorage.setItem("active-lesson", 0);

    let playAudio = setInterval(() => {
        if(courseInfo.length > 0) {
            search2D(namesFiles, course)[0] == 1? lessonPlayer.src = "/public/" + course + "/" + "صوت" + "/" + makeZeroNum(parseInt(localStorage.getItem("active-lesson"))+1, 3) + "- " + courseInfo[localStorage.getItem("active-lesson")][0] + ".mp3" : "";
            search2D(namesFiles, course)[0] == 1? lessonPlayer.parentNode.load() : "";
            clearInterval(playAudio);
        }
    });


    // أول اما تشغل الصفحة يشغل الدرس اللي كان شغال آخر مرة
    let lastLesson = setInterval(() => {
        if(videos != undefined) {
            if(videos.length > 0 && lessonsListChilds.length > 0) {
                document.querySelector("iframe").src = "https://www.youtube.com/embed/" + videos[parseInt(localStorage.getItem("active-lesson"))+startVideoIn] + "?rel=0";
                clearInterval(lastLesson);
            }
        }
    });


    // الخيارات المتاحة للدرس - تشجير - تفريغ - قراءة من الكتاب
    let avOp;
    availableOptionsChilds[0].style.display = "none";
    availableOptionsChilds[1].style.display = "none";
    availableOptionsChilds[2].style.display = "none";
    availableOptionsChilds[3].style.display = "none";
    availableOptionsChilds[4].style.display = "none";

    let videosInterval = setInterval(() => {
        if(videos != undefined) {
            localStorage.getItem("active-lesson") == null || parseInt(localStorage.getItem("active-lesson") >= videos.length)? localStorage.setItem("active-lesson", 0) : "";
            clearInterval(videosInterval);
        }
    });

    if(courseInfo.length > 0) {
        avOp = courseInfo[localStorage.getItem("active-lesson")][1]; // availableOptions
        if(avOp.length > 0) {
            let options = ["تفريغ", "تشجير", "تفريغ وتشجير", "كتاب"];
            for(let i = 0; i < avOp.length; i++) {
                options.indexOf(avOp[i]) > -1? availableOptionsChilds[options.indexOf(avOp[i])].style.display = "" : "";
                availableOptionsChilds[options.indexOf(avOp[i])].href = "/public/" + course + "/" + "تفريغ وتشجير" + "/" + makeZeroNum(parseInt(localStorage.getItem("active-lesson"))+1, 3) + "- " + availableOptionsChilds[options.indexOf(avOp[i])].innerText.split(" فقط").join("").split("قراءة من ال").join("") + " - " + courseInfo[localStorage.getItem("active-lesson")][0] + ".pdf";
            }
        }
    }

    // الاختبار
    setTimeout(() => {
        if(courseInfo.length > 0 && in2D(tests, parseInt(localStorage.getItem("active-lesson")) + 1, 0)) {
            availableOptionsChilds[4].style.display = "";
            availableOptionsChilds[4].href = search2D(tests, parseInt(localStorage.getItem("active-lesson"))+1, 0, 1);
        }
    }, 500);


    // لما تدوس على اسم درس
    lessonsList.querySelector("div").onclick = (eo) => {
        if(eo.target.tagName.toLowerCase() == "h1") {
            localStorage.getItem("active-lesson") == null || parseInt(localStorage.getItem("active-lesson") >= videos.length)? localStorage.setItem("active-lesson", 0) : "";
            
            availableOptionsChilds[0].style.display = "none";
            availableOptionsChilds[1].style.display = "none";
            availableOptionsChilds[2].style.display = "none";
            availableOptionsChilds[3].style.display = "none";
            
            if(courseInfo.length > 0) {
                localStorage.setItem("active-lesson", searchInd2D(courseInfo, eo.target.innerText)[0]);
                document.querySelector("title").innerText = `دورة ${course} - ${lessonsListChilds[localStorage.getItem("active-lesson")].innerText}`;
                document.querySelector("iframe").src = "https://www.youtube.com/embed/" + videos[parseInt(localStorage.getItem("active-lesson"))+startVideoIn] + "?rel=0";

                search2D(namesFiles, course)[0] == 1? lessonPlayer.src = "/public/" + course + "/" + "صوت" + "/" + makeZeroNum(parseInt(localStorage.getItem("active-lesson"))+1, 3) + "- " + courseInfo[localStorage.getItem("active-lesson")][0] + ".mp3" : "";
                search2D(namesFiles, course)[0] == 1? lessonPlayer.parentNode.load() : "";

                avOp = courseInfo[localStorage.getItem("active-lesson")][1]; // availableOptions
                if(avOp.length > 0) {
                    let options = ["تفريغ", "تشجير", "تفريغ وتشجير", "كتاب"];
                    for(let i = 0; i < avOp.length; i++) {
                        options.indexOf(avOp[i]) > -1? availableOptionsChilds[options.indexOf(avOp[i])].style.display = "" : "";
                        availableOptionsChilds[options.indexOf(avOp[i])].href = "/public/" + course + "/" + "تفريغ وتشجير" + "/" + makeZeroNum(parseInt(localStorage.getItem("active-lesson"))+1, 3) + "- " + availableOptionsChilds[options.indexOf(avOp[i])].innerText.split(" فقط").join("").split("قراءة من ال").join("") + " - " + courseInfo[localStorage.getItem("active-lesson")][0] + ".pdf";
                    }
                }
            
                if(in2D(tests, parseInt(localStorage.getItem("active-lesson")) + 1, 0)) {
                    availableOptionsChilds[4].style.display = "";
                    availableOptionsChilds[4].href = search2D(tests, parseInt(localStorage.getItem("active-lesson"))+1, 0, 1);
                }
            }
        }
    }


    // وضع خط تحت اسم الدرس الحالي
    let btns = document.querySelectorAll(".lessons-list h1");
    
    let makeActiveLesson = setInterval(() => {
        if(document.querySelectorAll(".lessons-list h1").length > 0) {
            btns = document.querySelectorAll(".lessons-list h1");
            for (let i = 0; i < btns.length; i++) {
                btns[i].onclick = (eo) => {
                    btns.forEach((item) => {
                        item.classList.contains("active")? item.classList.remove("active") : "";
                    });

                    eo.target.classList.add("active");
                };
            }

            clearInterval(makeActiveLesson);
        }
    });


    // سرعة الصوت
    let one = theSpeed.querySelector(".one");
    let oneTwentyFive = theSpeed.querySelector(".one-twenty-five");
    let oneFive = theSpeed.querySelector(".one-five");
    let oneSeventyFive = theSpeed.querySelector(".one-seventy-five");
    let two = theSpeed.querySelector(".two");
    
    
    one.onclick = () => {audio.playbackRate=1;}
    oneTwentyFive.onclick = () => {audio.playbackRate=1.25;}
    oneFive.onclick = () => {audio.playbackRate=1.5;}
    oneSeventyFive.onclick = () => {audio.playbackRate=1.75;}
    two.onclick = () => {audio.playbackRate=2;}
</script>
</html>
