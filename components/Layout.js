import Header from './Header';

export default function Layout({ children }) {

	
  return (
    <div className="layout">
      <Header />
  	  <div className="page-content">
        { children }
      </div>

      <footer>
		<div>
        	<p>Copyright 2021 Is It Worse Than...</p>
		</div>
      </footer>
		<script src="https://kit.fontawesome.com/e5a98a2ef3.js" crossorigin="anonymous"></script>
    </div>
  )
}