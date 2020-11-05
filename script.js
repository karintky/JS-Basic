// if 語法
// if (布林值) { 程式區塊 }
// 布林值為 true 才會執行 程式區塊(VERY IMPORTANT)



if (true) {
    console.log("我是判斷式");
  }
  
  var price1 = 500;
  
  if (price1 >= 200) {
    console.log("大於 200 塊的商品");
  }



  // else if 語法：
// else if (布林值) {}
// else if 布林值為 true 才會執行 else if () { 程式區塊 }
  var price = 50;
  if (price >= 50) {
    console.log("cheap");
  } 
  
else if (score >= 40) {
    console.log("affordable");
}
else {
    console.log("expensive");
}


var boxes = document.getElementsByClassName("box");

console.log(boxes[1]);

boxes[0].innerHTML = "我是盒子";
boxes[1].innerHTML = "我是盒子";
boxes[2].innerHTML = "我是盒子";

// 迴圈 for 語法：
// for (初始值；條件；每次執行)
for(var i = 0; i < 10; i++) {
    console.log("迴圈執行次數：" + i);
}