import Rating from "./Rating";

export default function MovieCard() {
    return (
        <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
            <a href="#">
                <img
                    className="w-full object-cover"
                    src="static-image-url.jpg" // Static image URL
                    alt="Movie Title" // Static title
                />
                <figcaption className="pt-4">
                    <h3 className="text-xl mb-1">Movie Title</h3> {/* Static title */}
                    <p className="text-[#575A6E] text-sm mb-2">Genre</p> {/* Static genre */}
                    <div className="flex items-center space-x-1 mb-5">
                        <Rating value={5} /> {/* Static rating */}
                    </div>
                    <button
                        className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                    >
                        <img src="./assets/tag.svg" alt="" />
                        <span>$9.99 | Add to Cart</span> {/* Static price */}
                    </button>
                </figcaption>
            </a>
        </figure>
    );
}
