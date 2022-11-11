import { GetServerSideProps } from "next";
import styles from '../../styles/Animal.module.scss'
import prisma from "../../lib/prisma";
import { Fragment } from "react";
//nur übergangsweise für Bild
import wolfImg from '../../public/Wolf.png';
import Image from "next/image"

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const animal = await prisma.animal.findUnique({
    where: {
      abbr: String(params?.abbr),
    },
    include: {
      keeper: {
        select: { name: true },
      },
      genre: {
        select: { title: true },
      },
      origin: {
        select: { title: true },
      }
    },
  });
  return {
    props: animal,
  };
};

const Animal = (props) => {
  return (
    <Fragment>
      <div className={`${styles.firstElement}`}>
        <div className={`container`}>
          <div className={`row`}>
            <div className={`col-12 col-md-6 d-flex flex-column justify-content-center ${styles.heading}`}>
              <h2>{props.name}</h2>
              <div className={styles.textDivider}/>
            </div>
            <div className={`col-6 d-none d-md-block`}>
              <Image src={wolfImg} alt="(Wolf-image)" className={`img-fluid ${styles.img}`} />
            </div>
          </div>
        </div>
        <div className={styles.divider}/>
      </div>

      <div>
        <ul>
          <li>Keeper: {props.keeper.name}</li>
          <li>Genre: {props.genre.title}</li>
          <li>Origin: {props.origin.title}</li>
        </ul>
      </div>
    </Fragment>
  )
}

export default Animal;