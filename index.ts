let obj = {};

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
const canecaDoGremio = new Caneca();
const canecaDoFlamengo = new Caneca();

canecaDaBlue.cor = "azul";
canecaDaBlue.tamanho = TamanhoCaneca.GRANDE;
canecaDaBlue.estampa = "Logo da Blue";
canecaDaBlue.material = "Cerâmica";
canecaDaBlue.Encher("Café");
canecaDaBlue.Encher("Veneno");

console.log(canecaDaBlue.Beber());
