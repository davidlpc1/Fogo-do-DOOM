const $button = document.querySelector('.button');
const $body = document.querySelector('#body')
const $title = document.querySelector('.title')

$button.addEventListener('click',() => {
    if($button.innerHTML == "DarkMode"){
        $button.innerHTML = "LightMode"
        transformToDark();
    }else{
        $button.innerHTML = "DarkMode";
        transformToLight();
    }
})

function transformToLight(){
    $body.style.backgroundColor = "whitesmoke";
    $title.style.color = "black";
}

function transformToDark(){
    $body.style.backgroundColor = "black";
    $title.style.color = "whitesmoke";
}