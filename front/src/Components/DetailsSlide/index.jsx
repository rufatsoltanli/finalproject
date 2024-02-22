import React, { useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import "./style.scss"

function DetailsSlide({ images }) {


    return (
        <>
            <div className="detailSlideCont"> <Splide
                options={{
                    rewind: true,
                    gap: '1rem',
                    width: "100%",
                    height: 345,
                    perPage: 1,

                }}
            >
                {images && images.map((x) => (
                    <SplideSlide>
                        <div className="slideImageCont">
                            <img src={x} alt="Image 1" />
                        </div>
                    </SplideSlide>
                ))}
            </Splide></div>
        </>
    )
}

export default DetailsSlide