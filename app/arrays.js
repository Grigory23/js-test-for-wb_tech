exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((sum, el)=>{
      return sum+el;
    },0)
  },

  remove: function(arr, item) {
    arr.forEach((el)=>{
      if (el===item){
        delete arr[arr.indexOf(el)]
      }
    });
    return arr.filter(el => el !== undefined);
  },

  removeWithoutCopy: function(arr, item) {
      arr.forEach((el ,index)=>{
          el === item? arr.splice(index, index+1) : false;
      });
      return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
      arr.pop();
      return arr;
  },

  prepend: function(arr, item) {
      arr.unshift(item);
      return arr;
  },

  curtail: function(arr) {
      arr.shift();
      return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0 ,item);
    return arr
  },

  count: function(arr, item) {
    let count = 0;
    for(let i = 0; i<=arr.length; i++){
      if(arr[i] === item){
        for(let k = i+1; k<=arr.length; k++){
          if (arr[i] === arr[k]){
            count++
          }
        }
      }
    }
    return count
  },

  duplicates: function(arr) {
    let arrOfDublicates = [];
    arr.forEach((el, index, arr)=>{
      for(let i = index + 1; i <= arr.length; i++){
        if (arr[i] === el && arrOfDublicates[arrOfDublicates.length-1] !== el){
          arrOfDublicates.push(el)
        }
      }
    });
    return arrOfDublicates
  },

  square: function(arr) {
    arr.forEach((item,index,arr)=>{
      arr[index] = Math.pow(item,2);
    });
      return arr
  },

  findAllOccurrences: function(arr, target) {
    const occurences = arr.map((el, index)=> {
      if(el === target){
        return index
      }
    });
    let result = occurences.filter(el=>{
       return !isNaN(el)
    });
      return result
  }
};
