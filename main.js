var gQuests = [{
    id: 1, opt: ['china great wall', 'italy rome colosseum'], correctOptIndex: 0, image:
        'imgs/top-attractions-in-the-world-china-great-wall.jpg'
},
{
    id: 2, opt: ['egypt pyramids giza', 'italy rome colosseum'], correctOptIndex: 1, image:
        'imgs/top-attractions-in-the-world-italy-rome-colosseum.jpg'
},
{
    id: 3, opt: ['egypt pyramids giza', 'greece athens acropolis'], correctOptIndex: 0, image:
        'imgs/top-attractions-in-the-world-egypt-pyramids-giza.jpg'
}];
var gRandomQuest;


function selector(arr) {
    var random = arr.shift()
    return random;
}

function init() {
    gRandomQuest = selector(gQuests)
    createQuests()
}

function createQuests() {

    var elBoard = document.querySelector('.board');
    var elPic = elBoard.querySelector('.img');
    elPic.innerHTML = `<img src="${gRandomQuest.image}"/>`
    var elButtton1 = elBoard.querySelector('.option1')
    var elButtton2 = elBoard.querySelector('.option2')
    elButtton1.innerText = `${gRandomQuest.opt[0]}`
    elButtton2.innerText = `${gRandomQuest.opt[1]}`
}

function buttonPressed(btn) {
    checkLast(btn)
    console.log(btn.innerText)
    console.log(gRandomQuest.opt[gRandomQuest.correctOptIndex]);
    if (btn.innerText == gRandomQuest.opt[gRandomQuest.correctOptIndex]) init()
    else return;
}

function checkLast(btn){
    if(btn.innerText == gRandomQuest.opt[gRandomQuest.correctOptIndex] && gRandomQuest.id === 3){
        var elModal = document.querySelector('.modal')
        elModal.style.display = 'block'
    }
}

function reset(){
    gQuests = [{
        id: 1, opt: ['china great wall', 'italy rome colosseum'], correctOptIndex: 0, image:
            'imgs/top-attractions-in-the-world-china-great-wall.jpg'
    },
    {
        id: 2, opt: ['egypt pyramids giza', 'italy rome colosseum'], correctOptIndex: 1, image:
            'imgs/top-attractions-in-the-world-italy-rome-colosseum.jpg'
    },
    {
        id: 3, opt: ['egypt pyramids giza', 'greece athens acropolis'], correctOptIndex: 0, image:
            'imgs/top-attractions-in-the-world-egypt-pyramids-giza.jpg'
    }];
    var elModal = document.querySelector('.modal')
    elModal.style.display = 'none'
    init();

}