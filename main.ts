import { Controle } from "./nota";
import prompt from 'prompt-sync';

let control: Controle = new Controle(0, 0, 0);
let teclado = prompt();
let option: number = 0;


while (option !== 9) {
    console.log(`==============Menu===============`);
    console.log('1. digite as notas                ');
    console.log('9. Sair               👉         ');
    console.log('=================================');

    option = +teclado('Ecolha uma ação : ');

    switch (option) {
        case 1:
         let n1:number = +teclado ('digite a primeira nota: ');
         let n2:number = +teclado ('digite a segunda nota: ');
         
         control.atribuir(n1, n2)
         control.Cmedia();

         console.log('');;
            break;
        case 2:

            break;
        default:
            break;
    }
}