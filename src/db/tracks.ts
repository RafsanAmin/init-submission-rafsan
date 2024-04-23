type track = {
  id: number;
  name: string;
  author: { name: string; id: number };
  trackUrl: string;
  thumbUrl: string;
  sells: string;
  bitcoin: number;
  etherium: number;
  dogecoin: number;
};

const tracks: track[] = [
  {
    id: 16,
    name: 'Xenogenesis',
    author: { name: 'TheFatRat', id: 1 },
    trackUrl: '/Tracks/TheFatRat - Xenogenesis.mp3',
    thumbUrl: '/thumbs/16.webp',
    sells: '40k',
    bitcoin: 5,
    etherium: 64,
    dogecoin: 3900,
  },
  {
    id: 4,
    name: 'Endlessmotion',
    author: { name: 'Bensound', id: 0 },
    trackUrl: '/Tracks/bensound-endlessmotion.mp3',
    thumbUrl: '/thumbs/4.jpg',
    sells: '38k',
    bitcoin: 9.1,
    etherium: 67,
    dogecoin: 4000,
  },
  {
    id: 9,
    name: 'Earthquake',
    author: { name: 'Din Radetinac', id: 5 },
    trackUrl: '/Tracks/Din Radetinac - Earthquake [FreeBackgroundMusic].mp3',
    thumbUrl: '/thumbs/9.jpg',
    sells: '28k',
    bitcoin: 4.7,
    etherium: 88,
    dogecoin: 7000,
  },
  {
    id: 17,
    name: 'Time_Lapse',
    author: { name: 'TheFatRat', id: 1 },
    trackUrl: '/Tracks/TheFatRat_-_Time_Lapse[Youtubetomp3.sc].mp3',
    thumbUrl: '/thumbs/17.webp',
    sells: '19k',
    bitcoin: 7.7,
    etherium: 78,
    dogecoin: 800,
  },
  {
    id: 11,
    name: 'Ofshane',
    author: { name: 'Koto San', id: 3 },
    trackUrl: '/Tracks/Koto San - Ofshane.mp3',
    thumbUrl: '/thumbs/11.jpg',
    sells: '8k',
    bitcoin: 3.5,
    etherium: 24,
    dogecoin: 5200,
  },
  {
    id: 14,
    name: 'Monody',
    author: { name: 'TheFatRat', id: 1 },
    trackUrl: '/Tracks/TheFatRat - Monody (feat Laura Brehm).mp3',
    thumbUrl: '/thumbs/14.jpg',
    sells: '7k',
    bitcoin: 0.8,
    etherium: 8,
    dogecoin: 9900,
  },
  {
    id: 8,
    name: 'Punky',
    author: { name: 'Bensound', id: 0 },
    trackUrl: '/Tracks/bensound-punky.mp3',
    thumbUrl: '/thumbs/8.jpg',
    sells: '6k',
    bitcoin: 5.7,
    etherium: 23,
    dogecoin: 2200,
  },
  {
    id: 15,
    name: 'Never Be Alone',
    author: { name: 'TheFatRat', id: 1 },
    trackUrl: '/Tracks/TheFatRat - Never Be Alone.mp3',
    thumbUrl: '/thumbs/15.png',
    sells: '2k',
    bitcoin: 0.5,
    etherium: 62,
    dogecoin: 5400,
  },
  {
    id: 1,
    name: 'Beyondtheline',
    author: { name: 'Bensound', id: 0 },
    trackUrl: '/Tracks/bensound-beyondtheline.mp3',
    thumbUrl: '/thumbs/1.jpg',
    sells: '982',
    bitcoin: 2.7,
    etherium: 8,
    dogecoin: 1100,
  },
  {
    id: 5,
    name: 'Erf',
    author: { name: 'Bensound', id: 0 },
    trackUrl: '/Tracks/bensound-erf.mp3',
    thumbUrl: '/thumbs/5.jpg',
    sells: '858',
    bitcoin: 8.3,
    etherium: 55,
    dogecoin: 8500,
  },
  {
    id: 7,
    name: 'Hipjazz',
    author: { name: 'Bensound', id: 0 },
    trackUrl: '/Tracks/bensound-hipjazz.mp3',
    thumbUrl: '/thumbs/7.jpg',
    sells: '792',
    bitcoin: 3.6,
    etherium: 58,
    dogecoin: 5900,
  },
  {
    id: 12,
    name: 'Nostalgia',
    author: { name: 'Liam & Vince', id: 2 },
    trackUrl: '/Tracks/Liam & Vince - Nostalgia - Free Background Music.mp3',
    thumbUrl: '/thumbs/12.jpg',
    sells: '589',
    bitcoin: 2.3,
    etherium: 30,
    dogecoin: 9100,
  },
  {
    id: 10,
    name: 'Sugarsnap',
    author: { name: 'Kolkian', id: 4 },
    trackUrl: '/Tracks/Kolkian - Sugarsnap.mp3',
    thumbUrl: '/thumbs/10.jpg',
    sells: '220',
    bitcoin: 8.5,
    etherium: 13,
    dogecoin: 2300,
  },
  {
    id: 6,
    name: 'Hey',
    author: { name: 'Bensound', id: 0 },
    trackUrl: '/Tracks/bensound-hey.mp3',
    thumbUrl: '/thumbs/6.jpg',
    sells: '140',
    bitcoin: 7.6,
    etherium: 77,
    dogecoin: 6900,
  },
  {
    id: 2,
    name: 'Countryboy',
    author: { name: 'Bensound', id: 0 },
    trackUrl: '/Tracks/bensound-countryboy.mp3',
    thumbUrl: '/thumbs/2.jpg',
    sells: '75',
    bitcoin: 5.1,
    etherium: 96,
    dogecoin: 9100,
  },
  {
    id: 13,
    name: 'Sun Of God',
    author: { name: 'Liam & Vince', id: 2 },
    trackUrl: '/Tracks/Liam & Vince - Sun Of God [FreeBackgroundMusic].mp3',
    thumbUrl: '/thumbs/13.jpg',
    sells: '40',
    bitcoin: 3.9,
    etherium: 14,
    dogecoin: 9700,
  },
  {
    id: 3,
    name: 'Dreams',
    author: { name: 'Bensound', id: 0 },
    trackUrl: '/Tracks/bensound-dreams.mp3',
    thumbUrl: '/thumbs/3.jpg',
    sells: '11',
    bitcoin: 4.7,
    etherium: 90,
    dogecoin: 5400,
  },
];

export const searchTracks = ({ name, min, max }: { name: string; min: number; max: number }) => {
  const indexes: number[] = [];
  tracks.forEach((s, i) => {
    console.log(s.name);
    if (
      (s.name.toLowerCase().includes(name.toLowerCase()) ||
        s.author.name.toLowerCase().includes(name.toLowerCase())) &&
      s.bitcoin >= min &&
      s.bitcoin <= max
    ) {
      indexes.push(i);
    }
  });
  return indexes;
};

export default tracks;
