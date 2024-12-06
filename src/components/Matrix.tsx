import Images from "../utils/Images";

const Matrix = () => {
    const img =  Images[Math.floor(Math.random() * Images.length)]
    return (
        <div className="body matrix-body">
            <img src={img.src} width={img.width} className="gif"/>
        </div>
    )
}

export default Matrix