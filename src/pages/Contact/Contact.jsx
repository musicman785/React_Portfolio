import React from "react";
import Hero from "../../components/Hero/hero"
import Footer from "../../components/Footer/Footer"



const Contact = () => {
    return (
        <div>
            <Hero backgroundImage="https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80">
                <h1>Lets get in touch!</h1>
            </Hero>

            <div style={{ textAlign: "center" }}><a className="btn btn-block btn-lg btn-dark white" href="https://www.gmail.com/" target="_blank" rel="noopener noreferrer">Click Here!</a></div>

            <Footer />

        </div>
    )
}

export default Contact;