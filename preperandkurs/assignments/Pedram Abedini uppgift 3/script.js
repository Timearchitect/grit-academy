function charRemove(char, text) {
  if (text.includes(char)) {
    return text.replace(char, "");
  }
}
console.log(charRemove("l", "hello"));
