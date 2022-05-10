import Head from 'next/head'
import styles from './password.module.scss';

export default function passwordRecovery() {
    return (
        <>
        <div className={styles.divBody}>
             <Head>  
               <title>PasswordRecovery</title> 
        </Head>
        <main>
            <section>   
                <div className={styles.header}>
                <h1 className={styles.pucrsH1}>PUCRS<strong>online</strong></h1>  
                </div>
                
                <h1 className={styles.recoveryPass}>RECUPERE SUA SENHA</h1>
            </section>
            <form className={styles.formulation}>
                <div className={styles.newPass}>
                <img src="Senha.svg" alt="" className={styles.cadeadoNew}/>
                NOVA SENHA</div>   
                <input type="text" className={styles.inputNewPass} placeholder="********"/>

                
                <div className={styles.confirmPass}>
                <img src="Senha.svg " alt="" className={styles.cadeadoConfirm}/>      
                 CONFIRME SUA SENHA</div>
                <input type="text"  className={styles.inputConfirmPass} placeholder=' *******'/>
            </form>
            <p className={styles.paragraph}>Minimo 08 caracteres, contendo: 01 letra maiúscula, 01 número, e 01<br></br>caractere especial.</p>
            <button className={styles.buttonSave}>Salvar</button>
        </main> 
        </div>
      
        </>
    )
}