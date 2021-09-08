import React from "react";
import IndexHeader from "./components/Header/indexHeader";
import IndexLayout from "./components/Layout/indexLayout";
import firstBackground from "./components/Layout/photo_10.jpg";
import secondBackground from "./components/Layout/photo_11.jpg";
import IndexFooter from "./components/Footer/indexFooter";

const App = ()=>{//Компонент
    return(
        <>
            <IndexHeader title="This is title" descr="This is Description!"/>

            <IndexLayout title="This is title" descr="This is Description!" urlBg={firstBackground} colorBg="#e2e2e2"/>
            <IndexLayout title="This is title" descr="This is Description!" colorBg="#e2e2e2"/>
            <IndexLayout title="This is title" descr="This is Description!" urlBg={secondBackground} colorBg="#e2e2e2"/>

            <IndexFooter/>
        </>
    )
}

export default App;
