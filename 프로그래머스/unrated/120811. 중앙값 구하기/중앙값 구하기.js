const solution = (arr = []) => {
        if(arr.length % 2 === 0) throw new Error("배열의 길이는 홀수여야합니다!");
        const sortedIncArr = arr.sort((a, b) => {
            if(a > b) return 1;
            if(a < b) return -1;
        })

        return sortedIncArr[parseInt(sortedIncArr.length / 2)];
    }