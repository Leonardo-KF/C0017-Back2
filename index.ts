type IPersonagem = {
  correr: () => void;
  andar: () => void;
  agachar: () => void;
  atirar: () => void;
  tomarDano: (dano: number) => void;
  morrer: () => void;
};

interface ICT extends IPersonagem {
 desarmar: () => void;
}

interface ITR extends IPersonagem {
  armar: () => void;
}

interface IPersonagemProps {
  vida: number;
  colete: number;
}

interface ICTProps extends IPersonagemProps {
  kitDeDesarme: boolean;
}

interface ITRProps extends IPersonagemProps {
  C4?: boolean | null;
}

// let renato = new Personagem(200, 50)
// renato.tomarDano(50)

// vida = 200 - 50 = 150
// colete = 50 - 6.25 = 43.75

// renato.tomarDano(150)

// vida = 150 - 150 = 0

class Personagem implements IPersonagem {
  private vida: number;
  private colete: number;
  private estaVivo: boolean = true;
  constructor({ vida, colete }: IPersonagemProps) {
    this.vida = vida;
    this.colete = colete;
  }
  tomarDano(dano: number): void {
    this.colete = this.colete - dano * 0.125;

    if (this.colete <= 0) {
      this.vida = this.vida - dano;
    }

    if (this.vida <= 0) {
      this.morrer();
    }
  }
  morrer(): void {
    this.estaVivo = false;
  }
  correr(): void {
    if (this.estaVivo) {
      console.log("Correndo");
    } else {
      console.log("Spec");
    }
  }
  andar(): void {
    if (this.estaVivo) {
      console.log("Andando");
    } else {
      console.log("Spec");
    }
  }
  agachar(): void {
    if (this.estaVivo) {
      console.log("Agachado");
    } else {
      console.log("Spec");
    }
  }
  atirar(): void {
    if (this.estaVivo) {
      console.log("Só bala tensa");
    } else {
      console.log("Spec");
    }
  }
}

// let rafael = new CT(200, 50, true)

class CT extends Personagem implements ICT {
  private temKitDeDesarme: boolean;

  constructor({ vida, colete, kitDeDesarme }: ICTProps) {
    super({ vida, colete });
    this.temKitDeDesarme = kitDeDesarme;
  }
  desarmar(): void {
    if (this.temKitDeDesarme) {
      console.log("desarmando em 5 segundos");
    } else {
      console.log("Desarmando em 10 segundos");
    }
  }
}

// let jane = new TR(150, 75, )

class TR extends Personagem implements ITR {
  private temC4: boolean | null;

  constructor({ vida, colete, C4 = false }: ITRProps) {
    super({ vida, colete });
    this.temC4 = C4;
  }
  armar(): void {
    if (this.temC4) {
      console.log("plantando a bomba");
    } else {
      console.log("Baaah meu deixaram a c4 na base");
    }
  }
}

const tr1 = new TR({ vida: 100, colete: 100, C4: true });
const ct1 = new CT({ vida: 100, colete: 100, kitDeDesarme: false });

tr1.tomarDano(50);
tr1.tomarDano(20);
tr1.andar();
tr1.armar();
ct1.desarmar();