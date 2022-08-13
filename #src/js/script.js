window.addEventListener("load", () => {
  let acc = document.getElementsByClassName('accordion__button')
  if (!acc.length) return
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      this.classList.toggle('active')
      let panel = this.nextElementSibling
      if (panel.style.height) {
        panel.style.height = null;
      } else {
        panel.style.height = panel.scrollHeight + "px";
      } 
    })
  }
})