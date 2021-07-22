import Link from 'next/link'
import Image from 'next/image';
import { useRouter } from "next/router";
import Nav from '../Nav/Nav';
import Logo from '../svg/Logo';
import Palmtree from '../svg/Palmtree';
import Wave from '../svg/Wave';
import styles from './Header.module.scss';
import clsx from 'clsx';

const pageData = {
	homePage: {
		title: "311 can't be the worst band, can they?",
		description: "We take that question to heart when reviewing a musician's full discography to see how they stack up against the boys from Omaha."
	},
	episodePage: {
		title: 'Episodes',
		description: 'This is the episodes description'
	},
	blogPage: {
		title: "blog",
		description: 'Blog description'
	}
}

export default function Header({props}) {
	const router = useRouter();
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
	const renderNav = () => {
		return (
			<div className={styles.headerInner}>
			<Nav />
			</div>
		)
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
		let title;
		let description;
		 if(router.pathname == '/'){
			title = pageData.homePage.title;
			description = pageData.homePage.description;
		} else if(router.pathname == '/episodes'){
			title = pageData.episodePage.title;
			description = pageData.episodePage.description;
		}else{
			title = pageData.blogPage.title;
			description = pageData.blogPage.description;	
		}
		return (
			<div className={styles.callToAction}>
				<h2 className={styles.ctaTitle}>{title}</h2>
				<p className={styles.ctaDescription}>{description}</p>
				<div className={styles.sites}>
					<a href="https://open.spotify.com/show/1I7lI0F33YvpLuORxLp7Ar" target="_blank" rel="noreferrer" className={clsx(styles.siteCTA, styles.spotify)}>
						<i className={clsx(styles.icon, "fa fa-spotify")} aria-hidden="true"></i>
						<div className={styles.siteName}>Listen on <span className={styles.podcastSource}>Spotify</span></div>
					</a>
					<a href="https://podcasts.apple.com/us/podcast/is-it-worse-than/id1541093380" target="_blank" rel="noreferrer" className={styles.siteCTA}>
						<i className={clsx(styles.icon, styles.apple, "fa fa-apple")} aria-hidden="true"></i>
						<div className={styles.siteName}>Listen on <span className={styles.podcastSource}>Apple Podcast</span></div>
					</a>
				</div>
			</div>
		)
	}
    return (
    <header className={clsx(styles.header, router.pathname != '/' ? styles.subpage : styles.homepage)}>
		<div className={styles.topNav}>
		{renderLogo()}
		{renderNav()}
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