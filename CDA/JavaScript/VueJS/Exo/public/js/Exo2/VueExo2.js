var app = new Vue({
    el: '#app',
    data: {
        message: 'Nombre magique - Devinez une valeur entre 0 et 100 !',
        random: 0,
        mystery: Math.floor(Math.random() * 100),
    },


});