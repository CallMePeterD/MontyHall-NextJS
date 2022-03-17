import Card from "../../components/Card"
import styles from '../styles/Form.module.css'
import Link from "next/link"
import { useState } from "react"
import EntradaNum from "../../components/EntradaNum"

export default function Form() {

  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(Math.floor(Math.random() * qtdePortas) + 1)
  
  
  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor='#c0392c'><h1>Monty Hall</h1></Card>
        <Card >
          <EntradaNum text='Qnt Portas?' value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)}></EntradaNum>
        </Card>
      </div>
      <div>
        <Card>
        <EntradaNum text='Porta Com Presente?' value={comPresente} onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}></EntradaNum>
        </Card>
        <Card bgcolor='#28a085'>
          <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
