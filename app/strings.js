exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let count = 0 , newStr = '';
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i+1]){
            count++;
            if(count < amount) newStr+=str[i]
        }
        else{
            count=0; newStr+=str[i];
        }
    }
    return newStr;
  },

  wordWrap: function(str, cols) {
      let arrFromStr = str.split(' ');
      let newString = arrFromStr[0];
      for (let i = 1; i < arrFromStr.length; i++) {
          if (arrFromStr[i].length > cols) {
              newString += '\n' + arrFromStr[i];
          } else {
              (newString.length + arrFromStr[i].length > cols)?
                  newString += '\n' + arrFromStr[i] :
                  newString += ' ' + arrFromStr[i];
          }
      }
      return newString;
  },

  reverseString: function(str) {
    return str.split('').reverse().join('')
  }
};
