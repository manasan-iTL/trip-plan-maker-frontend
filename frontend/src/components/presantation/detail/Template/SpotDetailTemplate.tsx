import { useParams, useNavigate } from "react-router-dom"
import { Title, Radio, Tab, FixedPointCard, WayPointCard, Button } from "../../../ui"
import { IoIosArrowBack } from "react-icons/io"
import classes from "./SpotDetailTemplate.module.css"
import { DetailTemplateProps, PlaceDetailResponse, Spot } from "../../../types/v2Types"
import defalutSrc from '/no_image_logo.png'

const SpotDetailTemplate = (props: DetailTemplateProps) => {
    const navigate = useNavigate()
    const { spot } = props;

    if (!spot) return (
        <div>
            詳細情報を開くことができませんでした
        </div>
    )

    return (
        <div>
            <main className={classes.container}>
                <div>
                    <div className={classes.titleContainer}>
                        <button className={classes.backIconButton} onClick={() => navigate(-1)}>
                            <IoIosArrowBack size={"30px"}/>
                        </button>
                        <Title>{spot.spotName}</Title>
                    </div>
                    <div className={classes.pictureContainer}>
                        <img src={spot.spotImgSrc.length === 0 ? defalutSrc : spot.spotImgSrc} alt="" className={classes.picture} />
                    </div>
                </div>
                <section>
                    <h3 className={classes.heading}>詳細情報</h3>
                    <ul className={classes.listInfo}>
                        <li className={classes.infoLine}>
                            <p>住所</p>
                            <p>{spot.formattedAddress}</p>
                        </li>
                        <li className={classes.infoLine}>
                            <p>電話番号</p>
                            <p>{spot.nationalPhoneNumber}</p>
                        </li>
                        <li className={classes.infoLine}>
                            <p>営業時間</p>
                            { 
                                spot.regularOpeningHours ?
                                spot.regularOpeningHours.weekdayDescriptions.map(
                                    weekday => (<li>{weekday}</li>)
                                ):
                                "営業時間の情報を取得できませんでした。" 
                            }
                        </li>
                        <li className={classes.infoLine}>
                            <p>備考</p>
                            <p><a href={spot.websiteUri}>サイトリンク</a></p>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    )
}

export default SpotDetailTemplate