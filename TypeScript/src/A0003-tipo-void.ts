function SemRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Hyarlei',
  sobrenome: 'Silva',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

SemRetorno("Hyarlei", "Silva");
pessoa.exibirNome();

export { pessoa };
