import Star from '../assets/star.svg';

export default function Rating() {
    return (
        <>
            {/* Static 5 stars */}
            <img src={Star} width="14" height="14" alt="star" />
            <img src={Star} width="14" height="14" alt="star" />
            <img src={Star} width="14" height="14" alt="star" />
            <img src={Star} width="14" height="14" alt="star" />
            <img src={Star} width="14" height="14" alt="star" />
        </>
    );
}
