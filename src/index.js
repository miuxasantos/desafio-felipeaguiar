let ranks = ["Ferro" , "Bronze" , "Prata" , "Ouro" , "Platina" ,
 "Ascendente" , "Imortal" , "Radiante"
]; // ranks

let xpRanks = [ "1000" , "2001" , "5001" , "7001" , "8001" , "9001" , "10001" ]; // quantidade de xp de acordo com a lista

const menorXP= " e menor que ";
    const maiorXP= "Se o XP for maior que ";
        const nivelLista= " seu nível será: ";

console.log("O Nível do Herói é definido a partir da quantidade de xp obtida pelo mesmo. " + "\n" + 
        "Os Ranks são definidos conforme a seguinte lista: ");

    console.log("Se o XP for menor que " + xpRanks[0] + nivelLista + ranks[0] + ";" + "\n" +

    maiorXP + xpRanks[0] + menorXP + xpRanks[1] + nivelLista + ranks[1] + ";" + "\n" +

    maiorXP + xpRanks[1] + menorXP + xpRanks[2] + nivelLista + ranks[2] + ";" + "\n" +
    
    maiorXP + xpRanks[2] + menorXP + xpRanks[3] + nivelLista + ranks[3] + ";" + "\n" +

    maiorXP + xpRanks[3] + menorXP + xpRanks[4] + nivelLista + ranks[4] + ";" + "\n" +

    maiorXP + xpRanks[4] + menorXP + xpRanks[5] + nivelLista + ranks[5] + ";" + "\n" +

    maiorXP + xpRanks[5] + menorXP + xpRanks[6] + nivelLista + ranks[6] + ";" + "\n" +

    maiorXP + xpRanks[6] + nivelLista + ranks[7] + ".");

let nomeHeroi = "Miumiu"; // nome do herói
    let xpHeroi = 10500; // xp do herói

if (10500 > 1001) {
    console.log("A Heroína se chama " + nomeHeroi + " e tem " + xpHeroi + " xp e, está no nível/rank: " + ranks[7] + ".")
} else {
    console.log ("A Heroína não possui experiência suficiente para estar no nível " + ranks[7] + ".")
};

let nomeNPC = "Treinador Aleatório";// nome do NPC
    let xpNPC = 9400; // xp do NPC

console.log("Um NPC chamado " + nomeNPC + " aparece na cena e inicia uma missão para coletar XP");

    do {
        console.log("O XP do NPC no momento é: " + xpNPC);
        xpNPC+=200;
    } while (xpNPC <= 10200);

    console.log("O nível do " + nomeNPC + " ao final da missão é igual a: " + ranks[7] + "!")

