export default function Contact() {
  return (
    <div className="contact">
      <h1 className="contact__title">Ipsum Libreria</h1><br />
      <p className="contact__description">
        <b>Dirección:</b> Av. P.º de la Reforma 222, Juárez, Cuauhtémoc, 06600 Ciudad
        de México, CDMX <br /><br />
        <b>Correo:</b> ipsumlibreria@ipsumlibreria.com<br /><br />
        <b>Teléfono:</b> (55)5555-5555 <br /><br />
      </p>
      <iframe className="contact__map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30101.073711153556!2d-99.19325921130518!3d19.42820430222419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3385201f71%3A0x94efa8b3eab5a73d!2sLibrer%C3%ADa%20Porrua!5e0!3m2!1ses-419!2smx!4v1737164265708!5m2!1ses-419!2smx"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
