function solution(arr, deleteList) {
    return arr.filter(number => deleteList.indexOf(number) === -1)
}