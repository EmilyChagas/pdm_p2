import React from "react"
import Imagem from "./Imagem"
const ListaPhotos = ({NasaPhotos,estiloImg}) => {
    return(
        NasaPhotos.map((NasaPhotos)  =>(
            <Imagem estiloImg={estiloImg} src={NasaPhotos.url}/>
        ))
        
    )
}

export default ListaPhotos