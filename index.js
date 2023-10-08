const money = +prompt('Ваш бюджет на месяц?'),
      time = +prompt('Введите дату в формате YYYY-MM-DD');

      let appData = {
        budjet: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false

      }







for(let i = 0; i < 2; i++){
 let a = prompt('Введите обязательную статью расходов в этом месяце', ' '),
    b = prompt('Во сколько обойдется?', ' ');
    if((typeof(a)) === 'string' && (typeof(a) != null) && (typeof(b) != null)
     && a != '' && b != '' && a.length < 50){
    console.log('done');
      appData.expenses[a] = b;
    }else{
      
    }
    
};
appData.moneyPerDay = appData.budjet/30;


alert('Бір күндік бюджет' + appData.moneyPerDay);


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
