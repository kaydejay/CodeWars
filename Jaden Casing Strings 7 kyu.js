Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { value :
   function toJadenCase() {
      let words = this.split(' ');
      let jadenCasingWords = words.map(word => {
        if (word.length === 0){
          return '';
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      return jadenCasingWords.join(' ');
   }
  }
);
