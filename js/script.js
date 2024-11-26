const info = document.querySelector("section")
const showInfo = document.getElementsByClassName("more")

for (let i = 0; i < showInfo.length; i++) {
  showInfo[i].addEventListener("click", () => {
    if (info.style.display === "none") {
      info.style.display = "block"
      showInfo[i].innerText = "Close"
    }
    else {
      info.style.display = "none"
      showInfo[i].innerText = "More about the author"
    }
  })

}

