//1.
function solution(num_list) {
    let jjak=0;
    let hol=0;
    for(let i=0;i<num_list.length;i++){
        if(num_list[i]%2==0){
            jjak+=1
        } else {
            hol+=1
        }
    }
    return [jjak, hol]
}

//2.
function solution(my_string, letter) {
    return my_string.replaceAll(letter, '')
}

//3.
function solution(numbers) {
    let max=0;
    for(let i=0;i<numbers.length;i++){
        for(let j=0;j<numbers.length;j++){
            if(i==j){
                continue
            } else if(numbers[i]*numbers[j]>max){
                max=numbers[i]*numbers[j];
            }
        }
    }
    return max
}

//4.
function solution(money) {
    let count=Math.floor(money/5500);
    let change=money%5500;
    return [count, change];
}