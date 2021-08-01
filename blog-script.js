const POSTS = [
    {
        id: 0,
        title: 'כותרת ראשונה',
        body: '0Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea nisi ipsa velit quod, nobis voluptatibus voluptatem laudantium omnis accusantium!',
    },
    {
        id: 1,
        title: 'כותרת שנייה',
        body: '1Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea nisi ipsa velit quod, nobis voluptatibus voluptatem laudantium omnis accusantium!',
    },
    {
        id: 2,
        title: 'כותרת שלישית',
        body: '2Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea nisi ipsa velit quod, nobis voluptatibus voluptatem laudantium omnis accusantium!',
    },
    {
        id: 3,
        title: 'כותרת רביעית',
        body: '3Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea nisi ipsa velit quod, nobis voluptatibus voluptatem laudantium omnis accusantium!',
    },
    {
        id: 4,
        title: 'כותרת חמישית',
        body: '4Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea nisi ipsa velit quod, nobis voluptatibus voluptatem laudantium omnis accusantium!',
    }
];

const posts = document.querySelectorAll('.post');
const titles = document.querySelectorAll('.title');
const navTitles = document.querySelectorAll('.nav-title');

for (let i = 0; i < POSTS.length; i++) {
    POSTS.map((obj) => {
        for (let j = 0; j < posts.length; j++) {
            if (obj.id === j) {
                titles[j].innerText = obj.title;
                posts[j].innerText = obj.body;
            }
        }
    });
}

for (let i = 1; i < POSTS.length; i++) {
    POSTS.filter((title) => title.id !== 0).map((title) => {
        for (let j = 0; j < navTitles.length; j++) {
            if (title.id - 1 === j) {
                navTitles[j].innerText = title.title;
            }
        }
    })
}