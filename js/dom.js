// Placeholder to ensure everything is working

document.addEventListener('DOMContentLoaded', () => {
    console.log('FakeOS is ready to go!');
});

// start menu - toggle display
document.getElementById('start-button').addEventListener('click', function() {
    let startMenu = document.getElementById('start-menu');
    startMenu.style.display = startMenu.style.display === 'block' ? 'none' : 'block';
});