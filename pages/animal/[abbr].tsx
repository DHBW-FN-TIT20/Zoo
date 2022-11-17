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
          <div className={`${styles.heading}`}>
            <h2>{props.name}</h2>
            <div className={styles.textDivider}/>
          </div>
        </div>
        <div className={styles.divider}/>
      </div>

      <div className={`${styles.secondElement}`}>
        <div className={`container`}>
          <h1>Fakten</h1>
          <div className={styles.textDivider}/>
          <ul>
            <li>Keeper: {props.keeper.name}</li>
            <li>Species: {props.genre.title}</li>
            <li>Origin: {props.origin.title}</li>
            <li>Age: {props.age}</li>
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default Animal;