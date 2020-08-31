var app = new Vue({
    el: '#app',
    data: {
        message: 'Calculatrice',
        result: '',
        previous: null,
        operator: null,
        clicked: false,
    },
    methods: {
        clear() {
            this.result = '';
        },
        append(number) {
            if(this.clicked){
                this.result = '';
                this.clicked = false;
            }
            this.result = `${this.result}${number}`;
        },
        plus() {
            this.operator = (a, b) => a + b;
            this.previous = this.result;
            this.clicked = true;
        },
        minus() {
            this.operator = (a, b) => a - b;
            this.previous = this.result;
            this.clicked = true;

        },
        equal() {
            this.result = `${this.operator(
                parseFloat(this.result), parseFloat(this.previous)
            )}`;
            this.previous = null;
        }

    },


});