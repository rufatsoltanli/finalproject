import React, { useState } from 'react'
import 'rc-slider/assets/index.css';
import Slider, { Range } from 'rc-slider';


function PriceSlider() {

    return (
        <>
            <Slider />
            <Range />
        </>
    )

}
export default PriceSlider