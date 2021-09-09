import React from 'react'
import Cards from './Cards'
import calorieCounter from './CalorieCounterPhoto.PNG'
import weather from './weatherPhoto.PNG'
export const Projects = () => {
    return (
        <div id="projectContainer" className="container" >
            <h1   className="projectTitle"><span className="react">React</span> Projects</h1>
            <div className="cardContainer">
                <div className="box1">
                    <Cards 
                    appSite="https://reactfoodtracker.netlify.app"
                    githubSite="https://github.com/ElijahPichler/react-calorie-counter-app"
                    title="Calorie Counter" 
                    text="This app allows the user to track their daily food intake and how it affects their daily intake"
                    photo={calorieCounter}
                />
                </div>
                <div className="box2">
                    <Cards 
                    appSite="https://cityweatherapp.netlify.app/"
                    githubSite="https://github.com/ElijahPichler/React-Weather-App"
                    title="City's Weather"
                    text="This app allows users to enter their city and returns unique information about the current weather"
                    photo={weather}
                    />

                </div>

            </div>
           
            
        </div>
    //     <div id="projectContainer" className="container" >
    //     <h1   className="projectTitle"><span className="react">React</span> Projects</h1>
    //     <div className="row">
    //         <Cards 
    //         appSite="https://caloriecounterapp.netlify.app"
    //         githubSite="https://github.com/ElijahPichler/react-calorie-counter-app"
    //         title="Calorie Counter" 
    //         text="This app allows the user to track their daily food intake and how it affects their daily intake"
    //         photo={calorieCounter}
    //        />
    //         <Cards 
    //          appSite="https://cityweatherapp.netlify.app/"
    //          githubSite="https://github.com/ElijahPichler/React-Weather-App"
    //          title="City's Weather"
    //          text="This app allows users to enter their city and returns unique information about the current weather"
    //          photo={weather}
    //          />

    //     </div>
        
    // </div>
    )
}

export default Projects;
