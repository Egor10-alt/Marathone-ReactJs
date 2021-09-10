import React from "react";
import Header from "./components/Header/indexHeader";
import Layout from "./components/Layout/indexLayout";
import firstBackground from "./components/Layout/photo_10.jpg";
import secondBackground from "./components/Layout/photo_11.jpg";
import Footer from "./components/Footer/indexFooter";
import PokemonCard from "./components/PokemonCard";
import "./App.css";
import pokemonProps from "./components/PokemonCard/pokemonProps.json";

console.log("pokemonProps",pokemonProps);

const App = ()=>{//Компонент
    return(
        <>
            <Header title="This is title" descr="This is Description!"/>

            <Layout title="This is title" descr="This is Description!" urlBg={firstBackground} colorBg="">
                <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
                    Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.

                    To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color.
                    To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared.
                    If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color.
                    If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.
                </p>
            </Layout>


            <Layout title="This is title" descr="This is Description!" colorBg="#e2e2e2">
                <div className="flex">
                    {
                        pokemonProps.map((card)=> <PokemonCard key={card.id} abilities={card.abilities} stats={card.stats} value={card.values} base_experience={card.base_experience} height={card.height} id={card.id} img={card.img} name={card.name} type={card.type}/>)
                    }
                </div>
            </Layout>


            <Layout title="This is title" descr="This is Description!" urlBg={secondBackground} colorBg="">
                <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
                    Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.

                    To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color.
                    To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared.
                    If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color.
                    If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.
                </p>
            </Layout>

            <Footer/>
        </>
    )
}

export default App;
