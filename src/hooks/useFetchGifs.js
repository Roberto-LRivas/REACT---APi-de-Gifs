import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

//TAmbien pueden tener su estado
const useFetchGifs = ( categoria )=> {

    const[state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getGifs( categoria)
            .then( img => {

                setState( {
                    data: img,
                    loading: false
                });
            });

    }, [categoria] );


    return state;

}

export default useFetchGifs;


    //PAra se ejecute getGifs cuando se renderiza por primera vez   
    /* useEffect( () => {
        getGifs(categoria)
            .then(img => setImages(img)); //Al estar en helper se convierte en async y promesa debe
                                            //retornar el setImagens para redibujar iamgenes
    }, [categoria] ); */ //Para quitar usee efect dependencia faltante, es por si la categoria cambia q vuelva a ejecutar el
    //gerGifs para disparar toda la peticiom http de todos los gift 

  //  getGifs();