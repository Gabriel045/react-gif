import React, { useState }from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => {
    
    const [inputValue, setImputValue] = useState('');
    const handleInputChange = (e) =>{
        setImputValue(e.target.value); 
    } 

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(inputValue.trimEnd().length> 2 )
        {
            setCategorias((cats) => [inputValue,...cats]);
            setImputValue('');
        }

        
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Category</h2>
            <input 
            type='text'
            value = {inputValue} 
            onChange={handleInputChange}/>
        </form>
    )

    
}
    AddCategory.propTypes ={
    setCategorias:PropTypes.func.isRequired,
}
