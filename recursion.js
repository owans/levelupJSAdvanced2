function myList(a){
    return a;
};

console.log(myList(5))


let b = myList();

function recurNum(b){
    if (b === 0){
        return b + 1;
    }else{
        return b + (b * 1);
    }
}
console.log(recurNum(5))
