import React from "react"
import Hero from "../../components/Hero/hero";
import Footer from "../../components/Footer/Footer"


const About = () => {

    return (
        <div style={{ backgroundColor: "black" }}>
            <Hero backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80">
            </Hero>


            <h1 style={{ textAlign: "center", color: "white" }}>Hello Everybody!</h1>

            <h3 style={{ textAlign: "center", color: "lightblue" }}><strong>Name: </strong>Chris Salgado</h3>
            <h3 style={{ textAlign: "center", color: "grey" }}><strong>Resume:</strong><a className="btn btn-link" href="https://docs.google.com/document/d/1XHbxJBZpIGPB46t3nYBQKzq8VJjxMrfzJVLB-MYWGRQ/preview" target="_blank" rel="noopener noreferrer">Link!</a></h3>
            <h3 style={{ textAlign: "center", color: "grey" }}><strong>About me: </strong>Software developer with good skill and even better attitude. Like a big kid, but responsible. Love programming, dogs, and pizza. Enjoy sports and sci-fi thriller movies.</h3>
            <h3 style={{ textAlign: "center", color: "grey" }}><strong>Hobbies: </strong>You mean other than coding right? I play slowpitch softball(harder than it sounds), microbrews, and road trips.</h3>

            <Footer />
        </div>


    )


}

export default About;