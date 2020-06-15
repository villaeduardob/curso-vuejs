new Vue({
    el: '#desafio',
    data: {
        nome: 'Eduardo Barros Villa',
        idade: 32,
        linkImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnWB48Iu3OPionWJ1GFMlo4b6uA_jFjJFMk1u5b9W42voYAJ0s&usqp=CAU'
    },
    methods: {
        multiplicacao: function() {
            return Math.imul(3, this.idade)
            // return this.idade * 3
        },
        randomico: function() {
            return Math.random()
        }
    }
})