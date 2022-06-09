const names = [  // conta quantas pessoas tem a mesma idade
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

// --------

const products = [ // totabiliza quantidade de produtos e valor total
    { name: "Desinfetante Veja", price: 10, barCode: 98293489238},
    { name: "Ketchup Hellmann's", price: 8, barCode: 585122289238},
    { name: "Milho Enlatado Zero-Six", price: 6, barCode: 56862359487},
    { name: "Cereal Nescal Ball", price: 20, barCode: 19732584692},
    { name: "Biscoito Trakinas", price: 5, barCode: 16749583215},
  ];

  const total = products.reduce((acc, elem) => acc + elem.price, 0);
  console.log(total);

  const baseOject = {
      products: 0,
      totalPrice: 0,
  }

  const count = products.reduce((acc, elem) => {
      acc.products += 1;
      acc.totalPrice += elem.price
      return acc;
  }, baseOject);

  console.log(count);