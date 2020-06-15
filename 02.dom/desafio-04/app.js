new Vue({
	el: '#desafio',
	data: {
		exec1:			'destaque',
		borda:			true,
		exec3Css:		'encolher',
		exec4Css:		'',
		exe4Aplicar:	false,
		exec5Css:		'',
		exec5: {
			width: '100px',
			height: '100px',
		},
		tamBarra:		'0',
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.exec1 = this.exec1 == 'destaque' ? 'encolher' : 'destaque'
			}, 1000)
		},
		setBorda(event) {
			if (event.target.value == 'true') {
				this.borda = true
			} else if (event.target.value == 'false') {
				this.borda = false
			}
		},
		iniciarProgresso() {
			let valor = 0;
			const temporizador = setInterval(() => {
				valor += 2
				this.tamBarra = `${valor}%`
				if (valor == 100) clearInterval(temporizador)
			}, 500)
		}
		// iniciarProgresso() {
		// 	setInterval(() => {
		// 		this.tamBarra++
		// 		if (this.tamBarra == 100) { 
		// 			return false
		// 		}
		// 	}, 500)
		// }
	}
})
