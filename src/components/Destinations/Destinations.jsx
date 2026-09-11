import DestinationCard from "../DestinationCard/DestinationCard";
import destinations from "../../data/destinations";

function Destinations() {
    return (
        <section className="destinations">

            <div className="section-heading">
                <p>DISCOVER NEPAL</p>

                <h2>
                    Popular Destinations
                </h2>

                <span>
                    Explore some of the most beautiful
                    places Nepal has to offer.
                </span>
            </div>

            <div className="destination-grid">

                {destinations.map((destination) => (
                    <DestinationCard
                        key={destination.id}
                        name={destination.name}
                        location={destination.location}
                        description={destination.description}
                        image={destination.image}
                    />
                ))}

            </div>

        </section>
    );
}

export default Destinations;