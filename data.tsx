import { Entypo } from '@expo/vector-icons';
interface TwitterDataProps {
  name: string;
  userName: string;
  profilePicture: string;
  time: string;
  content: string;
  contentImage?: string;
  comment: number;
  retweet: number;
  likes: number;
  views: number;
}

const TwitterData: TwitterDataProps[] = [
  {
    name: 'David Licauco',
    userName: ' @davidlicauco',
    profilePicture: 'https://pbs.twimg.com/profile_images/1387248456826187778/geuWEvFX.jpg',
    time: '2h',
    content: 'Wish you were here',
    contentImage:'https://img.rawpixel.com/private/static/images/website/2022-05/sk9791-image-kwvuja96.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=13500e5125cd13300ba36ed88517f83e',
    comment: 899,
    retweet: 2958,
    likes: 28200,
    views: 100200
  },
  {
    name: 'Luna',
    userName: 'solunayaa',
    profilePicture: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQbcbJ3B-_iDiQCpTQvXOVWDjUgBgCnlIkwnNF7d-aM2m6mrn6b',
    time: '5m',
    content: `Happy women's dayyy (ps. naloka ako sa hashtags ng twt hahshshshshss)`,
    comment: 500,
    retweet: 2958,
    likes: 28200,
    views: 20900
  },
  {
    name: `P'freen (real)`,
    userName: ' @srchafreen',
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-jCiadHUipe4Eu8uIqn6BdMnIE5JzU4XR_Q&usqp=CAU',
    time: '12h',
    content: 'Happy March!',
    contentImage:'https://tricks.nayag.com/wp-content/uploads/2023/02/Freen-Sarocha-Birthday.jpg',
    comment: 10000,
    retweet: 2908,
    likes: 3900,
    views: 100200
  },
  {
    name: `Inspiring Words`,
    userName: ' @VinoQoutes',
    profilePicture: 'https://i.pinimg.com/236x/d1/b2/95/d1b29575de6d0172cda5ef2e5403eb45.jpg',
    time: '5h',
    content: 'The tounge has no bones but is strong enough to break a heart. Be careful with your words.',
    comment: 4,
    retweet: 82,
    likes: 175,
    views: 23,
  },
  
]
export default TwitterData;
