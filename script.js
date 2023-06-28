// const nums = [];
// const callBtn = document.querySelector("#call-btn");
// var counter=0;

// function call() {
//     let randomNum=Math.floor(Math.random()*75);
//     if (nums.includes(randomNum)){
//         console.log("matched");
//     } else{
//         nums[counter]=randomNum;
//     }
// 	console.log(nums[counter]);
//     counter++;
// }

// callBtn.addEventListener("click", call)

const bmiBtn=document.getElementById("calculate");
const bmiTxt=document.getElementById('bmi')
const ind=document.getElementById('indicator')
const descTxt=document.getElementById('desc');
const body=document.getElementsByTagName('body')


bmiBtn.addEventListener('click', function(){
    var weight=parseInt(document.getElementById("weight-input").value);
    var height=parseInt(document.getElementById("height-input").value);
    console.log(weight/Math.pow(height/100,2))
    let bmiVal=weight/Math.pow(height/100,2);
    bmiTxt.textContent=bmiVal.toFixed(1)
    var bmiDeg
    if (bmiVal>30){
        bmiDeg=90;
    } else {bmiDeg=((bmiVal-12)*10)-90;}

    let bmiDegStr=bmiDeg+"deg"
    ind.style.transform="rotate("+bmiDegStr+")"

    if (bmiVal>=12 && bmiVal<=18){
        descTxt.textContent="Underweight"
        descTxt.style.color="red"
    } else if (bmiVal>=19 && bmiVal<=24){
        descTxt.textContent="Healthy"
        descTxt.style.color="green"
    }  else if (bmiVal>=25 && bmiVal<=29){
        descTxt.textContent="overwheight"
        descTxt.style.color="red"
    } else if (bmiVal>=30){
        descTxt.textContent="Obese. and a extra fucking weight to the earth."
        descTxt.style.color="white"
        document.body.style.backgroundColor="red"
        
    }
})



