class ultimaBatalha {
    constructor (heroi, xpGanho) {
        this.heroi = heroi
        this.xpGanho = xpGanho
    }

    determinarNivelXP(xpGanho) {
        if (xpGanho <= 0) {
            return 'Noob!'
        } else if (xpGanho <= 1000){
            return 'Ferro!'
        } else if (xpGanho <= 2000){
            return 'Bronze!'
        } else if (xpGanho <= 5000){
            return 'Prata!'
        } else if (xpGanho <= 7000){
            return 'Ouro!'
        } else if (xpGanho <= 8000){
            return 'Platina!'
        } else if (xpGanho <= 9000){
            return 'Ascendente!'
        } else if (xpGanho <= 10000){
            return 'Imortal!'
        } else {
            return 'Radiante'
        }        
    }

    mostrarNaTela() {
        const nivel = this.determinarNivelXP(this.xpGanho)

        console.log(`O Herói de nome ${this.heroi} está no nível de ${nivel}`)
    }

    
}

const heroi1 = new ultimaBatalha('Vitor', 0)

heroi1.mostrarNaTela()

