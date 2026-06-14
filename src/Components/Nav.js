import React from 'react'

const Nav = () => {
    const handleClick=(e)=>{
        e.preventDefault()
        const target=e.target.getAttribute('href')
        const location=document.querySelector(target).offsetTop
        window.scroll(0,location - 150)
    }
    const goToTop=(e)=>{
        e.preventDefault()

        window.scroll(0,0)
    }
    return (
        <div className='Nav' id="top">
    <a onClick={goToTop} href="#top">About</a>

    <a onClick={handleClick} href="#skills">
        Skills
    </a>

    <a onClick={handleClick} href="#experience">
        Experience
    </a>

    <a onClick={handleClick} href="#projects">
        Projects
    </a>

    <a onClick={handleClick} href="#achievements">
        Achievements
    </a>

    <a onClick={handleClick} href="#contact">
        Contact
    </a>
</div>
    )
}

export default Nav
