import styles from "./Result.module.css";
import Confetti from 'react-confetti';

export default function Result({ maxQuizLen, correctNumLen }) {
    return (
        <>
            <div className={styles.result}>
                あなたの正解数は...
                <span className={styles.resultHighlight}>
                    {`全${maxQuizLen}問中、${correctNumLen}問正解`}
                </span>
                でした！
            </div>
            <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                gravity={10}
                friction={0.1}
                tweenDuration={2000}
            />
        </>
    )
}