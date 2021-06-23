import Link from 'next/link'
import Nav from './Nav';
export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
      <Nav />
      </header>
    
      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 Is It Worse Than...</p>
      </footer>
    </div>
  )
}