

function loading(){
    document.getElementById("loading-tab").style.display = "none";
}
setTimeout(loading ,2000);

var homedata , f , fb;
homedata = [
{
    src : "709/709592",
    name : "search"
},{
    src : "1384/1384032",
    name : "chat"
},{
    src : "758/758862",
    name : "home"
},{
    src : "1946/1946429",
    name : "profile"
},{
    src : "681/681443",
    name : "groups"
},{
    src : "2097/2097743",
    name : "message"
},{
    src : "1828/1828551",
    name : "menu"
}
];
function addimage(){
    fb = document.getElementsByClassName("fb");
    for(f = 0 ; f < homedata.length ; f++ ){
        fb[f].src = "https://image.flaticon.com/icons/svg/" + homedata[f].src+ ".svg";
    }
}
setTimeout(addimage , 100);
var storage , i ,icon , detail;
storage = [
{
    image : "702/702471",
    name : "Dark Mode"
},{
    image : "1250/1250758",
    name : "Active status"
},{
    image : "1370/1370907",
    name : "Message request"
},{
    image : "1827/1827392",
    name : "notifications"
},{
    image : "681/681494",
    name : "people"
},{
    image : "1819/1819942",
    name : "privacy"
},{
    image : "2099/2099058",
    name : "account settings"
},{
    image : "786/786285",
    name : "gaming"
},{
    image : "679/679744",
    name : "shopping"
},{
    image : "1946/1946488",
    name : "home settings"
},{
    image : "2698/2698063",
    name : "story settings"
},{
    image : "2760/2760147",
    name : "covid alert"
},{
    image : "2636/2636351",
    name : "chat settings"
},{
    image : "2702/2702604",
    name : "location & sharing"
},{
    image : "1946/1946429",
    name : "log out"
}
];
function addimagetobox(){
    icon = document.getElementsByClassName("icon");
    detail = document.getElementsByClassName("div-70");
    for(i = 0 ; i < storage.length ; i++ ){
        icon[i].src = "https://image.flaticon.com/icons/svg/" + storage[i].image + ".svg";
        detail[i].innerHTML = storage[i].name ;
    }
}
setTimeout(addimagetobox , 150);

var data , j , dp , dname , dimg ;
data = [
{
    dp : "https://image.flaticon.com/icons/svg/1237/1237946.svg",
    dname :"Add story",
    dimg : "https://api.sololearn.com/Uploads/Avatars/14022015.jpg"
},{
    dimg : "  https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?cs=srgb&dl=scenic-view-of-mountain-1666021.jpg&fm=jpg",
    dname :"Divyanshu kr",
    dp : "https://api.sololearn.com/Uploads/Avatars/14022015.jpg"
},{
    dp : "https://api.sololearn.com/Uploads/Avatars/ 12942084.jpg",
    dname :"Aakaanksha",
    dimg : "https://cdn.pixabay.com/photo/2019/01/19/19/44/flowers-3942415_960_720.jpg"
},{
    dp : "https://api.sololearn.com/Uploads/Avatars/14875620.jpg",
    dname :"Virat",
    dimg : "https://gatheringdreams.com/wp-content/uploads/2018/02/Bora-bora-most-romantic-destinations-for-couples-world.jpg"
},{
    dname : "Satnam",
    dp : "https://api.sololearn.com/Uploads/Avatars/9233826.jpg",
    dimg : "https://i.pinimg.com/564x/c4/e7/5a/c4e75a0cb1d21b8164e86e70258d46ad.jpg"
},{
    dname : "Jaseem Akhtar",
    dp : "https://api.sololearn.com/Uploads/Avatars/ 1121510.jpg",
    dimg : "https://travel.shaadimagic.com/wp-content/uploads/2017/05/hungarycountry-side-beautiful-mountain-scenery-1024x768.jpg"
}
];
function story(){
    dp = document.getElementsByClassName("fb-user");
    dname = document.getElementsByClassName("fb-name");
    dimg = document.getElementsByClassName("fb-img");
    for(j = 0 ; j < data.length ; j++){
        dp[j].src = data[j].dp ;
        dname[j].innerHTML = data[j].dname ;
        dimg[j].src = data[j].dimg ;
    }
}
setTimeout(story , 250);

function terestory(ka){
    var ik = document.getElementById("tere-img");
    var nk = document.getElementById("tere-naam");
    var hk = document.getElementById("tere-d");
    ik.src = data[ka].dimg ;
    nk.innerHTML = data[ka].dname ;
    hk.src = data[ka].dp ;
    document.getElementById("tere-tab").style.display = "block";
    if(ka == 0){
        hk.style.padding = "10px";
    } else{
        hk.style.padding ="0px";
    }
}

var posdt , p , du , na , bk ;
posdt = [
{
    bg : "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?cs=srgb&dl=scenic-view-of-mountain-1666021.jpg&fm=jpg",
    dp : "https://api.sololearn.com/Uploads/Avatars/14022015.jpg",
    name : "Divyanshu kr"
},{
    bg : "https://images.pexels.com/photos/4171211/pexels-photo-4171211.jpeg?cs=srgb&dl=woman-in-black-tank-top-and-black-pants-sitting-on-bed-4171211.jpg&fm=jpg",
    dp : "https://api.sololearn.com/Uploads/Avatars/ 12942084.jpg",
    name : "Aakaanksha"
},{
    bg : "https://images.pexels.com/photos/744464/pexels-photo-744464.jpeg?cs=srgb&dl=gold-iphone-6-with-note-pads-744464.jpg&fm=jpg",
    dp : "https://api.sololearn.com/Uploads/Avatars/9233826.jpg",
    name : "Satnam"
},{
    bg : "https://images.pexels.com/photos/122383/pexels-photo-122383.jpeg?cs=srgb&dl=person-holding-smartphone-taking-picture-of-bridge-during-122383.jpg&fm=jpg",
    dp : "https://api.sololearn.com/Uploads/Avatars/ 1121510.jpg",
    name : "Jaseem Akhtar"
},{
    bg : "https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?cs=srgb&dl=man-in-white-crew-neck-top-raising-hi-left-hand-3314294.jpg&fm=jpg",
    dp : "https://api.sololearn.com/Uploads/Avatars/14875620.jpg",
    name : "Virat bhai"
}
];
function post(){
    du = document.getElementsByClassName("post-d");
    na = document.getElementsByClassName("post-n");
    bk = document.getElementsByClassName("post-bg");
    for(p = 0 ; p < posdt.length ; p++){
        du[p].src = posdt[p].dp ;
        na[p].innerHTML = posdt[p].name ;
        bk[p].src = posdt[p].bg;
    }
}
setTimeout(post , 350);

function menu(){
    document.getElementById("menu-tab").style.display = "none";
}
function notification(){
    document.getElementById("notification-tab").style.display = "none";
}
function chat(){
    document.getElementById("chat-tab").style.display = "none";
}
function group(){
    document.getElementById("group-tab").style.display = "none";
}
function search(){
    document.getElementById("search-tab").style.display = "none";
}
function profile(){
    document.getElementById("profile-tab").style.display = "none";
}function menuby(){
    document.getElementById("menu-tab").style.display = "block";
}
function notificationby(){
    document.getElementById("notification-tab").style.display = "block";
}
function chatby(){
    document.getElementById("chat-tab").style.display = "block";
}
function groupby(){
    document.getElementById("group-tab").style.display = "block";
}
function searchby(){
    document.getElementById("search-tab").style.display = "block";
}
function profileby(){
    document.getElementById("profile-tab").style.display = "block";
}
function follow(index){
    index.innerHTML = "added";
}
function remove(num){
    var pagal = document.getElementsByClassName("notification-box");
    pagal[num].style.display = "none";
}
function terebackh(){
    document.getElementById("tere-tab").style.display = "none";
}


//----- all javascript function is added -------