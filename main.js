
function _load() {
  //Write your code for theme changes here

  let body = document.querySelector("body");
  //kiválaszthatom a temat
  let themeTemplate = ` <nav>
  Theme:
<select name="theme" id="theme">

  <option value="light">Light</option>
  <option value="dark">Dark</option>
  <option value="contrast">Contrast</option>

</select>
</nav>
`
  body.insertAdjacentHTML('afterbegin', themeTemplate);//berakom a select-et a HTML-be


  let selectTheme = document.getElementById('theme'); //kivalasztja az egesz selec-tet
  let currentTheme = selectTheme.value;//a select-ben kivalasztott tema
  //debugger

  function themeChange() {

    newTheme = this.value;
    console.log(this.value);
    let allElements = document.querySelectorAll('.' + currentTheme);
    // console.log(currentTheme);
    // console.log(allElements);
    // console.log(allElements.length);

    for (let i = 0; i < allElements.length; i++) {

      const element = allElements[i];

      element.classList.remove(currentTheme);
      element.classList.add(newTheme);
    }
    currentTheme = newTheme;
  }

  selectTheme.addEventListener('change', themeChange);//valtoztataskor lefut a fuggveny
}

window.addEventListener("load", _load);
