const chevronsDown = document.querySelectorAll("i.fa-chevron-down");

chevronsDown.forEach((chevron)=>{
    chevron.addEventListener("click", ()=>{
        chevron.nextElementSibling.style.display = chevron.nextElementSibling.style.display === 'flex' ? 'none':'flex';
    })
})