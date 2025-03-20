import "./card.css";

function Card(props) {
    return (
        <div className="card-container">
            <div className="card">
                <img className="card_img" src={props.image} alt="Hotel" />
                <div className="card_content">
                    <h2 className="card_title">{props.title}</h2>
                    <p className="card_description">{props.description}</p>
                    <button className="card_button">Book</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
