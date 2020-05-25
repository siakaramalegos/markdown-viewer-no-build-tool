// We are using this contrived date/time example to learn about importing correctly and choosing more efficient libraries. IRL, we should also consider whether a library is needed at all. For formatting, we probably don't need a library. Actually manipulating time can be tricky so would warrant the use of a library.
function timeNowPretty() {
  const now = moment()
  const displayFormat = 'hh:mm:ss MM/DD/YYYY'
  return now.format(displayFormat)
}

const initializeMarkdown = () => {
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

document.getElementById('md-button').onclick = function(e) {
  e.target.className = 'hide'
  document.getElementById('markdown-container').className = 'show'
  initializeMarkdown()
}
