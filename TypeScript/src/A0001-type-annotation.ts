//Tipos básicos (aqui ocorre referência de tipos primitivos)
let nome: string = "nome";
let idade: number = 30;
let adulto: boolean = true;
let simbolo: Symbol = Symbol("qualquer-symbol");

//Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ["a", "b", "c"];
let arrayDeStrings2: string[] = ["a", "b", "c"];

//Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: "nome",
  idade: 30,
  adulto: true,
};

//Funções
function soma(x: number, y: number): number {
  return x + y;
}

const resul = soma(2, 2);
