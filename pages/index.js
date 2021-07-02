import styles from './index.module.scss';
import clsx from 'clsx';

export default function Home() {
  return (
    <section className={clsx(styles.homepageContent, 'inner')}>
      <div class="info">
        <h2>311 can't be the worst band, right?</h2>
        <p> Well on Is It Worse Than... we try to listen to artists and see where they stack againt the </p>
        boys from Omaha 
      </div>
      <iframe src="https://open.spotify.com/embed/show/1I7lI0F33YvpLuORxLp7Ar?theme=0" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </section>
  )
}