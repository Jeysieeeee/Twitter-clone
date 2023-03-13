
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
};
interface ProfileDataProps {
  name: string;
  userName: string;
  profilePicture: string;
  time: string;
  content?: string;
  contentImage?: string;
  comment: number;
  retweet: number;
  likes: number;
  views: number;

};
interface SearchTrendProps {
  trend: string;
  title: string;
  countOfTweet: string;
}

export const TwitterData: TwitterDataProps[] = [
  {
    name: 'David Licauco',
    userName: ' @davidlicauco',
    profilePicture: 'https://pbs.twimg.com/profile_images/1387248456826187778/geuWEvFX.jpg',
    time: '2h',
    content: 'Wish you were here',
    contentImage: 'https://img.rawpixel.com/private/static/images/website/2022-05/sk9791-image-kwvuja96.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=13500e5125cd13300ba36ed88517f83e',
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
    contentImage: 'https://tricks.nayag.com/wp-content/uploads/2023/02/Freen-Sarocha-Birthday.jpg',
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
  {
    name: 'mikaella',
    userName: '@MikaJarapa',
    profilePicture: 'https://avatars.githubusercontent.com/u/76169868?v=4',
    time: '09 March 2023',
    content: `Happy Birthday Kuya Edwin!!!`,
    contentImage: 'https://media.licdn.com/dms/image/C5603AQHJZoUAiJvGzw/profile-displayphoto-shrink_800_800/0/1645710197796?e=2147483647&v=beta&t=dY-OItGQxe1DtYyQdfK-A5_yhBAu8p7lN231hwA_F4w',
    comment: 1,
    retweet: 2,
    likes: 0,
    views: 100,
  },

];
export const profileData: ProfileDataProps[] = [
  {
    name: 'ginkarla',
    userName: '@JeanGuarra',
    profilePicture: 'https://ca.slack-edge.com/T01J5LD19ML-U04QPUPK4SV-0f1d231bbb5d-512',
    time: '2m',
    content: `I wonder how those alleys of dead falling leaves made my eyes go hazel nuts--literally!`,
    comment: 3,
    retweet: 78,
    likes: 13,
    views: 90,
  },
  {
    name: 'ginkarla',
    userName: '@JeanGuarra',
    profilePicture: 'https://ca.slack-edge.com/T01J5LD19ML-U04QPUPK4SV-0f1d231bbb5d-512',
    time: '2m',
    content: `I spent almost the whole time not with a good book but with writing`,
    comment: 50,
    retweet: 90,
    likes: 458,
    views: 900,
  },
  {
    name: 'ginkarla',
    userName: '@JeanGuarra',
    profilePicture: 'https://ca.slack-edge.com/T01J5LD19ML-U04QPUPK4SV-0f1d231bbb5d-512',
    time: '5h',
    content: `I finally grip off my pen and let my inner goddess go across dimensions I've never gone.`,
    comment: 4,
    retweet: 82,
    likes: 175,
    views: 23,
  },
  {
    name: 'ginkarla',
    userName: '@JeanGuarra',
    profilePicture: 'https://ca.slack-edge.com/T01J5LD19ML-U04QPUPK4SV-0f1d231bbb5d-512',
    time: '8h',
    content: `may we never lose ourselves again in 2023`,
    comment: 104,
    retweet: 17000,
    likes: 44,
    views: 100600,
  },
  {
    name: 'ginkarla',
    userName: '@JeanGuarra',
    profilePicture: 'https://ca.slack-edge.com/T01J5LD19ML-U04QPUPK4SV-0f1d231bbb5d-512',
    time: '8h',
    contentImage: 'https://www.inspisuccess.com/wp-content/uploads/2018/12/Write-your-sad-times-in-sand-Write-your-good-times-in-stone-700x700.png',
    comment: 104,
    retweet: 17000,
    likes: 44,
    views: 100600,
  },
  {
    name: 'ginkarla',
    userName: '@JeanGuarra',
    profilePicture: 'https://ca.slack-edge.com/T01J5LD19ML-U04QPUPK4SV-0f1d231bbb5d-512',
    time: '07 Jan 2023',
    content: `As much as I wanted to write, I want to be written`,
    contentImage: 'https://i.pinimg.com/550x/50/93/5a/50935abc7d7388dbe2171bd5f0e589b4.jpg',
    comment: 104,
    retweet: 17000,
    likes: 44,
    views: 100600,
  },

];
export const searchTrend: SearchTrendProps[] = [
  {
    trend: `Trending`,
    title: `#beckfrenn`,
    countOfTweet: `1m Tweets`,
  },
  {
    trend: `Trending`,
    title: `President Marcos`,
    countOfTweet: `100k Tweets`,
  },
  {
    trend: `Trending in Philippines`,
    title: `NASA TAMANG FANDOM AKO`,
    countOfTweet: `15.9k Tweets`,
  },
  {
    trend: `Celebrities· Trending`,
    title: `#KissesDelavin`,
    countOfTweet: `32k Tweets`,
  },
  {
    trend: `Celebrities in Philippines`,
    title: `Robi`,
    countOfTweet: `10k Tweets`,
  }
]