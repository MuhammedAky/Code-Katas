function centuryFromYear(year){
    const century   = Math.floor(year / 100);
    const decade    = year % 100;

    return decade == 0 ? century : century + 1;
}

console.log(centuryFromYear(1705)); // 18
console.log(centuryFromYear(1900)); // 19
console.log(centuryFromYear(1601)); // 17
console.log(centuryFromYear(2000)); // 20