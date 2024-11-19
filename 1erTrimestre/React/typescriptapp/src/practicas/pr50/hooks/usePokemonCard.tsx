import { useParams } from "react-router-dom";
import { useAppContext } from "../AppContextProvider";
import { useEffect, useState } from "react";
import axios from "axios";

type PokemonCardData = {
    name : string;
    img : string;
    weight : number;
    height : number;
}
export function usePokemonCard(){
    const [responseUrl, setresponseUrl] = useState<PokemonCardData>({} as PokemonCardData);
    const {id} = useParams();
    

    useEffect(() => {
        async function getPokemonCard(id: string){
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
            const newCard : PokemonCardData = {
                name : response.data.name,
                img : response.data.sprites.front_default,
                weight : response.data.weight,
                height : response.data.height
            }
            setresponseUrl(newCard);
        }
        
        getPokemonCard(id ? id : "");

    }, [id])

    return {responseUrl};
}