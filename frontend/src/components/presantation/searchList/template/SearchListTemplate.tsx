import { ApiError, Extrack, SearchSpotsResponseBody, ValidationError } from "../../../types/v2Types"
import { Button, Title } from "../../../ui"
import ErrorDialog from "../../../ui/Dialog/ErrorDialog"
import LoadingDialog from "../../../ui/Dialog/LoadingDialog"
import Header from "../../../ui/Header/Header"
import ErrorText from "../../../ui/Text/ErrorText"
import ListItem from "../ListItem/ListItem"
import classes from "./SearchList.module.css"

interface Props {
    searchSpots: SearchSpotsResponseBody;
    extrackList: Extrack[];
    selectedValue: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => void;
    isLoading: boolean;
    isApiError: ApiError | null;
    closeErrorDialog: () => void;
    validationError: ValidationError | null
}

const SearchList = ({ searchSpots, extrackList, selectedValue, onChange, onSubmit, isApiError, isLoading, closeErrorDialog, validationError }: Props) => {

    return (
        <div>
            { /**  エラーダイアログ */ }
            {
                isApiError && 
                <ErrorDialog 
                    message={isApiError.message} 
                    title="プラン生成に失敗しました。" 
                    onClose={closeErrorDialog}
                />
            }

            {/** ローディング処理 */}
            {
                isLoading && <LoadingDialog isOpen={isLoading} message="プランを生成中です。"/>
            }

            <Header />
            <main className={classes.container}>
                <Title>
                    候補プラン一覧
                </Title>

                {/** バリデーションエラー */}
                {
                    validationError && <ErrorText text={validationError.message} fontSize={20}/>
                }

                <div className={classes.cardList}>
                    <div className={classes.groupContainer}>
                        {
                            searchSpots.combineSpots.map((spots, index) => 
                            <ListItem 
                                spots={spots.places} 
                                theme={spots.theme}
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