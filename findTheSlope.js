function slope(points) {
  let a = points[0]
  let b = points[1]
  let c = points[2]
  let d = points[3]
  
  let run = (c - a)
  let rise = (d - b)
  let m = (rise / run)
  
  return run === 0 ? 'undefined' : m.toString()
  
}
