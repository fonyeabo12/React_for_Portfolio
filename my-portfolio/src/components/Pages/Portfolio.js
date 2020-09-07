import React from 'react';
import Navbar from "../Navbar";
import image1 from "./Assets/images/Covid 19 screenshot.jpg";
import image2 from "./Assets/images/Car Maintenance Logger.jpg";
import "../Pages/Assets/css/style.css";




function Portfolio() {
    let url1="https://images.unsplash.com/photo-1436262513933-a0b06755c784?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450";
    let url2="https://images.unsplash.com/photo-1439396087961-98bc12c21176?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450";
    let url3="https://images.unsplash.com/photo-1439694458393-78ecf14da7f9?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450";
    return (
        <div>
             <section id="portfolio">

            <h1>Portfolio</h1>

            <div id="content-portfolio">

            <div class="wrap-project">

                <div id="hangman">

                    <img  src={image1} alt="Screenshot of Covid 19 web page" class="photo-size"/>

                    <h3>This tracker gives you the stats of Covid 19 cases in the 50 states of the US</h3>

                </div>

                <div id="rpg_game">

                    <img src={image2} alt="Screenshot of Car Maintenance web page" class="photo-size"/>

                    <h3>This application provides a platform where you can log your car maintenace details</h3>

                </div>

            </div>
            
            <div class="wrap-project">

                <div id="trivia">

                    <img src={url1} alt="project3" class="photo-size"/>

                    <h3>Project 3</h3>

                </div>

                <div id="rutgers">

                    <img src={url2} alt="project4" class="photo-size"/>

                    <h3>Project 4</h3>

                </div>

            </div>

            <div class="wrap-project">

                <div id="rps">

                    <img src={url3} alt="project5" class="photo-size"/>

                    <h3>Project 5</h3>

                </div>
                
            </div>
            
            </div>

        </section>
        </div>
    );
}



export default Portfolio;
