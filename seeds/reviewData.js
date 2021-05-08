const { Review } = require('../models');

const reviewData = [
    {
        id: 01,
        title: "This place stinks..literally",
        rating: 5,
        review: "This bathroom was terrible. There was toilet paper scattered on the ground everywhere. I felt like I needed a hazmat suit. It's safe to say I will hold my pee the next time.",
        createdAt: 01 / 16 / 2019,
        loo_id: 02,
        user_id: 17
    },
    {
        id: 02,
        title: "The Holy Grail",
        rating: 5,
        review: "You guys, I've found it... The throne to end all thrones. This place has it all, including marble stall walls. That's right, you read right, marble walls! This rig can take anything you can throw at it. No log too long; no poo too plump. Comfort? It's like the seat was made for my buttcheeks. Excellent light for hours of optimum phone scrolling. This is my gift to you my fellow poo enthusiasts. Sit back, relax, and let the good times roll.",
        createdAt: 3 / 08 / 2021,
        loo_id: 04,
        user_id: 02
    },
    {
        id: 03,
        title: "This bathroom has seen some sh*t",
        rating: 1,
        review: "I'm not even sure this bathroom is still monitored? There was no toilet paper in any of the stalls and the trash was overflowing. The smell was something akin to that one time my dog threw up. In emergency, you gotta do what you gotta do - but if I were you, I'd find the nearest bush instead.",
        createdAt: 7 / 27 / 2013,
        loo_id: 06,
        user_id: 01
    },
    {
        id: 04,
        title: "First bathroom break of the new year!",
        rating: 4,
        review: "I don't mean to brag but I started the new year off right. I deviated from my normal bathroom of choice and I'm happy I did. It was well maintaned, quiet, and with just the right amount of privacy.",
        createdAt: 01 / 01 / 2021,
        loo_id: 08,
        user_id: 16
    },
    {
        id: 05,
        title: "A well polished turd",
        rating: 3,
        review: "This place looks cool but don't be fooled. It's not a powerful flush which resulted in a clogged/back-up situation. Let's just say it was an awkward first encounter with my significant others parents.",
        createdAt: 04 / 30 / 2019,
        loo_id: 10,
        user_id: 03
    },
    {
        id: 06,
        title: "TP for the bunghole",
        rating: 5,
        review: "I may be wrong, but this may be the softest toilet paper I've ever felt. I'm not sure which sweet angel decided to bless this commode with such softness but my humble hiney thanks you.",
        createdAt: 2 / 28 / 2018,
        loo_id: 01,
        user_id: 15
    },
    {
        id: 07,
        title: "Scared Sh*tless",
        rating: 2,
        review: "I had to stop for a quick ehem.. break. It's pretty scary looking from the outside because the light was burned out. I had to do my business in the dark! I don't know who's in charge of the upkeep on this place but I would suggest avoiding it until the light is fixed.",
        createdAt: 5 / 7 / 2020,
        loo_id: 03,
        user_id: 04
    },
    {
        id: 08,
        title: "So quiet you could hear the drop of a ... hat",
        rating: 4,
        review: "I like peace and quiet as much as the next guy but this stall was eerily quiet. I like a little elevator music when I'm doing my business. Otherwise, it was an average run of the mill kind of experience.",
        createdAt: 10 / 15 / 2018,
        loo_id: 05,
        user_id: 14
    },
    {
        id: 09,
        title: "Where are the changing tables?",
        rating: 3,
        review: "I ran into this bathroom because it was labeled a family bathroom but when I got inside there was no changing table. I ended up having to do an emergency change on a blanket on the floor. Other parents, you've been warned.",
        createdAt: 06 / 30 / 2019,
        loo_id: 07,
        user_id: 05
    },
    {
        id: 10,
        title: "Up sh*t creek without a paddle",
        rating: 1,
        review: "So, I sit down, relax, and pull out my phone. I'm scrolling through the latest news, allowing nature to run it's course (so to speak), living in sweet euphoric bliss. I've just submit a subpar words with friends retailiation when I reach back and freeze in terror. To my horror, there was no toilet paper.. anywhere. No paper napkins, no hand towel, nothing. I won't tell you how the story ends because I'd like for you to retain your innocence. Heed my warning sweet summer child. Come bearing TP if you're going to use this facility.",
        createdAt: 12 / 7 / 2017,
        loo_id: 09,
        user_id: 13
    },
    {
        id: 11,
        title: "You can have it all",
        rating: 5,
        review: "This bathroom is amazing! It's more like a luxury spa. It has showers, lockers, and warm towels by the sink. The hand soap smelled like heaven. Do youself a favor and check it out.",
        createdAt: 9 / 11 / 2014,
        loo_id: 05,
        user_id: 06
    },
    {
        id: 12,
        title: "Just your average go",
        rating: 3,
        review: "When I saw the amount of people going into and out of this bathroom I thought I was in for a decent wait. Au contraire mon frère, I was in and out in a jiffy.",
        createdAt: 3 / 19 / 2021,
        loo_id: 08,
        user_id: 12
    },
    {
        id: 13,
        title: "Papi doesn't wash his hands",
        rating: 2,
        review: "Two of the sinks were out of order so I had to wait to wash my hands. This was problematic because even though I waited, I saw several people exit without washing their hands. Be very afraid.",
        createdAt: 8 / 22 / 2019,
        loo_id: 01,
        user_id: 07
    },
    {
        id: 14,
        title: "Accessible",
        rating: 4,
        review: "This bathroom had an accessible button for the door which was really convenient. It was also very spacious which made it easy to maneuver. I appreciated the extra touches but removed a star because the trash needed replaced and had started to smell.",
        createdAt: 5 / 03 / 2017,
        loo_id: 10,
        user_id: 11
    },
    {
        id: 15,
        title: "Gender Neutral Paradise",
        rating: 3,
        review: "This bathroom is awesome! When you first walk in there are several doors in a row, kind of like stalls. Inside each stall is a small mini bathroom, complete with individual sinks. It was really nice and fancy. The facility seemed to be well stalked and clean. ",
        createdAt: 11 / 23 / 2021,
        loo_id: 01,
        user_id: 08
    },
    {
        id: 16,
        title: "BMotion sensors",
        rating: 2,
        review: "I'm all for energy saving lights but this has got to be some sort of oversight. Be prepared to do the chicken dance/Macarena/etc to keep the lights on. I guess it's one way to keep bathroom breaks short?",
        createdAt: 12 / 16 / 2021,
        loo_id: 03,
        user_id: 10
    },
    {
        id: 17,
        title: "Some things should be left to the imagination",
        rating: 1,
        review: "Would you like to see a 360 view of yourself going to the bathroom? Well, this place is for you! Picture a room, completely covered in mirrors. The toilet itself is silver and reflective. The ceiling light is an extravagant chandelier. I can appreciate the finer things in life but this is next level. It's a pass from me poo pourri!",
        createdAt: 4 / 30 / 2021,
        loo_id: 02,
        user_id: 09
    },
    {
        id: 18,
        title: "This place stinks..literally",
        rating: 1,
        review: "This bathroom was terrible. There was toilet paper scattered on the ground everywhere. I felt like I needed a hazmat suit. It's safe to say I will hold my pee the next time.",
        createdAt: 01 / 16 / 2019,
        loo_id: 03,
        user_id: 17
    },
    {
        id: 19,
        title: "The Holy Grail",
        rating: 5,
        review: "You guys, I've found it... The throne to end all thrones. This place has it all, including marble stall walls. That's right, you read right, marble walls! This rig can take anything you can throw at it. No log too long; no poo too plump. Comfort? It's like the seat was made for my buttcheeks. Excellent light for hours of optimum phone scrolling. This is my gift to you my fellow poo enthusiasts. Sit back, relax, and let the good times roll.",
        createdAt: 3 / 08 / 2021,
        loo_id: 05,
        user_id: 02
    },
    {
        id: 20,
        title: "This bathroom has seen some sh*t",
        rating: 1,
        review: "I'm not even sure this bathroom is still monitored? There was no toilet paper in any of the stalls and the trash was overflowing. The smell was something akin to that one time my dog threw up. In emergency, you gotta do what you gotta do - but if I were you, I'd find the nearest bush instead.",
        createdAt: 7 / 27 / 2013,
        loo_id: 04,
        user_id: 01
    },
    {
        id: 21,
        title: "First bathroom break of the new year!",
        rating: 4,
        review: "I don't mean to brag but I started the new year off right. I deviated from my normal bathroom of choice and I'm happy I did. It was well maintaned, quiet, and with just the right amount of privacy.",
        createdAt: 01 / 01 / 2021,
        loo_id: 06,
        user_id: 16
    },
    {
        id: 22,
        title: "A well polished turd",
        rating: 3,
        review: "This place looks cool but don't be fooled. It's not a powerful flush which resulted in a clogged/back-up situation. Let's just say it was an awkward first encounter with my significant others parents.",
        createdAt: 04 / 30 / 2019,
        loo_id: 07,
        user_id: 03
    },
    {
        id: 23,
        title: "TP for the bunghole",
        rating: 5,
        review: "I may be wrong, but this may be the softest toilet paper I've ever felt. I'm not sure which sweet angel decided to bless this commode with such softness but my humble hiney thanks you.",
        createdAt: 2 / 28 / 2018,
        loo_id: 09,
        user_id: 15
    },
    {
        id: 24,
        title: "Scared Sh*tless",
        rating: 2,
        review: "I had to stop for a quick ehem.. break. It's pretty scary looking from the outside because the light was burned out. I had to do my business in the dark! I don't know who's in charge of the upkeep on this place but I would suggest avoiding it until the light is fixed.",
        createdAt: 5 / 7 / 2020,
        loo_id: 10,
        user_id: 04
    },
    {
        id: 25,
        title: "So quiet you could hear the drop of a ... hat",
        rating: 4,
        review: "I like peace and quiet as much as the next guy but this stall was eerily quiet. I like a little elevator music when I'm doing my business. Otherwise, it was an average run of the mill kind of experience.",
        createdAt: 10 / 15 / 2018,
        loo_id: 08,
        user_id: 14
    },
    {
        id: 26,
        title: "Where are the changing tables?",
        rating: 3,
        review: "I ran into this bathroom because it was labeled a family bathroom but when I got inside there was no changing table. I ended up having to do an emergency change on a blanket on the floor. Other parents, you've been warned.",
        createdAt: 06 / 30 / 2019,
        loo_id: 02,
        user_id: 05
    },
    {
        id: 27,
        title: "Up sh*t creek without a paddle",
        rating: 1,
        review: "So, I sit down, relax, and pull out my phone. I'm scrolling through the latest news, allowing nature to run it's course (so to speak), living in sweet euphoric bliss. I've just submit a subpar words with friends retailiation when I reach back and freeze in terror. To my horror, there was no toilet paper.. anywhere. No paper napkins, no hand towel, nothing. I won't tell you how the story ends because I'd like for you to retain your innocence. Heed my warning sweet summer child. Come bearing TP if you're going to use this facility.",
        createdAt: 12 / 7 / 2017,
        loo_id: 01,
        user_id: 13
    },
    {
        id: 28,
        title: "You can have it all",
        rating: 5,
        review: "This bathroom is amazing! It's more like a luxury spa. It has showers, lockers, and warm towels by the sink. The hand soap smelled like heaven. Do youself a favor and check it out.",
        createdAt: 9 / 11 / 2014,
        loo_id: 25,
        user_id: 06
    },
    {
        id: 29,
        title: "Just your average go",
        rating: 3,
        review: "When I saw the amount of people going into and out of this bathroom I thought I was in for a decent wait. Au contraire mon frère, I was in and out in a jiffy.",
        createdAt: 3 / 19 / 2021,
        loo_id: 25,
        user_id: 12
    },
    {
        id: 30,
        title: "Papi doesn't wash his hands",
        rating: 2,
        review: "Two of the sinks were out of order so I had to wait to wash my hands. This was problematic because even though I waited, I saw several people exit without washing their hands. Be very afraid.",
        createdAt: 8 / 22 / 2019,
        loo_id: 26,
        user_id: 07
    },
    {
        id: 31,
        title: "Accessible",
        rating: 4,
        review: "This bathroom had an accessible button for the door which was really convenient. It was also very spacious which made it easy to maneuver. I appreciated the extra touches but removed a star because the trash needed replaced and had started to smell.",
        createdAt: 5 / 03 / 2017,
        loo_id: 27,
        user_id: 11
    },
    {
        id: 32,
        title: "Gender Neutral Paradise",
        rating: 3,
        review: "This bathroom is awesome! When you first walk in there are several doors in a row, kind of like stalls. Inside each stall is a small mini bathroom, complete with individual sinks. It was really nice and fancy. The facility seemed to be well stalked and clean. ",
        createdAt: 11 / 23 / 2021,
        loo_id: 27,
        user_id: 08
    },
    {
        id: 33,
        title: "BMotion sensors",
        rating: 2,
        review: "I'm all for energy saving lights but this has got to be some sort of oversight. Be prepared to do the chicken dance/Macarena/etc to keep the lights on. I guess it's one way to keep bathroom breaks short?",
        createdAt: 12 / 16 / 2021,
        loo_id: 28,
        user_id: 10
    },
    {
        id: 34,
        title: "Some things should be left to the imagination",
        rating: 1,
        review: "Would you like to see a 360 view of yourself going to the bathroom? Well, this place is for you! Picture a room, completely covered in mirrors. The toilet itself is silver and reflective. The ceiling light is an extravagant chandelier. I can appreciate the finer things in life but this is next level. It's a pass from me poo pourri!",
        createdAt: 4 / 30 / 2021,
        loo_id: 29,
        user_id: 09
    },
    {
        id: 35,
        title: "This place stinks..literally",
        rating: 1,
        review: "This bathroom was terrible. There was toilet paper scattered on the ground everywhere. I felt like I needed a hazmat suit. It's safe to say I will hold my pee the next time.",
        createdAt: 01 / 16 / 2019,
        loo_id: 30,
        user_id: 17
    },
    {
        id: 36,
        title: "The Holy Grail",
        rating: 5,
        review: "You guys, I've found it... The throne to end all thrones. This place has it all, including marble stall walls. That's right, you read right, marble walls! This rig can take anything you can throw at it. No log too long; no poo too plump. Comfort? It's like the seat was made for my buttcheeks. Excellent light for hours of optimum phone scrolling. This is my gift to you my fellow poo enthusiasts. Sit back, relax, and let the good times roll.",
        createdAt: 3 / 08 / 2021,
        loo_id: 29,
        user_id: 02
    },
    {
        id: 37,
        title: "This bathroom has seen some sh*t",
        rating: 1,
        review: "I'm not even sure this bathroom is still monitored? There was no toilet paper in any of the stalls and the trash was overflowing. The smell was something akin to that one time my dog threw up. In emergency, you gotta do what you gotta do - but if I were you, I'd find the nearest bush instead.",
        createdAt: 7 / 27 / 2013,
        loo_id: 28,
        user_id: 01
    },
    {
        id: 38,
        title: "First bathroom break of the new year!",
        rating: 4,
        review: "I don't mean to brag but I started the new year off right. I deviated from my normal bathroom of choice and I'm happy I did. It was well maintaned, quiet, and with just the right amount of privacy.",
        createdAt: 01 / 01 / 2021,
        loo_id: 27,
        user_id: 16
    },
    {
        id: 39,
        title: "A well polished turd",
        rating: 3,
        review: "This place looks cool but don't be fooled. It's not a powerful flush which resulted in a clogged/back-up situation. Let's just say it was an awkward first encounter with my significant others parents.",
        createdAt: 04 / 30 / 2019,
        loo_id: 26,
        user_id: 03
    },
    {
        id: 40,
        title: "TP for the bunghole",
        rating: 5,
        review: "I may be wrong, but this may be the softest toilet paper I've ever felt. I'm not sure which sweet angel decided to bless this commode with such softness but my humble hiney thanks you.",
        createdAt: 2 / 28 / 2018,
        loo_id: 25,
        user_id: 15
    },
    {
        id: 41,
        title: "Scared Sh*tless",
        rating: 2,
        review: "I had to stop for a quick ehem.. break. It's pretty scary looking from the outside because the light was burned out. I had to do my business in the dark! I don't know who's in charge of the upkeep on this place but I would suggest avoiding it until the light is fixed.",
        createdAt: 5 / 7 / 2020,
        loo_id: 31,
        user_id: 04
    },
    {
        id: 42,
        title: "So quiet you could hear the drop of a ... hat",
        rating: 4,
        review: "I like peace and quiet as much as the next guy but this stall was eerily quiet. I like a little elevator music when I'm doing my business. Otherwise, it was an average run of the mill kind of experience.",
        createdAt: 10 / 15 / 2018,
        loo_id: 32,
        user_id: 14
    },
    {
        id: 43,
        title: "Where are the changing tables?",
        rating: 3,
        review: "I ran into this bathroom because it was labeled a family bathroom but when I got inside there was no changing table. I ended up having to do an emergency change on a blanket on the floor. Other parents, you've been warned.",
        createdAt: 06 / 30 / 2019,
        loo_id: 31,
        user_id: 05
    },
    {
        id: 44,
        title: "Up sh*t creek without a paddle",
        rating: 1,
        review: "So, I sit down, relax, and pull out my phone. I'm scrolling through the latest news, allowing nature to run it's course (so to speak), living in sweet euphoric bliss. I've just submit a subpar words with friends retailiation when I reach back and freeze in terror. To my horror, there was no toilet paper.. anywhere. No paper napkins, no hand towel, nothing. I won't tell you how the story ends because I'd like for you to retain your innocence. Heed my warning sweet summer child. Come bearing TP if you're going to use this facility.",
        createdAt: 12 / 7 / 2017,
        loo_id: 32,
        user_id: 13
    },
    {
        id: 45,
        title: "You can have it all",
        rating: 5,
        review: "This bathroom is amazing! It's more like a luxury spa. It has showers, lockers, and warm towels by the sink. The hand soap smelled like heaven. Do youself a favor and check it out.",
        createdAt: 9 / 11 / 2014,
        loo_id: 33,
        user_id: 06
    },
    {
        id: 46,
        title: "Just your average go",
        rating: 3,
        review: "When I saw the amount of people going into and out of this bathroom I thought I was in for a decent wait. Au contraire mon frère, I was in and out in a jiffy.",
        createdAt: 3 / 19 / 2021,
        loo_id: 34,
        user_id: 12
    },
    {
        id: 47,
        title: "Papi doesn't wash his hands",
        rating: 2,
        review: "Two of the sinks were out of order so I had to wait to wash my hands. This was problematic because even though I waited, I saw several people exit without washing their hands. Be very afraid.",
        createdAt: 8 / 22 / 2019,
        loo_id: 33,
        user_id: 07
    },
    {
        id: 48,
        title: "Accessible",
        rating: 4,
        review: "This bathroom had an accessible button for the door which was really convenient. It was also very spacious which made it easy to maneuver. I appreciated the extra touches but removed a star because the trash needed replaced and had started to smell.",
        createdAt: 5 / 03 / 2017,
        loo_id: 35,
        user_id: 11
    },
    {
        id: 49,
        title: "Gender Neutral Paradise",
        rating: 3,
        review: "This bathroom is awesome! When you first walk in there are several doors in a row, kind of like stalls. Inside each stall is a small mini bathroom, complete with individual sinks. It was really nice and fancy. The facility seemed to be well stalked and clean. ",
        createdAt: 11 / 23 / 2021,
        loo_id: 36,
        user_id: 08
    },
    {
        id: 50,
        title: "BMotion sensors",
        rating: 2,
        review: "I'm all for energy saving lights but this has got to be some sort of oversight. Be prepared to do the chicken dance/Macarena/etc to keep the lights on. I guess it's one way to keep bathroom breaks short?",
        createdAt: 12 / 16 / 2021,
        loo_id: 37,
        user_id: 10
    },
    {
        id: 51,
        title: "Some things should be left to the imagination",
        rating: 1,
        review: "Would you like to see a 360 view of yourself going to the bathroom? Well, this place is for you! Picture a room, completely covered in mirrors. The toilet itself is silver and reflective. The ceiling light is an extravagant chandelier. I can appreciate the finer things in life but this is next level. It's a pass from me poo pourri!",
        createdAt: 4 / 30 / 2021,
        loo_id: 11,
        user_id: 09
    }
]

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
