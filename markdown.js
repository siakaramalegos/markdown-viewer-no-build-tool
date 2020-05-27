import 'https://unpkg.com/marked@1.1.0/marked.min.js'
import { timeNowPretty } from './time.js'
export const initializeMarkdown = () => {
  const compiled = document.getElementById('compiled-markdown');
  const lastEdit = document.getElementById('last-edit');

  document.getElementById('editor').oninput = function (event) {
    const value = event.target.value;

    if (value === '') {
      compiled.innerHTML = '<p>Begin writing markdown on the left to see it previewed here.</p>';
    } else {
      compiled.innerHTML = marked(event.target.value, { sanitize: true });
      lastEdit.innerHTML = 'Last updated: ' + timeNowPretty();
    }
  };
}
