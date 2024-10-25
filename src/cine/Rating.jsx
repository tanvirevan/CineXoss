import PropTypes from 'prop-types'
import RatingStar from '../utils/Star';


export default function Rating({value}) 
    {
        const starts = Array(value).fill(RatingStar);
        return (
            <>
                {
                    starts.map((star, index) => (
                        <RatingStar key={index}/>
                    ))
                }
            </>
        );
    }
Rating.propTypes =
    {
        value: PropTypes.number,
    }
