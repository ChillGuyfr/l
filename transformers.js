export function wrapText(text) {
  return text
    .split('')
    .map(letter => letter.trim() ? `<${letter}>` : letter)
    .join('');
}

export function reverseText(text) {
  return text.split('').reverse().join('');
}

export function leetText(text) {
  const leetMap = {
    'a': '4', 'e': '3', 'i': '1', 'o': '0', 
    's': '5', 't': '7', 'l': '1', 'z': '2'
  };
  return text.toLowerCase().split('')
    .map(char => leetMap[char] || char)
    .join('');
}

export function mockingText(text) {
  return text.split('')
    .map((char, i) => i % 2 === 0 ? char.toLowerCase() : char.toUpperCase())
    .join('');
}