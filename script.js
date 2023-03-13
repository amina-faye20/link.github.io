/**
 * 
 */
window.onload = () =>
{
    // LE HEADER
    window.addEventListener("scroll", () =>
    {
        if(window.scrollY > 200)
        {
            document.getElementById("bottom").style.position = "fixed"
            document.getElementById("bottom").style.zIndex = "8"
            document.getElementById("bottom").style.backgroundColor = "rgba(19, 19, 19, .3)"
            document.querySelector("#bottom ul li ul").style.backgroundColor = "rgba(19, 19, 19, .3)"
        }
        else
        {
            document.getElementById("bottom").style.position = "relative"
            document.querySelector("#bottom ul").style.backgroundColor = "rgb(190, 190, 190)"
        }
    })

    // SLIDER
    let img = document.getElementsByClassName("img")

    let step = 0
    let len = img.length

    let next = document.querySelector(".next")
    let prev = document.querySelector(".prev")

    function removeClass()
    {
        for(let i = 0; i < len; i++)
        {
            img[i].classList.remove("active")
            img[i].style.zIndex = -1
        }
    }

    next.addEventListener("click", () =>
    {
        step++
        if(step >= len)
            step = 0

        removeClass()
        img[step].classList.add("active")
        img[step].style.zIndex = 2
        document.querySelector(".next").style.zIndex = 4
        document.querySelector(".prev").style.zIndex = 4
        document.getElementById("bottom").style.zIndex = "6"
    })

    prev.addEventListener("click", () =>
    {
        step--
        if(step <= 0)
            step = len - 1

        removeClass()
        img[step].classList.add("active")
        img[step].style.zIndex = 2

        document.querySelector(".next").style.zIndex = 4
        document.querySelector(".prev").style.zIndex = 4
        document.getElementById("bottom").style.zIndex = "6"
    })

    setInterval(() =>
    {
        step++
        if(step >= len)
            step = 0

        removeClass()
        img[step].classList.add("active")
        img[step].style.zIndex = 2
        document.querySelector(".next").style.zIndex = 4
        document.querySelector(".prev").style.zIndex = 4
        document.getElementById("bottom").style.zIndex = "6"

    }, 5000)
}