let plus=document.querySelector('#plusb')
let minus=document.querySelector('#minusb')
let value=document.querySelector("#value")
let changeby=document.querySelector("#inc-dec")
plus.addEventListener("click",function()
{
    let change=parseInt(changeby.value)
 let count=parseInt(value.innerText);
 value.innerText=count+change;

})

minus.addEventListener("click",function()
{
    let change=parseInt(changeby.value)
    let count =parseInt(value.innerText)
    value.innerText=count-change;
})

