import Link from 'next/link'
import Nav from './Nav/Nav';
import Logo from './svg/Logo';
import Palmtree from './svg/Palmtree';
import Wave from './svg/Wave';
import styles from './Header.module.scss';
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
    return (
    <header className={styles.header}>
	  {renderLogo()}
    <div className={styles.headerInner}>
		<Nav />
    </div>
	  <div className={styles.scene}>
		{getPalmTrees()}
		<Wave className={styles.wave} />
	  </div>
	  </header>
    )
}