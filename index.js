function superbowlWin(arr){
    let winObj = arr.find(obj => obj.result === 'W');
    return winObj === undefined ? undefined : winObj.year;
}