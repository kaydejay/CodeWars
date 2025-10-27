function greet(language) {
  let greetings = {
   english : "Welcome",
   czech: "Vitejte",
   danish: "Velkomst",
   dutch: "Welkom",
   estonian: "Tere tulemast",
   finnish: "Tervetuloa",
   flemish: "Welgekomen",
   french: "Bienvenue",
   german: "Willkommen",
   irish: "Failte",
   italian: "Benvenuto",
   latvian: "Gaidits",
   lithuanian: "Laukiamas",
   polish: "Witamy",
   spanish: "Bienvenido",
   swedish: "Valkommen",
   welsh: "Croeso",
  }
  
  return (language in greetings) ? greetings[language] : 'Welcome';
}
