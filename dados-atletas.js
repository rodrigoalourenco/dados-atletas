class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        }
        if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        }
        if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        }
        if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }

    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }

    calculaMediaValida() {
        let notas = this.notas.slice();

        notas = notas.sort(function (a, b) {
            return a - b;
        });
        notas = notas.slice(1, 4);

        return notas.reduce((total, num) => total + num) / notas.length;
    }

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemAlturaAtleta() {
        return this.altura;
    }

    obtemNotasAtleta() {
        return this.notas;
    }

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return this.calculaIMC();
    }

    obtemMediaValida() {
        return this.calculaMediaValida();
    }

    toPrintDadosAtleta() {
        return `
        Nome: ${this.obtemNomeAtleta()}
        Idade: ${this.obtemIdadeAtleta()}
        Peso: ${this.obtemPesoAtleta()}
        Altura: ${this.obtemAlturaAtleta()}
        Notas: ${this.obtemNotasAtleta()}
        Categoria: ${this.obtemCategoria()}
        IMC: ${this.obtemIMC()}
        Média Válida: ${this.obtemMediaValida()}`;
    }
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);
console.log(atleta.toPrintDadosAtleta());

