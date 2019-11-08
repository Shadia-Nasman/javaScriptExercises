const shows=[
  {
    actor: `Forest Whitaker`,
    film: `The Last King of Scotland`,
    age: 45
  }, {
    actor: `Daniel Day-Lewis`,
    film: `There Will Be Blood`,
    age: 50
  }, {
    actor: `Sean Penn`,
    film: `Milk`,
    age: 48
  }, {
    actor: `Jeff Bridges`,
    film: `Crazy Heart`,
    age: 60
  }, {
    actor: `Colin Firth`,
    film: `The King's Speech`,
    age: 50
  }, {
    actor: `Jean Dujardin`,
    film: `The Artist`,
    age: 39
  }, {
    actor: `Matthew McConaughey`,
    film: `Dallas Buyers Club`,
    age: 44
  }, {
    actor: `Eddie Redmayne`,
    film: `The Theory of Everything`,
    age: 33
  }, {
    actor: `Leonardo DiCaprio`,
    film: `The Revenant`,
    age: 41
  }
]

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;
const names = shows.map(name =>( ((name.actor).split(' ')).slice(-1)).join()).sort();
console.log(names);



const writeTitle = title => {
  
  document.write(wrapWithTag(title, `li`));
};




document.write(`<ul>`);
names.forEach(show => writeTitle(show));

document.write(`</ul>`);


