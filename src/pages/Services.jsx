import React from "react";
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faTablet } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
const Services = () => {
    return (
        <div>
          <div className='w-full text-white'>
            <img
              src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
              alt="/"
              className="hidden sm:block absolute w-full h-full object-cover"
                />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-full'>
            </div>
            <h1 className='absolute right-0 left-0 bottom-0 top-[15%] text-3xl md:text-5xl font-bold text-center'>Services</h1>
          </div>
          <div className="service-container">
              <div className="service-body">
            <div className="service-form-container">
                <div className="service-form-header">
                    <h4>CHỌN GÓI CƯỚC PHÙ HỢP VỚI BẠN</h4>
                </div>
                <div className="service-form">
                    <div className="sv1">
                    <button className="service-form-btn">Mobile</button>
                    <div className="discription">
                        <div className="price">
                            <span>70.000đ/tháng</span>
                        </div>
                        <div className="video-quality">
                            <span>Chất lượng phim tốt</span>
                        </div>
                        <div className="resolution">
                            <span>480P</span>
                        </div>
                        <div className="device">
                          <div className="mobile-icon">
                            <FontAwesomeIcon icon={faMobile} />
                          </div>
                          <div className="tablet-icon">
                            <FontAwesomeIcon icon={faTablet} />
                          </div>
                        </div>
                    </div>
                    </div>
                    <div className="sv2">
                    <button className="service-form-btn">Basic</button>
                    <div className="discription">
                        <div className="price">
                            <span>180.000đ/tháng</span>
                        </div>
                        <div className="video-quality">
                            <span>Chất lượng phim tốt</span>
                        </div>
                        <div className="resolution">
                            <span>720P</span>
                        </div>
                        <div className="device">
                        <div className="mobile-icon">
                            <FontAwesomeIcon icon={faMobile} />
                          </div>
                          <div className="tablet-icon">
                            <FontAwesomeIcon icon={faTablet} />
                          </div>
                          <div className="laptop-icon">
                            <FontAwesomeIcon icon={faLaptop} />
                          </div>
                          <div className="tv-icon">
                            <FontAwesomeIcon icon={faTv} />
                          </div>
                        </div>
                    </div>
                    </div>
                    <div className="sv3">
                    <button className="service-form-btn">Standard</button>
                    <div className="discription">
                        <div className="price">
                            <span>220.000đ/tháng</span>
                        </div>
                        <div className="video-quality">
                            <span>Cải thiện chất lượng</span>
                        </div>
                        <div className="resolution">
                            <span>1080P</span>
                        </div>
                        <div className="device">
                        <div className="mobile-icon">
                            <FontAwesomeIcon icon={faMobile} />
                          </div>
                          <div className="tablet-icon">
                            <FontAwesomeIcon icon={faTablet} />
                          </div>
                          <div className="laptop-icon">
                            <FontAwesomeIcon icon={faLaptop} />
                          </div>
                          <div className="tv-icon">
                            <FontAwesomeIcon icon={faTv} />
                          </div>
                        </div>
                    </div>
                    </div>
                    <div className="sv4">
                    <button className="service-form-btn">Premium</button>
                    <div className="discription">
                        <div className="price">
                            <span>260.000đ/tháng</span>
                        </div>
                        <div className="video-quality">
                            <span>Chất lượng tốt nhất</span>
                        </div>
                        <div className="resolution">
                            <span>4K + HDR</span>
                        </div>
                        <div className="device">
                        <div className="mobile-icon">
                            <FontAwesomeIcon icon={faMobile} />
                          </div>
                          <div className="tablet-icon">
                            <FontAwesomeIcon icon={faTablet} />
                          </div>
                          <div className="laptop-icon">
                            <FontAwesomeIcon icon={faLaptop} />
                          </div>
                          <div className="tv-icon">
                            <FontAwesomeIcon icon={faTv} />
                          </div>
                        </div>
                    </div>
                </div>
                </div>
                <p className="comment">HD (720p), Full HD (1080p), Ultra HD (4K) và HDR tùy thuộc vào khả năng của thiết bị và dịch vụ internet của bạn. Không phải tất cả phim đều có sẵn ở tất cả các độ phân giải</p>
                </div>
                <Link to="/">
                  <button className="service-next-btn">Quay lại trang chính</button>
                </Link>
            </div>
          </div>
        </div>
        
      )
}

export default Services