const toggleButton = document.querySelector('.sidebar-toggle')
const sidebar = document.querySelector('.sidebar')
const closeBtn = document.querySelector('.close-btn')


toggleButton.addEventListener('click', ()=>{
    sidebar.classList.toggle('show-sidebar')
    toggleButton.classList.toggle('hide-button')
})

closeBtn.addEventListener('click', ()=>{
    sidebar.classList.remove('show-sidebar')
    toggleButton.classList.toggle('hide-button')
})

document.addEventListener('click', (e) =>{
    const clickedInsideSidebar = sidebar.contains(e.target);
    const clickToggleBtn = toggleButton.contains(e.target);

    if (!clickedInsideSidebar && !clickToggleBtn) {
        sidebar.classList.remove('show-sidebar')
        toggleButton.classList.remove('hide-button');
    }
});

