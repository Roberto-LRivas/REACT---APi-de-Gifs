import React, { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategoria = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();
         
        if(inputValue.trim().length > 0) {

            /* setCategorias(cat => [...cat, inputValue]); */
            setCategorias( (cat) => {

                const MayusCat = cat.map(cat => {
                    return cat.toUpperCase();
                })
                
                if( MayusCat.includes( inputValue.toUpperCase() ) ) {
                    return [...cat];
                }

                else {
                    return [inputValue, ...cat ];
                }
                
            } );

            setInputValue('');
        }


    }

    return (
        <form onSubmit = {handleSubmit} >
            <input
                type = "text"
                value = {inputValue}
                onChange = { handleInputChange }
                placeholder ="Escriba un gift a buscar"
            />
        </form>

    );

}

AddCategoria.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

//export default addCategoria;