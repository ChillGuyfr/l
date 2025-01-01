import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>Letter Wrapper</h1>
    <input 
      type="text" 
      id="inputField" 
      placeholder="Type something..."
      class="input-field"
    >
    <div id="output" class="output"></div>
  </div>
`

const inputField = document.querySelector('#inputField')
const output = document.querySelector('#output')

inputField.addEventListener('input', (e) => {
  const text = e.target.value
  const wrapped = text
    .split('')
    .map(letter => letter.trim() ? `<${letter}>` : letter)
    .join('')
  output.textContent = wrapped
})