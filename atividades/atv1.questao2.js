function questao2(){
    var n1 = new Number(10);
    var n2 = new Number(3);
    var n3 = new Number(9);
    var n4 = new Number(99.9);
    var n5 = new Number(721);
    console.log(n1, n2, n3, n4, n5);
    
    var n1 = new Number(10);
    let valide = n1 < Number.MAX_VALUE;
    console.log(valide);
    
    var n2 = new Number(3);
    let validar = n2 == Number.NaN;
    console.log(validar);
    
    var n5 = new Number(721);
    var n3 = new Number(9);
    let conferir = n5 <= n3;
    console.log(conferir);
}
