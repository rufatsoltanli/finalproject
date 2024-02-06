import React, { useState } from 'react'
import "./style.scss"
import CommonTitle from '../Title'

function QualitySection() {

    const [chosenCategory, setChosenCategory] = useState("luxury")



    return (
        <div className="qualitySection">
            <div className="image"></div>
            <div className="content">
                <CommonTitle maintext={"Only Quality For Clients"} />
                <div className="categories">
                    <div className="buttons">
                        <div className={chosenCategory === "luxury" ? "button active" : "button"} onClick={() => setChosenCategory("luxury")}>Luxury</div>
                        <div className={chosenCategory === "comfort" ? "button active" : "button"} onClick={() => setChosenCategory("comfort")}>Comfort</div>
                        <div className={chosenCategory === "prestige" ? "button active" : "button"} onClick={() => setChosenCategory("prestige")}>Prestige</div>
                    </div>
                    <div className="showText" key={chosenCategory}>
                        {ShowText(chosenCategory)}
                    </div>
                </div>
            </div>
        </div>
    )

    function ShowText(chosenCategory) {
        if (chosenCategory === "luxury") {
            return (
                <div className="luxuryText">
                    We offer a meticulously curated collection of the most sought-after luxury vehicles on the market. Whether you prefer the sporty allure of a high-performance sports car, the sophistication of a sleek and luxurious sedan, or the versatility of a premium SUV, we have the perfect car to match your discerning taste.
                </div>
            )
        }
        if (chosenCategory === "comfort") {
            return (
                <div className="comfortText">
                    We prioritize your comfort and convenience throughout your journey. We understand that a comfortable ride can make a world of difference, whether you're embarking on a business trip or enjoying a leisurely vacation. That's why we offer a wide range of well-maintained, comfortable cars that cater to your specific needs.
                </div>
            )
        } if (chosenCategory === "prestige") {
            return (
                <div className="prestigeText">
                    We understand that prestige goes beyond luxury. It's about making a statement, embracing sophistication, and indulging in the finer things in life. That's why we offer an exclusive selection of prestigious cars that exude elegance, style, and status.
                </div>
            )
        }
    }


}

export default QualitySection