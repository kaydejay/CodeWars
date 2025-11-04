function gimme (triplet) {
  let copy = [...triplet];

  let ordered = [...triplet].sort((a,b) => a - b);
  let middle = ordered[1];

  return copy.indexOf(middle)
}
