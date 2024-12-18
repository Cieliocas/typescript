let estaChovendo: boolean = true // boolean

estaChovendo = 'true' // erro de compilação devido ao tipo da variável

let idade: number = 23 // number

let altura: number = 1.75 // number

const nacionalidade: string = 'brasileiro' // string

// Teste de arrays
// tipos de arrays - string
const colegas: string[] = ['cielio', 'joao', 'maria'] // array de strings

// Outra forma de declarar um array tipado
const tecnologias: Array<string> = ['javascript', 'typescript', 'nodejs'] // array de strings

// Array de apenas leitura com tipo number
const notas: ReadonlyArray<number> = [10, 9, 8, 7, 6] // array de números

tecnologias.push('react') // erro de compilação, pois o array é de apenas leitura
notas.push(5) // erro de compilação, pois o array é de apenas leitura

// criando tupla
const lista: [nome: string, estaEstudando: boolean, idade: number] = ['gian', true, 27]

// union type
let idadeDaAna: number | string = 25 // aceita ambos
idadeDaAna = '25 anos' // aceita ambos
idadeDaAna = true // erro de compilação