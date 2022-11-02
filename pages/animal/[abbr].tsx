import { GetServerSideProps } from "next";
import prisma from "../../lib/prisma";

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
    <div>
      <h2>{props.name}</h2>

      <ul>
        <li>Keeper: {props.keeper.name}</li>
        <li>Genre: {props.genre.title}</li>
        <li>Origin: {props.origin.title}</li>
      </ul>

    </div>
  )
}

export default Animal;