import Image from "next/image"
import styles from './../styles/About.module.css'

export default function About(){
    return(
        <div className={styles.about}>
            <h1>Sobre o Projeto</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Image src='/imagens/charizard.png' width='300' height='300' alt='pokemon' />
        </div>
    )
}