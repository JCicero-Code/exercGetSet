class Pessoa{
    constructor(name,anoNasc) {
        this.name = name;
        this.anoNasc = anoNasc;
       
    }
    
    get mudarData() {
        return `Oi, ${this.name}! Sua idade agora passa a ser: ${2022 - this.anoNasc}`;
    }
    
    set mudarData(novaData) {
        this.anoNasc = novaData;
    }

    get apresentar() {
        return `Hi, ${this.name}! Sua idade é: ${2022 - this.anoNasc}`;
    }
    
    set apresentar(novoNome) {
        this.name = novoNome;
    }
}

let admin = new Pessoa('Peter',2002);
let visitante = new Pessoa('Park',2012);
admin.novoNome = "Admin.Peter";
visitante.novaData = "18";
console.log(admin.apresentar);
console.log('Nome de login alterado para ',admin.novoNome)
console.log('------------------')
console.log(visitante.apresentar);
console.log('Data alterada: ',visitante.novaData,'anos')
visitante.novoNome = "Visitante.Park"
console.log('Olá! Nome de login alterado para ',visitante.novoNome,' agora  você também pode acessar')
