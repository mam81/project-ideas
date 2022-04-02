var colors = document.getElementById("colors");
const element = document.getElementById("shape");

colors.addEventListener('change',function(){
    var selectedColor = colors.options[colors.selectedIndex].value;
    element.style.backgroundColor = selectedColor;
})


function borderRadiusConstructor() {
    var input = document.getElementById("br").value;
    const ArrayBorderRadiusValues = input.split(' ');
    const cssCode = document.querySelector(".css-code");

    if (ArrayBorderRadiusValues.length == 1) {
        element.style.borderTopLeftRadius = `${ArrayBorderRadiusValues[0]}px`;
        element.style.borderTopRightRadius = `${ArrayBorderRadiusValues[0]}px`;
        element.style.borderBottomRightRadius = `${ArrayBorderRadiusValues[0]}px`;
        element.style.borderBottomLeftRadius = `${ArrayBorderRadiusValues[0]}px`;

        cssCode.innerHTML = `<pre>border-radius: ${ArrayBorderRadiusValues[0]}px;</pre>`
    } else if (ArrayBorderRadiusValues.length == 2) {
        element.style.borderTopLeftRadius = `${ArrayBorderRadiusValues[0]}px`;
        element.style.borderTopRightRadius = `${ArrayBorderRadiusValues[1]}px`;
        element.style.borderBottomRightRadius = `${ArrayBorderRadiusValues[0]}px`;
        element.style.borderBottomLeftRadius  = `${ArrayBorderRadiusValues[1]}px`;

        cssCode.innerHTML = `<pre>border-radius: ${ArrayBorderRadiusValues[0]}px ${ArrayBorderRadiusValues[1]}px;</pre>`
    } else if (ArrayBorderRadiusValues.length == 3) {
        element.style.borderTopLeftRadius = `${ArrayBorderRadiusValues[0]}px`;
        element.style.borderTopRightRadius = `${ArrayBorderRadiusValues[1]}px`;
        element.style.borderBottomRightRadius = `${ArrayBorderRadiusValues[2]}px`;
        element.style.borderBottomLeftRadius  = `${ArrayBorderRadiusValues[1]}px`;

        cssCode.innerHTML = `<pre>border-radius: ${ArrayBorderRadiusValues[0]}px ${ArrayBorderRadiusValues[1]}px ${ArrayBorderRadiusValues[2]}px;</pre>`
    } else if (ArrayBorderRadiusValues.length == 4) {
        element.style.borderTopLeftRadius = `${ArrayBorderRadiusValues[0]}px`;
        element.style.borderTopRightRadius = `${ArrayBorderRadiusValues[1]}px`;
        element.style.borderBottomRightRadius = `${ArrayBorderRadiusValues[2]}px`;
        element.style.borderBottomLeftRadius  = `${ArrayBorderRadiusValues[3]}px`;

        cssCode.innerHTML = `<pre>border-radius: ${ArrayBorderRadiusValues[0]}px ${ArrayBorderRadiusValues[1]}px ${ArrayBorderRadiusValues[2]}px ${ArrayBorderRadiusValues[3]}px;</pre>`
    } else {
        alert('Não foi possível realizar a execução do border-radius com os valores passados')
    } 
}




