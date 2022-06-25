
// import './topbar.css'
// import Navbar from './component/navbar/Navbar';
// import Hero from './component/hero/Hero';
// import Destinations from './component/destinations/Destinations';
// import Search from './component/Search/Search';
// import Selects from './component/selects/Selects';
import React from 'react';

// function App() {
//   return (
//     <div className='App'>
//       <Navbar />
//       <Hero />
//       <Destinations />
//       <Search/>
//       <Selects/>
//     </div>
//   )
// }

// export default App;

import './myprojects/TODO-LIST/styleTODO.css'
import StudentsListTODO from './myprojects/TODO-LIST/StudentsListTODO'
import React, { useState, useRef } from 'react'


function App() {
    const [item, setItem] = useState("")
    const [itemList, setItemList] = useState([])
    const inputRef = useRef()
    
    const getInput = (e) => {
        setItem(e.target.value)
    }

    const addItemInTheList = () => {
        setItemList([...itemList, { data: item, key: Date.now() }])
        setItem("")
        inputRef.current.focus()
    }
    return (
        <div className='App'>
            <div className='App-wrapper'>
                <div className='wrapper'>
                    <div className='input-wrapper'>
                        <input type='text' onChange={getInput} value={item} ref={inputRef}></input>
                        <button onClick={addItemInTheList}>+</button>
                    </div>
                    <StudentsListTODO itemList={itemList} setItemList={setItemList} />
                </div>
            </div>
        </div>
    )
}

export default App;