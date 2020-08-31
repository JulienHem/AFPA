var app = new Vue({
    el: '#app',
    data: {
        message: 'Bonjour !',
        label_visible: true,
        label_visible2: false,
        btn1: true,
        btn2: false,

    },
    methods: {
        btn1_click: function(evt) {
            this.btn1 = false;
            this.btn2 = true;
            this.label_visible = false;
            this.label_visible2 = true;
        },

        btn2_click: function(evt) {
            this.btn2 = false;
            this.btn1 = true;
            this.label_visible = true;
            this.label_visible2 = false;
        }
    }
});