class Formatter {
    static capitalize(string) {
      return string[0].toUpperCase() + string.slice(1);
    }

    static sanitize(string) {
      return string.replace(/[^A-Za-z0-9-' ]+/g, '');
    }
    
    static titleize(string) {
      let noNoWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
      Formatter.capitalize(string);
      return (string.split(" ").map(word => { return (noNoWords.includes(word) && string.indexOf(word) != 0 ? word : Formatter.capitalize(word))})).join(" ")
    }
}




