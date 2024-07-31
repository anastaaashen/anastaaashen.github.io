import styles from './content.module.css';
import like from './like2.png';
import comment from './comment.png';
import repost from './repost.png';
import share from './share.png';
import foto from './avatar.jpeg';
import content from './nature.jpg';
import { ReactComponent as DotsIcon } from './dots.svg';
import { posts } from './content.data';

export const Content = () => {
    return (
        <div className={styles.container}>
            {posts.map((post) => (
                <div key={post.id} className={styles.blok}>
                    <div>
                        <div className={styles.userlogo} style={{backgroundImage: `url(${post.avatar})`}}></div>
                    </div>
                    <div>
                        <div className={styles.header}>
                            <div className={styles.user}>
                                <div className={styles.username}>
                                    {post.username}
                                </div>
                                <div className={styles.date}>
                                    {post.date}d.
                                </div>
                            </div>
                            <div className={styles.burger}>
                                <DotsIcon />
                            </div>
                        </div>
                        <div className={styles.post}>
                            {post.text}
                        </div>
                        <div className={styles.content}>
                            <img src={post.image}></img>
                        </div>
                        <div className={styles.communication}>
                            <button className={styles.btn}><img src={like} alt="like"></img></button>
                            <button className={styles.btn}><img src={comment} alt="comments"></img></button>
                            <button className={styles.btn}><img src={repost} alt="repost"></img></button>
                            <button className={styles.btn}><img src={share} alt="share"></img></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}