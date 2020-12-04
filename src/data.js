//User Images
import Alexander from './images/users/Alexander.jpg';
import Darius from './images/users/Darius.jpg';
import Parmenion from './images/users/Parmenion.jpg';
import Roxana from './images/users/Roxana.jpg';
import Ptolemy from './images/users/Ptolemy.jpg';
import Seleucus from './images/users/Seleucus.jpg';
import Cleitus from './images/users/Cleitus.jpg';
import Persians from './images/users/Persians.jpg';
import Army from './images/users/Army.jpg';

// Post Images
import Issus from './images/posts/issus.jpg';
import Ammon from './images/posts/ammon.jpg';
import PtolemyPost from './images/posts/ptolemy.jpg';

const generateRandomLikes = () => Math.floor(Math.random() * (1000 + 1));

export const USER_DATA = {
  Alexander: { image: Alexander, username: 'Alexander' },
  Darius: { image: Darius, username: 'Darius' },
  Parmenion: { image: Parmenion, username: 'Parmenion' },
  Roxana: { image: Roxana, username: 'Roxana' },
  Ptolemy: { image: Ptolemy, username: 'Ptolemy' },
  Seleucus: { image: Seleucus, username: 'Seleucus' },
  Cleitus: { image: Cleitus, username: 'Cleitus' },
  Persians: { image: Persians, username: 'Persians' },
  Army: { image: Army, username: 'The Army' },
};

export const POSTS = [
  {
    author: USER_DATA.Alexander,
    description: 'Just finished the batte of Issus, look at Darius run 😂 #scared',
    location: 'Issus',
    image: Issus,
    likes: generateRandomLikes(),
    comments: [
      { author: USER_DATA.Darius, text: "I do not approve of this.. I'll be back" },
      { author: USER_DATA.Parmenion, text: "Your Dad would be proud! Lets show those Persians who's boss! #Macedonia" },
      {
        author: USER_DATA.Army,
        text: 'For the Greeks!',
      },
    ],
  },
  {
    author: USER_DATA.Alexander,
    description:
      'Enjoying my time in Egypt, visiting my ancestor Heracles old stomping grounds. Can you believe the oracle of Zeus Ammon called me “O pai Dios!” #SonOfZeus',
    location: 'Oracle of Zeus Ammon',
    image: Ammon,
    likes: generateRandomLikes(),
    comments: [
      { author: USER_DATA.Cleitus, text: 'Umm... I think I heard something different?' },
      { author: USER_DATA.Ptolemy, text: 'Wow! Btw love the new Alexandria, think I might retire here some day 🏖' },
      {
        author: USER_DATA.Army,
        text: '🧐',
      },
    ],
  },
  {
    author: USER_DATA.Ptolemy,
    description: 'Having a 50% off on all my Alexander merch this friday. #BlackFridayDeals',
    location: 'Alexandria',
    image: PtolemyPost,
    likes: generateRandomLikes(),
    comments: [
      { author: USER_DATA.Seleucus, text: "Nice! I'll take 50. Miss that guy 🥲" },
      { author: USER_DATA.Roxana, text: 'How dare you profit off of my husbands image 😡' },
      {
        author: USER_DATA.Persians,
        text: '💸 take my money',
      },
    ],
  },
];

// Stories include every user except Alexander
export const STORIES = Object.values(USER_DATA).slice(1);
