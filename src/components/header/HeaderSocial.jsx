import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiLeetcode } from 'react-icons/si'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="www.linkedin.com/in/anupam-singh0802" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Anupam-30786" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://leetcode.com/Anupam8786/" target="_blank" rel="noreferrer"><SiLeetcode/></a>
    </div>
  )
}

export default HeaderSocial;