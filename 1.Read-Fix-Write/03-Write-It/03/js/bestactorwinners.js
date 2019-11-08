const best=[
  {
    actor: "Forest Whitaker",
    film: "The Last King of Scotland",
    age: 45
  }, {
    actor: "Daniel Day-Lewis",
    film: "There Will Be Blood",
    age: 50
  }, {
    actor: "Sean Penn",
    film: "Milk",
    age: 48
  }, {
    actor: "Jeff Bridges",
    film: "Crazy Heart",
    age: 60
  }, {
    actor: "Colin Firth",
    film: "The King's Speech",
    age: 50
  }, {
    actor: "Jean Dujardin",
    film: "The Artist",
    age: 39
  }, {
    actor: "Daniel Day-Lewis",
    film: "Lincoln",
    age: 55
  }, {
    actor: "Matthew McConaughey",
    film: "Dallas Buyers Club",
    age: 44
  }, {
    actor: "Eddie Redmayne",
    film: "The Theory of Everything",
    age: 33
  }, {
    actor: "Leonardo DiCaprio",
    film: "The Revenant",
    age: 41
  }
]

const ages= best.map( age => age.age);
console.log(ages);


const reducer = (accumulator, currentValue) => accumulator + currentValue;
const agesSum = ages.reduce(reducer);

console.log(agesSum);

document.write(`<h3>` + "the sum of the winners ages = " + agesSum + `</h3>`);



const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;
const parseWinnerData = winner =>{
  let result = ``;
  for (const prop in winner){
    result += wrapWithTag(winner[prop],`p`);
  }
  return result;
};
const orderByAge = (a, b) => {
  return b.age - a.age;
};

const createList = best => {
  return `<ul>${best
    .sort(orderByAge)
    .map(winner => wrapWithTag(parseWinnerData(winner), `li`))
    .join(``)
  }</ul>`;
};

console.table(best);
document.write(createList(best));
console.table(best);

