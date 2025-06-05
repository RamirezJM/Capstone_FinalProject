const info = document.querySelector("section")
const showInfo = document.querySelectorAll(".more")

for (let i = 0; i < showInfo.length; i++) {
  showInfo[i].addEventListener("click", (eve) => {
    eve.preventDefault()

    /* SOLUTION 1 , using toggle  */

    info.classList.toggle('show-section')
    if(info.classList.contains('show-section')){
      showInfo[i].innerText = "Close"
    }else{
      showInfo[i].innerText = "More about the author"
    }

    /* SOLUTION 2 , using computedStyle  
   
   const computedStyle = window.getComputedStyle(info);

    if (computedStyle.display === "none") {
      info.style.display = "block"
      showInfo[i].innerText = "Close"
    }
    else {
      info.style.display = "none"
      showInfo[i].innerText = "More about the author"
    } */

 })
 




 

}

