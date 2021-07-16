import './AppBar.scss'
import AppLogo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

export default function AppBar() {
  return (
    <header>
      <nav id="appbar">
        <AppBarLogo />
        <AppBarMenu />
      </nav>
    </header>
  )
}

function AppBarLogo() {
  return <Link to={'/'} className="appbar-right">
    <img id="app-logo" src={AppLogo} alt="App logo" />
    <span>Portfolio</span>
  </Link>
}

function AppBarMenu() {
  return <div id="appbar-menu">
    <AppBarMenuItem to={'/services'}>Home</AppBarMenuItem>
    <AppBarMenuItem to={'/portfolio'}>Portfilio</AppBarMenuItem>
    <AppBarMenuItem to={'/review'}>Review</AppBarMenuItem>
    <AppBarMenuItem to={'/contacts'}>Contacts</AppBarMenuItem>
  </div >
}

function AppBarMenuItem({ to, children, className }) {
  let classes = ['menu-item']
  if (className !== undefined) classes.push(className)
  if (window.location.pathname === to) classes.push('active')
  return <Link className={classes.join(' ')} to={to}>{children}</Link>
}
