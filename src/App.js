import React, {useState} from 'react';
import './App.css';
import { faker, ImageModule } from '@faker-js/faker';
import Card from './card';
function App() {
const [cards, setCards]= useState ([
  {
  id:'1',
  name:`${faker.name.fullName()}`,
  image: 'https://loremflickr.com/1024/740/animals?lock=22526',
  },
  {
    id:'2',
    name:`${faker.name.fullName()}`,
    image: 'https://loremflickr.com/1024/740/animals?lock=335',
  },

  {
      id:'3',
      name:`${faker.name.fullName()}`,
      image: 'https://loremflickr.com/1024/740/animals?lock=83547',
  },
  {
        id:'4',
        name:`${faker.name.fullName()}`,
        image: 'https://loremflickr.com/1024/740/animals?lock=81979',
  },
  {
          id:'5',
          name: `${faker.name.fullName()}` ,
          image: 'https://loremflickr.com/1024/740/animals?lock=61208',
  },
  {
            id:'6',
            name: `${faker.name.fullName()}` ,
            image: 'https://loremflickr.com/1024/740/animals?lock=5380',
},
])
const [showCard,setShowCard]=useState(true);
const [butvisible,setBtnVisible]=useState('visible')
const[cardLen,setCardLen]=useState('Cards Are 🙈 Hiden')
const [btnText,setBtnText]=useState('Hide card');
const [btnclr,setBtnclr]=useState('btn-danger');
const toggleShowCard=()=>{
  setShowCard(!showCard);
  setBtnText(showCard?'Show card':'Hide card');
  setBtnclr (showCard?'btn-danger':'btn-success');
}
const cardDelHandle=(cardIndex)=> {
  const card_copy = [...cards]
  card_copy.splice(cardIndex,1)
  console.log ('cardcopy', card_copy )
  setCards(card_copy)
  setCardLen (card_copy.length==[0]?'All Cards Are Deleted 💔 Add New Card':null)
  setShowCard(!card_copy.length==[0]?true:false)
  setBtnVisible(card_copy.length==[0]?'hidden':null)
}
const addname=faker.name.fullName();
const addImage=faker.image.animals(1024,740, true);

const [careateopj]= ([  {
  id:`${cards.length + 1}`,
  name:`${faker.name.fullName()}`,
  image: `${faker.image.animals(1024,740, true)}`,
}])
const addCard=()=> {
  setShowCard(true)
  setBtnText('Hide card');
  setBtnclr ('btn-success');
  const card_copy = [...cards]
  card_copy.splice(0,0,careateopj)
  console.log ('newacrd' , card_copy)
  setCards(card_copy)
  setCardLen ('Cards Are 🙈 Hiden')
  setBtnVisible("visible")
 

}

const delAll=()=> {
  const card_copy = [...cards]
  card_copy.splice(0,card_copy.length,)
  setCards(card_copy)
  setCardLen ('All Cards Are Deleted 💔 Add New Card')
  setShowCard(false)
  setBtnVisible('hidden')
}
const mapedcards = cards.map ((card,index)=><Card key={card.id} id={card.id} name={card.name} 
img={card.image} onDel={()=>cardDelHandle(index)} bttext={btnText} btclr={btnclr} tagglecard={toggleShowCard} add={addCard}/>)
const delnotice = <center ><div className="card text-center m-2"><div className="card-body"> {cardLen} </div></div></center>

  return (
    <div className='text-center'><button type="button" className={`btn ${btnclr} m-4`}  onClick={toggleShowCard} style={{visibility:`${butvisible}`}}> {btnText} 
    </button> <button type="button" className= 'btn btn-success m-4' onClick={addCard} > Add Card </button>
    <button type="text" className= 'btn btn-outline-success m-4' > Total Cards : {cards.length} </button> 
    <button type="button" className= 'btn btn-outline-danger m-4' onClick={delAll}> Delete All </button>   
    <div className=" card-columns w-100">
    {showCard? mapedcards : null}
    </div>
    <div> {!showCard? delnotice:null } </div>
    
    </div>
  );
}

export default App;
