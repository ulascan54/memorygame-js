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

    const grid= document.querySelector('.grid')
    const response=document.querySelector('#resposne')
    var selectedCards=[]
    var selectedCardsId=[]

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
        var allCards=document.querySelectorAll('img')
        const optionOneId=selectedCardsId[0]
        const optionTwoId=selectedCardsId[1]
        if(selectedCardsId[0] === selectedCardsId[1]){
            response.textContent='You found a match Great'
        }
    }

    function flipCard(){
        var cardId = this.getAttribute('data-id')
        selectedCards.push(cards[cardId].name)
        selectedCardsId.push(cardId)
        this.setAttribute('src',cards[cardId].img)
        if(selectedCards.length===2){
            setTimeout(isItMatch, 500);
        }
    }

    createBoard()
})