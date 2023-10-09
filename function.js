
// функцияның ішіндегі айнымалы сыртта көрінбейді
function fun(){
    let num = 5;
  }
  console.log(num);
  
  
  let func = () =>{
    return number = 6;
  }
  number = func()
  console.log(number)
  
  // функция алдын жасаған айнымалы функция ішінде өзгертуге болады
  
  let num = 10;
  function vareibled(){
    num = 20;
    console.log(num);
  
  }
  vareibled();
  console.log(num);
  
  
  // РЕТУРН ВЕРНЕТ ПЕРЕМЕННУЮ В ГЛОБАЛЬНУЮ
  function retVar(){
    let num = 50;
    return num;
  }
  
  let anotherVar = retVar();
  
  console.log(anotherVar);
  
  
  //функйия диклорейшн можно до функций объявлять они как вар создаются в начале
  
  console.log(calc(4, 3));
  
  function calc(a,b){
    return (a+b)
  }
  
  console.log(calc(4, 5));
  
  
  // функция экспрешн создаются только тогда когда код до него доходит. нельзя до функций объявлять
  let calc = function(a,b){
    return (a+b)
  }
  
  console.log(calc(4,5));
  
  let calc = (a,b) => a+b;
  