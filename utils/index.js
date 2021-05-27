import { isString } from 'lodash';

export function simplifyNumber(number) {
  if (isString(number)) return number;
  if (number > 1000000000) return '1b+';
  if (number > 1000000) return `${Math.floor(number / 1000000)}m`;
  if (number > 1000) return `${Math.floor(number / 1000)}k`;
  return Math.floor(number);
}

export function randomDate(start, end = new Date()) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
