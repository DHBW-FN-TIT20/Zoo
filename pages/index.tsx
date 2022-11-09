import Image from "next/image"
import styles from '../styles/Home.module.scss'
import logo from "../public/Logo.png"
import tigerImage from "../public/IMG_5884 1.png";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <div className={`${styles.firstElement}`}>
        <div className={`container`}>
          <div className={`row`}>
            <div className={`col-12 d-flex align-items-center ${styles.logo}`}>
              <Image src={logo} alt="(logo)" width={50} />
              <div>
                <h4>Zoo Erlegbniswelt</h4>
                <small>Friedrichshafen</small>
              </div>
            </div>
            <div className={`col-6 d-none d-md-block`}>
              <Image src={tigerImage} alt="(tiger-image)" className={`img-fluid ${styles.img}`} />
            </div>
            <div className={`col-12 col-md-6 d-flex flex-column justify-content-center ${styles.heading}`}>
              <div className={``}>
                <h1>Tiere der Welt</h1>
                <p>Erlebe die Gehemisse der Wildnis</p>
                <div className={styles.textDivider}/>
                <button type="button" className={`btn btn-primary`}>Visit</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider}/>
      </div>

      <div className={`${styles.secondElement}`}>
        <div className={`container`}>
          <h1>Öffnungszeiten</h1>
          <div className={styles.smallDivider}/>
          <div className={`${styles.openingTimes} mx-auto`}>
            <div className={styles.todayTimes}>
              <small>Heute, 22.Oktober</small>
              <h3>9:00 - 18:00 Uhr</h3>
            </div>
            <table className={styles.restTimes}>
              <tbody>
                <tr>
                  <td>Montag - Donnerstag</td>
                  <td>9:00 - 18:00 Uhr</td>
                </tr>
                <tr>
                  <td>Freitag - Samstag</td>
                  <td>9:00 - 20:00 Uhr</td>
                </tr>
                <tr>
                  <td>Sonntag</td>
                  <td>9:00 - 17:00 Uhr</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
