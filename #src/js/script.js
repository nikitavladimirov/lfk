window.addEventListener("load", () => {
  // Form
  const modal = document.getElementById('form-modal')
  const form = modal.getElementsByClassName('form')[0]
  const getConsultationBtn = document.getElementById('consultation-btn')
  const closeModalBtn = document.getElementById('close-modal-btn')

  if(modal !== null && getConsultationBtn !== null) {
    getConsultationBtn.onclick = () => {
      modal.style.display = 'block'
    }
  
    closeModalBtn.onclick = () => {
      modal.style.display = 'none'
      form.reset()
    }
  }

  // Accordion
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