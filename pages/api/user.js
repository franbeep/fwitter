export default (req, res) => {
  const timeout = Math.floor(Math.random() * 2000);

  if (req.query.slug) {
    console.log(`Requesting specific user: ${req.query.slug}`);
  }

  setTimeout(() => {
    res.status(200).json({
      avatar: '/avatar.png',
      background: '/background/bananas.png',
      name: 'Fran',
      slug: 'franbeep',
      activity: 11,
      postCount: 751,
      likesCount: 8952,
      followers: 403,
      following: 5299,
    });
  }, timeout);
};
