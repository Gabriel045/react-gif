import React from 'react'
import { useFetchGifs } from '../hooks/useFectchGifs'
import { GifGriditem } from './GifGriditem';



export const GiftGrind = ({ category }) => {
    
    const {data, loading} = useFetchGifs(category);

    return (
        <>
        <h3 className= 'animate__animated fadeIn'>{category} </h3>
        {loading && <p className= 'animate__animated flash'> loaging...</p> }

        <div className= 'card-grid'>
            {
                data.map(({id,title,url})=>{
                    return (
                    <GifGriditem 
                    key={id}
                    id={id}
                    title={title} 
                    url={url} />)
                })
            }  
        </div> 
        </>
    )
}
