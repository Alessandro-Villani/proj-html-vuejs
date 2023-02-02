const headerMenus = {
    menuButtons: [
    {
        id: 1,
        title: 'home',
        submenu: {
            links: ['link 1', 'link 2', 'link 3', 'link 4', 'link 5'],
            show: false
        }
    },
    {
        id: 2,
        title: 'pages',
        submenu: {
            links: ['link 1', 'link 2', 'link 3', 'link 4', 'link 5'],
            show: false
        }
    },
    {
        id: 3,
        title: 'courses',
        submenu: {
            links: ['link 1', 'link 2', 'link 3', 'link 4', 'link 5'],
            show: false
        }
    },
    {
        id: 4,
        title: 'features',
         submenu: {
            links: ['link 1', 'link 2', 'link 3', 'link 4', 'link 5'],
            show: false
        }
    },
    {
        id: 5,
        title: 'blog',
         submenu: {
            links: ['link 1', 'link 2', 'link 3', 'link 4', 'link 5'],
            show: false
        }
    },
    {
        id: 6,
        title: 'shop',
         submenu: {
            links: ['link 1', 'link 2', 'link 3', 'link 4', 'link 5'],
            show: false
        }
    }
    ],
    socialButtons: ['fa-twitter', 'fa-facebook', 'fa-instagram', 'fa-linkedin']
};

const coachingCards = [
    {
        title: 'online courses',
        imgUrl: 'artist-box-image-01.png',
        text: 'Online art coaching now offers you a very powerful way to redesign your artist mind.' 
    },
    {
        title: 'one to one',
        imgUrl: 'artist-box-image-02.png',
        text: 'Getting the necessary clarity about the current state to help you improve your ability.' 
    },
    {
        title: 'anywhere',
        imgUrl: 'artist-box-image-03.png',
        text: 'Access to valuable and portable program which allow you to setup and live anywhere you want.' 
    },
    {
        title: 'on time',
        imgUrl: 'artist-box-image-04.png',
        text: "Punctuality is our top priority because it's an essential criteria to assess a program quality."
    },

];

const testimonialCards = [
    {
        title: 'Professional team of specialists and passionate mentors at reach',
        review: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
        name: 'Madley Pondor',
        role: 'IT Specialist', 
        imgUrl: 'artist-testimonial-avatar-01.jpg',
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos recusandae, dolorum placeat est aspernatur expedita rem quaerat quo.',
        name: 'Lorem Ipsum',
        role: 'Artist', 
        imgUrl: 'artist-testimonial-avatar-02.jpg',
    },
    {
        title: "It's a choice of quality for people with special needs",
        review: 'Ilm a very strict person so I require everything to be right and shine. MaxCoach guys just got me.',
        name: 'Florence Themes',
        role: 'Multimedia Admin', 
        imgUrl: 'artist-testimonial-avatar-03.jpg',
    },
    {
        title: 'High level of efficiency and scientific teaching methods',
        review: 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
        name: 'Mina Hollace',
        role: 'freelancer', 
        imgUrl: 'artist-testimonial-avatar-04.jpg',
    }
];

const coursesCards = [
    {
        title: 'the acrylic painting academy',
        price: 18,
        lessons: 4,
        students: 50, 
        imgUrl: 'artist-course-08-480x480.jpg',
        href: '#'
    },
    {
        title: 'drawing and shading complete course',
        price: 21,
        lessons: 14,
        students: 50, 
        imgUrl: 'artist-course-07-480x480.jpg',
        href: '#'
    },
    {
        title: 'the color theory for digital artist',
        price: 19,
        lessons: 7,
        students: 50, 
        imgUrl: 'artist-course-06-480x480.jpg',
        href: '#'
    },
    {
        title: 'ultimate guide to digital sketching for beginner',
        price: 35,
        lessons: 14,
        students: 50, 
        imgUrl: 'artist-course-05-480x480.jpg',
        href: '#'
    },
    {
        title: 'portrait drawing the smart way',
        price: 19,
        lessons: 2,
        students: 50, 
        imgUrl: 'artist-course-04-480x480.jpg',
        href: '#'
    },
    {
        title: 'mastering watercolor painting from beginner',
        price: 19,
        lessons: 9,
        students: 50, 
        imgUrl: 'artist-course-03-480x480.jpg',
        href: '#'
    },
    {
        title: 'the art & science of drawing',
        price: 25,
        lessons: 4,
        students: 50, 
        imgUrl: 'artist-course-02-480x480.jpg',
        href: '#'
    },
    {
        title: 'the colored pencil drawing course',
        price: 22,
        lessons: 6,
        students: 50, 
        imgUrl: 'artist-course-01-480x480.jpg',
        href: '#'
    }, 
];

const articleCards = [
    {
        title: 'brush strokes energize trees in paintings',
        date: new Date('05-15-2020'),
        views: 688, 
        imgUrl: 'artist-blog-03-480x356.jpeg',
        position: 'left',
        href: '#'
    },
    {
        title: 'connection between self-portraits and identity',
        date: new Date('05-15-2020'),
        views: 377, 
        imgUrl: 'artist-blog-02-500x680.jpg',
        position: 'main',
        href: '#'
    },
    {
        title: 'pocket-sized notebooks hold miniature paintings',
        date: new Date('05-15-2020'),
        views: 603, 
        imgUrl: 'artist-blog-01-480x356.jpg',
        position: 'right',
        href: '#'
    }
];

const eventCards = [
    {
        title: 'storytelling workshop',
        date: new Date('11-22-2020'),
        location: 'Texas, US', 
        imgUrl: 'artist-event-04-250x300.jpg',
        href: '#'
    },
    {
        title: 'painting art contest 2020',
        date: new Date('10-10-2020'),
        location: 'New York, US', 
        imgUrl: 'artist-event-03-250x300.jpg',
        href: '#'
    },
    {
        title: 'internal art fair 2020',
        date: new Date('11-23-2020'),
        location: 'Hamburg, Germany', 
        imgUrl: 'artist-event-02-250x300.jpg',
        href: '#'
    },
    {
        title: 'street performance: call for artist',
        date: new Date('12-15-2020'),
        location: 'Illinois, US', 
        imgUrl: 'artist-event-01-250x300.jpg',
        href: '#'
    }
];

const footerMenus = {
    menus: [
        {
            title: 'explore',
            links: ['Start here', 'Success story', 'Blog', 'Courses', 'Contact us']
        },
        {
            title: 'information',
            links: ['Membership', 'Purchase guide', 'Privacy policy', 'Terms of service']
        },
    ],
    igImagesUrls: ['ig1.jpg', 'ig2.jpg', 'ig3.jpg' ]
}

const coachingFeedback = {
    coachName: 'Martin Garrix',
    quote: 'I coach and mentor visual artists, like you, to Create Like You Mean lt',
    p1: 'As a coach and mentor, my ultimate goal is to motivate visual artists toward inspired action. I help you get you back on track to being the productive, creative, meaningful and authentic artist you truly want to be.l support artists in crafting and living a creative life as well as feeling good about themselves and their art.',
    p2: 'As an artist and an educator for nearly 30 years, I understand what it takes to create.'
}

export {headerMenus, coachingCards, testimonialCards, coursesCards, articleCards, eventCards, footerMenus, coachingFeedback}