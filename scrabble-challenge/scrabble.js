class Scrabble {
    // Write your implementation here
      constructor(word) {
          const letterCheck = /[^ a-z]/i;
          if (letterCheck.test(word) || word === null){
              this.word = 0;
          } else {
              this.word = word.toUpperCase();
          }
  
          this.scores = {
              'A' : 1, 'E' : 1, 'I' : 1, 'O' : 1, 'U' : 1, 'L' : 1, 'N' : 1, 'R' : 1, 'S' : 1,
              'T' : 1, 'D' : 2, 'G' : 2, 'B' : 3, 'C' : 3, 'M' : 3, 'P' : 3, 'F' : 4, 'H' : 4,
              'V' : 4, 'W' : 4, 'Y' : 4, 'K' : 5, 'J' : 8, 'X' : 8, 'Q' : 10, 'Z' : 10, ' ': 0
          }
      }
  
      score() {
          let score = 0;
          for (let i = 0; i < this.word.length; i++) {
              let letter = this.word.split('');
              let letterScore = this.scores[letter[i]]
              score += letterScore
          }
      return score;
      }
  }
  
let scrabble = new Scrabble('i like food');
console.log(scrabble.score())
  