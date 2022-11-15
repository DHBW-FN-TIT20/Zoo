import Link from 'next/link';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
    return <div className={`${styles.footer}`}>
        <div className={`container`}>
                    <p>
                        Zoo Erlebniswelt <br />
                        Friedrichshafen
                    </p>
               
        </div>
    </div>
}

export default Footer;