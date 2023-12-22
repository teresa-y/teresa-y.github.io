import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


const pics = [
    
]

export default function Play() {
    return (
        <>
            <h1>play</h1>
            <div className = "play-container">
                {/* <ResponsiveMasonry columnsCountBreakPoints={{ 300: 2, 500: 3, 700: 4 }}>
                    <Masonry>
                        {pics.map((pic, i) => (
                            <img
                            key={i}
                            src={pic}
                            style={{width: "100%", display: "block"}}
                            alt=""
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry> */}

                <p>Coming soon!</p>
            </div>

        </>
    );
}
