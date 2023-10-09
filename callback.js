function learnJs(callback, learn ){
  learn();
    callback();
}

function done(){
    console.log('Я учу javascript')
}

function js(){
   console.log('я прошел Javascript')
}
learnJs(done, js)
    
