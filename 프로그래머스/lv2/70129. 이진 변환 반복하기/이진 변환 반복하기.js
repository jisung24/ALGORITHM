function solution(s) {
    let totalCnt = 0;
    let zeroCnt = 0;

    // 이진변환은 2단계를 거치는데, 이 두 단계의 반복횟수!

    // (1, 2)  (1, 2)  (1, 2) 이러면 총 3번이 되는거야!!
    while (s !== "1") {
        totalCnt += 1;
        // 1. x의 모든 0을 제거한다.
        let sLen = s.length; // 원본 s의 길이!
        s = s.replaceAll("0", ""); // 제거를 하는데... 제거된 0의 개수를 적어주자! (원본과 비겨!)
        zeroCnt += sLen - s.length;
        
        // 2. s의 길이를 2진수로 바꾸기!
        let len = s.length;
        let two = len.toString(2); //
        s = two; // s를 two로 바꾸기...!
    }

    return [totalCnt, zeroCnt];
}