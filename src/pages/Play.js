// import heuristicats from "../images/thumbnails/heuristicats.png"
// import tca from "../images/thumbnails/tca.png"
// import art from "../images/thumbnails/art.png"

import heuristicatsbattle from "../images/play/heuristicatsbattle.gif"
import different_process from "../images/play/different_process.png"
import hue_as_value from "../images/play/hue_as_value.png"
import intentional from "../images/play/intentional.png"
import optical_mixing from "../images/play/optical_mixing.png"
import heuristicatsbath from "../images/play/heuristicatsbath.gif"
import bezold_effect from "../images/play/bezold_effect.png"
import tca from "../images/play/tca.gif"
import hsrmerch from "../images/play/hsrmerch.jpg"
import cats from "../images/play/cats.png"
import miku from "../images/play/miku.jpg"
import tgcf from "../images/play/tgcf.jpg"



import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


  
export default function Play() {
  

    return (
        <>
            <div className = "play-container">
                {/* {projects} */}
                <h3 style={{marginTop: "0", marginBottom: "0.625em"}}>art explorations</h3>
                <ResponsiveMasonry
        columnsCountBreakPoints={{ 480: 2, 768: 3 }}
      >

                <Masonry gutter="10px">
                    <img src = {hue_as_value} alt = "illustration using hues as value"/>
                    <img src = {tca} alt = "3d model falling animation"/>
                    {/* <img src = {heuristicatsbath} alt = "minigame about consistency in heuristicats"/> */}
                    <img src = {bezold_effect} alt = "drawing of three rabbits, experiment with bezold effect"/>
                    {/* <img src = {heuristicatsbattle} alt = "battle scene from heuristicats game"/> */}
                    <img src = {different_process} alt = "illustration of green scenery"/>                    
                    <img src = {tgcf} alt = "hand drawn stickers of tgcf characters"/>
                    <img src = {optical_mixing} alt = "illustration of bunny under a plant"/>
                    <img src = {hsrmerch} alt = "handdrawn acrylic keychains of dan heng, blade, and jing yuan from honkai star rail"/>
                    <img src = {miku} alt = "hand drawn stickers of project voltage miku"/>
                    <img src = {cats} alt = "drawings of cats as food"/>
                    <img src = {intentional} alt = "illustration of yellow scenery"/>



                  </Masonry>
                  </ResponsiveMasonry>

                </div>
                
        </>
    );
}
