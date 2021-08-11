import React, { useState, useEffect } from 'react'
import { NavItem } from 'react-bootstrap'
import './carousel.css'
import BookImage from "./Card"


const Carousel = (props) => {

    const { books, show, } = props
    console.log(books)

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(books.length)
    const [showBox, boxIsShown] = useState(false);

    const handleBoxToggle = () => boxIsShown(!showBox);

    // Set the length to match current children from props
    useEffect(() => {
        setLength(books.length)
    }, [books])

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }
    
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }


    return (
        
        
        <div className="carousel-container mb-5">
        <h1 className="py-4">{books[0].category.toUpperCase()} BOOKS</h1>
        <div className="carousel-wrapper">
            {
                currentIndex > 0 &&
                <button onClick={prev} className="left-arrow">
                    &lt;
                </button>
            }
                <div className="carousel-content-wrapper">
                <div className={`carousel-content show-${show}`}
                     style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}>

                        {books.map((item, idx) => {
                            console.log(item)
                            return (
                                <BookImage title={item.title} key={idx} asim={item.asin} img={item.img} ></BookImage>
                               ) 
                        })}
                    </div>
            {
                currentIndex < (length - 1) &&
                <button onClick={next} className="right-arrow">
                    &gt;
                </button>
            }
            </div>
        </div>
    </div>
    )
}

export default Carousel