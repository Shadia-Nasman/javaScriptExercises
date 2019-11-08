const tvshows = [
  `legion`,
  `sneaky pete`,
  `santa clarita diet`,
  `riverdale`,
  `the young pope`,
  `a series of unfortunate events`,
  `taboo`,
  `colony`,
  `24: legacy`,
  `speechless`,
  `scherlock`,
  `stranger things`,
  `this is us`,
  `timeless`,
  `the oa`,
];


document.write(`<ol>`);

for (let i = 0; i < tvshows.length; i++) {
  tvshows.reverse(); // display reversed items
  //tvshows.sort(); //sort acoording to  UTF-16
  document.write(`<li>${tvshows[i]}</li>`);

}
document.write(`</ol>`);

