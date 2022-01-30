//intro
const introDiv = document.querySelector('.intro');
const myName = document.querySelector('h3');

//sidebar

const sidebar = document.getElementById('sidebar');
const sidebarBtn = document.getElementById('sidebar-button');

//buttons

const rainBtn = document.getElementById('rain');
const leafBtn = document.getElementById('leafs');
const snowBtn = document.getElementById('snow');
const firefliesBtn = document.getElementById('fireflies');

//backgrounds

const mountainsBtn = document.getElementById('mountains');
const lakeBtn = document.getElementById('lake');
const waterfallBtn = document.getElementById('waterfall');
const valleyBtn = document.getElementById('valley');
const cityBtn = document.getElementById('city');

// container backgrounds text
const container = document.getElementById('popup-container');
const lakeText = "Switched to lake background!";
const mountainText = "Switched to mountain background!";
const waterfallText = "Switched to waterfall background!";
const valleyText = "Switched to valley background!";
const cityText = "Switched to city background!";

// container effects text
const rainText = "Rain added!";
const rainTextRemove = "Rain removed!";
const leafText = "Leafs added!";
const leafTextRemove = "Leafs removed!";
const snowText = "Snowflakes added!";
const snowTextRemove = "Snowflakes removed!";
const firefliesText = "Fireflies added!";
const firefliesTextRemove = "Fireflies removed!";

// button count
var rainCount = 0;
var snowCount = 0;
var leafCount = 0;
var fireflyCount = 0;


// interval variables for effects
let rainInterval;
let snowInterval;

let leafInterval1; 
let leafInterval2; 
let leafInterval3;

let fireflyInterval; 


sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    sidebarBtn.classList.toggle('active');
    if (sidebarBtn.classList.contains('active')) {
        sidebarBtn.innerText = ">";
    } else {
        sidebarBtn.innerText = "<";
    }
})

//effects

rainBtn.addEventListener('click', () => {
    introDiv.style.display = "none";
    myName.style.display = "none";
    if (rainCount == 0) {
    rainCount++;
    rainInterval = setInterval(createRain, 20)
    createNotifRain();
    } else {
        rainCount--;
        clearInterval(rainInterval);
        createNotifRainRemove();
    }
})

leafBtn.addEventListener('click', () =>  {
    introDiv.style.display = "none";
    myName.style.display = "none";
    if (leafCount == 0)  {
    leafCount++;
    leafInterval1 = setInterval(createLeaf1, 300);
    leafInterval2 = setInterval(createLeaf2, 600);
    leafInterval3 = setInterval(createLeaf3, 500);
    createNotifLeaf();
    } else {
        leafCount--;
        clearInterval(leafInterval1);
        clearInterval(leafInterval2);
        clearInterval(leafInterval3);
        createNotifLeafRemove();
    }
})

snowBtn.addEventListener('click', () =>  {
    introDiv.style.display = "none";
    myName.style.display = "none";
    if (snowCount == 0){
        snowCount++;
        snowInterval = setInterval(createSnow, 200);
        createNotifSnow();  
    } else {
        snowCount--;
        clearInterval(snowInterval);
        createNotifSnowRemove();
    }
})

firefliesBtn.addEventListener('click', () =>  {
    introDiv.style.display = "none";
    myName.style.display = "none";
    if (fireflyCount == 0) {
        fireflyCount++;
        fireflyInterval = setInterval(createFireFly, 700);
        createNotifFireflies();
    } else {
        fireflyCount--;
        clearInterval(fireflyInterval);
        createNotifFirefliesRemove();
    }
})

//backgrounds 
mountainsBtn.addEventListener('click', () => {
introDiv.style.display = "none";
myName.style.display = "none";
document.body.style.backgroundImage = "url('snowmountainnight.jpg')";
createNotifMountain();
})

lakeBtn.addEventListener('click', () =>  {
introDiv.style.display = "none";
myName.style.display = "none";
document.body.style.backgroundImage = "url('deerwithlake.jpg')";
createNotifLake();

})

valleyBtn.addEventListener('click', () => {
introDiv.style.display = "none";
myName.style.display = "none";
document.body.style.backgroundImage = "url('valley.jpg')"; 
createNotifValley();
})

waterfallBtn.addEventListener('click', () =>  {
introDiv.style.display = "none";
myName.style.display = "none";
document.body.style.backgroundImage = "url('waterfall.jpg')";
createNotifWaterfall();
})

cityBtn.addEventListener('click', () =>  {
introDiv.style.display = "none";
myName.style.display = "none";
document.body.style.backgroundImage = "url('city.jpg')";
createNotifCity(); 
})


// notifs backgrounds
function createNotifLake()  {
const notif = document.createElement('div');
notif.classList.add('popup');
notif.innerText = lakeText
container.appendChild(notif);
setTimeout(() => {
    notif.remove();
}, 3000);
}

function createNotifMountain()  {
const notif = document.createElement('div');
notif.classList.add('popup');
notif.innerText = mountainText
container.appendChild(notif);
setTimeout(() => {
    notif.remove();
}, 3000);
}

function createNotifWaterfall()  {
const notif = document.createElement('div');
notif.classList.add('popup');
notif.innerText = waterfallText
container.appendChild(notif);
setTimeout(() => {
    notif.remove();
}, 3000);
}

function createNotifValley()  {
const notif = document.createElement('div');
notif.classList.add('popup');
notif.innerText = valleyText
container.appendChild(notif);
setTimeout(() => {
    notif.remove();
}, 3000);
}

function createNotifCity()  {
const notif = document.createElement('div');
notif.classList.add('popup');
notif.innerText = cityText
container.appendChild(notif);
setTimeout(() => {
    notif.remove();
}, 3000);
}

//notif effects

function createNotifRain()  {
const notif = document.createElement('div');
notif.classList.add('popup');
notif.innerText = rainText
container.appendChild(notif);
setTimeout(() => {
    notif.remove();
}, 3000);
}

function createNotifRainRemove()  {
const notif = document.createElement('div');
notif.classList.add('popup');
notif.innerText = rainTextRemove
container.appendChild(notif);
setTimeout(() => {
    notif.remove();
}, 3000);
}

function createNotifLeaf()  {
const notif = document.createElement('div');
notif.classList.add('popup');
notif.innerText = leafText
container.appendChild(notif);
setTimeout(() => {
    notif.remove();
}, 3000);
}

function createNotifLeafRemove()  {
const notif = document.createElement('div');
notif.classList.add('popup');
notif.innerText = leafTextRemove
container.appendChild(notif);
setTimeout(() => {
    notif.remove();
}, 3000);
}

function createNotifSnow()  {
const notif = document.createElement('div');
notif.classList.add('popup');
notif.innerText = snowText
container.appendChild(notif);
setTimeout(() => {
    notif.remove();
}, 3000);
}

function createNotifSnowRemove()  {
const notif = document.createElement('div');
notif.classList.add('popup');
notif.innerText = snowTextRemove
container.appendChild(notif);
setTimeout(() => {
    notif.remove();
}, 3000);
}

function createNotifFireflies()  {
const notif = document.createElement('div');
notif.classList.add('popup');
notif.innerText = firefliesText
container.appendChild(notif);
setTimeout(() => {
    notif.remove();
}, 3000);
}

function createNotifFirefliesRemove()  {
const notif = document.createElement('div');
notif.classList.add('popup');
notif.innerText = firefliesTextRemove
container.appendChild(notif);
setTimeout(() => {
    notif.remove();
}, 3000);
}

// function effects 

function createRain () {
const rain  = document.createElement('div');
rain.classList.add('rainEffect');
rain.style.left = Math.random() * 100 + "vw";
rain.style.animationDuration = Math.random() * 2 + 3 + "s";
rain.style.height = Math.random() * 30 + 10 + 'px';
rain.style.opacity = Math.random();
document.body.appendChild(rain);
setTimeout(() => {
    rain.remove();
}, 5000);
}

function createSnow() {
const snow = document.createElement('i');
snow.classList.add('far');
snow.classList.add('fa-snowflake');
snow.style.left = Math.random() * 100 + "vw";
snow.style.animationDuration = Math.random() * 2 + 3 + "s";
snow.style.fontSize = Math.random() * 10 + 10 + 'px';
snow.style.opacity = Math.random();
document.body.appendChild(snow);
setTimeout(() => {
    snow.remove();
}, 5000);
}

// leaf colors

let green = "rgb(49, 116, 4)";
let gold = "rgb(190, 160, 25)";
let brown = "rgb(133, 75, 0)";

// leaf rotation 

let leaf360 = "rotate(360deg);";
let leaf250 = "rotate(250deg);";
let leaf180 = "rotate(180deg);";
let leaf90 = "rotate(90deg)";
let leaf20 = "rotate(20deg)";

function createLeaf1() {
const leaf = document.createElement('i');
leaf.classList.add('fab');
leaf.classList.add('fa-envira');
leaf.style.left = Math.random() * 100 + "vw";
leaf.style.animationDuration = Math.random() * 1 + 3 + "s";
leaf.style.opacity = Math.random();
let leafRotation = [leaf360, leaf250, leaf180, leaf90, leaf20];
leaf.style.transform = leafRotation[Math.floor(Math.random()*leafRotation.length)];
let leafColors = [green, gold, brown];
leaf.style.color = leafColors[Math.floor(Math.random()*leafColors.length)];
document.body.appendChild(leaf);
setTimeout(() => {
       leaf.remove(); 
}, 5000);
}

function createLeaf2() {
const leaf = document.createElement('i');
leaf.classList.add('fas');
leaf.classList.add('fa-leaf');
leaf.style.right = Math.random() * 100 + "vw";
leaf.style.animationDuration = Math.random() * 1 + 3 + "s";
leaf.style.opacity = Math.random();
let leafRotation = [leaf360, leaf250, leaf180, leaf90, leaf20];
leaf.style.transform = leafRotation[Math.floor(Math.random()*leafRotation.length)];
let leafColors = [green, gold, brown];
leaf.style.color = leafColors[Math.floor(Math.random()*leafColors.length)];
document.body.appendChild(leaf);
setTimeout(() => {
        leaf.remove(); 
    }, 5000);
}

function createLeaf3() {
const leaf = document.createElement('i');
leaf.classList.add('fab');
leaf.classList.add('fa-canadian-maple-leaf');
leaf.style.right = Math.random() * 100 + "vw";
leaf.style.animationDuration = Math.random() * 1 + 3 + "s";
leaf.style.opacity = Math.random();
let leafRotation = [leaf360, leaf250, leaf180, leaf90, leaf20];
leaf.style.transform = leafRotation[Math.floor(Math.random()*leafRotation.length)];
let leafColors = [green, gold, brown];
leaf.style.color = leafColors[Math.floor(Math.random()*leafColors.length)];
document.body.appendChild(leaf);
setTimeout(() => {
        leaf.remove(); 
    }, 5000);
}

function createFireFly() {
const firefly = document.createElement('div');
firefly.classList.add('fireflyEffect');
firefly.style.top = (100*Math.random()) + "%";
firefly.style.left = (100*Math.random()) + "%";
firefly.style.animationDuration = Math.random() * 1 + 3 + "s";
document.body.appendChild(firefly);
setTimeout(() => {
    firefly.remove(); 
}, 3000);
}

