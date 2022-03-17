import styles from '../src/styles/EntradaNum.module.css'


interface EntradaNumProps {
    text: string
    value: number
    onChange: (newValue: number) => void
}

export default function EntradaNum(props: EntradaNumProps) {
    const dec = () => props.onChange(props.value - 1)
    const inc = () => props.onChange(props.value + 1)

    return (
        <div className={styles.entradaNum}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.botoes}>
                <button className={styles.btn} onClick={dec}>-</button>
                <button className={styles.btn} onClick={inc}>+</button>
            </div>
        </div>
    )
}