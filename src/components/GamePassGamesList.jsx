// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const GamePassGamesList = () => {
//     const [games, setGames] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchGames = async () => {
//             try {
//                 const url = 'https://www.gamepassapi.com/api/v1/games?subscription=gamepass_ultimate';
                
//                 const response = await axios.get(url, {
//                     headers: {
//                         'Authorization': 'Bearer YOUR_API_KEY'
//                     }
//                 });

//                 setGames(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 setError(error.message);
//                 setLoading(false);
//             }
//         };

//         fetchGames();
//     }, []);

//     if (loading) return <p>Loading games...</p>;
//     if (error) return <p>Error: {error}</p>;

//     return (
//         <div>
//             <h1>Xbox Game Pass Ultimate Games</h1>
//             <ul>
//                 {games.map((game, index) => (
//                     <li key={index}>{game.title}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default GamePassGamesList;


// .filter((game) =>
      //   game.consoles.includes('PS') && game.consoles.includes('Xbox')
      // )