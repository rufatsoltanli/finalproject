import React from 'react'
import NewsCard from '../../Components/NewsCard'
import "./style.scss"
import Button from '../../Components/CommonComponents/button'
import { Splide, SplideSlide } from '@splidejs/react-splide';

function NewsPage() {
  return (
    <div className='newsPage'>
      <h1>News & Updates</h1>
      <div className="pageCont">
        <div className="newsCont">
          <NewsCard text={"Enjoy Best Travel Experience with rentaly!"} header={"Enjoy Best Travel Experience"} date={"16 Feb. 2024"} tag={"Travel"} author={"George Lee"} img={"https://www.madebydesignesia.com/themes/rentaly/images/news-2/pic-blog-1.jpg"} />
          <NewsCard text={"Build brighter Future of Car Rent with rentaly!"} header={"The Future of Car Rent"} date={"17 Feb. 2024"} tag={"Car Rent's future"} author={"Tomas Thomson"} img={"https://www.madebydesignesia.com/themes/rentaly/images/news-2/pic-blog-2.jpg"} />
          <NewsCard text={"Holiday Tips For Backpacker with rentaly travel experts!"} header={"Holiday Tips For Backpacker"} date={"18 Feb. 2024"} tag={"Holiday"} author={"Marry Oneal"} img={"https://www.madebydesignesia.com/themes/rentaly/images/news-2/pic-blog-3.jpg"} />
          <NewsCard text={"The Essential Guide to Hotel with rentaly guide tour!"} header={"The Essential Guide to Hotel"} date={"19 Feb. 2024"} tag={"Guide"} author={"Freddy Brown"} img={"https://www.madebydesignesia.com/themes/rentaly/images/news-2/pic-blog-5.jpg"} />
          <NewsCard text={"Travel on a Budget with rentaly!"} header={"Travel on a Budget"} date={"20 Feb. 2024"} tag={"Travel"} author={"John Blade"} img={"https://www.madebydesignesia.com/themes/rentaly/images/news-2/pic-blog-6.jpg"} />
        </div>
        <div className="sideBar">
          <div className="recentPosts">
            <h5>Recent Posts</h5>
            <div className="recentNews">
              <div className="card">
                <div className="img">
                  <img src="https://www.madebydesignesia.com/themes/rentaly/images/news-2/pic-blog-1.jpg" alt="" />
                </div>
                <div className="cont">
                  <h6>Enjoy Best Travel Experience</h6>
                  <div className="date">
                    <i className='fa-solid fa-calendar-days'></i> 16 Feb. 2024
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  <img src="https://www.madebydesignesia.com/themes/rentaly/images/news-2/pic-blog-2.jpg" alt="" />
                </div>
                <div className="cont">
                  <h6>The Future of Car Rent</h6>
                  <div className="date">
                    <i className='fa-solid fa-calendar-days'></i> 17 Feb. 2024
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="img">
                  <img src="https://www.madebydesignesia.com/themes/rentaly/images/news-2/pic-blog-3.jpg" alt="" />
                </div>
                <div className="cont">
                  <h6>Holiday Tips For Backpacker</h6>
                  <div className="date">
                    <i className='fa-solid fa-calendar-days'></i> 18 Feb. 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="popularTags">
            <h5>Popular Tags</h5>
            <div className="tagCont">
              <Button>Art</Button>
              <Button>Application</Button>
              <Button>Design</Button>
              <Button>Car</Button>
              <Button>Travel</Button>
              <Button>Holiday</Button>
              <Button>Guide</Button>
              <Button>Rent's future</Button>
            </div>
          </div>
          <div className="testimonials">
            <h5>Testimonials</h5>
            <Splide options={{
              rewind: true,
              width: 460,
              perPage: 1,
              rewindByDrag: true,
              paginationKeyboard: false,
              autoplay: true,
              arrows: false,
            }}>
              <SplideSlide>
                <div className='testimonialsCard'>
                  <div className="icon"><i className='fa-solid fa-quote-left'></i></div>
                  <div className="content">
                    <h6>Excellent Service!</h6>
                    <div className="text">Great support, i have never seen something like that before.</div>
                    <div className="author">
                      <div className="img"><img src="https://www.madebydesignesia.com/themes/rentaly/images/people/1.jpg" alt="" /></div> <div className="name">John</div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className='testimonialsCard'>
                  <div className="icon"><i className='fa-solid fa-quote-left'></i></div>
                  <div className="content">
                    <h6>Excellent Service!</h6>
                    <div className="text">Great support, i have never seen something like that before.</div>
                    <div className="author">
                      <div className="img"><img src="https://www.madebydesignesia.com/themes/rentaly/images/people/2.jpg" alt="" /></div> <div className="name">Victoria</div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className='testimonialsCard'>
                  <div className="icon"><i className='fa-solid fa-quote-left'></i></div>
                  <div className="content">
                    <h6>Excellent Service!</h6>
                    <div className="text">Great support, i have never seen something like that before.</div>
                    <div className="author">
                      <div className="img"><img src="https://www.madebydesignesia.com/themes/rentaly/images/people/3.jpg" alt="" /></div> <div className="name">Thomas</div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className='testimonialsCard'>
                  <div className="icon"><i className='fa-solid fa-quote-left'></i></div>
                  <div className="content">
                    <h6>Excellent Service!</h6>
                    <div className="text">Great support, i have never seen something like that before.</div>
                    <div className="author">
                      <div className="img"><img src="https://www.madebydesignesia.com/themes/rentaly/images/people/4.jpg" alt="" /></div> <div className="name">Jack</div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsPage