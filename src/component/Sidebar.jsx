import Trending from "../utils/Trending";
import NewRelease from '../assets/icons/newRelease.svg';
import ComingSoon from '../assets/icons/commingSoon.svg';
import Favourite from '../assets/icons/favourite.svg';
import WatchLater from '../assets/icons/watchLater.svg';

export default function Sidebar() {
    return (
        <aside>
            <ul className="space-y-2">
                <li>
                    <a
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary dark:bg-[#A3181D] dark:text-white text-black"
                        href="#"
                    >
                        <Trending/>
                        <span>Trending</span>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        href="#"
                    >
                        <img
                            src={NewRelease}
                            width="24"
                            height="24"
                            alt="New Releases Icon"
                        />
                        <span>New Releases</span>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        href="#"
                    >
                        <img
                            src={ComingSoon}
                            width="24"
                            height="24"
                            alt="Coming Soon Icon"
                        />
                        <span>Coming Soon</span>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        href="#"
                    >
                        <img
                            src={Favourite}
                            width="24"
                            height="24"
                            alt="Favourites Icon"
                        />
                        <span>Favourites</span>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        href="#"
                    >
                        <img
                            src={WatchLater}
                            width="24"
                            height="24"
                            alt="Watch Later Icon"
                        />
                        <span>Watch Later</span>
                    </a>
                </li>
            </ul>
        </aside>
    );
}
