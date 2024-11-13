import { useState } from "'react'"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GamepadIcon, Eye, EyeOff } from "'lucide-react'"

export function GameShowcaseJsx() {
  const [showImages, setShowImages] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [goToPage, setGoToPage] = useState("''")
  const gamesPerPage = 8
  const totalPages = Math.ceil(games.length / gamesPerPage)

  const getCurrentGames = () => {
    const startIndex = (currentPage - 1) * gamesPerPage
    const endIndex = startIndex + gamesPerPage
    return games.slice(startIndex, endIndex);
  }

  const handleGoToPage = () => {
    const pageNumber = parseInt(goToPage)
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber)
      setGoToPage("''")
    }
  }

  const games = [
    {
      id: 1,
      title: "Fe",
      image: "/placeholder.svg?height=400&width=300",
      tags: ["ultimate", "XeaPlay"],
      platform: "Xbox"
    },
    {
      id: 2,
      title: "Feeding Frenzy",
      image: "/placeholder.svg?height=400&width=300",
      tags: ["ultimate", "XeaPlay"],
      platform: "Xbox"
    },
    {
      id: 3,
      title: "Feeding Frenzy 2",
      image: "/placeholder.svg?height=400&width=300",
      tags: ["ultimate", "XeaPlay"],
      platform: "Xbox"
    },
    {
      id: 4,
      title: "Fight Night Champion",
      image: "/placeholder.svg?height=400&width=300",
      tags: ["ultimate", "XeaPlay"],
      platform: "Xbox"
    },
    {
      id: 5,
      title: "Figment: Journey in the Mind",
      image: "/placeholder.svg?height=400&width=300",
      tags: ["ultimate"],
      platform: "Xbox"
    },
    {
      id: 6,
      title: "Flintlock",
      image: "/placeholder.svg?height=400&width=300",
      tags: ["ultimate"],
      platform: "Xbox"
    },
    {
      id: 7,
      title: "Flock",
      image: "/placeholder.svg?height=400&width=300",
      tags: ["ultimate", "XeaPlay"],
      platform: "Xbox"
    },
    {
      id: 8,
      title: "Football Manager 2024 Console",
      image: "/placeholder.svg?height=400&width=300",
      tags: ["ultimate"],
      platform: "Xbox"
    },
    {
      id: 9,
      title: "For Honor Marching Fire",
      image: "/placeholder.svg?height=400&width=300",
      tags: ["ultimate", "XeaPlay"],
      platform: "Xbox"
    },
    {
      id: 10,
      title: "Forza Horizon 4",
      image: "/placeholder.svg?height=400&width=300",
      tags: ["ultimate"],
      platform: "Xbox"
    },
    {
      id: 11,
      title: "God of War",
      image: "/placeholder.svg?height=400&width=300",
      tags: ["exclusive", "action"],
      platform: "PlayStation"
    },
    {
      id: 12,
      title: "Spider-Man: Miles Morales",
      image: "/placeholder.svg?height=400&width=300",
      tags: ["exclusive", "action"],
      platform: "PlayStation"
    },
    {
      id: 13,
      title: "Horizon Forbidden West",
      image: "/placeholder.svg?height=400&width=300",
      tags: ["exclusive", "open-world"],
      platform: "PlayStation"
    },
    {
      id: 14,
      title: "Ratchet & Clank: Rift Apart",
      image: "/placeholder.svg?height=400&width=300",
      tags: ["exclusive", "action"],
      platform: "PlayStation"
    },
    {
      id: 15,
      title: "Demon's Souls",
      image: "/placeholder.svg?height=400&width=300",
      tags: ["exclusive", "rpg"],
      platform: "PlayStation"
    }
  ]

  return (
    (<div
      className="min-h-screen bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 p-4 relative">
      <Button
        onClick={() => setShowImages(!showImages)}
        className="fixed left-4 top-4 z-50 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white shadow-lg">
        {showImages ? <EyeOff className="mr-2 h-4 w-4" /> : <Eye className="mr-2 h-4 w-4" />}
        {showImages ? "'Hide'" : "'Show'"} Images
      </Button>
      <div className="container mx-auto py-16">
        <h1
          className="text-4xl md:text-6xl font-bold text-center mb-8 text-white flex items-center justify-center gap-4">
          <GamepadIcon className="h-12 w-12" />
          Xbox & PlayStation Game Library
        </h1>
        
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {getCurrentGames().map((game) => (
            <Card
              key={game.id}
              className="bg-black/20 backdrop-blur-sm border-white/20 hover:border-white/40 transition-all duration-300 group">
              <CardContent className="p-0">
                {showImages && (
                  <div className="relative h-[300px] overflow-hidden rounded-t-lg">
                    <img
                      alt={game.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                      height="300"
                      src={game.image}
                      width="400" />
                  </div>
                )}
                <div className="p-4">
                  <h2 className="text-xl font-bold text-white mb-2 line-clamp-1">{game.title}</h2>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {game.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className={`${
                          game.platform === "'Xbox'" ? "'bg-green-600 hover:bg-green-500'" : "'bg-blue-600 hover:bg-blue-500'"
                        } text-white`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-white/80">
                    Available on: <span
                    className={`font-semibold ${
                        game.platform === "'Xbox'" ? "'text-green-300'" : "'text-blue-300'"
                      }`}>{game.platform}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <Button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white">
            Previous
          </Button>
          
          <span className="text-white">Page {currentPage} of {totalPages}</span>
          
          <input
            type="number"
            value={goToPage}
            onChange={(e) => setGoToPage(e.target.value)}
            className="w-16 px-2 py-1 text-center rounded bg-black/20 text-white border border-neutral-200 border-white/20 dark:border-neutral-800"
            min="1"
            max={totalPages} />
          
          <Button
            onClick={handleGoToPage}
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white">
            Go
          </Button>
          
          <Button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white">
            Next
          </Button>
        </div>
      </div>
    </div>)
  );
}