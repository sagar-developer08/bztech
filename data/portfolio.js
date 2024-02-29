

const data = [
    {
        id: 1,
        title: "We Make It Possible",
        //slug: 'maybes-speaker',
        // category: ['Product', 'voice'],
        // description: 'Vin tries to reflect Diesel’s vision and combines.',
        src: 'https://res.cloudinary.com/dsj9t6adh/image/upload/v1708786599/ybpnhuvrouub62uugtdr.jpg ',
        overlay: 6
    },
    {
        id: 2,
        title: "Powering Your Digital Future",
        // slug: 'yaren-collection',
        src: '/img/project/project2/1.jpg',

        // category: ['pen'],
        // description: 'symbols through which express themselves.',
        overlay: 6,

    },
    {
        id: 3,
        title: "Innovative global software solutions provider",
        // slug: 'huggl-power-pack',
        src: '/img/project/project3/1.jpg',

        // category: ['induction'],
        // description: 'Huggl is an induction charging.',
        overlay: 6,
    },
    // {
    //     id: 4,
    //     title: "Principal Garden",
    //     slug: 'principal-garden',
    //     category: ['Architecture'],
    //     src: '/img/project/project4/1.jpg',
    //     description: 'We are thrilled to share our new reel with you all.',
    //     overlay: 2
    // },
    // {
    //     id: 5,
    //     title: "Small Silver Car",
    //     slug: 'small-silver-car',
    //     src: '/img/project/project5/1.jpg',

    //     category: ['Photography', 'Car'],
    //     description: 'Cal was first. The first public university in the great state of California.',
    //     overlay: 5
    // },
    // {
    //     id: 6,
    //     title: "Lengshuikeng",
    //     slug: 'lengshuikeng',
    //     category: ['Photography'],
    //     src: '/img/project/project6/1.jpg',
    //     description: 'Sometimes, we need to check the time.',
    //     overlay: 4
    // }
]

export const getPortfolioData = () => data;

export const getPortfolioItem = (value, whereName = "slug") => {
    return data.find(item => item[whereName] === value);
};
export const getPortfolioLink = (item) => {
    if (item)
        return item.slug && '/portfolio/' + item.slug;

    return '';
};