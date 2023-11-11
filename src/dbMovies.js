import avangers from'./assets/avangers.jpg';
import batman from './assets/batman.jpg';
import blackpanther from './assets/blackpanther.jpg';
//dbMovies contien liste de movie 
const dbMovies=[ {
    title: 'Avangers',
    description: 'Action movie',
    posterURL: avangers,
    rating: 10,
     trailerLink: "https://www.youtube.com/embed/6ZfuNTqbHE8?si=Irp_vJxZp6y9DWRa",
  },
  {
    title: 'Batman',
    description: 'Action Movie',
    posterURL: batman,
    rating: 9,
    trailerLink: "https://www.youtube.com/embed/NLOp_6uPccQ?si=za_eToWja8eMRzA7",
  },
  {
    title: 'Panther',
    description: 'Action Movie',
    posterURL: blackpanther,
    rating: 9,
    trailerLink: "https://www.youtube.com/embed/dxWvtMOGAhw?si=gg2B6xCgTLII03N1",
  },
];
export default dbMovies;