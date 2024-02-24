import './Header.css'
import toplogos from '../toplogos.jpg'
export default function Header() {
    return (
        <div className='Header'>
            <a>
               <img src={toplogos} alt='logos' />
            </a>
        </div>
    )
}