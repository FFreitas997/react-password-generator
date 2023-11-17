import style from './style.module.css'
import lockImage from '../../assets/lock.svg'

function PasswordGeneratorHeader(params) {
    return (
        <div className={style.root}>
            <div>Password Generator</div>
            <img src={lockImage} alt="Lock icon" className={style.icon}/>
        </div>
    )
}

export default PasswordGeneratorHeader;