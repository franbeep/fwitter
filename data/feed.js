import _ from 'lodash';

import { names, slugs, bodies, images, avatars } from './data';

import { randomDate } from '../utils';

export const generateFeedItem = (customUser = null) => {
  const likes = Math.floor(Math.random() * 10) - 5;
  const comments = Math.floor(Math.random() * 10) - 5;

  const user = customUser
    ? customUser
    : {
        name: _.sample(names),
        avatar: _.sample(avatars),
        slug: _.sample(slugs),
      };

  return {
    user,
    date: randomDate(new Date(2012, 0, 1)),
    body: _.sample(bodies),
    image: _.sample(images),
    isOnline: _.sample([true, false, false]),
    likes: likes > 0 ? likes : 0,
    comments: comments > 0 ? comments : 0,
  };
};
