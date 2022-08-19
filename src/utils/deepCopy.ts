export function deepCopy(source: Object) {
  // if (typeof source != "object") {
  //   return source;
  // }
  // if (source == null) {
  //   return source;
  // }
  // const newObj = source.constructor === Array ? [] as Array<T> : {};
  // for (const i in source) {
  //   newObj[i] = deepCopy(source[i]);
  // }
  // return newObj;

  return JSON.parse(JSON.stringify(source));
}
