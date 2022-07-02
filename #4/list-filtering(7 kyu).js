function filter_list(param){
    return param.filter(val=> typeof val == "number");
}

console.log(filter_list([1,2,'a','b']));