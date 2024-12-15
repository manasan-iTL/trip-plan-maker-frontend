import { Link } from "react-router-dom"
import Header from "../ui/Header/Header"

const ErrorPage = () => {
    return (
        <div>
            <Header />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <p>
                本日の利用回数の上限に達しました。
                <br/>お手数ですが、別日に再度お試しください。
            </p>
            <Link to="/">トップページへ</Link>
            </div>
        </div>
    )
}

export default ErrorPage