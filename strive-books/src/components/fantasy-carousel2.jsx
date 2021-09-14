import React, { useState, useEffect, useCallback } from 'react'
import { NavItem } from 'react-bootstrap'
import './carousel.css'
import BookImage from "./Card"
import MyCommentBox from "../components/commentBox"


const Carousel = (props) => {

    const { books, show, } = props
    console.log(books)

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(books.length)
    const [showBox, boxIsShown] = useState(false);
    const [showComments, commentsIsShown] = useState(false);
    const [bookASIN, pushBookID] = useState(null);

    const handleBoxToggle = () => boxIsShown(!showBox);

    // const handleCommentToggle = () => commentsIsShown(!showComments);

    const handleCommentToggle = (ASIN, currentASIN) => {
        
        
        console.log(ASIN)
        // pushBookID(ASIN)

        if (ASIN !== currentASIN) {

            
                
                pushBookID(ASIN)
                console.log(bookASIN)
                commentsIsShown(true)
           

            // commentsIsShown(true);
            // pushBookID(ASIN)
            console.log(bookASIN)

        } else if (ASIN === currentASIN && showComments === false){

           
                
                pushBookID(ASIN)
            commentsIsShown(true)

            // pushBookID(null)
            // commentsIsShown(false);

        } else {

            commentsIsShown(false)
        }
    
    }

    // const bookIDtoComment = () => {
    //     const 
    // };

    // Set the length to match current children from props
    useEffect(() => {
        setLength(books.length)
    }, [books])

    useEffect(() => {
        // commentsIsShown(showComments)
        pushBookID(bookASIN)
    }, [bookASIN])


    // useEffect(() => {
    //         commentsIsShown(showComments)
    //         pushBookID(bookASIN)
    //     }, [showComments])

    // useEffect(() => {
    //         commentsIsShown(showComments)
    //         pushBookID(bookASIN)
    //     }, [showComments])


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

    // function openBox(bookASIN) {
    //     commentsIsShown(!showComments) 

    //     if (showComments) {
    //     pushBookID(bookASIN)
    //     }
    // }

    


    return (
        
        <>
        <div className="carousel-container mb-5">
        <h1 className="py-4">{books[0].category.toUpperCase()} BOOKS</h1>
        <div className="carousel-wrapper" id="carouselrow">
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
                            // console.log(item)
                            // const ASIN = item.asin

                            return (
                                <BookImage title={item.title} key={idx} asim={item.asin} img={item.img} showComments={showComments} onClick={() => handleCommentToggle(item.asin, bookASIN)}></BookImage>
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
    {
        showComments && 
        <div>
        <MyCommentBox bookID={bookASIN}></MyCommentBox>
        </div>
    }
    </>
    )
}

export default Carousel