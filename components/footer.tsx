import Link from 'next/link';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
    return <div className={`${styles.footer}`}>
        <div className={`container`}>
                    <p>
                    <Link href="/" className="link-danger text-decoration-none">Zoo Erlebniswelt <br /> Friedrichshafen</Link>   
                    </p>
               
        </div>
    </div>
}

export default Footer;