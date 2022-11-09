import Link from 'next/link';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
    return <div className={`${styles.footer}`}>
        <div className={`container`}>
            <div className="row">
                <div className="col-8">
                    <p>
                        Zoo Erlebniswelt <br />
                        Friedrichshafen
                    </p>
                </div>
                <ul className={`col-4 ${styles.list}`}>
                    <li>
                        <Link href="inprint" className={`link-light`}>Impressum</Link>
                    </li>
                    <li>
                        <Link href="data" className={`link-light`}>Datenschutz</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}

export default Footer;