import Link from 'next/link'
import Nav from './Nav';
export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
      <div className="logo">
        <Link href="/">
          <svg width="100%" height="100%" viewBox="0 0 4800 4800" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1.33333,0,0,1.33333,0,0)">
                  <g transform="matrix(1,0,0,0.636231,0,0)">
                      <rect x="0" y="0" width="3600" height="381.07"/>
                  </g>
                  <g transform="matrix(1,0,0,0.64524,0,3354.12)">
                      <rect x="0" y="0" width="3600" height="381.07"/>
                  </g>
                  <g transform="matrix(0.719375,0,0,0.644301,505.124,457.258)">
                      <rect x="0" y="0" width="3600" height="381.07"/>
                  </g>
                  <g transform="matrix(0.719375,0,0,0.667933,505.124,2889.94)">
                      <rect x="0" y="0" width="3600" height="381.07"/>
                  </g>
                  <g transform="matrix(0.246222,0,0,0.686788,1372.28,2181.48)">
                      <rect x="0" y="0" width="3600" height="381.07"/>
                  </g>
                  <g transform="matrix(6.12323e-17,1,-0.695403,4.25811e-17,1947.98,1.1893e-14)">
                      <rect x="0" y="0" width="3600" height="381.07"/>
                  </g>
                  <g transform="matrix(1,0,0,1,4.59736,0)">
                      <path d="M599.232,914.409L1021.09,2697.16L1905.41,1094.61L1720.96,904.607L1078.46,2120.84L846.156,909.075L599.232,914.409Z"/>
                  </g>
                  <g transform="matrix(-1,0,0,1,3626.37,0)">
                      <path d="M599.232,914.409L1021.09,2697.16L1905.41,1094.61L1720.96,904.607L1078.46,2120.84L846.156,909.075L599.232,914.409Z"/>
                  </g>
              </g>
          </svg>
        </Link>
      </div>
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