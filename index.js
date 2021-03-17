const btn = document.querySelector("button");



function makeNum(e){
    let luckyNums = [];
    while (luckyNums.length !== 7) {
        let num = Math.floor(Math.random()*45)+1;
        if (luckyNums.includes(num)){
        }else {
            luckyNums.push(num)
        }
    }
    const n1 = document.querySelector(".num1"),
    n2 = document.querySelector(".num2"),
    n3 = document.querySelector(".num3"),
    n4 = document.querySelector(".num4"),
    n5 = document.querySelector(".num5"),
    n6 = document.querySelector(".num6");
    n7 = document.querySelector(".num7");
    n1.innerText = luckyNums[0];
    n2.innerText = luckyNums[1];
    n3.innerText = luckyNums[2];
    n4.innerText = luckyNums[3];
    n5.innerText = luckyNums[4];
    n6.innerText = luckyNums[5];
    n7.innerText = luckyNums[6];
}
function init(){
    btn.addEventListener("click",makeNum)
    console.log([7,8,9].includes(7))
}
init()
