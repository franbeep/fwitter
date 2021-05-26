// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const timeout = Math.floor(Math.random() * 2000);

  setTimeout(() => {
    res.status(200).json({
      // user here
      avatar: '/avatar.png',
      name: 'Fran',
      slug: 'franbeep',
      activity: 17,
      postCount: 751,
      likesCount: 8952,
      followers: 403,
      following: 5299,
    });
  }, timeout);
};
