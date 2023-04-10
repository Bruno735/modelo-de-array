function myfunction(a,b) {
    let array = [];

        if(a.indexOf(b) !== -1){
        array.push(b + a);
        return array;
} else {
    array.push(a + b)
    return array;
}

console.log(myfunction('a', 'b'));
}