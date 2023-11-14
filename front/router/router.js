window.addEventListener('hashchange', renderView);

function renderView(){
    const app = document.getElementById('app');
    app.innerHTML = getView();
}

function getView() {
    const route = window.location.hash.slice(1);
    switch(route) {
        case 'home':
            return homeView();
        case 'about':
            return aboutView();
        // Add more cases for different routes
        default:
            return homeView(); // default view
    }
}
window.renderView = renderView;
window.getView = getView;
