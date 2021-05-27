import { generateFeedItem } from '../../data/feed';

export default (req, res) => {
  const timeout = Math.floor(Math.random() * 2000);
  const fakePost = generateFeedItem();

  // if (req.query.id) {
  // }

  setTimeout(() => {
    res.status(200).json(fakePost);
  }, timeout);
};
