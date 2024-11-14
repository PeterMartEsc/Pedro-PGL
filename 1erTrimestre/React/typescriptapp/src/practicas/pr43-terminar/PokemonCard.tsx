import React from 'react'

type Props = {
    url : string;
}

const PokemonCard = (props: Props) => {

    const url = props.url;

    return (
        <>
        
            <img src={url} alt="" />
        </>
    )
}

export default PokemonCard