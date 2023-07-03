import './style/Card.css';

export default function Card(props) {
    return (
        <div className="Card">
            <div>
                <img src={props.data.image} alt={props.data.place} />
            </div>
            <div>
                <p className="Card--country">
                    <span className="Card--country-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F55A5A" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                        {props.data.country}
                    </span>
                    <a href={props.data.link}>View on Google Maps</a>
                </p>
                <h1 className="Card--title">{props.data.place}</h1>
                <p><strong>{props.data.date.start} - {props.data.date.end}</strong></p>
                <p>{props.data.description}</p>
            </div>
        </div>
    );
}