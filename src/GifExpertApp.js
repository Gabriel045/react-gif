import React, { useState } from 'react'
import {AddCategory} from './components/AddCategory'
import { GiftGrind } from './components/GiftGrind';


const  GifExpertApp = () =>{

const [categorias, setCategorias] = useState(['']);
/* const handleAdd = () =>{
    setCategorias ([...categorias, 'hugo']); */ 

  
 return(
      <div>
         <h2>GifExpertApp</h2>
         <AddCategory setCategorias={setCategorias}/>
         <hr/>  
             
         <ol>
          {
             categorias.map( category=> {
                return <GiftGrind 
                key= {category}
                category={category}/>
                })
          }
          </ol>
          <hr/>
     </div>
       

    )

} 
export default GifExpertApp;