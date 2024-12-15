import logo from '/Chilll_Trip.png'
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <h1 className={classes.heading}>
                    <a href="/" className={classes.logo}>
                        <img src={logo} alt="" className={classes.image}/>
                    </a>
                </h1>
            </div>
        </header>
    )
}

export default Header