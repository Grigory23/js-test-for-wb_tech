exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
    count: function (start, end) {
        console.log(start);
        let interval = setTimeout(()=>{
            let counter = 1;
            for (let i = start+1;i<=end;i++){
                setTimeout(()=>{
                  console.log(i)
                },100*counter);
                counter++
            }
        },0);
         this.cancel = function(){
            clearTimeout(interval)
         };
        return this;
    }
};