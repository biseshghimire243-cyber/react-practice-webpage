function DestinationCard({ name, location, description, image }) {
    return (
        <div className="destination-card">
            <img src={image} alt={name} />

            <div className="destination-content">
                <span>{location}</span>

                <h3>{name}</h3>

                <p>{description}</p>

                <button>
                    Explore Destination →
                </button>
            </div>
        </div>
    );
}

export default DestinationCard;