/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

//Using map and slice

function capSentence(text) {
  const words = text.toLowerCase().split(' ');
  const capText = words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  return capText
}

//Using forEach and slice

function capSentence(text) {
  const words = text.toLowerCase().split(' ');
  const capText = [];
  words.forEach(word => capText.push(word[0].toUpperCase() + word.slice(1)))
  return capText.join(' ')
}

//Using map and replace

function capSentence(text) {
  const words = text.toLowerCase().split(' ');
  const capText = words.map(word => word.replace(word[0], word[0].toUpperCase())).join(' ');
  return capText
}
