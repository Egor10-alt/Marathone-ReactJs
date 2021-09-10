import stylePokemonCard from "./stytle.module.css";
import cardBackSide from "./card-back-side.jpg"
import { useState } from "react";


const PokemonCard = ({abilities,stats,value,base_experience,height,id,img,name,type})=>{
    const [isActive,setActive] = useState(false);
    console.log(isActive);

    const handleClickCardBack = ()=>{
        setActive(true);//setActive это функция
    };
    
    return(
        <div className={stylePokemonCard.root} onClick={handleClickCardBack}>
            <div className={`${stylePokemonCard.pokemonCard} ${isActive ? stylePokemonCard.active : ""}`}>
                <div className={stylePokemonCard.cardFront}>
                    <div className={`${stylePokemonCard.wrap} ${stylePokemonCard.front}`}>
                        <div className={`${stylePokemonCard.pokemon} ${stylePokemonCard[type]}`}>
                            <div className={stylePokemonCard.values}>
                                <div className={`${stylePokemonCard.count} ${stylePokemonCard.top}`}>{value.top}</div>
                                <div className={`${stylePokemonCard.count} ${stylePokemonCard.right}`}>{value.right}</div>
                                <div className={`${stylePokemonCard.count} ${stylePokemonCard.bottom}`}>{value.bottom}</div>
                                <div className={`${stylePokemonCard.count} ${stylePokemonCard.left}`}>{value.left}</div>
                            </div>
                            <div className={stylePokemonCard.imgContainer}>
                                <img src={img} alt={name}/>
                            </div>
                            <div className={stylePokemonCard.info}>
                                <span className={stylePokemonCard.number}>#{id}</span>
                                <h3 className={stylePokemonCard.name}>{name}</h3>
                                <small className={stylePokemonCard[type]}>Type: <span>{type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={stylePokemonCard.cardBack}>
                    <div className={`${stylePokemonCard.wrap} ${stylePokemonCard.back}`}>
                        <img src={cardBackSide} alt="Сard Backed" />
                    </div>
                </div>

            </div>
        </div>
    )
};

export default PokemonCard;
