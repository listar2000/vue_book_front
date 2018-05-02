const App = new Vue({
    el: '#app1',
    data: {
        style: {color: "yellow"},
        seen: false,
        message: 'hello vue.js',
        info: 'why are u here?',
        items: 
            [
                {name: 'star', age: 18},
                {name: 'peter', age: 17},
                {name: 'doris', age: 17}
            ]
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        },
        colorChange: function() {
            this.style.color = "red";
        }
    },
    computed: {
        ageSum: function() {
            var sum = 0;
            for (var i = 0; i < this.items.length; i++)
            {
                sum += this.items[i].age;
            }
            return sum;
        },
    }
})