import PageNotFound from "../assets/Page-Not-Found1.png";

export default function NotFound() {
  return (
    <div className="not-found">
      <p className="not-found__text">
        <b>OPPPPSS!!</b> <br/>
        Página no encontrada
        <br />
        ERROR 404
      </p>
      <img
        src={PageNotFound}
        alt="Página no encontrada"
        className="not-found__image"
      />
    </div>
  );
}
