import { useEffect, useState } from 'react'
import style from './Header.module.css'
import Logo from '../../assets/Logo-White.png'
import { useLocation , useNavigate } from 'react-router-dom'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

const Header = () => {

  const [page, setPage] = useState(null)
  const location = useLocation();
  const pageMatch = location.pathname.match(/\/(\d+)/);
  const pageActive = pageMatch ? pageMatch[1] : 'home';
  const nav = useNavigate();

  const handleClick = () => {
    nav('/');
  };

  useEffect(() => {
    if (pageActive === 'home') {
      setPage(true)
    } else {
      setPage(false)
    }
  }, [page, pageActive])

  if (page) {
    return (
      <header className={style.header}>
        <img src={Logo} alt='logo' className={style.img} ></img>
      </header>
    )
  }

  return (
    <header className={style.header}>
      <button onClick={handleClick}><ArrowBackIosOutlinedIcon sx={{ color: "white", marginLeft: '2rem' }}></ArrowBackIosOutlinedIcon></button>
    </header>
  )

}

export default Header
