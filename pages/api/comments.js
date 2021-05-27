// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { genereateComment } from '../../data/comment';

export default (req, res) => {
  const timeout = Math.floor(Math.random() * 2000);
  const fakeComments = new Array(5).fill(1).map(_ => genereateComment());

  // if (req.query.id) {
  // }

  setTimeout(() => {
    res.status(200).json(fakeComments);
  }, timeout);
};
