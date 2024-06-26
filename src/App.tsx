import React, { useState } from 'react';
import iglogo from './ig-logo-135.png';
import './App.css';

const FOOTER_LINKS = [
  { url: 'https://anastaaashen.github.io/threads/login', label: '© 2024' },
  { url: '', label: 'Условия Threads' },
  { url: '', label: 'Политика конфиденциальности' },
  { url: '', label: 'Политику в отношении файлов cookie' },
  { url: '', label: 'Настройки файлов cookie' },
  { url: '', label: 'Сообщить о проблеме' },
];

function App() {
const [isNight, setNight] = useState(false);

const handleClick = () => {
  setNight(!isNight);
}

  return (
    <div className={isNight ? 'root night-theme': 'root'}> 
        <div className="container">
            <div className="box">Как вы хотите использовать Threads?</div>
            <div className="box1" id="box-lol" onClick={() => alert('lol')}>
                <div className="box-title">
                    <div>Продолжить с аккаунтом Instagram</div>
                    <img src={iglogo} alt="иконка инстаграм"></img>
                </div>
                <div className="mini">Войдите в профиль Threads или создайте его через аккаунт Instagram. Вы сможете публиковать контент в Threads и взаимодейтсвовать с ним.</div>
            </div>
            <div className="box1" id="box-kek" onClick={() => alert('kek')}>
                <div className="box-title">Использовать без профиля</div>
                <div className="mini">Вы можете пользоваться Threads без профиля, но тогда вы не сможете публиковать контент и взаимодейтсвовать с ним.</div>
            </div>
            <div className="blok"> 
            {FOOTER_LINKS.map((footerLink) => (
                <p><a href={footerLink.url}>{footerLink.label}</a></p> 
              ))}
             </div>
        </div>
        <button className="night-theme-btn" onClick={handleClick}>Night</button>
    </div>
  );
}

export default App;
