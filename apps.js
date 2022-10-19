// let result;
// result = 5 * '2';
// console.log(result);

// let a = 10;
// let b = 10;
// if(a === b) {
//     console.log("to'g'ri");
// }else{
//     console.log("noto'g'ri");
// }


function piramida() {
    var soni = 5;
    var bosh = '';
    for (var i = 1; i <= soni; i++){    
        for(var j = 1; j <= i; j++){
            bosh += j + ' ';
        }
        console.log(bosh);
        bosh = '';
    }
}
piramida()