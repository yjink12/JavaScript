// Q1. make a string out of an array
// 배열을 string으로 변환
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join();
  console.log(result);
}


// Q2. make an array out of a string
// string을 배열로 변환
{
  const fruits2 = '🍎, 🥝, 🍌, 🍒';
  const result2 = fruits2.split(',');
  console.log(result2);
}


// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const array2 = array.reverse();
  console.log(array2);
  console.log(array);  //배열 자체를 변환, 변환한 값을 리턴
  
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const array2 = array.slice(2, 5);
  console.log(array2);      // [3, 4, 5]
  console.log(array);       // [1, 2, 3, 4, 5]
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result3 = students.find((student) => student.score === 90);
  console.log(result3);
} 

// Q6. make an array of enrolled students
{
  const result4 = students.filter((student) => student.enrolled);
  console.log(result4);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result5 = students.map((student) => student.score);
  console.log(result5);
}

// Q8. check if there is a student with the score lower than 50
{
  const result6 = students.some((student) => student.score < 50);
  console.log(result6);     //true

  // 참고 every()
  const result7 = students.every((student) => student.score < 50);
  console.log(result7);     //true
}

// Q9. compute students' average score
{
  const result8 = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result8 / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result9 = students
  .map((student) => student.score)
  .filter((score) => score >= 50)
  .join();
  console.log(result9);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result10 = students.map((student) => student.score)
  .sort((a, b) => a - b)
  .join();
  console.log(result10);
}
