function hello(name) {
  if (!name){
    return 'Hello, World!';
  }else{
    let lower = name.toLowerCase();
    let split = lower.split('');
    let shift = split.shift();
    let capital = shift.toUpperCase();
    let joined = split.join('');
    let revisedName = capital + joined;
    
    return `Hello, ${revisedName}!` 
    }
}
