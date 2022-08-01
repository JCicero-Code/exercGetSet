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

let admin = new Pessoa('Peter',2004);
let visitante = new Pessoa('Park',2012);
admin.novoNome = "Admin.Peter";
visitante.novaData = "22";
console.log(admin.apresentar);
console.log('Nome de login alterado para ',admin.novoNome)
console.log('------------------')
console.log(visitante.apresentar);
console.log('Data alterada: ',visitante.novaData,'anos')
visitante.novoNome = "Admin.Park"
console.log('Olá! Nome de login alterado para ',admin.novoNome,' agora  você também é admin')

https://tableless.com.br/getters-e-setters-manipuladores-com-javascript/
https://www.w3schools.com/js/js_classes.asp
