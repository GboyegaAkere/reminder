import React from 'react'
import List from './List'
import data from './data'

function App(){
  const [people, setPeople] = React.useState(data)

  const onDelete =(id)=>{
    setPeople(oldValues =>{
      return oldValues.filter(people => people.id !==id)
    })
  }

  function clearAll(prevState){
    setPeople(function(){
      return(
        prevState,
        []
      )
    })
  }



  return(
    <main>
      <section className='container'>
        <h3>{people.length} birthday today</h3>
        <List people= {people} onDelete={onDelete}/>
        <button onClick={clearAll}>CLEAR BIRTHDAYS</button>
      </section>
    </main>
  )
}

export default App