var greet = function(name) {
  let revName = name.toLowerCase().slice(1)
  let result = name[0].toUpperCase() + revName
  return `Hello ${result}!`
};
