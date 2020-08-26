var app = new Vue({
    el: '#app',
    data: {
        message: 'Calculatrice',
        result: 'Je suis le résultat',
        operator: null,
        tot: 0,
    },
    methods: {
        num: function (number) {

            // app change la data de "result"
            return app.result = number
        }
    },




});