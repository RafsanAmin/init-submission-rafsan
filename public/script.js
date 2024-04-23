const fs = require('fs');

const files = fs.readdirSync('./tracks/');

const tracks = [];
const authorsObj = {};
let authorCount = 1;

files.forEach((s, index) => {
  const arr = s.split('-');
  const author = arr[0].replace('_', '').trim().replace('.mp3', '');
  let name;
  if (arr[1]) {
    name = arr[1].replace('_', '').replace(' [FreeBackgroundMusic]', '').trim().replace('.mp3', '');
  }
  if (!authorsObj[author]) {
    authorsObj[author] = { id: authorCount++, musics: 0 };
  }
  authorsObj[author].musics++;
  tracks.push({
    id: index + 1,
    name: name?.charAt(0).toUpperCase() + name?.slice(1),
    author: {
      name: author?.charAt(0).toUpperCase() + author?.slice(1),
      id: authorsObj[author].id,
    },
    trackUrl: '/Tracks/' + s,
    thumbUrl: '/thumbs/' + (index + 1) + '.jpg',
    sells: (2 + Math.floor(Math.random() * 100)).toString(),
    bitcoin: (2 + Math.floor(Math.random() * 99)) / 10,
    etherium: 2 + Math.floor(Math.random() * 99),
    dogecoin: (2 + Math.floor(Math.random() * 99)) * 100,
  });
});

const tracksShuffled = [];
const temp = [];
const authors = [];

while (tracksShuffled.length < tracks.length) {
  const random = Math.floor(Math.random() * tracks.length);
  if (!temp.includes(random)) {
    temp.push(random);
    tracksShuffled.push(tracks[random]);
  }
}

Object.keys(authorsObj).forEach((s, index) => {
  authors.push({
    name: s,
    ...authorsObj[s],
  });
});

fs.writeFileSync('./tracks.json', JSON.stringify(tracksShuffled), { encoding: 'utf-8' });
fs.writeFileSync('./authors.json', JSON.stringify(authors), { encoding: 'utf-8' });
