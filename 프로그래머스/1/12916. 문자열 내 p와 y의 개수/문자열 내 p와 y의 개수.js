const solution = (str) => {
    let p = 0;
    let y = 0;
    
    for(let c of str.toUpperCase()){
        if(c === 'P') p += 1
        else if(c === 'Y') y += 1
    }
    
    return p === y
}