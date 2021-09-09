import React from 'react'
import face from './face.jpg'
export const AboutMe = () => {
    return (
        <div className="container" id="aboutMeContainer">
            <h1 className="aboutMeTitle">About <span className="react">Me</span></h1>
            <img src={face}/ >
            <hr style={{
                color: '#2867B2',
                backgroundColor: '#2867B2',
                height: 3,
                borderColor : '#2867B2'
            }}/>
            <p className="aboutMe">Hello! My name is Elijah Pichler and I am currently pursuring a degree in Computer Science at UCSD. I found my love for Computer Science around the age 18 and since then I have loved it. In my free time I try to learn new softwares and different programming languages to broaden my skill set. </p>
        </div>
    )
}

export default AboutMe;
