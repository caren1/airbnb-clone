import React from 'react'
import './SearchResult.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import StarIcon from '@material-ui/icons/Star'

function SearchResult({ src, location, title, description, rating, price, total }) {
    return (
        <div className="searchResult">
            <img src={src} alt="" />
            <FavoriteBorderIcon className="searchResult__heart"/>
            <div className="searchResult__info">

                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>_____</p>
                    <p>{description}</p>
                </div>

                <div class="searchResult__infoBottom">
                    
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star"/>
                        <p><strong>{rating}</strong></p>
                    </div>

                    <div class="searchResult__price">
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SearchResult
