// We are using this contrived date/time example to learn about importing correctly and choosing more efficient libraries. IRL, we should also consider whether a library is needed at all. For formatting, we probably don't need a library. Actually manipulating time can be tricky so would warrant the use of a library.

import {initializeMarkdown} from './markdown.js'

document.getElementById('md-button').onclick = function(e) {
  e.target.className = 'hide'
  document.getElementById('markdown-container').className = 'show'
  initializeMarkdown()
}
