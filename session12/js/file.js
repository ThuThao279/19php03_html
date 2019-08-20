// Bài 1: Bình = 3 * Minh;
// 		  Bình + ?? = 2 * Minh ??
function BT1() {
	var a = 27 ; 
	var b = a/3;
	for (var i = b; i < a/2; i++) {
		i += 1 ;
		a -= 1;
		var t = i - b;
	}
	document.write("số sách của Minh sau khi được Bình chuyển là : \n");
	document.write(t);
}
BT1();
document.write("</br>");
//Bài 2:
var soT = 2000;
var giaKeo = 200;
function BT2(){
	var soKeoMua = Math.floor(soT/giaKeo);
	var soVo = soKeoMua;
	var soKeoDoi = 0; 
	for (var soVo = soKeoMua; soVo > 1 ;) {
		soKeoDoi = Math.floor(soVo/2);
		soVo = soKeoDoi + (soVo - soKeoDoi * 2);
		soKeoMua += soKeoDoi;
	}
	document.write("số kẹo mua là : \n");
	document.write(soKeoMua);
}
BT2();
document.write("</br>");
// Bai 3:
function BT3() {
	var x, y, z, socach =0;
	var tong = 100;
	for(x =0; x <= tong/1; ++x) {
		for(y =0 ; y <= tong/2 ; ++y) {
			for(z =0; z<= tong/5; ++z) {
				if(1*x + 2*y + 5*z == 100){
					socach++;
				}
			}
		}
	}
	document.write("số cách chia tiền là :\n");
	document.write(socach);
}
BT3();
document.write("</br>")