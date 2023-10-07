if(2*4 == 8){
    console.log('durys');
}else{
    console.log('durys emes');
};

if(1){
    console.log('arkasan durys');
};

let num =50;
(num == 50) ? console.log('durys') : console.log('durys emes');

switch (num){
    case num < 49:
        console.log('az')
        break;
    case num > 60:
        console.log('kop')
        break;
    case num > 65:
        console.log('kop')
        break;
    case 50:
        console.log('durys')
        break;
    default:
        console.log('birnarse durys emes')
        break;
}
// case num == 50:  дұрыс емес

let num = 50;

while (num < 55){
    console.log(num);
    num++;
}

let num = 50;

do{
    console.log(num);
    num++;
}
while(num < 55)

for (let i = 1; i < 8; i++){
    if(i == 6){
        break
    }
    if(i == 2){
        continue
    }  
    console.log(i)
}