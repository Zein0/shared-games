import React, { useEffect, useState } from 'react';
import PlayStation from '../assets/ps.png';
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"
import { GamepadIcon, Eye, EyeOff } from "lucide-react"

function PlayStationGameList() {
  const [games, setGames] = useState([]);
  const [showImage, setShowImage] = useState(() => {
    return JSON.parse(localStorage.getItem('showImage')) ?? true;
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInput, setPageInput] = useState('');
  const itemsPerPage = 50;
  const apiBaseUrl = import.meta.env.VITE_APP_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const [psResponse] = await Promise.all([
          fetch(`${apiBaseUrl}/api/games/ps`),
        ]);
        const psData = await psResponse.json();
        const psGames = psData.games.map(game => ({ ...game, consoles: ['PS'] }));
        setGames(psGames);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchGames();
  }, []);

  const toggleShowImage = () => {
    const newShowImage = !showImage;
    setShowImage(newShowImage);
    localStorage.setItem('showImage', JSON.stringify(newShowImage));
    window.location.reload();
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(games.length / itemsPerPage);
  const currentGames = games.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
  };
  const handlePageInputChange = (e) => {
    setPageInput(e.target.value);
  };
  const handleGoToPage = () => {
    const pageNumber = parseInt(pageInput, 10);
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setPageInput(''); // Clear the input field
    } else {
      alert(`Please enter a valid page number between 1 and ${totalPages}`);
    }
  };
  return(
    (<div
      className="min-h-screen bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 p-2 sm:p-4 relative">
      <Button
        onClick={toggleShowImage}
        className="fixed left-4 top-4 z-50 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white shadow-lg">
        {showImage ? <EyeOff className="mr-2 h-4 w-4" /> : <Eye className="mr-2 h-4 w-4" />}
        {showImage ? "Hide" : "Show"} Images
      </Button>
      <div className="container mx-auto py-16">
        <h1
          className="text-4xl md:text-6xl font-bold text-center mb-8 text-white flex items-center justify-center gap-4">
          <GamepadIcon className="h-12 w-12" />
          PlayStation Game Library
        </h1>
        
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-6 mt-8">
          {currentGames
          .map((game,index) => (
            <Card
              key={index}
              className="bg-black/20 backdrop-blur-sm border-white/20 hover:border-white/40 transition-all duration-300 group">
              <CardContent className="p-0 flex flex-col min-h-full">
                <div className="relative h-[300px] overflow-hidden rounded-t-lg">
                  <img
                    alt={game.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    height="300"
                    src={showImage ? game.image : PlayStation}
                    key={game.image}
                    width="400" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-2">{game.title}</h2>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {game.tag.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className={`${
                            tag === "ultimate" ||  tag === "XeaPlay"? "bg-green-600 hover:bg-green-500" : "bg-blue-600 hover:bg-blue-500"
                          } text-white`}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-white/80">
                    Available on:{" "}
                    <div className="inline-flex flex-wrap gap-1">
                      {game.consoles.map((platform, index) => (
                        <Badge
                        key={platform}
                        variant="secondary"
                        className={`${
                          platform === "Xbox" ? "bg-green-600 hover:bg-green-500" : "bg-blue-600 hover:bg-blue-500"
                        } text-white`}>
                        {platform}
                      </Badge>
                        ))}
                    </div>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {games.length ? <div className="flex items-center justify-center gap-4 mt-8">
          <Button 
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
          >
            Previous
          </Button>
          
          <span className="text-white">Page {currentPage} of {totalPages}</span>
          
          <input
            type="number"
            value={pageInput}
            onChange={handlePageInputChange}
            className="w-16 px-2 py-1 text-center rounded bg-black/20 text-white border border-white/20"
            min="1"
            max={totalPages}
          />
          
          <Button 
            onClick={handleGoToPage}
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
          >
            Go
          </Button>
          
          <Button 
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
          >
            Next
          </Button>
        </div>:null}
      </div>
    </div>)
    )
}

export default PlayStationGameList;
