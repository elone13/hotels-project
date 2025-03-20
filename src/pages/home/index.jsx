import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Card from "../../components/card/card";
import DataJson from "../../datas/hotel.json";
import "./HomePage.css";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // Nombre de cartes affichées

  useEffect(() => {
    document.title = "Bienvenue à notre site hôtelier";
    setData(DataJson);
  }, []);
  
  // Fonction pour charger plus de cartes
  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

  return (
    <>
      <SearchBar />
      <h1 className="title">Liste des hôtels</h1>
      <div className="main-content">
        {data.length > 0 ? (
          data.slice(0, visibleCount).map((item, index) => ( // Limitation à visibleCount
            <Card 
              key={index} 
              title={item.HotelName} 
              image={item.image} 
              description={item.Description} 
            />
          ))
        ) : (
          <p>Aucun hôtel disponible pour le moment...</p>
        )}
      </div>

      {visibleCount < data.length && (
        <button className="load-more" onClick={loadMore}>Load More</button>
      )}
      
    </>
  );
};

export default HomePage;
