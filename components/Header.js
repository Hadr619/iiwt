import Link from 'next/link'
import Nav from './Nav/Nav';
import Logo from './svg/Logo';
import Palmtree from './svg/Palmtree';
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
    return (
    <header className={styles.header}>
	  {renderLogo()}
    <div className={styles.headerInner}>
		<Nav />
    </div>
	  <div className={styles.scene}>
		<Palmtree className={styles.palmtreeSvg}/>
		<Palmtree className={styles.palmtreeSvg} />
		<Palmtree className={styles.palmtreeSvg} />
		<Palmtree className={styles.palmtreeSvg} />
	  	<svg id="wave" className={styles.wave} viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M0,40L10.9,36.7C21.8,33,44,27,65,35C87.3,43,109,67,131,65C152.7,63,175,37,196,26.7C218.2,17,240,23,262,36.7C283.6,50,305,70,327,68.3C349.1,67,371,43,393,31.7C414.5,20,436,20,458,28.3C480,37,502,53,524,63.3C545.5,73,567,77,589,73.3C610.9,70,633,60,655,53.3C676.4,47,698,43,720,50C741.8,57,764,73,785,73.3C807.3,73,829,57,851,55C872.7,53,895,67,916,71.7C938.2,77,960,73,982,65C1003.6,57,1025,43,1047,43.3C1069.1,43,1091,57,1113,56.7C1134.5,57,1156,43,1178,38.3C1200,33,1222,37,1244,43.3C1265.5,50,1287,60,1309,58.3C1330.9,57,1353,43,1375,33.3C1396.4,23,1418,17,1440,23.3C1461.8,30,1484,50,1505,58.3C1527.3,67,1549,63,1560,61.7L1570.9,60L1570.9,100L1560,100C1549.1,100,1527,100,1505,100C1483.6,100,1462,100,1440,100C1418.2,100,1396,100,1375,100C1352.7,100,1331,100,1309,100C1287.3,100,1265,100,1244,100C1221.8,100,1200,100,1178,100C1156.4,100,1135,100,1113,100C1090.9,100,1069,100,1047,100C1025.5,100,1004,100,982,100C960,100,938,100,916,100C894.5,100,873,100,851,100C829.1,100,807,100,785,100C763.6,100,742,100,720,100C698.2,100,676,100,655,100C632.7,100,611,100,589,100C567.3,100,545,100,524,100C501.8,100,480,100,458,100C436.4,100,415,100,393,100C370.9,100,349,100,327,100C305.5,100,284,100,262,100C240,100,218,100,196,100C174.5,100,153,100,131,100C109.1,100,87,100,65,100C43.6,100,22,100,11,100L0,100Z"></path></svg>
	  </div>
	  </header>
    )
}