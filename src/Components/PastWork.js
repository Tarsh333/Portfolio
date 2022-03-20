import React from 'react'
import { MdWork } from 'react-icons/md'
import TEN from '../TEN.jpg'
import dexter from '../dexter-hut.jpg'
import {HiOutlineExternalLink} from 'react-icons/hi'
const PastWork = () => {
    return (
        <div id="past-work">
                <h1 align="center" className='heading'>Work History <MdWork /></h1>
                <div className='card'>
                    <img src={dexter} />
                    <h3>Dexter Hut</h3>
                    <p>September 2021-December 2021</p>
                    <ul>
                        <li> Built a full stack MERN application from scratch with user authentications. Implemented graphs.
                            and OTP service in the website. Displayed data in charts and graphs using libraries.</li><li>
                            Built a portfolio website for a client.</li><li>
                            Built a survey platform as Minimum viable product for fund raising for the company.</li>
                    </ul>
                    <a href="https://drive.google.com/file/d/1Iw3LMciEORYIReMwna4myvUtTNeekY-C/view?usp=sharing" target='_blank'>Certificate <HiOutlineExternalLink/></a>
                </div>
                <div className='card'>
                    <img src={TEN}/>
                    <h3>The Entrepreneurship Network</h3>
                    <p>August 2021- November 2021</p>
                    <ul>
                        <li>
                            Built React Based Web Applications and worked with many APIs to display data.</li>
                    </ul>
                    <a href="https://drive.google.com/file/d/179MBjKzG0b5ShniSNVAZ1ohSJjdkDgKZ/view?usp=sharing" target='_blank'>Certificate <HiOutlineExternalLink/></a>
                </div>
        </div>
    )
}

export default PastWork
