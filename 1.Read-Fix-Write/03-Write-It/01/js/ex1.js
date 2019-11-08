const movies = ['Martin Eden',
'La Belle Époque', 
'The Mustang','Joker',
'La Ragazza Nella Nebbia',
'Downton Abbey',
'Parasite',
'Once Upon a Time… in Hollywood',
'Hors normes' ,

];
const wrapWithTag = (content, tagname) => 
  `<${tagname}>${content}</${tagname}>`;


document.write(`<ul>`);

movies.forEach(movie => document.write(wrapWithTag(movie, `li`)));
document.write(`</ul>`);
