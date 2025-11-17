let getQuote = function(quotes, hero){
  let names = {
    R : 'Robin',
    J : 'Joker',
    B : 'Batman'
  }
  
  let number = "";
    for (let i = 0; i < hero.length; i++) {
        if (!isNaN(hero[i])) {
            number += hero[i];
        }
    }
  
   return `${names[hero[0]]}: ${quotes[number]}`  
}
