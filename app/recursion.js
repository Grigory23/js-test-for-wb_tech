exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
      const fileList = [];
      function getFiles(d){
          d.files.forEach((el)=>{
              if(typeof el === 'string'){
                  fileList.push(el)
              }
              else if(typeof el === 'object'){
                  getFiles(el)
              }
          });
      }
      function filterFiles (arr,dN){
          let fiteredFileList = arr.filter(el=>{
              if(el.includes(dN)){
                  return el
              }
          });
          return fiteredFileList
      }
      getFiles(data);
      return dirName? filterFiles(fileList, dirName): fileList;
  },

  permute: function(arr) {
      let permArr = [],
          usedChars = [];

      function permuteFunc(input) {
          let currentChar;
          for (let i = 0; i < input.length; i++) {
              currentChar = input.splice(i, 1)[0];
              usedChars.push(currentChar);
              if (input.length === 0) {
                  permArr.push(usedChars.slice());
              }
              permuteFunc(input);
              input.splice(i, 0, currentChar);
              usedChars.pop();
          }
          return permArr
      }
    return permuteFunc(arr)

  },

  fibonacci: function(n) {
      function fb(num) {
        return num <= 2 ? 1 : fb(num-1) + fb(num-2);
      }
      return fb(n);
  },

  validParentheses: function(n) {
      let leftP = '(';
      let rightP = ')';

      function makeCombination(num){
          if(num === 0){
              return ['']
          }
          let combinations = [];
          for(let i = 0; i < num; ++i){
              let lefts = makeCombination(i);
              let rights = makeCombination(num - i - 1);

                for(let l = 0; l < lefts.length; ++l){
                    for(let r = 0; r< rights.length; ++r){
                        combinations.push(leftP + lefts[l] + rightP + rights[r])
                    }
                }
          }
          return combinations;
      }
      return makeCombination(n);
  }
};