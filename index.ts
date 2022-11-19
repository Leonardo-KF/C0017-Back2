interface IAnimalProps {
  nome: string,
  tamanho: string
}

class Animal {
  private nome: string;
  private tamanho: number;

  constructor(nome: string, tamanho: number) {
    this.nome = nome;
    this.tamanho = tamanho;
  }
}

let zebra = new Animal("Martin", 4);

class Leao extends Animal {
  private cor: string;

  constructor(cor: string) {
    super("Alex", 2);
    this.cor = cor;
  }
}

let alex = new Leao("amarelo");
