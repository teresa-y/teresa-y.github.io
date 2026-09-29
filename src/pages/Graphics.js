import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import bloom from "../images/graphics/bloom.gif"
import greenops from "../images/graphics/greenops.png"
import maobi from "../images/graphics/maobi.png"
import slos from "../images/graphics/slos_orig.png"
import cream from "../images/graphics/cream.png"
import cddf from "../images/graphics/cddf1.png"

  
export default function Graphics() {
  

    return (
        <>
            <div className = "play-container">
                <h3 style={{marginTop: "0", marginBottom: "0.625em"}}>posters and graphics</h3>
                <ResponsiveMasonry
        columnsCountBreakPoints={{ 480: 2, 768: 3 }}
      >

                <Masonry gutter="20px">
                    <img src = {slos} alt = "schoolwide learning outcomes poster for homestead high school"/>
                    <img src = {bloom} alt = "bloom bagels rebrand"/>
                    <img src = {greenops} alt = "poster contest flyer"/>
                    <img src = {cream} alt = "promotional poster for a cream fundraiser"/>
                    <img src = {cddf} alt = "poster for dongdaemun design plaza event"/>
                    <img src = {maobi} alt = "poster for maobi, an ios calligraphy app"/>

                  </Masonry>
                  </ResponsiveMasonry>

                </div>
                
        </>
    );
}
