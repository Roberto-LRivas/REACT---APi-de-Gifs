import React from "react";
import useFetchGifs from '../hooks/useFetchGifs';
import GiftGridItem from './GiftGridItem';


const GiftGrid = ({categoria}) => {

    const {data:images, loading} = useFetchGifs( categoria );



    return (
        <>
        <h3> {categoria} </h3>

        { loading && <p>Loading...</p>}

        <div className="card-grid">

                 {
                    images.map( img => (

                        <GiftGridItem 
                            key = {img.id}
                            {...img}
                        />
                    ))
                } 
        </div>

        </>
        
    );

}

export default GiftGrid;