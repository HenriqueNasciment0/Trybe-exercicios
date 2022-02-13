const names = [
    {id: 1, name: 'Paulo', age: 28},
    {id: 2, name: 'Henrique', age: 28},
    {id: 3, name: 'Nascimento', age: 29},
    {id: 04, name: 'Sousa', age: 30},
];

const sum = names.reduce((acc, { age }) => {
    acc[age] = acc[age] + 1 || 1;
    return acc;
}, {});

console.log(sum);