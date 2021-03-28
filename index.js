const btn = document.querySelector("button");
const nums = document.querySelectorAll(".num");


function makeNum(e){
    nums.forEach(function(num){
        num.classList.remove(num.classList[1])
    })
    let luckyNums = [];
    while (luckyNums.length !== 6) {
        let num = Math.floor(Math.random()*45)+1;
        if (luckyNums.includes(num)){
        }else {
            luckyNums.push(num)
        }
    }
    luckyNums.sort(function(a,b){
        while (luckyNums.length !==7) {
            let bonus =  Math.floor(Math.random()*45)+1;
            if (luckyNums.includes(bonus)){
            } else {
                luckyNums.push(bonus)
            }
        }
        return a - b;
    })
    
    for (var i = 0;i<7;i++){
        let num = document.querySelector(`.num${i+1}`);
        num.innerText = luckyNums[i]
        if (luckyNums[i]<11){
            num.parentNode.classList.add("yellow");
        } else if (luckyNums[i]<21){
            num.parentNode.classList.add("blue");
        } else if (luckyNums[i]<31){
            num.parentNode.classList.add("pink");
        } else if (luckyNums[i]<41){
            num.parentNode.classList.add("purple");
        } else{
            num.parentNode.classList.add("green");
        }
    }
}
function init(){
    btn.addEventListener("click",makeNum)
}
init()
