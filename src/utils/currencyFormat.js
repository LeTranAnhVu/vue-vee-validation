export default function (value, separate = '.') {
  const v = value.toString();
  const len = v.length;
  let ret = '';

  for (let i = 1; i <= len; i++) {
    ret = v[len - i] + ret;
    if (i % 3 === 0) {
      ret = separate + ret;
    }
  }
  if (ret[0] === separate) ret = ret.substr(1);
  return ret;
}
