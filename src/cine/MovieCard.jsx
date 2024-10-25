import { useContext, useState } from "react";
import { getImgUrl } from "../utils/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";
import PropTypes from 'prop-types';
import { MovieContext } from "../context";
import { toast, Slide } from "react-toastify";

export default function MovieCard({movie})
    {
        const [showModal, setShowModal] = useState(false);
        const [selectedMovie, setSelectedMovie] = useState(null);
        const {cartData, setCartData} = useContext(MovieContext);

        function handleAddToCart (event, movie)
            {
                event.stopPropagation();

                const found = cartData.find((item) => item.id === movie.id)

                if(!found)
                    {
                        
                        setCartData([...cartData, movie]);
                        setShowModal(false);

                        toast.success(`${movie.title} Added!`, 
                            {
                                position: "top-center",
                                autoClose: 500,
                                hideProgressBar: true,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                theme: "colored", 
                                transition: Slide,
                                style: { backgroundColor: "#26d991", color: "#ffffff" },
                            });
                        
                        
                    }
                else
                    {
                        toast.error(`${movie.title} Already Added!`, 
                            {
                                position: "top-center",
                                autoClose: 500,
                                hideProgressBar: true,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                theme: "colored", 
                                transition: Slide,
                                style: { backgroundColor: "#A3181D", color: "#ffffff" },
                            });
                    }

            }
        function handleModalClose ()
            {
                setSelectedMovie(null);
                setShowModal(false);
            }
        function handleMovieSelections (movie)
            {
                setSelectedMovie(movie);
                setShowModal(true);
            }

        return (
            <>
                {
                    showModal 
                    &&
                    <MovieDetailsModal
                        movie={selectedMovie}
                        onClose={handleModalClose}
                        onCartAdd={handleAddToCart}
                    />
                }
                <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                    <a href="#" onClick={() => handleMovieSelections(movie)}>
                        <img
                            className="w-full object-cover"
                            src={getImgUrl(movie.cover)}
                            alt={movie.title} 
                        />
                        <figcaption className="pt-4">
                            <h3 className="text-xl mb-1">{movie.title}</h3> 
                            <p className="text-[#575A6E] text-sm mb-2">{movie.Genre}</p> 
                            <div className="flex items-center space-x-1 mb-5">
                                <Rating value={movie.rating} />
                            </div>
                            <button
                                className="bg-primary dark:bg-[#A3181D] dark:text-white rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                                onClick={(e) => handleAddToCart(e,movie)}
                            >
                                <img src="./assets/tag.svg" alt="" />
                                <span>${movie.price} | Add to Cart</span>
                            </button>
                        </figcaption>
                    </a>
                </figure>
            </>
        );
    }
MovieCard.propTypes =
   {
      movie: PropTypes.object
   }