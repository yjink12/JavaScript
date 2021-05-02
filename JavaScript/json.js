// JSON
// 1. object -> JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

// 배열 변환
json = JSON.stringify(['apple', 'banana']);
console.log(json);

// object -> JSON
const pig = {
    name: 'piglet',
    color: 'pink',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

// 위 object를 JSON으로 변환
json = JSON.stringify(pig);
console.log(json);

// 특정 property 를 JSON으로 변환
json = JSON.stringify(pig, ["name", "color"]);
console.log(json);

//  ~   callback 함수로
json = JSON.stringify(pig, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'jin' : value;
});
console.log(json);

// 2. JSON -> object
// parse(json)
console.clear();
json = JSON.stringify(pig);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
pig.jump();
// obj.jump();

console.log(pig.birthDate.getDate());
console.log(obj.birthDate.getDate());