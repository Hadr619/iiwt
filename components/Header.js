import Link from 'next/link'
import Nav from './Nav/Nav';
import Logo from './svg/Logo';
import Palmtree from './svg/Palmtree';
import Wave from './svg/Wave';
import styles from './Header.module.scss';
import clsx from 'clsx';
export default function Header() {
    const renderLogo = () => {
		return (
			<div className={styles.logo}>
			<Link href="/">
			<a className={styles.logoLink}>
			  <Logo />
			  <p className={styles.sublogo}>Is It Worse Than...</p>
			  </a>
			</Link>
		  </div>
		);
	}
	const getPalmTrees = () => {
		let palms = [];
		for (let i=0; i < 5; i++){
			palms.push(
				<Palmtree key={i} className={styles.palmtreeSvg}/>
			)
		}
		return palms;
	}
	const renderContent = () => {
		return (
			<div className={styles.callToAction}>
				<h2 className={styles.ctaTitle}>311 can't be the worst band, can they?</h2>
				<p className={styles.ctaDescription}>We take that question to heart when reviewing musician's full discography to see how they stack up against the 
				boys from Omaha.
				</p>
				<div className={styles.sites}>
					<a href="https://open.spotify.com/show/1I7lI0F33YvpLuORxLp7Ar" target="_blank" className={styles.siteCTA}>
						<i className={clsx(styles.icon, "fa fa-spotify")} aria-hidden="true"></i>
						<div className={styles.siteName}>Listen on <span>Spotify</span></div>
					</a>
					<a href="https://podcasts.apple.com/us/podcast/is-it-worse-than/id1541093380" target="_blank" className={styles.siteCTA}>
						<i className={clsx(styles.icon, "fa fa-apple")} aria-hidden="true"></i>
						<div className={styles.siteName}>Listen on <span>Apple Podcast</span></div>
					</a>
				</div>
			</div>
		)
	}
    return (
    <header className={styles.header}>
	  {renderLogo()}
    <div className={styles.headerInner}>
		<Nav />
    </div>
	  <div className={styles.scene}>
		{renderContent()}
		<div>
			{getPalmTrees()}
		</div>
		<Wave className={styles.wave} />
	  </div>
	  </header>
    )
}