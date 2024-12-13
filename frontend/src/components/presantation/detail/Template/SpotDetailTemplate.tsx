import { useParams, useNavigate } from "react-router-dom"
import { Title, Radio, Tab, FixedPointCard, WayPointCard, Button } from "../../../ui"
import { IoIosArrowBack } from "react-icons/io"
import classes from "./SpotDetailTemplate.module.css"
import { DetailTemplateProps, PlaceDetailResponse, Spot } from "../../../types/v2Types"

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
                        <img src={spot.spotImgSrc} alt="" className={classes.picture} />
                    </div>
                </div>
                <section>
                    <h3>出発時間・滞在時間の変更</h3>
                    <div className={classes.infoContainer}>
                        <dl className={classes.inputBox}>
                            <dt className={classes.labelConitainer}>
                                <label className={classes.label} htmlFor="出発">出発時間</label>
                            </dt>
                            <dd className={classes.inputContainer}>
                                <input id="出発" type="time" className={classes.input} value="11:00" />
                            </dd>
                        </dl>
                        <dl className={classes.inputBox}>
                            <dt className={classes.labelConitainer}>
                                <label className={classes.label} htmlFor="滞在">滞在時間</label>
                            </dt>
                            <dd className={classes.inputContainer}>
                                <input id="滞在" type="number" value={2} className={classes.input} /><span className={classes.smallSpace}>時間</span>
                            </dd>
                        </dl>
                        <Button buttonStyles={{width: "70%"}} containerStyles={{textAlign: "center"}} onClick={() => console.log("Click")}>
                    時間を変更する
                </Button>
                    </div>
                </section>
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
                            { spot.regularOpeningHours.weekdayDescriptions.map(weekday => (
                                <li>{weekday}</li>
                            )) 
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