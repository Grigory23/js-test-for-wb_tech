exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    let num2binar = num.toString(2);
     return bit > num2binar.length ? 0 : parseInt(num2binar[num2binar.length - bit])
  },

  base10: function(str) {
    return parseInt(str, 2)
  },

  convertToBinary: function(num) {
    strNum = num.toString();
    let preBinar = parseInt(strNum ,10).toString(2);
    if(preBinar.length < 8){
      return `0${preBinar}`
    }
    else{
      return preBinar
    }
  },

  multiply: function(a, b) {
    return Number((a*b).toFixed(10))
  }
};
