import style from './style.module.css'
import PasswordGeneratorHeader from "../password-generator header/PasswordGeneratorHeader";
import PasswordGeneratorBody from "../password-generator-body/PasswordGeneratorBody";
import PasswordGeneratorFooter from "../password-generator-footer/PasswordGeneratorFooter";
import {useState} from "react";

function PasswordGeneratorCard(params) {
    const [password, setPassword] = useState("Amazing Password")

    const updatePassword = (password) => setPassword(password);

    return (
        <div className={style.root}>
            <div className={style.main}>
                <PasswordGeneratorHeader/>
                <PasswordGeneratorBody onSubmit={updatePassword}/>
            </div>
            <PasswordGeneratorFooter passwordGenerated={password}/>
        </div>
    )
}

export default PasswordGeneratorCard;