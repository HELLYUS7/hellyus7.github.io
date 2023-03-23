var imgApresentation1 = document.getElementById('img-apresentation-1');
var imgApresentation2 = document.getElementById('img-apresentation-2');
var imgApresentation3 = document.getElementById('img-apresentation-3');
var imgApresentation4 = document.getElementById('img-apresentation-4');
var imgApresentation5 = document.getElementById('img-apresentation-5');
var imgApresentation6 = document.getElementById('img-apresentation-6');
var ground = document.getElementById('ground-images');
var logoTitle = document.getElementById('logo');
var codeView = document.getElementById('code-view');
var code = document.getElementById('code');
var textA = code.innerHTML;
var text = '';
var i = 0;
var night = true;

const starCount = 200;
const starContainer = document.getElementById('stars');
const backgroundColors = ['#94d2bd','#ffb703','#d40bc796'];
const themeColors = [['#25254c','#C9ADA7'],['#030007','#a51185']];
//var color = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
//document.documentElement.style.setProperty('--gradient-background-aprsentation', color);


function changeColorTheme(){
    if(night) {
        document.documentElement.style.setProperty('--secondary-color',themeColors[1][0]);
        document.documentElement.style.setProperty('--gradient-background-aprsentation',themeColors[1][1]);
        starContainer.style.display = null;
        document.getElementById('commet').style.display = 'flex';
        document.getElementById('moon').style.backgroundColor = '#e7e7e7';
        document.getElementById('moon').style.boxShadow = '0px 0px 20px white,0px 0px 70px #ffffff';
        document.getElementById('moon').classList.remove('moonAnimed');
        document.getElementById('moon').offsetWidth;
        document.getElementById('moon').classList.add('moonAnimed');
        document.documentElement.style.transition = '0.3s';
    }else{
        document.documentElement.style.setProperty('--secondary-color',themeColors[0][0]);
        document.documentElement.style.setProperty('--gradient-background-aprsentation',themeColors[0][1]);
        starContainer.style.display = 'none';
        document.getElementById('commet').style.display = 'none';
        document.getElementById('moon').style.backgroundColor = '#ffce47';
        document.getElementById('moon').style.boxShadow = '0px 0px 20px #ffc830,0px 0px 70px #ffc830';
        document.getElementById('moon').classList.remove('moonAnimed');
        document.getElementById('moon').offsetWidth;
        document.getElementById('moon').classList.add('moonAnimed');
    }
}

changeColorTheme();

document.getElementById('logo-top').addEventListener('click', () => {
    night = !night;
    changeColorTheme();
});

setInterval(() => {
    night = !night;
    changeColorTheme();
},13000);

for(let i=0; i<starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 5 + 's';
    starContainer.appendChild(star);
}

setInterval(()=>{
    document.getElementById('commet').classList.toggle('commet-animated');
},Math.floor(Math.random() * (6000 - 4000) + 4000));

window.addEventListener('scroll', ()=>{
    let valueScroll = window.scrollY;
    console.log(valueScroll);
    imgApresentation1.style.bottom = valueScroll * 0.15 + 'px';
    imgApresentation2.style.bottom = valueScroll * 0.1 + 'px';
    imgApresentation3.style.bottom = valueScroll * 0.05 + 'px';
    imgApresentation4.style.bottom = valueScroll * 0.04 + 'px';
    imgApresentation5.style.bottom = valueScroll * -0.01 + 'px';
    imgApresentation6.style.bottom = valueScroll * -0.08 + 'px';
    ground.style.height = valueScroll*0.2 + 'px';
    
    if(valueScroll >= 445 && valueScroll < 720) {
        document.getElementById('header').style.background = '#280003';
        document.documentElement.style.setProperty('--scroll-bar-color', 'black');
    }
    else if(valueScroll >= 720 && valueScroll < 861) {
        document.getElementById('header').style.background = '#220012';
        document.documentElement.style.setProperty('--scroll-bar-color', 'black');
    }
    else if(valueScroll >= 861 && valueScroll < 997) {
        document.getElementById('header').style.background = '#180218';
        document.documentElement.style.setProperty('--scroll-bar-color', 'black');
    }
    else if(valueScroll >= 997) {
        document.getElementById('header').style.background = '#030007';
        document.documentElement.style.setProperty('--scroll-bar-color', 'black');
    }
    else {
        document.getElementById('header').style.background = 'var(--secondary-color)';
        document.documentElement.style.setProperty('--scroll-bar-color', '#4A4E69');
    }
});

function escrita()
{
    setInterval(() => {
        code.innerHTML = text;
        text = text + textA[i];
        i++;
        if (i >= textA.length+1) {
            text = '';
            i = 0;
        }
    }, 60);
}

escrita();