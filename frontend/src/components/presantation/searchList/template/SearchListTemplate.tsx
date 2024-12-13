import { Extrack, SearchSpotsResponseBody } from "../../../types/v2Types"
import { Button, Title } from "../../../ui"
import Header from "../../../ui/Header/Header"
import ListItem from "../ListItem/ListItem"
import classes from "./SearchList.module.css"

interface Props {
    searchSpots: SearchSpotsResponseBody;
    extrackList: Extrack[];
    selectedValue: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => void;
}

const SearchList = ({ searchSpots, extrackList, selectedValue, onChange, onSubmit }: Props) => {

    console.log(searchSpots)
    return (
        <div>
            <Header />
            <main className={classes.container}>
                <Title>
                    候補プラン一覧
                </Title>
                <div className={classes.cardList}>
                    <div className={classes.groupContainer}>
                        {
                            searchSpots.combineSpots.map((spots, index) => 
                            <ListItem 
                                spots={spots.places} 
                                indexNumber={index} 
                                extrackList={extrackList} 
                                selectedValue={selectedValue}
                                onChange={onChange}
                                key={index}/>
                            )
                        }
                    </div>
                </div>
                <Button 
                    buttonStyles={{width: "70%"}} 
                    containerStyles={{textAlign: "center"}} 
                    onClick={onSubmit}
                >
                    選択したテーマを元にプラン作成を行う
                </Button>
            </main>
        </div>
    )
}

export default SearchList