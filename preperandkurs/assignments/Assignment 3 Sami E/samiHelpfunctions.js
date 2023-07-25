function charRemove(c , t) {
  let newWord = "";
  let x = t.length
  for (let i = 0; i < x; i++) {
    if (c.toLowerCase() != t[i].toLowerCase()) {
      newWord += t[i];
    }
  }
  console.log(newWord);
}

charRemove("e", "hej");