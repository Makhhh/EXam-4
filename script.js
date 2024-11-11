                    //TASK A

// let year = +prompt("1 ден 12 ге дейын сан енгызыныз!")

// switch (year) {
//     case 3:
//     case 4:
//     case 5:
//         alert("Ай - " + year + " Spring")
//         break;
//     case 6:
//     case 7:
//     case 8:
//         alert("Ай - " + year + " Summer")
//         break;
//     case 9:
//     case 10:
//     case 11:
//         alert("Ай - " + year + " Autumn")
//         break;
//     case 12:
//     case 1:
//     case 2:
//         alert("Ай - " + year + " Winter")
//         break;
//     default:
//         alert("Тек 1 ден 12 ге дейын сан енгызуге руксат!")
//         break;
// }


          //TASK B

// let a = +prompt("Бырыншы Сан Енгызыныз!")
// let b = +prompt("Екыншы Сан Енгызыныз!")

// if (a > b) {
//     alert("a саны b санынан үлкен")
// }
// else if (a < b) {
//     alert("a саны b санынан кышы")
// }
// else if (a = b) {
//     alert("Сандар тең")
// }
// else{
//     alert("Кате енгыздыныз!")
// }

// alert("Екы саннын орташа мәні = " + (a + b) / 2)


let a = +prompt("a Сан Енгызыныз!")
let b = +prompt("b Сан Енгызыныз!")
let c = +prompt("c Сан Енгызыныз!")
let min = 0;
let max = 0;

if ((a > b) && a > c) {
    alert("а саны ең үлкен")
    max = max + a;
}
else if ((b > a) && b > c) {
    alert("b саны ең үлкен")
    max = max + b;
}
else if ((c > a) && c > b) {
    alert("c саны ең үлкен")
    max = max + c;
}
else{
    alert("Баска сандар енгызып корыныз")
}

if ((a < b) && a < c) {
    alert("а саны ең кышы")
    min = min + a;
}
else if ((b < a) && b < c) {
    alert("b саны ең кышы")
    min = min + b;
}
else if ((c < a) && c < b) {
    alert("c саны ең кышы")
    min = min + c;
}
else{
    alert("баска сан енгызып корыныз")
}

alert("бұл жерде екі саннын айырмасы = " + (max - min) )