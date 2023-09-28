function solution(num_list) {
    const evenNumbers = num_list.filter(e => e % 2 === 0).length;
    return [evenNumbers, num_list.length - evenNumbers];
}