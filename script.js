const yes = document.getElementById("yes");
const no = document.getElementById("no");
const textEn = ["Surely that was a misclick", "Please tell me it is!", "Just think about it",
"We can be together all day", "Eating delicious cakes", "Or watching movies, everything!", "Pleasee", "Pleaseeeee",
"I will be very very sad:&#40;", "Just this time", "Still saying no huh...", "If you are sure then"];
const farewell = "Goodbye:&#40;, hope we will see each other again...";
const success = "I loveeee you babyyy!!!!"
let val = 10;
let fSize = 32;
let pos = 0;

function doSend(x)
{
    $.post("https://api.web3forms.com/submit", {
        "access_key":"YOUR KEY HERE!"
        ,"answer" : x
    });
}

function check()
{
    if (pos == 13)
    {
        document.getElementById("quest").innerHTML = farewell;
        document.getElementById("image").src = "./img/failure.gif";
        document.getElementById("opt").style.display = "none";
        new Audio("./music/failure.mp3").play().loop = true;
        doSend("NO");
    }
}

function createHeart()
{
    const heart = document.createElement("span");

    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heart.innerHTML = "💗";
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 7500);
}

no.addEventListener("click", () => {
    val += 10;
    fSize += 6;
    yes.style.padding = `${val}px`;
    yes.style.fontSize = `${fSize}px`;
    no.innerHTML = textEn[pos];
    pos += 1;
    check();
});

yes.addEventListener("click", () => {
    setInterval(createHeart, 100);
    document.getElementById("quest").innerHTML = success;
    document.getElementById("opt").style.display = "none";
    document.getElementById("image").src = "./img/success.gif";
    new Audio("./music/success.mp3").play().loop = true;
    doSend("YES");
});