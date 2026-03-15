function BotItem({ title, poster, year, imdbID }) {

    return (
        <>
            <span className="box-icon">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="28" 
                    height="28" 
                    fill="#ffffff" 
                    viewBox="0 0 256 256"
                >
                    <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-24,16v24H116V152ZM80,164a12,12,0,0,1,12-12h8v24H92A12,12,0,0,1,80,164Zm84,12h-8V152h8a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z"></path>
                </svg>
            </span>
            <p>Es posible que la pelicula que buscas sea <strong>"{title}"</strong> y se encuentra disponible en nuestro catalogo.</p>
            <article>
                <div className="img-wrapper">
                    <img src={poster} alt={title} />
                </div>
                <div className="info-wrapper">
                    <h3>{title}</h3>
                    <p>{year}</p>
                    <a href={`/movie/${imdbID}`}>Ver pelicula</a>
                </div>
            </article>
        </>
    )
}

export default function ChatItem({ author, message, title, poster, year, imdbID }) {

    return (
        <div className={`chat-item ${author === 'bot' ? 'bot' : ''}`}>
            {
                author === 'bot'
                    ? <BotItem title={title} poster={poster} year={year} imdbID={imdbID} /> 
                    : <p>{message}</p>
            }
        </div>
    );
}