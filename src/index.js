import path from 'path';

export default function (...base) {
  return (...paths) => path.resolve(path.join(...(base || [ '.' ]), ...(paths || [ '.' ])));
}
