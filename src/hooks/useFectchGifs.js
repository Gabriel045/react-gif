import { useEffect, useState } from "react";
import { getGfis } from "../helpers/getGifs";




export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true

    });

    useEffect(() => {
       
        getGfis(category)
        .then(imgs => {
             console.log(imgs);
        
                setState({
                 data: imgs,
                 loading: false
                })
         })
    },[category])

    return state;

}