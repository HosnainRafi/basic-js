var marks=[40,87,90,98,46,26,09,67,69,76];
var max= marks[0];
for ( i = 0; i < marks.length; i++) {
    var element=marks[i];
    if (element>max) {
        max=element;
    }
}
console.log("max value is",max);