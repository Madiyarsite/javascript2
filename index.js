let money,
  time ;
function start(){
  money = +prompt('Ваш бюджет на месяц?');
  time = +prompt('Введите дату в формате YYYY-MM-DD');

  while(isNaN(money) || money == '' || money == null){
    money = +prompt('Ваш бюджет на месяц?', '');
  }
}
start();

let appData = {
  budjet: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true

}

function chooseExpencies(){
  for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ' '),
      b = prompt('Во сколько обойдется?', ' ');
    if ((typeof (a)) === 'string' && (typeof (a) != null) && (typeof (b) != null) &&
      a != '' && b != '' && a.length < 50) {
      console.log('done');
      appData.expenses[a] = b;
    } else {
      i = i - 1;  
    }
  
  };
}

chooseExpencies();



function detectDayBudget(){
 
    appData.moneyPerDay = (appData.budjet / 30).toFixed();
    alert('Бір күндік бюджет' + appData.moneyPerDay);
  
}
detectDayBudget();
function detectLevel() {                                                // Расчет уровня достатка
  if (appData.moneyPerDay < 100) {
      console.log ("Это минимальный уровень достатка!");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log ("Это средний уровень достатка!");
  } else if (appData.moneyPerDay > 2000) {
      console.log ("Это высокий уровень достатка!");
  } else {
      console.log ("Ошибочка...!");
  }
}
detectLevel();



function checkSavings(){
  if(appData.savings == true){
    let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("под какой процент?");
    appData.monthIncome = save/100/12*percent;
    alert("доход в месяц с вашего депозита" + appData.monthIncome);
  }
}
checkSavings();

function chooseOptExpenses(){
  for( let i = 0; i < 3; i++){
    let a = prompt("Статья необязательных расходов?", '');
    if((typeof(a)) === 'string' && (typeof(a)) !== null && a !== ''){
      appData.optionalExpenses[i] = a;
    }else{
      i = i -1;
    }
   

  }
}
chooseOptExpenses();

