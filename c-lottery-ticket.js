/* https://www.codewars.com/kata/57f625992f4d53c24200070e */



function bingo(ticket, win){
let ticketWins=0;
for(i=0;i<ticket.length;i++) {
for(j=0;j<ticket[i][0].length;j++) {
    if(ticket[i][0][j].charCodeAt(0)==ticket[i][1]) {
        ticketWins+=1;
        console.log(`${ticket[i][0][j]} won.`)
        break;
    }
}
}
if(ticketWins>=win) return "Winner!";

return "Loser!";
}

console.log(bingo([['OG',73], ['KQBPO',71], ['BKOAPL',78], ['RGGLHW',72], ['IO',81], ['ZQNVOBG',88], ['WYOY',89], ['SHGZHBAD',72], ['ZU',90]],4));
