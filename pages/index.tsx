import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from './home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.divBody}>
      <Head>
        <title>EAD | Login</title>
      </Head>
      <main>
        <section className={styles.sessionLogin}>
          <h1 className={styles.title}>SEJA BEM-VINDO À<br></br> <strong className={styles.strongPucrs}>PUCRS</strong><strong className={styles.onLine}>online</strong></h1>
          <div className={styles.divImage}>
            <img src="pucrs.jpg" alt="" className={styles.pucrsImage} />
          </div>

          <form className={styles.container}>

            <div className={styles.email}>
              <img src="Email.svg" alt="" className={styles.letterEmail} />
              E-MAIL
              <input type="text" placeholder=' email@exemple.com.br' className={styles.inputEmail} />
            </div>
            <div className={styles.senha}>
              <img src="Senha.svg" alt="" className={styles.lookSenha} />
              SENHA
              <input type='text' placeholder=" ********" className={styles.inputSenha} />
            </div>
          </form>

          <a href="/" className={styles.passwordForgot}>Esqueceu sua senha?</a>
          <button className={styles.buttonEntrar}>Entrar</button>
          <p className={styles.orEnter}>Ou entre usando:</p>
          <section className={styles.buttonAuth}>
            <button className={styles.facebook}>Facebook</button>
            <button className={styles.google}>Google</button>
          </section>

        </section>
      </main>
    </div>

  )
}

export default Home
