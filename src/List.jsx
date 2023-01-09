import React from 'react';


function List ({people}){
    return(
      <>
      {people.map((person)=>{
      const {id, name, age, image}= person;

      return(
        <acticle key={id} className='person'>
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{age}</p>
          </div>

        </acticle>
      )
      })}
      </>
    )

} 

export default List;
