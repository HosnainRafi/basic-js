// function brickCalculator(floor) {
//         if (floor<=10) {
//             feet=floor*15;
//             return feet;
//         }
//         if (floor<=20) {
//             feet=(10*15)+((floor-10)*12);
//         }
//         if (floor>20) {
//             feet=(10*15)+(10*12)+(floor-20)*10;
//         }
//         var totalBrick=feet*1000;
//         return totalBrick;
// }

// var result=brickCalculator(30);
// console.log(result);


function brickCalculator(floor) {
    if (floor<0) {
       console.log('Please correct your value.'); 
    }
    else{
        if (floor<=10) {
            feet=floor*15;
            return feet;
        }
        if (floor<=20) {
            feet=(10*15)+((floor-10)*12);
        }
        if (floor>20) {
            feet=(10*15)+(10*12)+(floor-20)*10;
        }
        var totalBrick=feet*1000;
    }
    
    return totalBrick;
}

var result=brickCalculator(-30);
console.log(result);
