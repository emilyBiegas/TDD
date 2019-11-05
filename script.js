function translate(word) {
  let word2 = word.toLowerCase();
  let partialString = "";

  if (["a", "e", "i", "o", "u"].includes(word2.charAt(0))) {
    //   if (word.charAt(0) === "a" || "e" || "i" || "o" || "u") {
    let way = "way";
    word2 = word2.concat(way);
    // word2 = word2.replace(word.charAt(0), "");
    return word2;
  } else {
    for (let i = 0; i < word2.length; i++) {
      if (
        ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(
          word2.charAt(i)
        )
      ) {
        break;
      } else {
        // partialString.concat(word2.charAt(i));
        for (let i = 0; i < partialString.length; i++) {
          partialString += word2.charAt(i);
        }
        word2 = word2.replace(word2.charAt(i), "");
        let newString = word2.concat(partialString);
        let newString2 = newString.concat("ay");
        return newString2;
      }
    }
    // let newString = word2.concat(partialString).concat("ay");
    // return newString;
    // word2 = word2.replace(word.charAt(0), "");
  }
  console.log(word2);
  return word2;
}
// translate();

if (typeof module !== "undefined") {
  // Node
  module.exports = { translate };
} else {
  // Browser
  document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let word = formData.get("word");
    let translation = translate(word);
    document.querySelector("#translation").innerText = translation;
  });
}

// module.exports.translate = translate;
