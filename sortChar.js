//Data Manual di Code Editor
function sortChar(words) {
  //Pendekatan lebih baik menggunakan typescript (words:string)
  if (typeof words != "string") {
    console.log("String Only!")
    return
  }
  const vowelChar = [];
  const consonantChar = [];
  const chars = words.toLowerCase().split("");
  chars.forEach((char) => {
    if (/[a-z]/.test(char)){
      if(/[aiueo]/.test(char)){
        vowelChar.push(char)
      } else {
        consonantChar.push(char)
      }
    }
  })
  const vowels = vowelChar.join("")
  const consonants = consonantChar.join("")
  console.log( "Vowel Characters: "+ '\n' + vowels + '\n'+  "Consonant Characters: " + '\n' + consonants)
}
sortChar("Sample Case");
sortChar("Next Case");

// Data dari Console seperti contoh C#
console.log("\nSorting Characters !");
console.log("Enter Words: ");
process.stdin.on("data", function (data) {
  const words = data.toString().trim();
  sortChar(words);
  process.exit(); 
});
