function mostraModal(modalId){
  const modal = document.getElementById(modalId);
  console.log(modal);
  modal.classList.add("mostrar");
  modal.addEventListener('click', (e) => {
    console.log(e.target.classList);
    if(e.target.classList == "modal mostrar" || e.target.classList == "fechar"){
      modal.classList.remove("mostrar");
    }
  })
}

//mostraModal('modalId'); 
