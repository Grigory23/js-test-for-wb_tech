exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    let[a,b,c] = arr;
    return fn(a,b,c)
  },

  speak: function(fn, obj) {
    let bindFunc = fn.bind(obj);
    return bindFunc(obj)
  },

  functionFunction: function(str) {
    return function(str2){
      return str + ', ' + str2;
    }
  },

  makeClosures: function(arr, fn) {
      const funcs = [];
      for(let i = 0; i < arr.length; i++){
          funcs.push(() => fn(arr[i]))
      }
      return funcs
  },

  partial: function(fn, str1, str2) {
    return str3 => {
       return fn(str1, str2, str3)
    }
  },

  useArguments: function(...arr) {
    return arr.reduce((sum,el) => sum+el, 0)
  },

  callIt: function(fn) {
      let args = [];
      for (let i = 1;i<arguments.length;i++){
          args.push(arguments[i])
      }
      return fn(...args)
  }
  ,

  partialUsingArguments: function(fn,...arr) {
     return(...args)=>{
         return fn(...arr, ...args)
    }
  },

  curryIt: function(fn) {
        return a => b => c => fn(a,b,c)
  }
};
