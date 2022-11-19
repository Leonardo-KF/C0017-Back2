// Aqui eu defino os tipos dos parametros da minha classe (constructor)
interface IPerfilProps {
  nome: string;
  // o sinal de interrogação serve para dizer que essa propriedade é opcional (pode ser null)
  imagem?: string;
}

// Aqui eu crio a classe
class Perfil {
  // aqui eu passo as propriedades da minha classe de forma privada para que só a classe tenha acesso a elas (POO: encapsulamento)
  private nome: string;
  private imagem: string;


  // o constructor define os parametros que eu preciso passar para a minha classe
  constructor({ nome, imagem = "imagem padrão" }: IPerfilProps) {// como definimos acima que o parametro é opcional, se eu não passar uma imagem, a classe passa um valor padãro para o parametro
    this.nome = nome;
    this.imagem = imagem;
  }

  // método para retornar o valor da imagem. Como a propriedade é privada, eu não posso acessa-la diretamente fora da classe
  pegarImagem(): string {
    return this.imagem;
  }
}

// aqui eu instacio a classe (crio o perfil)
let jane = new Perfil({ nome: "Jane" });

// como eu não passei uma imagem acima, o valor padrão foi definido
jane.pegarImagem() // imagem = "imagem padrão"
