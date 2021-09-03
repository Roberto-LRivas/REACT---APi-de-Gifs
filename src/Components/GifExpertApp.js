import React, { useState } from "react";

import { AddCategoria } from "./AddCategoria";
import GiftGrid from "./GiftGrid";

const GiftExpertApp = () => {

    //const categorias = ['One punch', 'MortalCombat', 'Dragon ball']; //Esto no xq no se puede agregar nuevos elementos
    const [categorias, setCategorias] = useState(['One punch']);
    /* const handleAdd = (e) => {
        setCategorias( cat => [...cat, 'Roberto'] );
    } */

    return (
        <>
            <h2> GiftExpertApp </h2>
            <AddCategoria setCategorias  = {setCategorias} />
            <hr/>

            <ol>
                {
                    categorias.map( (cat) => (
                            <GiftGrid 
                                categoria = {cat} 
                                key = {cat}    
                            />                    
                    ))}
            </ol>

        </>
    );

}

export default GiftExpertApp;