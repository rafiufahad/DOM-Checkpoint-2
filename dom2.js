document.addEventListener("DOMContentLoaded", function() {
    const changeColorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById('change-color');
    const body = document.querySelector('body')

    function getRandomColor () {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            
            body.style.backgroundColor = `#${randomColor}`;
            console.log(randomColor);
    }; 

   changeColorBtn.addEventListener("click", getRandomColor);



});