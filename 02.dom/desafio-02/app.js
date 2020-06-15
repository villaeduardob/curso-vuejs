new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibeAlert() {
            alert('Clicado!')
        },
        exibeAoDigitar() {
            this.valor = event.target.value
        }
    }
})