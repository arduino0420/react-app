import style from "./Button.module.css"

export default function Button({ children, onClick }) {
    return (
        <button className={style.button} type="button" onClick={onClick}>
            <span className={style.buttonInner}>{children}</span>
        </button>
    )
}
