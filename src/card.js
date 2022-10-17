import React, {useState} from 'react';
import './App.css';
import { faker, ImageModule } from '@faker-js/faker';
import { saveAs } from 'file-saver'

const Card = (props) => {
    const randomName = faker.name.fullName();
    const [image,setImage]=useState(props.img)
    const changeImageHandler =() => {
      setImage (faker.image.animals(1024,740, true))
    }
  const [namech,setName]=useState (props.name);
  const setNameChangeHandler = event => setName(event.target.value);


  const downloadImage = (image,name) => {
    saveAs( `${image}`, `${name}.png`) // Put your image url here.
  }
    return (
    <div className="card m-3 text-center border border-secondary rounded  bg-white " >
    <div className="box9 text-center">
      <img className="card-img-top pic-1 text-center" src={image} />
        <div className="box-content test-canter">
          <h3 className="title "> {namech} </h3>
        </div>
    </div>
    <div className="card-body text-center" >
    <div className="card-title overflow-hidden font-weight-bold"> {namech} </div>
    <input className='form-control mb-3' type="text" value={namech} onChange={setNameChangeHandler} placeholder='Enter Text' />
    <button type="button" className='btn btn-outline-success btn-sm m-1' onClick={changeImageHandler} > Change Image </button>
    <button type="button" className='btn btn-outline-info btn-sm m-1' onClick={()=>downloadImage(`${image}`,`${namech}`)}> Download Image </button>
    <br></br>
    <button type="button" className='btn btn-danger btn-sm m-1' onClick={props.onDel}> Delete Card </button>
    </div>
    </div>
    
    )
}

export default Card