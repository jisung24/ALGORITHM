function solution(my_string) {
    const lowerString = my_string.toLowerCase().split('');
    return lowerString.sort((a, b) => {
        if(a < b) return -1;
        if(a > b) return 1;
    }).join("");
}