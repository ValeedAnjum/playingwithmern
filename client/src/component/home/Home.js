import React from 'react'
import PropTypes from 'prop-types'
import UserData from './UserData'
import Suggestion from './Suggestion'
import PostTabBar from './PostTabBar'
import PostBar from './PostBar'
const Home = props => {
    return (
        <main>
            <div className="main-section">
                <div className="container">
                    <div className="main-section-data">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                                <div className="main-left-sidebar no-margin">
                                    <UserData/>
                                    <Suggestion/>

                                </div>
                            </div>
                            <div className="col-lg-6 col-md-8 no-pd">
                                <div className="main-ws-sec">
                                    <PostTabBar/>
                                    <div className="posts-section">
                                        <PostBar/>
                                        
                                        
                                        <div className="process-comm">
                                            <div className="spinner">
                                                <div className="bounce1"></div>
                                                <div className="bounce2"></div>
                                                <div className="bounce3"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 pd-right-none no-pd">
                                <div className="right-sidebar">
                                    <div className="widget widget-about">
                                        <img src="images/wd-logo.png" alt=""/>
                                        <h3>Track Time on Workwise</h3>
                                        <span>Pay only for the Hours worked</span>
                                        <div className="sign_link">
                                            <h3>
                                                <a href="#" title="">Sign up</a>
                                            </h3>
                                            <a href="#" title="">Learn More</a>
                                        </div>
                                    </div>
                                    <div className="widget widget-jobs">
                                        <div className="sd-title">
                                            <h3>Top Jobs</h3>
                                            <i className="la la-ellipsis-v"></i>
                                        </div>
                                        <div className="jobs-list">
                                            <div className="job-info">
                                                <div className="job-details">
                                                    <h3>Senior Product Designer</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                </div>
                                                <div className="hr-rate">
                                                    <span>$25/hr</span>
                                                </div>
                                            </div>
                                            <div className="job-info">
                                                <div className="job-details">
                                                    <h3>Senior UI / UX Designer</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                </div>
                                                <div className="hr-rate">
                                                    <span>$25/hr</span>
                                                </div>
                                            </div>
                                            <div className="job-info">
                                                <div className="job-details">
                                                    <h3>Junior Seo Designer</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                </div>
                                                <div className="hr-rate">
                                                    <span>$25/hr</span>
                                                </div>
                                            </div>
                                            <div className="job-info">
                                                <div className="job-details">
                                                    <h3>Senior PHP Designer</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                </div>
                                                <div className="hr-rate">
                                                    <span>$25/hr</span>
                                                </div>
                                            </div>
                                            <div className="job-info">
                                                <div className="job-details">
                                                    <h3>Senior Developer Designer</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                </div>
                                                <div className="hr-rate">
                                                    <span>$25/hr</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget widget-jobs">
                                        <div className="sd-title">
                                            <h3>Most Viewed This Week</h3>
                                            <i className="la la-ellipsis-v"></i>
                                        </div>
                                        <div className="jobs-list">
                                            <div className="job-info">
                                                <div className="job-details">
                                                    <h3>Senior Product Designer</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                </div>
                                                <div className="hr-rate">
                                                    <span>$25/hr</span>
                                                </div>
                                            </div>
                                            <div className="job-info">
                                                <div className="job-details">
                                                    <h3>Senior UI / UX Designer</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                </div>
                                                <div className="hr-rate">
                                                    <span>$25/hr</span>
                                                </div>
                                            </div>
                                            <div className="job-info">
                                                <div className="job-details">
                                                    <h3>Junior Seo Designer</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                </div>
                                                <div className="hr-rate">
                                                    <span>$25/hr</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget suggestions full-width">
                                        <div className="sd-title">
                                            <h3>Most Viewed People</h3>
                                            <i className="la la-ellipsis-v"></i>
                                        </div>
                                        <div className="suggestions-list">
                                            <div className="suggestion-usd">
                                                <img src="http://via.placeholder.com/35x35" alt=""/>
                                                <div className="sgt-text">
                                                    <h4>Jessica William</h4>
                                                    <span>Graphic Designer</span>
                                                </div>
                                                <span>
                                                    <i className="la la-plus"></i>
                                                </span>
                                            </div>
                                            <div className="suggestion-usd">
                                                <img src="http://via.placeholder.com/35x35" alt=""/>
                                                <div className="sgt-text">
                                                    <h4>John Doe</h4>
                                                    <span>PHP Developer</span>
                                                </div>
                                                <span>
                                                    <i className="la la-plus"></i>
                                                </span>
                                            </div>
                                            <div className="suggestion-usd">
                                                <img src="http://via.placeholder.com/35x35" alt=""/>
                                                <div className="sgt-text">
                                                    <h4>Poonam</h4>
                                                    <span>Wordpress Developer</span>
                                                </div>
                                                <span>
                                                    <i className="la la-plus"></i>
                                                </span>
                                            </div>
                                            <div className="suggestion-usd">
                                                <img src="http://via.placeholder.com/35x35" alt=""/>
                                                <div className="sgt-text">
                                                    <h4>Bill Gates</h4>
                                                    <span>C &amp; C++ Developer</span>
                                                </div>
                                                <span>
                                                    <i className="la la-plus"></i>
                                                </span>
                                            </div>
                                            <div className="suggestion-usd">
                                                <img src="http://via.placeholder.com/35x35" alt=""/>
                                                <div className="sgt-text">
                                                    <h4>Jessica William</h4>
                                                    <span>Graphic Designer</span>
                                                </div>
                                                <span>
                                                    <i className="la la-plus"></i>
                                                </span>
                                            </div>
                                            <div className="suggestion-usd">
                                                <img src="http://via.placeholder.com/35x35" alt=""/>
                                                <div className="sgt-text">
                                                    <h4>John Doe</h4>
                                                    <span>PHP Developer</span>
                                                </div>
                                                <span>
                                                    <i className="la la-plus"></i>
                                                </span>
                                            </div>
                                            <div className="view-more">
                                                <a href="#" title="">View More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

Home.propTypes = {}

export default Home;
