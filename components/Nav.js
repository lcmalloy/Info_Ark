import Link from 'next/link'
import Image from 'next/image'
import navStyles from '../styles/Nav.module.css'
import LAlogo from '../public/lostark.svg'


const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li className={navStyles.logo}>
          <a href='/'>
          <Image src= { LAlogo } height={20} width={90}/>
          </a>
        </li>
        <li>
          <Link href='/'> Home </Link>
        </li>
        <li>
          <Link href='/classes'>Class</Link>
        </li>
        <li>
          <Link href='/cards'>Cards</Link>
        </li>
        <li>
          <Link href='/npc'>NPC</Link>
        </li>
        <li>
          <Link href='/craft'>Craft</Link>
        </li>
        <li>
          <Link href='/subscribe'>Subscribe</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav