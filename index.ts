enum TamanhoCaneca {
  PEQUENA,
  MEDIA,
  GRANDE,
}

type CanecaProps = {
  cor: string;
  material: string;
  tamanho: TamanhoCaneca;
  estampa: string;
};

class Caneca {
  public cor: string;
  public material: string;
  public tamanho: TamanhoCaneca;
  public estampa: string;
  private conteudo: string | undefined;

  Beber() {
    if (!this.conteudo) {
      console.log("Caneca vazia");
    }
    if (this.conteudo?.toUpperCase() === "VENENO") {
      console.log("Vou tomar isso não meu patrão");
    }
    if (this.conteudo?.toUpperCase() === "FARINHA") {
      console.log("Estou tentando fazer um bolo");
    }
    return "Que delicia esse " + this.conteudo;
  }
  Encher(conteudo: string) {
    if (!this.conteudo) {
      this.conteudo = conteudo;
    } else {
      console.log("A caneca ta cheia");
    }
  }
  Quebrar() {
    console.log("Foi se a caneca");
  }
  Medir() {
    if (this.conteudo?.toUpperCase() === "FARINHA") {
      console.log("Esse bolo vai ficar top");
    }
  }
}

const canecaDaBlue = new Caneca();

canecaDaBlue.cor = "azul";
canecaDaBlue.tamanho = TamanhoCaneca.GRANDE;
canecaDaBlue.estampa = "Logo da Blue";
canecaDaBlue.material = "Cerâmica";
canecaDaBlue.Encher("Café");
canecaDaBlue.Encher("Veneno");

console.log(canecaDaBlue.Beber());

type PetProps = {
  nome: string;
  especie: string;
  tamanho: string;
  sexo: string;
};
class Pet {
  private name: string;
  private especie: string;
  private tamanho: string;
  private sexo: string;

  constructor({ especie, tamanho, sexo, nome }: PetProps) {
    this.especie = especie;
    this.name = nome;
    this.sexo = sexo;
    this.tamanho = tamanho;
  }

  Comer() {
    console.log("Hmmmm comidinha");
  }
  Evacuar() {
    console.log("Me deixa em paz");
  }
  Andar() {
    console.log("Andando");
  }
  get nome() {
    return this.name;
  }
  set nome(name: string) {
    this.name = name;
  }
}

const Gato = new Pet({
  nome: "Bichano",
  especie: "Gato",
  sexo: "Masculino",
  tamanho: "Pequeno",
});

console.log(Gato.nome);
Gato.nome = "Peco";
console.log(Gato.nome);

interface IAluno {
  dormir: () => string;
  codar: () => string;
  estudar: () => string;
  makeCoffe: (cafe: boolean) => string;
}

class Aluno implements IAluno {
  dormir() {
    return "Sonequinha";
  }
  codar() {
    return "Virando Surfista";
  }
  estudar() {
    return "Aula até amanhecer";
  }
  makeCoffe(cafe: boolean) {
    if (cafe) {
      return "Que delicia cafézinho";
    } else {
      return "No coffe no code";
    }
  }

  Procrastinar() {
    return "To fora codo muito";
  }
}
