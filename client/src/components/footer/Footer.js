import React from 'react'
import './Footer.scss'
import creditCardImg from '../../assets/Card.png'
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlineTwitter} from 'react-icons/ai'

function Footer() {
  return (
    <footer className='Footer'>
    <div className="container">
        <div className="content">
            <div className="footer-left">
             <h3 className="title">Follow Us</h3>
             <ul className="follow">
                <li className="hover-link">
                    <AiOutlineInstagram/>
                </li>
                <li className="hover-link">
                <AiOutlineFacebook/>
                </li>
                <li className="hover-link">
                <AiOutlineTwitter/>
                </li>
                <li className="hover-link">
                <AiOutlineMail/>
                </li>
             </ul>
            </div>
            <div className="footer-right">
               <h3 className="title">Company</h3>
               <ul className="company">
                <li className="hover-link">Contact Us</li>
                <li className="hover-link">Privacy Policy</li>
                <li className="hover-link">Returns And Exchange Policy</li>
                <li className="hover-link">Shipping Policy</li>
                <li className="hover-link">Terms & Conditions</li>
               </ul>
            </div>
        </div>
        <div className="subfooter center">
          <div className="credit-card-img">
            <img src={creditCardImg} alt="credit card img" />
          </div>
          <p>
            Copyright {new Date().getFullYear()} © <strong>Posterz.</strong>
          </p>
        </div>
    </div>
    </footer>
  )
}

export default Footer