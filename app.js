document.addEventListener('DOMContentLoaded',()=>{
    const cards =[
        {name:'bells',img:'img/bells.png'},
        {name:'bells',img:'img/bells.png'},
        {name:'church',img:'img/church.png'},
        {name:'church',img:'img/church.png'},
        {name:'cake',img:'img/piece-of-cake.png'},
        {name:'cake',img:'img/piece-of-cake.png'},
        {name:'proposal',img:'img/proposal.png'},
        {name:'proposal',img:'img/proposal.png'},
        {name:'toast',img:'img/toast.png'},
        {name:'toast',img:'img/toast.png'},
        {name:'wedding',img:'img/wedding.png'},
        {name:'wedding',img:'img/wedding.png'},
    ]

    cards.sort(()=>0.5 - Math.random())

    const grid= document.querySelector('.grid')
    const response=document.querySelector('#response')
    const result=document.querySelector('#result')
    var selectedCards=[]
    var selectedCardsId=[]  
    var carsWon=[]

    function createBoard(){
        for (let index = 0; index < cards.length; index++) {
            var card= document.createElement('img')
            card.setAttribute('src','img/blank.png')
            card.className='cards'
            card.setAttribute('data-id',index)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }

    function isItMatch(){
        const allCards=document.querySelectorAll('img')
        const optionOneId=selectedCardsId[0]
        const optionTwoId=selectedCardsId[1]
        if(optionOneId === optionTwoId){
            allCards[optionOneId].setAttribute('src','img/blank.png')
            allCards[optionTwoId].setAttribute('src','img/blank.png')
            response.textContent='You have clicked the same image, be careful!'

        }else if(selectedCards[0]===selectedCards[1]){
            allCards[optionOneId].setAttribute('src','img/space.png')
            allCards[optionTwoId].setAttribute('src','img/space.png')
            allCards[optionOneId].removeEventListener('click', flipCard)
            allCards[optionTwoId].removeEventListener('click', flipCard)
            carsWon.push(selectedCards)
            response.textContent='You found a match, great!'
        }
        else{
            response.textContent='Sorry try again :('
            allCards[optionOneId].setAttribute('src','img/blank.png')
            allCards[optionTwoId].setAttribute('src','img/blank.png')
        }
        selectedCards=[]
        selectedCardsId=[]
        result.textContent=carsWon.length
        if(carsWon.length===cards.length/2){
            result.textContent='Woow you are Perfect , You found them all!!'
        }
    }

    function flipCard(){
        var cardId = this.getAttribute('data-id')
        selectedCards.push(cards[cardId].name)
        selectedCardsId.push(cardId)
        console.log(...selectedCards);
        this.setAttribute('src',cards[cardId].img)
        if(selectedCards.length===2){
            setTimeout(isItMatch, 500);
        }
    }

    createBoard()
})