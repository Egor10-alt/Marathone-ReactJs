import styleLayout from "./style.module.css";

console.log(styleLayout);

const Layout = ({title,urlBg = false,colorBg ,children}) => {


    console.log("children",children);

    const background = urlBg ? { backgroundImage: `url(${urlBg})` } : { backgroundColor: colorBg }
    console.log("background",background);


    return(
        <section className= {styleLayout.root} style={background}>
            <div className= {styleLayout.wrapper}>
                <article>
                    <div className={styleLayout.title}>
                        <h3>{title}</h3>
                        <span className={styleLayout.separator}></span>
                    </div>
                    <div className= {`${styleLayout.desc} ${styleLayout.full}`}>
                        <p>{children}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;
