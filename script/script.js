

let buttons = document.getElementsByClassName('press')

//NUMBER BUTTONS
let button9 = document.getElementById('no9')
let button8 = document.getElementById('no8')
let button7 = document.getElementById('no7')
let button6= document.getElementById('no6')
let button5 = document.getElementById('no5')
let button4 = document.getElementById('no4')
let button3 = document.getElementById('no3')
let button2 = document.getElementById('no2')
let button1 = document.getElementById('no1')
let button0 = document.getElementById('no0')



//FUNCTION BUTTONS 
let calculate = document.getElementById('equal')
let button10 = document.getElementById('clear')
let button11 = document.getElementById('delete')
let button12= document.getElementById('percent')
let button13= document.getElementById('multiply')
let button14= document.getElementById('add')
let button15= document.getElementById('minus')
let button16= document.getElementById('divide')
let button17= document.getElementById('decimal')



//InPUT Screen
let input = document.getElementById('result')


//NUMBER BUTTON
button0.addEventListener('click', () => {
    input.value+= button0.value
})
button1.addEventListener('click', () => {
    input.value+= button1.value
})
button2.addEventListener('click', () => {
    input.value+= button2.value
})
button3.addEventListener('click', () => {
    input.value+= button3.value
})
button4.addEventListener('click', () => {
    input.value+= button4.value
})
button5.addEventListener('click', () => {
    input.value+= button5.value
})
button6.addEventListener('click', () => {
    input.value+= button6.value
})
button7.addEventListener('click', () => {
    input.value+= button7.value
})
button8.addEventListener('click', () => {
    input.value+= button8.value
})
button9.addEventListener('click', () => {
    input.value+= button9.value
})



//FUNCTIONS

//CLEAR SCREEN Button
button10.addEventListener('click', () => {
    input.value= null
})
//DELETE Button
button11.addEventListener('click', () => {
    
})
//PERCENT Button
button12.addEventListener('click', () => {
    input.value+= button12.value
})
//MULTIPLY Button
button13.addEventListener('click', () => {
    input.value+= button13.value
})
//ADD Button
button14.addEventListener('click', () => {
    input.value+= button14.value
})
//MINUS Button
button15.addEventListener('click', () => {
    input.value+= button15.value
})
//DIVIDE Button
button16.addEventListener('click', () => {
    input.value+= button16.value
})
//DELETE Button
button11.addEventListener('click' , function(){
    input.value = result.value.slice(0, -1);
});

button17.addEventListener('click', () =>{
    input.value += button17.value
})


//Equal To Button
calculate.addEventListener('click', Calc)



//FUNCTIONS FOR CALCULATOR
function Calc() {
    input.value = eval(input.value)
    try{
        if(input.value ==NaN) throw "error" ;
    }
    catch(err){
        input.innerText = 'error'
    }
    
}












      
    
     
    
  

