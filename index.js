// In this challenge, you’ll have a function that takes an array as input and returns an array. But if all goes according to plan, it’ll remove the negative numbers. This is another example of a task that’ll be useful when combing through data and looking for clever ways to eliminate “bad data.”

const array = [-2,-1,0,1,2]

function removeNegNum(numbers){
    return numbers.filter(function(number){
        return number >= 0;
    })
}

let filterNumbers = removeNegNum(array)
console.log(filterNumbers)

