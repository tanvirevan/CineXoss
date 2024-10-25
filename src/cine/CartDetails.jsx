import PropTypes from 'prop-types'
import Checkout from "../utils/Checkout";
import { useContext } from 'react';
import { MovieContext } from '../context';
import CartDetailsMovie from './CartDetailsMovie';
import { toast, Slide } from "react-toastify";

export default function CartDetails({ onClose }) 
{
    const {cartData, setCartData} = useContext(MovieContext);

    function handleDelete (e,movie)
        {
            const deleteMovies = cartData.filter((deleteMovie) => deleteMovie.id !== movie.id );
            deleteMovies && setCartData(deleteMovies)
            toast.success(`${movie.title} Removed!`, 
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
    
    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
                <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9">
                    <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
                        Your Cart
                    </h2>
                    <div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14 no-scrollbar">
                        {
                            cartData.length > 0 ?
                            cartData.map((movie) =>
                                (
                                    <CartDetailsMovie
                                        key={movie.id}
                                        onDelete={handleDelete}
                                        movie={movie}
                                    />
                                )
                            )
                            :
                            <p className="text-3xl">The Cart is Empty!!!</p>
                        }
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <a
                            className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary dark:bg-[#A3181D] dark:text-white text-[#171923] text-sm"
                            href="#"
                        >
                            <Checkout/>
                            <span>Checkout</span>
                        </a>
                        <a
                            className="border border-[#74766F] dark:border-[#A3181D] rounded-lg py-2 px-5 flex items-center justify-center dark:text-[#A3181D] gap-2 text-[#6F6F6F] font-semibold text-sm"
                            href="#"
                            onClick={onClose}
                        >
                            Cancel
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

CartDetails.propTypes = 
    {
        onClose: PropTypes.func.isRequired,
    };
