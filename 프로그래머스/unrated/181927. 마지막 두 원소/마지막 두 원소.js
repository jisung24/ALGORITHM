function solution(num_list) {
    const last = num_list.at(-1);
    const beforeLast = num_list.at(-2);
    
    last > beforeLast ? num_list.push(last - beforeLast) : num_list.push(last * 2);
    return num_list 
}