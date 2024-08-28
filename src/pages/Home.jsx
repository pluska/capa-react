import { useLocation } from "react-router-dom";

const Home = () => {

    const { state } = useLocation();


const reviews = [
    { comment: "Excelente servicio", autor: "Juan" },
    { comment: "Muy buena atención", autor: "Pedro" },
    { comment: "Me encantó el lugar", autor: "Carlos" },
    { comment: "Buena variedad de opciones", autor: "Ana" },
    { comment: "Precios razonables", autor: "Sofía" },
];
    return (
        <>
            <h1>Bienvenido {state?.name}</h1>
            <p>{`Tengo ${state?.age} años`}</p>
            <p>Estas son las reseñas más actuales:</p>
            <ul>
            {reviews.map((review, index) => (
                <li key={index}>{review.comment} - {review.autor}</li>
            ))}
            </ul>
        </>
    );
};

export default Home;
