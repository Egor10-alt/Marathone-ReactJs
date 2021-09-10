import styleHeader from "./style.module.css";

const IndexHeader = ({title , descr})=>{

    return(
        <header className={styleHeader.root}>
            <div className={styleHeader.forest}>
                <div className={styleHeader.container}>
                    <h1>{title}</h1>
                    <p>{descr}</p>
                </div>
            </div>
        </header>
    )
}

export default IndexHeader;