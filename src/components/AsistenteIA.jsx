import { useState, useRef, useEffect } from 'react';
import ChatItem from './ChatItem';
import { getMovieByQuery } from '../services/geminiAssistance';
import Sparkle from './iconos/Sparkle';
import Close from './iconos/Close';

const API_KEY = import.meta.env.VITE_API_KEY;

export default function AsistenteIA() {

    const [isActive, setIsActive] = useState(false);
    const [chatList, setChatList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    // Agregar un nuevo estado query
    const [queryTitle, setQueryTitle] = useState('');

    const queryInput = useRef(null);
    const chatContainer = useRef(null);

    const handleCLick = () => {
        setIsActive(!isActive);
    }

    const handleQuery = async (e) => {
        e.preventDefault();
        
        setError('');
        setLoading(true);
        
        const query = queryInput.current.value;

        setChatList([...chatList, { author: 'user', message: query }]);
        queryInput.current.value = '';
        
        await getQueryTitle(query);
    }

    const getQueryTitle = async (query) => {
        const { error, message } = await getMovieByQuery(query);
        if (error) {
            setLoading(false)
            setError(message)
            return
        }
        if (message === 'Unknown') {
            setLoading(false)
            return
        }
        setQueryTitle(message.trim());
    }

    useEffect(() => {
        if (queryTitle) {
            fetch(`https://www.omdbapi.com/?t=${queryTitle.replace(' ', '+')}&apikey=${API_KEY}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('No se encontro ninguna pelicula con ese titulo');
                    }
                    return res.json()
                })
                .then(movieData => {
                    setChatList([...chatList, { author: 'bot', title: movieData.Title, year: movieData.Year, poster: movieData.Poster, imdbID: movieData.imdbID }]);
                }).catch(err => {
                    console.error(err.message);
                }).finally(() => {
                    setLoading(false);
                })
        }
    }, [queryTitle])

    useEffect(() => {
        // Scrollear al final
        chatContainer.current.scrollTop = chatContainer.current.scrollHeight;
    }, [chatList])

    return (
        <div className="wrapper-assistant">
            <div className={isActive ? "wrapper-assistant__window active" : "wrapper-assistant__window"}>
                <header className="window__header">
                    <h2>Herramienta de busqueda con IA</h2>
                </header>
                <div ref={chatContainer} className="window__chat">
                    {
                        chatList.map((item, index) => {
                            return (
                                <ChatItem 
                                    key={index} 
                                    author={item.author} 
                                    message={item?.message}
                                    title={item?.title}
                                    poster={item?.poster}
                                    year={item?.year}
                                    imdbID={item?.imdbID}
                                />
                            );
                        })
                    }
                    { loading && (<div className="loader"></div>) }
                    { error && (<div className="error-chat">{error}</div>) }
                </div>
                <footer className="window__footer">
                    <form className="footer__chat-form" id="chatForm" onSubmit={handleQuery}>
                        <textarea ref={queryInput} className="chat-form__input" name="query" id="queryInput" placeholder="Busco una pelicula que trata sobre..."></textarea>
                        <button disabled={loading} className="chat-form__btn" type="submit">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                </svg>
                            </span>
                        </button>
                    </form>
                </footer>
            </div>
            <button title="Herramienta de busqueda con IA" className="wrapper-assistant__btn" onClick={handleCLick}>
                {
                    isActive 
                        ? <Close size={24} /> 
                        : <Sparkle size={24} />
                }
            </button>
        </div>
    );
}