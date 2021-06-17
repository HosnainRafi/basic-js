var marks=[24,76,09,76,67,90,98,56,45];
var min=marks[0];
for (let i = 0; i < marks.length; i++) {
    var element=marks[i];
    if (element<min) {
     min=element;   
    }
}
console.log("min number is",min);