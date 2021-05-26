// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const timeout = Math.floor(Math.random() * 2000);

  setTimeout(() => {
    res.status(200).json([
      {
        image: '/suggestions/alicel.jpg',
        slug: 'alicel',
        category: 'Photography',
        title: 'Alicel',
        onFire: true,
        numberOfFollowers: 378126,
      },
      {
        image: '/suggestions/toy.jpg',
        slug: 'thetoymaker',
        category: 'Toys',
        title: 'Rubris Toy Maker',
        onFire: false,
        numberOfFollowers: 7428756,
      },
      {
        image: '/suggestions/mythos.jpg',
        slug: 'mythostudio',
        category: '3D Modelling',
        title: 'Mythos - Art Studio',
        onFire: false,
        numberOfFollowers: 98471036,
      },
    ]);
  }, timeout);
};
