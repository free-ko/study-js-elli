// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruit.join(',');
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = '🍊, 🍋, 🍌, 🍍';
    const result = fruits.split(',');
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5]
    const result = array.reverse();
    console.log(result);
    console.log(array); // 기존에 있는 배열도 리버스 해버림
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result);
    console.log(array);
}

const students = {
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
};

// Q5. find a student with the score 90
{
    const result = students.find((student) => {
        return student.score === 90;
    });
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    console.clear();
    const result = students.some((students) => student.score < 50);
    console.log(result);

    const result2 = !student.every((student) => student.score >= 50)
    console.log(result2);
}

console.clear();
// Q9. compute students' average score
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
        .map((student) => student.score) // 순차적으로 적용됨 밑으로 갈 수록
        .join();
    console.log(result);
}

// Bonus! Do Q.10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
        .map((student) => student.score)
        .sort((a, b) => a - b) // 음수가 나올 경우 작은 것 부터 정렬해서 배열 만듬
        .join(); // 배열을 스트링으로 바꿈
    console.log(result);
}