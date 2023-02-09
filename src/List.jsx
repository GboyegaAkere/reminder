import React from 'react';


function List ({people, onDelete}){
    return(
      <div>
          {people.map((person)=>{
            const {id, name,age, image} = person
            return(
              <acticle key={id} className="person">
                  <img src={image} alt="{name}" />
                  <div>
                    <h4>{name}</h4>
                    <p>{age}</p>
                    <button onClick={()=>onDelete(id)}>delete</button>
                  </div>
              </acticle>
            )

          })}
      </div>
    )

} 

export default List;
