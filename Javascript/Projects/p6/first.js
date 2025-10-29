const zodiacSigns = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces" 
];

//Based on Date, Size 31
const Compliments = [
"Your kindness is a powerful force, touching everyone around you in the most beautiful way. You possess a warmth and empathy that makes people feel seen and valued, and your generous heart is a constant reminder of the good in the world",
"You are a truly thoughtful person, always remembering the little things that matter and going out of your way to make others feel special. Your consideration and care do not go unnoticed and your presence in my life is a gift I cherish deeply",
"I love the way you see the world, with such a unique and creative perspective that brings new ideas to every conversation. Your imagination and innovative thinking are brilliant and it's a joy to experience things through your eyes",
"Your passion for what you believe in is contagious and watching you pursue your goals with such fervor is incredibly inspiring. You have a fire within you that motivates everyone around you and your dedication is truly something to be admired",
"You are an exceptional listener, always making me feel heard and understood without judgment. Your ability to offer a supportive ear and thoughtful advice is a rare quality that makes me feel safe and respected",
"Your positivity is like a ray of sunshine on even the cloudiest of days, you have an effortless ability to find the silver lining in any situation. Being around you is like a happy little vacation and your optimism is truly infectious",
"I am so proud of your hard work and all that you have accomplished. Your commitment and perseverance are truly motivating and it is wonderful to see your efforts pay off in such a remarkable way",
"You have a natural ability to connect with people and make them feel comfortable and included. Your charismatic and welcoming nature draws others in and makes you the kind of person everyone wants to be around",
"Your calm and level-headed nature in complicated situations is so admirable. Regardless of the challenge, you maintain such composure and clarity, and it makes you an incredible person to lean on for support and guidance",
"I feel so comfortable with you because you are so authentic and real. There is no pretense, just a genuine, honest person, and that kind of transparency is a refreshing and beautiful quality to have",
"Your creative potential seems limitless and I am always in awe of the amazing things you dream up. Whether it's your ideas, your art, or your solutions, your mind is a fascinating and wonderful place",
"I am endlessly grateful for your friendship and the unwavering support you offer. You always have my back and your friendship has made my life so much better in countless ways",
"You have a remarkable way with words, whether you're telling a story or offering comfort, your communication is thoughtful and impactful. It's a joy to listen to you speak because you always know exactly what to say",
"Your confidence is incredibly inspiring and a pleasure to be around. You have a quiet self-assurance that makes you a natural leader and inspires those around you to feel more confident in themselves as well",
"I appreciate your honesty and how tactful you are, even when delivering a difficult truth. Your candor, combined with a kind approach, is a sign of great character and it's a trait I deeply respect",
"You bring so much joy to my life and have a talent for turning even the most mundane moments into something fun and exciting. Your enthusiasm is contagious and I love the energy you bring to every situation",
"Your curiosity about the world is so inspiring, you approach life with a genuine dedication to learning new things. It is a wonderful thing to witness your eagerness for new knowledge and experiences",
"I find myself constantly in awe of how you handle things. You have such grace and poise under pressure, and you navigate life's challenges with a quiet strength that is truly remarkable to watch"
];

const victimCardCompliment = [
"You always have so much fun, it's nice to see someone so carefree, I forget what that feels like after always putting everyone else's needs before my own.",
"I'm glad you're finally getting the recognition you deserve, I always did all the groundwork but never cared about the credit.",
"You're so talented, I always put my own passions aside to help others with theirs.",
"You're a natural leader, and I'm just here cleaning up all the messes no one else wants to deal with.",
"You're so lucky to have people who appreciate you, I just give and give without ever getting a thank you."
];

document.getElementById('astroForm');
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

const text = `Hi ${name} ${surname}, Your Zodiac sign is ${zodiacSigns[month-1]}
. ${Compliments[day-1]}. ${victimCardCompliment[year%20]}`;

document.getElementById('result').textContent = text;

})