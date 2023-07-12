import classes from "./SpotCard.module.css"

interface Props {
    spotName: string;
    spotImgSrc: string;
    spotImgAlt: string;
}

const SpotCard = (props: Props) => {
    return (
        <div className={classes.container}>
            <div className={classes.imgArea}>
                <img src={props.spotImgSrc} alt={props.spotImgAlt} className={classes.img}/>
            </div>
            <div className={classes.spot}>
                <p className={classes.text}>{props.spotName}</p>
                <div>
                    <button className={classes.Btn}>追加</button>
                </div>
            </div>
        </div>
    )
}

export default SpotCard