// Border and arrow color focus 
let normalBorder = document.querySelector(".date-form__inp--end").style.borderColor;
let focusBorder = 'rgba(31, 32, 65, 0.50)';
document.querySelector(".date-form__inp--end").addEventListener('focus', () => {
        document.querySelector(".date-form__inp--start").focus()
})
document.querySelector(".date-form__inp--start").addEventListener('focus', () => {
        document.querySelector(".date-form__inp--end").style.borderColor = focusBorder;
        document.querySelectorAll('.date-form__container').forEach(element => {
                element.classList.add('date-form__container--focus')
        })
})
document.querySelector(".date-form__inp--start").addEventListener('blur', () => {
        document.querySelector(".date-form__inp--end").style.borderColor = normalBorder;
        document.querySelectorAll('.date-form__container').forEach(element => {
        element.classList.remove('date-form__container--focus')
})
})