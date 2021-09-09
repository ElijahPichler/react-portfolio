import React from 'react'
import {Button} from 'react-bootstrap'
import {AiFillLinkedin, AiOutlineGithub} from 'react-icons/ai'
export const Header = () => {
    const resume = "https://docs.google.com/document/d/1M2Wfph0Ss6ARBJ_SCVXkt_HC5V5bcUKBL8Qr4B9XAUk/edit#heading=h.5x0d5h95i329"
    const downloadFile = () => {
        window.location.href = "https://docs.google.com/document/d/1M2Wfph0Ss6ARBJ_SCVXkt_HC5V5bcUKBL8Qr4B9XAUk/edit#heading=h.5x0d5h95i329"
    }


    return (
        <div className="header" id="home">
            <div className="mainInfo">
                <h1>Elijah Pichler</h1>
                <Button className="resumeButton" href={resume} target="_blank">Resume</Button>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/elijah-pichler-603931153/" target="_blank"><AiFillLinkedin size="50px"/></a>
                    <a href="https://github.com/ElijahPichler?tab=repositories" target="_blank"><AiOutlineGithub size="50px"/></a>
                </div>
                
            </div>
           
        </div>
    )
}
export default Header;
