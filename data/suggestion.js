import _ from 'lodash';

import {
  names,
  slugs,
  bodies,
  images,
  avatars,
  categories,
  companies,
} from './data';
import { simplifyNumber } from '../utils';

export function genereateSuggestion() {
  const title = _.sample(companies);

  return {
    image: _.sample(_.concat(avatars, images)),
    slug: title,
    category: _.sample(categories),
    title: title,
    onFire: Math.random() > 0.3,
    numberOfFollowers: simplifyNumber(Math.random() * 300000),
  };
}
