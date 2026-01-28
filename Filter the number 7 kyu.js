function filterString(value) {
  let num = Array.from(value)
  let codes = num.map((x) => x.charCodeAt(0))
  let filtered = codes.filter((x) => (x <= 57))
  return Number(String.fromCharCode(...filtered))
}
