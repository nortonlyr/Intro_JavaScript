// 計算2月份的天數

var year = 2020;
var month = 0;
if((year%4==0 && year % 100 != 0)||year%400==0) {  //判斷是否閏年
    month = 29;
}else{
    month=28;
}

