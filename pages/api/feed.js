// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { generateFeedItem } from '../../data/feed';

export default (req, res) => {
  const timeout = Math.floor(Math.random() * 2000);

  const fakeFeed = new Array(5).fill(1).map(_ => generateFeedItem());

  setTimeout(() => {
    res.status(200).json(fakeFeed);
  }, timeout);
};
