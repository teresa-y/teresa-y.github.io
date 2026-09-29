import ProjectOverview from "../../components/ProjectOverview"
import NextProject from "../../components/NextProject"
import bridge from "../../images/thumbnails/bridge.png"

import bridgeredesign from "../../images/bridge/bridgeredesign.jpg"
import bridgepo from "../../images/bridge/bridgepo.jpg"
import admindeals from "../../images/bridge/admindeals.jpg"

export default function Bridge() {
    return(
        <>
        <div className = "project-page">
            <ProjectOverview key = "Bridge" 
            pic={bridge} 
            title="Bridge" 
            description="I designed lending tools that made it easier for businesses and internal teams to access, manage, and move funding forward." 
            timeline="September 2025 - August 2026"
            role="Product Designer + Engineer"
            team={"2 Product Managers\n6 Engineers\n 2 Designers"}
            tools={"Figma\nClaude Code"}/>

            <h2>Overview</h2>
            <h3>I led design across lending workflows to translate complex financial processes and information into clearer, more actionable experiences. <br/><br/> This page highlights key projects I worked on at Bridge.</h3>
<br/><br/>
            <div className = "container">
                <div className = "screens">
                    <img src = {bridgeredesign} alt= "bridge redesign screens"/>


                </div>
                <div className = "description">
                    <h4>Bringing Bridge’s disconnected products into one platform.</h4>

                    <p>Bridge’s loan lifecycle was spread across separate applications, making it difficult for teams to move between stages and creating inconsistencies across the platform.</p>

                    <p>I unified four applications into one platform, establishing a consistent UI system. I also translated the designs into production code to create a scalable system that could support future products.</p>
                </div>
            </div>

            <div className = "container">
                <div className = "screens">
                    <img src = {bridgepo} alt= "bridge purchase order lending screens"/>


                </div>
                <div className = "description">
                    <h4>Building Bridge’s first direct lending experience.</h4>

                    <p>With Bridge’s AI technology and access to new capital, there was an opportunity to help retail suppliers access funding faster.</p>

                    <p>I designed and shipped the 0→1 experience, bringing direct lending into Bridge's platform. This created a clearer path to funding for businesses and made it easier for admins to oversee deals.</p>
                                 </div>
            </div>
            <div className = "container">
                <div className = "screens">
                    <img src = {admindeals} alt= "admin-created deals screens"/>


                </div>
                <div className = "description">
                    <h4>Giving admins an easier way to prepare deals</h4>

                    <p>Admins created most deals but had to navigate through a borrower’s account to get started. </p>

                    <p>I redesigned the workflow so admins could prepare deals upfront, giving them more control over setup while creating a clearer starting point for borrowers.</p>

                </div>
            </div>

            <h2>Want to learn more?</h2>
            <p>Please reach out to me at tyang218@gmail.com</p>


        </div>

        <NextProject key = "CMUIFF"
                        url = "/cmuiff"
                        title = "International 'Faces' Film Festival"
                        />

        </>

    );
}