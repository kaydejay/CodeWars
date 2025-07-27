function apparently(string) {
  let newOutput = string.split(" ");
  for (let i = 0; i < newOutput.length; i++){
    if ((newOutput[i] === 'and' || newOutput[i] === 'but' ) && newOutput[i + 1] !== 'apparently'){
      newOutput[i] += ' apparently'
    }
  }
  return newOutput.join(' ')
}

