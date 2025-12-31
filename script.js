let num = 10;
let wait = document.getElementById("wait");
let finalMsg = document.getElementById("finalMsg");
let pic = document.getElementById("wakePic");

let timer = setInterval(function(){
  wait.innerHTML = num;
  num--;

  if(num < 0){
    clearInterval(timer);
    wait.innerHTML = "";
    finalMsg.innerHTML = "不要再聊天了！快點去讀書要期末了！！！";
    pic.src="https://picb2.photophoto.cn/38/106/38106192_1.jpg"; 
  }
},1000);