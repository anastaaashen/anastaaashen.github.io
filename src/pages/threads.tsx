import { useState } from "react";
import { FooterLink } from "../footer-link";
import iglogo from '../ig-logo-135.png';
import styles from './threads.module.css';
import cn from 'classnames';

const FOOTER_LINKS = [
    { url: 'https://anastaaashen.github.io/threads/login', label: '© 2024' },
    { url: '', label: 'Условия Threads' },
    { url: '', label: 'Политика конфиденциальности' },
    { url: '', label: 'Политику в отношении файлов cookie' },
    { url: '', label: 'Настройки файлов cookie' },
    { url: '', label: 'Сообщить о проблеме' },
  ];

export function Threads () {
    const [isNight, setNight] = useState(false);

    const handleClick = () => {
      setNight(!isNight);
    }
    
      return (
        <div className={isNight ? cn(styles.root, styles.nightTheme): styles.root}> 
            <div className={styles.container}>
                <div className={styles.box}>Как вы хотите использовать Threads?</div>
                <div className={styles.box1} id="box-lol" onClick={() => alert('lol')}>
                    <div className={styles.boxTitle}>
                        <div>Продолжить с аккаунтом Instagram</div>
                        <img src={iglogo} alt="иконка инстаграм"></img>
                    </div>
                    <div className={styles.mini}>Войдите в профиль Threads или создайте его через аккаунт Instagram. Вы сможете публиковать контент в Threads и взаимодейтсвовать с ним.</div>
                </div>
                <div className={styles.box1} >
                <div className={styles.boxTitle}>Использовать без профиля</div>
                    <div className={styles.mini}>Вы можете пользоваться Threads без профиля, но тогда вы не сможете публиковать контент и взаимодейтсвовать с ним.</div>
                </div>
                <div className={styles.blok}> 
                {FOOTER_LINKS.map((footerLink) => (
                    <FooterLink url={footerLink.url} label= {footerLink.label}></FooterLink>
                  ))}
                 </div>
            </div>
            <button className={styles.nightThemeBtn} onClick={handleClick}>Night</button>
        </div>
      );
}