var count = 0;
document.getElementById("my_button").onclick = function(){
    count++;
    if(count % 2 == 0){
        document.getElementById("demo").innerHTML = "";
    }
    else{
        var img = document.createElement("img");
        img.src = "https://sun9-46.userapi.com/impg/M3MS5srRjuwkUH7AnMiuw1IlVYNFsERCwy4Uhw/FtFVwClvVIk.jpg?size=1080x1080&quality=96&sign=cf29402aeddb48c335700dc40757a6d0&type=album";
        document.getElementById("demo").appendChild(img);
    }
}