import { NextResponse } from 'next/server';

const posts = [
  {
    slug: 'tweet-1',
    title: 'Excited about the weekend updated!',
    body: 'Looking forward to some relaxation and fun activities. 😊 #WeekendVibes',
  },
  {
    slug: 'tweet-2',
    title: 'Just finished a great book! updated',
    body: "I couldn't put it down until I read the last page. Highly recommend! 📚 #BookRecommendation",
  },
  {
    slug: 'tweet-3',
    title: 'Enjoying a delicious meal',
    body: 'Tried a new restaurant today, and the food was amazing. 🍔🍟 #Foodie',
  },
  {
    slug: 'tweet-4',
    title: 'Sunny day at the beach',
    body: 'Spent the day soaking up the sun and playing in the waves. 🏖️ #BeachDay',
  },
  {
    slug: 'tweet-5',
    title: 'Movie night with friends',
    body: 'Watching classic movies and munching on popcorn. 🍿🎥 #MovieNight',
  },
  {
    slug: 'tweet-6',
    title: 'Learning something new',
    body: "Started a new course today, and I'm excited to expand my knowledge. 📚🧠 #LearningJourney",
  },
  {
    slug: 'tweet-7',
    title: 'Gardening day',
    body: 'Spent the morning planting flowers and vegetables in my garden. 🌼🌱 #GreenThumb',
  },
  {
    slug: 'tweet-8',
    title: 'Family picnic',
    body: 'Had a wonderful picnic with my family at the park. Great food and even better company. ❤️🍉 #FamilyTime',
  },
  {
    slug: 'tweet-9',
    title: 'Early morning hike',
    body: "Caught the sunrise on a refreshing hike. Nature's beauty is breathtaking. 🌄 #HikingAdventure",
  },
  {
    slug: 'tweet-10',
    title: 'Tech gadgets galore',
    body: "Just got my hands on the latest gadgets. Can't wait to explore their features. 📱💻 #TechEnthusiast",
  },
];

export async function GET() {
  return NextResponse.json(posts);
}
