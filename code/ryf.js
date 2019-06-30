(() => {
  let query = document.querySelector.bind(document);

  function loadStyleSheet(path) {
    let ele = document.createElement('link')
    ele.setAttribute('rel', 'stylesheet')
    ele.setAttribute('type', 'text/css')
    ele.setAttribute('href', path)
    query('head').appendChild(ele)
  }

  loadStyleSheet('/static/themes/theme_scrapbook/theme_scrapbook.css')
  query('body').style.fontFamily = 'Microsoft Yahei'
})()
