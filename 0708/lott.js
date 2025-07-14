//排序前
let sortBefore = document.getElementById("sortBefore");
//排序後
let sortAfter = document.getElementById("sortAfter");
//第二區號碼
let secNo = document.getElementById("secNo");


//威力彩
function lott1() {
    //建立存放號碼的空陣列
    let lott = [];

    // 取第一個亂數
    let lottNo = Math.floor(Math.random() * 38) + 1;
    lott.push(lottNo);
    console.log(lott);

    // 第二個號碼之後，每個號碼都要檢查是否重複
    // 因為還要跑5個號碼

    //while 迴圈寫法
    let count = 1;
    while (lott.length < 6) {
        //亂數取號碼
        let lottNo = Math.floor(Math.random() * 38) + 1;
        //檢查是否重複
        //以下做法為：若沒有重複即丟入陣列中
        if (lott.includes(lottNo) == false) { //沒有重複
            lott.push(lottNo); //將號碼加入陣列中
            count++;  //陣列長度
        }
    }



    //for 迴圈寫法
    // for (let i=1 ; i<5 ; i++){
    //     //亂數取號碼
    //     let lottNo = Math.floor(Math.random() * 38 ) + 1;
    //     //檢查是否重複
    //     //以下做法為：若沒有重複即丟入陣列中
    //     if (lott.includes(lottNo) ==false){ //沒有重複
    //         lott.push(lottNo); //將號碼加入陣列中
    //     } else {
    //         i--;  //i = i-1 當號碼重複時，這次的的執行次數不算
    //     }
    // }

    //未排序
    sortBefore.textContent = "排序前號碼：" + lott;

    //排序後
    lott.sort((a, b) => {
        return a - b;
    })
    sortAfter.textContent = "排序後號碼：" + lott;

    //第二區：1-8取1個數
    secNo.textContent = "第二區號碼：" + Math.floor(Math.random() * 8) + 1;

}