import style from './style.module.css'
import copyPaste from '../../assets/copy-paste.svg'

function PasswordGeneratorFooter(params) {

    const saveClipboard = () => navigator.clipboard.writeText(params.passwordGenerated)

    return (
        <div style={{cursor: "pointer"}} className={style.root} onClick={saveClipboard}>
            <div>{params.passwordGenerated}</div>
            <img src={copyPaste} alt="copy paste" className={style.image}/>
        </div>
    )
}

export default PasswordGeneratorFooter;