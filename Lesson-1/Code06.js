String.prototype.padLeft = function(width, char) {
  var result = this;
  char = char || " ";

  if (this.length < width)  {
    result = new Array(width - this.length + 1).join(char) + this;
  }
  return result;
};
console.log("abc".padLeft(10, "x"));      //"xxxxxxxabc"
