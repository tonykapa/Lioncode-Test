import React from 'react'
import style from './Footer.module.css'
import group1 from '../../assets/Group-1.png'
import group2 from '../../assets/Group-2.png'
const Footer = () => {
  return (
    <footer className={style.footer}>
        <button><img src={group2} alt='group2'/></button>
        <button><img src={group1} alt='group1'/></button>
    </footer>
  )
}

export default Footer