import style from './style.module.css'
import {generatePassword} from '../../utils/password.js'

function PasswordGeneratorBody(params) {
    const submit = (event) => {
        event.preventDefault();
        const formResult = {};
        new FormData(event.currentTarget)
            .forEach((value, key) => (formResult[key] = value));
        params.onSubmit(generatePassword(formResult));
    }

    return (
        <form onSubmit={submit}>
            <div className={style.grid_container}>
                <div className={style.grid_item}>
                    Size:
                    <select name="size" defaultValue={15}>
                        <option>5</option>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                    </select>
                </div>
                <div className={style.grid_item}>
                    Uppercase:
                    <input name="uppercase" type="checkbox" defaultChecked/>
                </div>
                <div className={style.grid_item}>
                    Numbers:
                    <input name="number" type="checkbox" defaultChecked/>
                </div>
                <div className={style.grid_item}>
                    Specials:
                    <input name="special" type="checkbox" defaultChecked/>
                </div>
            </div>
            <div className={style.btn_container}>
                <button type="submit" className={style.btn_generate}>Generate</button>
            </div>
        </form>
    )
}

export default PasswordGeneratorBody;