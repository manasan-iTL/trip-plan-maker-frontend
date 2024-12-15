import classes from './LazyImage.module.css'
import defaultImage from '/no_image_logo.png'

interface Props {
    spotImgSrc: string | null;
    imgSize: React.CSSProperties;
    isLoading: boolean
}

const LazyImage = ({isLoading, spotImgSrc, imgSize}: Props) => {

    if (isLoading) return (
    <div className={classes.spinnerContainer}>
        <div className={classes.spinner}></div>
      </div>
    )

    return (
        <div className={classes.imgArea}>
            <img src={spotImgSrc ?? defaultImage} alt={""} className={classes.img} style={imgSize}/>
        </div>
    )
}

export default LazyImage