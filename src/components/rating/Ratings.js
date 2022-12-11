import star from '../../images/icon-star.svg'
import './Ratings.css'

const Ratings = () => {
    return (
        <div className="ratings_container flex_column">
            <div className="rating one flex_row">
                <div className="star_container flex_row">
                    <img src={star} alt="" className='star'/>
                    <img src={star} alt="" className='star'/>
                    <img src={star} alt="" className='star'/>
                    <img src={star} alt="" className='star'/>
                    <img src={star} alt="" className='star'/>
                </div>
                <div className="statement">
                    <p>Rated 5 Stars in Reviews</p>
                </div>
            </div>
            <div className="rating two flex_row">
                <div className="star_container flex_row">
                    <img src={star} alt="" className='star'/>
                    <img src={star} alt="" className='star'/>
                    <img src={star} alt="" className='star'/>
                    <img src={star} alt="" className='star'/>
                    <img src={star} alt="" className='star'/>
                </div>
                <div className="statement">
                    <p>Rated 5 Stars in Report Guru</p>
                </div>   
            </div>
            <div className="rating three flex_row">
                <div className="star_container flex_row">
                    <img src={star} alt="" className='star'/>
                    <img src={star} alt="" className='star'/>
                    <img src={star} alt="" className='star'/>
                    <img src={star} alt="" className='star'/>
                    <img src={star} alt="" className='star'/>
                </div>
                <div className="statement">
                    <p>Rated 5 Stars in BestTech</p>
                </div>
            </div>
        </div>
    )
}

export default Ratings