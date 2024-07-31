import styles from './content.module.css';
import like from './like2.png';
import comment from './comment.png';
import repost from './repost.png';
import share from './share.png';
import foto from './avatar.jpeg';
import content from './nature.jpg';
import { ReactComponent as DotsIcon } from './dots.svg';

export const Content = () => {
    return (
        <div className={styles.container}>
            <div className={styles.blok}>
                <div>
                    <div className={styles.userlogo}></div>
                </div>
                <div>
                    <div className={styles.header}>
                        <div className={styles.user}>
                            <div className={styles.username}>user1</div>
                            <div className={styles.date}>2 d.</div>
                        </div>
                        <div className={styles.burger}>
                            <DotsIcon />
                        </div>
                    </div>
                    <div className={styles.post}>It's a good weather today</div>
                    <div className={styles.content}> <img src={foto}></img></div>
                    <div className={styles.communication}>
                        <button className={styles.btn}><img src={like} alt="like"></img></button>
                        <button className={styles.btn}><img src={comment} alt="comments"></img></button>
                        <button className={styles.btn}><img src={repost} alt="repost"></img></button>
                        <button className={styles.btn}><img src={share} alt="share"></img></button>
                    </div>
                </div>
            </div>
            <div className={styles.blok}>
                <div className={styles.header}>
                   <div className={styles.userlogo}></div>
                     <div className={styles.user}>
                        <div className={styles.username}>user2</div>
                        <div className={styles.date}>3 d.</div>
                     </div>
                        <div className={styles.burger}>...</div>
                     
                </div>
                <div className={styles.post}>It's a good weather today</div>
                <div className={styles.content}> <img src={content }></img></div>
                <div className={styles.communication}>
                    <button className={styles.btn}><img src={like} alt="like"></img></button>
                    <button className={styles.btn}><img src={comment} alt="comments"></img></button>
                    <button className={styles.btn}><img src={repost} alt="repost"></img></button>
                    <button className={styles.btn}><img src={share} alt="share"></img></button>
                </div>
            </div>
        </div>
        
    )
}