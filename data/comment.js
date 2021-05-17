import _ from 'lodash';

import { names, slugs, bodies, images, avatars } from './data';
import { randomDate } from '../utils';

export function genereateComment() {
  const likes = Math.floor(Math.random() * 30) - 10;
  const replies = Math.floor(Math.random() * 30) - 10;

  return {
    user: {
      avatar: _.sample(_.concat(avatars, images)),
      name: _.sample(names),
      slug: _.sample(slugs),
    },
    text: _.sample(bodies),
    date: randomDate(new Date(2012, 0, 1)),
    likes: likes > 0 ? likes : 0,
    replies: replies > 0 ? replies : 0,
  };
}
