var n=5, i, j;
var dem=1;
for (var i=1; i<=5; i++){
    for (var j=1; j<=i; j++) {
        document.write(dem+'');
        dem++;
    }
    document.write('</br>');
}
document.write('BT2 </br>');
var sodola = 0;
var soeuro = 0;
var sokeo = 0;
while (sokeo < 50) {
    soeuro += 3;
    sodola -= 5;
    sokeo ++;
    while (soeuro > 0) {
        soeuro -= 2;
        sodola += 3;
        sokeo++;
    }
}
document.write("so dola de mua 50 keo la:" + sodola);