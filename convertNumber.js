//Task-2
//write a programme that can convert the number   into the corresponding number  message.


const NumberToLatter = {
    1: 'a', 2:'b', 3:'c', 4:'d', 5:'e',
    6:'f', 7:'g', 8:'h', 9: 'i', 10: 'j',
    11: 'k', 12: 'l', 13: 'm', 14: 'n', 15: 'o',
    16: 'p', 17: 'q', 18: 'r', 19: 's', 20: 't',
    21: 'u', 22: 'v', 23: 'w', 24: 'x', 25: 'y', 26: 'z',
    0:' ' ,27:"#",28:"*"
  };
  
  function  LatterToSentence(input) {
    const Number = input.split('');
    const output = [];
  
    for (let i = 0; i < Number.length; i++) {
      const Num = Number[i];
      if (Num in NumberToLatter) {
        output.push(NumberToLatter[Num]);
      }
    }
  
    return output.join('');
  }
  
  const input = "44434446668 444 26 3355566666 666668 4466688777786666627";
  const output = LatterToSentence(input);
  console.log(output); 
  