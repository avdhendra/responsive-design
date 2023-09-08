import React, { useState } from 'react'
import "./LatestArticle.scss"
import data from '../../utils/data'
import Card from '../Card/Card'
import { MdOutlineArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { BsSlashLg } from "react-icons/bs";
const LatestArticles = () => {
    const [currentCard, setCurrentCard] = useState(1);
    const [CardPerPage, setCardPerPage] = useState(3);
    const lastCardIndex = currentCard * CardPerPage
    const firstCardIndex = lastCardIndex - CardPerPage
    const currentCards = data.slice(firstCardIndex, lastCardIndex)

    const changePageBackward = () => {
        if (currentCard > 1) {
        
            setCurrentCard(prev => prev - 1)
        }
       
    }
    const changePageForward = () => { 
        if (currentCard < 2) {
    setCurrentCard(prev => prev + 1)
}
    }


    return (
        <div className='article'>
            <div>
            <h1>Latest Articles</h1>

            </div>
            <div className='article-card'>
                {
                    currentCards?.map(({ img, alt, title, description }) =>
                        <Card key={title} img={img} alt={alt} title={title} description={description} />

                    )
                }
            </div>

            <div className='article-container'>

                <button disabled={currentCard===1} className='article-container-arrow' onClick={changePageBackward}>
                    <MdOutlineArrowBackIos />
                </button>
                <span className='article-container-number'>
                    <span>{currentCard}</span>
                    <span className='article-container-number-cross'>/</span>
                    <span>{2}</span>
                </span>
                <button disabled={currentCard===2} className='article-container-arrow' onClick={changePageForward}>
                    <MdArrowForwardIos />
                </button>
            </div>

        </div>
    )
}

export default LatestArticles
