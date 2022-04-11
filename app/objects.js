exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj)
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting
  },

  iterate: function(obj) {
    let a = Object.entries(obj);
      let b =[];
      a.forEach(([key, value])=>{
        b.push(`${key}: ${value}`)
      });
      return b
  }
};
