import React from 'react'
import '../style/footer.css'
function Footer() {
  return (
    <div className='container1'>
      
      
      <div className='content flex-col lg:flex-row'>  
        <div className='logo lg:mb-0'>
          <img src="/assets/footerlogo.png" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi.</p>
        </div>{/* logo */}


        <div className='links'>
          <div className='part'>
            <h1>product</h1>
            <ul>
              <li><a href="#">overview</a></li>
              <li><a href="#">features</a></li>
              <li><a href="#">solutions</a></li>
              <li><a href="#">tutorials</a></li>
              <li><a href="#">pricing</a></li>
            </ul>
          </div>
          <div className='part'>
            <h1>company</h1>
            <ul>
              <li><a href="#">about us</a></li>
              <li><a href="#">careers</a></li>
              <li><a href="#">press</a> <span>new</span></li>
              <li><a href="#">news</a></li>
            </ul>
          </div>
          <div className='part'>
            <h1>social</h1>
            <ul>
              <li><a href="#">twitter</a></li>
              <li><a href="#">linkedin</a></li>
              <li><a href="#">github</a></li>
              <li><a href="#">dribbble</a></li>
            </ul>
          </div>
          <div className='part'>
            <h1>legal</h1>
            <ul>
              <li><a href="#">term</a></li>
              <li><a href="#">privacy</a></li>
              <li><a href="#">cookies</a></li>
              <li><a href="#">contact</a></li>
            </ul>
          </div>
        </div>{/* links */}

      </div>{/* content */}
      <div className='lastfooter'>
        <div className='text'>
          &copy;2022 Ed-Circle. All rights reserved.
        </div>
        <div className='social'>
          <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45161C17.9652 6.27583 17.9613 6.09614 17.9535 5.92036C18.7566 5.33961 19.4496 4.62027 20 3.79614C19.2521 4.12889 18.458 4.34621 17.6449 4.44067C18.5011 3.92748 19.1421 3.12129 19.4492 2.17153C18.6438 2.64886 17.763 2.98557 16.8445 3.16724C16.2257 2.5097 15.4075 2.07432 14.5164 1.92844C13.6253 1.78255 12.711 1.93427 11.9148 2.36014C11.1186 2.78601 10.4848 3.46232 10.1115 4.28449C9.73824 5.10666 9.64619 6.02891 9.84961 6.90864C8.21874 6.8268 6.62328 6.40315 5.16665 5.66514C3.71002 4.92714 2.42474 3.89126 1.39414 2.62466C0.870333 3.52776 0.710047 4.59643 0.945859 5.61347C1.18167 6.63051 1.79589 7.5196 2.66367 8.10005C2.01219 8.07937 1.37498 7.90396 0.804688 7.58833V7.63911C0.804104 8.58685 1.13175 9.50555 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8277 2.85998 11.8517 2.2457 11.7329C2.50788 12.5479 3.01798 13.2608 3.70481 13.772C4.39164 14.2832 5.22093 14.5672 6.07695 14.5844C4.62369 15.726 2.82848 16.3452 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.2821C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z" fill="#98A2B3" />
          </svg>
          <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z" fill="#98A2B3" />
          </svg>
        </div>
      </div>{/* lastfooter */}
    </div>
  )
}

export default Footer