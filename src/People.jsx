import React from 'react'
import List from './List';
import data from './data';

import './App.css'

function People() {
const [people, setPeople] = React.useState(data)
 
function clearAll(){
  setPeople((prevState)=>{
    return(
      prevState = []
    )
  })
}
  return(
    <main>
        <section className='container'>
        <h3>{people.length} birthday Today</h3>
        <List people={people}/>
        <button  onClick={clearAll}> CLEAR ALL</button>

        </section>
    </main>
  )
  
}

export default People;
