const app = {
    loader: document.querySelector('.loader'),
    body: document.querySelector('body'),

    init: function (){
        console.log('App initialisée');
        app.disableLoader();
    },

    disableLoader: function() {
        console.log('Loader en cours de destroyage sa mèère !');

        window.onload = function() {
            setTimeout(() => {
                app.loader.style.transform = 'translateX(100%)';
            }, 3000); 
            setTimeout(() => {
                app.loader.style.display = 'none';
            }, 6000);
        }
        
        console.log('Loader touché coulé !');
    }
}

document.addEventListener('DOMContentLoaded', app.init);