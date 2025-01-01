export function wrapText(text) {
  return text
    .split('')
    .map(letter => letter.trim() ? `<${letter}>` : letter)
    .join('');
}