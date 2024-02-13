import React from 'react'
import CommonTitle from '../Title'
import "./style.scss"

function LatestNews() {
    return (
        <div className="latestNews">
            <CommonTitle maintext={"Latest News"} smalltext={"Breaking news, fresh perspectives, and in-depth coverage - stay ahead with our latest news, insights, and analysis."} />
            <div className="cardCont">
                <div className="card">
                    <div className="img">
                        <div className="date">
                            <div className="number">18</div>
                            <div className="month">F E B</div>
                        </div>
                        <img src="https://www.madebydesignesia.com/themes/rentaly/images/news/pic-blog-1.jpg" alt="" />
                    </div>
                    <div className="textCont">
                        <h4>Enjoy Best Travel Experience</h4>
                        <div className="text">
                            Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur.
                        </div>

                    </div>
                </div>
                <div className="card">
                    <div className="img">
                        <div className="date">
                            <div className="number">19</div>
                            <div className="month">F E B</div>
                        </div>
                        <img src="https://www.madebydesignesia.com/themes/rentaly/images/news/pic-blog-2.jpg" alt="" />
                    </div>
                    <div className="textCont">
                        <h4>The Future of Car Rent</h4>
                        <div className="text">
                            Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur.
                        </div>

                    </div>
                </div>
                <div className="card">
                    <div className="img">
                        <div className="date">
                            <div className="number">20</div>
                            <div className="month">F E B</div>
                        </div>
                        <img src="https://www.madebydesignesia.com/themes/rentaly/images/news/pic-blog-3.jpg" alt="" />
                    </div>
                    <div className="textCont">
                        <h4>Holiday Tips For Backpacker</h4>
                        <div className="text">
                            Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur.
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestNews