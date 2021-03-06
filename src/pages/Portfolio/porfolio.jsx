import React from "react";
import Hero from "../../components/Hero/hero";
import Cards from "../../components/Cards/cards";
import Gifs from "../../components/Cards/gifs.json";
import Wrapper from "../../components/Wrapper/wrapper";
import Footer from "../../components/Footer/Footer"


const Portfolio = () => {
    return (

        <div>

            <Hero backgroundImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60">
                <h1>Chris "El Grande" Conquistador</h1>
                <h2>Welcome to my Portfolio!!</h2>
            </Hero>
            <Wrapper>
                {Gifs.map(giffy => (
                    <Cards key={giffy.id}
                        image={require(`../../components/Cards/Gifs/${giffy.gif}`)}
                        name={giffy.name}
                        type={giffy.type}
                        link={giffy.link}
                    />
                ))}
            </Wrapper>
            <Footer />
            {console.log(Wrapper)}
        </div>
    )
}
export default Portfolio;