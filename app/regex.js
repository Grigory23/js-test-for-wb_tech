exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    const regexp = /[0-9]/ ;
    return regexp.test(str)
  },

  containsRepeatingLetter: function(str) {
    for (let i = 0; i<str.length;i++) {
      const regexp = new RegExp (`${str[i]}`, 'g');
      if(str.match(regexp).length > 1 && isNaN(parseInt(str[i]))){
        return true
      }
    }
    return false
  },


  endsWithVowel: function(str) {
   const regexp = new RegExp('.*[eyuioa]$', 'i')
      return regexp.test(str)
  },

  captureThreeNumbers: function(str) {
    const regexp = /\d{3}/;
    if(regexp.test(str)){
      return str.match(regexp)[0]
    }
    else return false
  }
  ,

  matchesPattern: function(str) {
      const regexp = /^\d{3}-\d{3}-\d{4}$/;
      return regexp.test(str)
  },

  isUSD: function(str) {
    const regexpInt = /^\$\d{1,3},\d{3},\d{3}$/ ;
    const regexpFloat = /^\$\d{1,3}(,\d{3})*\.\d{2}$/;
      return regexpInt.test(str)?true:regexpFloat.test(str)
  }
};


