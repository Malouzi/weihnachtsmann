const besucht=JSON.parse(localStorage.getItem("tag"))|| [] 
console.log(besucht)
const days= document.querySelectorAll("td")
days.forEach((tag, index)=>{
    tag.addEventListener("click",()=>clicktag(index))
    if (besucht.includes(index)){
         changecolor(tag)
     }
})
function clicktag(index){
    console.log("hallo")
localStorage.setItem("tag",JSON.stringify([...besucht, index]))
}
function changecolor(tag){
tag.classList.add("active")
}
