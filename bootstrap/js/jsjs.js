function charge (kw, option) {    

    var basicCharge = 0; //기본요금
    var kwCharge = 0;    //kw별 요금
    if(kw < 201) {
        basicCharge = 910;
        kwCharge = 93.3;

    }else if (kw > 201 && kw < 401) {
        basicCharge = 1600;
        kwCharge = 187.9;

    }else if (kw > 401) {
        basicCharge = 7300;
        kwCharge = 280.6;
    }
    //복지할인 해당여부
    var sale = ((option == 1) ? 1 : 0.9 );    
      //사용 kw 요금
    var sumCharge = basicCharge * kwCharge; 
    //최종 요금
    var totalCharge = (basicCharge + sumCharge) * sale;     
    
    console.log (basicCharge,kwCharge);
    console.log("sumCharge", sumCharge);
    console.log("totalCharge", totalCharge);

    return totalCharge;
    
}

console.log(charge(380,1))
