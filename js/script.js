<<<<<<< HEAD
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

=======
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

>>>>>>> 3557b25426c4b21cff85d28b4f082307af5394d6
