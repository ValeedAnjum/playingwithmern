import React from 'react'
import PropTypes from 'prop-types'
const Home = props => {
    return (
        <main>
            <div class="main-section">
                <div class="container">
                    <div class="main-section-data">
                        <div class="row">
                            <div class="col-lg-3 col-md-4 pd-left-none no-pd">
                                <div class="main-left-sidebar no-margin">
                                    <div class="user-data full-width">
                                        <div class="user-profile">
                                            <div class="username-dt">
                                                <div class="usr-pic">
                                                    <img src="http://via.placeholder.com/100x100" alt=""/>
                                                </div>
                                            </div>
                                            <div class="user-specs">
                                                <h3>John Doe</h3>
                                                <span>Graphic Designer at Self Employed</span>
                                            </div>
                                        </div>
                                        <ul class="user-fw-status">
                                            <li>
                                                <h4>Following</h4>
                                                <span>34</span>
                                            </li>
                                            <li>
                                                <h4>Followers</h4>
                                                <span>155</span>
                                            </li>
                                            <li>
                                                <a href="#" title="">View Profile</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="suggestions full-width">
                                        <div class="sd-title">
                                            <h3>Suggestions</h3>
                                            <i class="la la-ellipsis-v"></i>
                                        </div>
                                        <div class="suggestions-list">
                                            <div class="suggestion-usd">
                                                <img src="http://via.placeholder.com/35x35" alt=""/>
                                                <div class="sgt-text">
                                                    <h4>Jessica William</h4>
                                                    <span>Graphic Designer</span>
                                                </div>
                                                <span>
                                                    <i class="la la-plus"></i>
                                                </span>
                                            </div>
                                            <div class="suggestion-usd">
                                                <img src="http://via.placeholder.com/35x35" alt=""/>
                                                <div class="sgt-text">
                                                    <h4>John Doe</h4>
                                                    <span>PHP Developer</span>
                                                </div>
                                                <span>
                                                    <i class="la la-plus"></i>
                                                </span>
                                            </div>
                                            <div class="suggestion-usd">
                                                <img src="http://via.placeholder.com/35x35" alt=""/>
                                                <div class="sgt-text">
                                                    <h4>Poonam</h4>
                                                    <span>Wordpress Developer</span>
                                                </div>
                                                <span>
                                                    <i class="la la-plus"></i>
                                                </span>
                                            </div>
                                            <div class="suggestion-usd">
                                                <img src="http://via.placeholder.com/35x35" alt=""/>
                                                <div class="sgt-text">
                                                    <h4>Bill Gates</h4>
                                                    <span>C &amp; C++ Developer</span>
                                                </div>
                                                <span>
                                                    <i class="la la-plus"></i>
                                                </span>
                                            </div>
                                            <div class="suggestion-usd">
                                                <img src="http://via.placeholder.com/35x35" alt=""/>
                                                <div class="sgt-text">
                                                    <h4>Jessica William</h4>
                                                    <span>Graphic Designer</span>
                                                </div>
                                                <span>
                                                    <i class="la la-plus"></i>
                                                </span>
                                            </div>
                                            <div class="suggestion-usd">
                                                <img src="http://via.placeholder.com/35x35" alt=""/>
                                                <div class="sgt-text">
                                                    <h4>John Doe</h4>
                                                    <span>PHP Developer</span>
                                                </div>
                                                <span>
                                                    <i class="la la-plus"></i>
                                                </span>
                                            </div>
                                            <div class="view-more">
                                                <a href="#" title="">View More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tags-sec full-width">
                                        <ul>
                                            <li>
                                                <a href="#" title="">Help Center</a>
                                            </li>
                                            <li>
                                                <a href="#" title="">About</a>
                                            </li>
                                            <li>
                                                <a href="#" title="">Privacy Policy</a>
                                            </li>
                                            <li>
                                                <a href="#" title="">Community Guidelines</a>
                                            </li>
                                            <li>
                                                <a href="#" title="">Cookies Policy</a>
                                            </li>
                                            <li>
                                                <a href="#" title="">Career</a>
                                            </li>
                                            <li>
                                                <a href="#" title="">Language</a>
                                            </li>
                                            <li>
                                                <a href="#" title="">Copyright Policy</a>
                                            </li>
                                        </ul>
                                        <div class="cp-sec">
                                            <img src="images/logo2.png" alt=""/>
                                            <p><img src="images/cp.png" alt=""/>Copyright 2018</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-8 no-pd">
                                <div class="main-ws-sec">
                                    <div class="post-topbar">
                                        <div class="user-picy">
                                            <img src="http://via.placeholder.com/100x100" alt=""/>
                                        </div>
                                        <div class="post-st">
                                            <ul>
                                                <li>
                                                    <a class="post_project" href="#" title="">Post a Project</a>
                                                </li>
                                                <li>
                                                    <a class="post-jb active" href="#" title="">Post a Job</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="posts-section">
                                        <div class="post-bar">
                                            <div class="post_topbar">
                                                <div class="usy-dt">
                                                    <img src="http://via.placeholder.com/50x50" alt=""/>
                                                    <div class="usy-name">
                                                        <h3>John Doe</h3>
                                                        <span><img src="images/clock.png" alt=""/>3 min ago</span>
                                                    </div>
                                                </div>
                                                <div class="ed-opts">
                                                    <a href="#" title="" class="ed-opts-open">
                                                        <i class="la la-ellipsis-v"></i>
                                                    </a>
                                                    <ul class="ed-options">
                                                        <li>
                                                            <a href="#" title="">Edit Post</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">Unsaved</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">Unbid</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">Close</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">Hide</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="epi-sec">
                                                <ul class="descp">
                                                    <li><img src="images/icon8.png" alt=""/>
                                                        <span>Epic Coder</span>
                                                    </li>
                                                    <li><img src="images/icon9.png" alt=""/>
                                                        <span>India</span>
                                                    </li>
                                                </ul>
                                                <ul class="bk-links">
                                                    <li>
                                                        <a href="#" title="">
                                                            <i class="la la-bookmark"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="">
                                                            <i class="la la-envelope"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="job_descp">
                                                <h3>Senior Wordpress Developer</h3>
                                                <ul class="job-dt">
                                                    <li>
                                                        <a href="#" title="">Full Time</a>
                                                    </li>
                                                    <li>
                                                        <span>$30 / hr</span>
                                                    </li>
                                                </ul>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus
                                                    hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet...
                                                    <a href="#" title="">view more</a>
                                                </p>
                                                <ul class="skill-tags">
                                                    <li>
                                                        <a href="#" title="">HTML</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="">PHP</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="">CSS</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="">Javascript</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="">Wordpress</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="job-status-bar">
                                                <ul class="like-com">
                                                    <li>
                                                        <a href="#">
                                                            <i class="la la-heart"></i>
                                                            Like</a>
                                                        <img src="images/liked-img.png" alt=""/>
                                                        <span>25</span>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="" class="com"><img src="images/com.png" alt=""/>
                                                            Comment 15</a>
                                                    </li>
                                                </ul>
                                                <a>
                                                    <i class="la la-eye"></i>Views 50</a>
                                            </div>
                                        </div>
                                        <div class="top-profiles">
                                            <div class="pf-hd">
                                                <h3>Top Profiles</h3>
                                                <i class="la la-ellipsis-v"></i>
                                            </div>
                                            <div class="profiles-slider slick-initialized slick-slider">
                                                <span class="slick-previous slick-arrow" style="display: inline;"></span>
                                                <div class="slick-list draggable">
                                                    <div
                                                        class="slick-track"
                                                        style="opacity: 1; width: 2490px; transform: translate3d(-664px, 0px, 0px);">
                                                        <div
                                                            class="user-profy slick-slide slick-cloned"
                                                            data-slick-index="-3"
                                                            aria-hidden="true"
                                                            tabindex="-1"
                                                            style="width: 158px;">
                                                            <img src="http://via.placeholder.com/57x57" alt=""/>
                                                            <h3>John Doe</h3>
                                                            <span>Graphic Designer</span>
                                                            <ul>
                                                                <li>
                                                                    <a href="#" title="" class="followw" tabindex="-1">Follow</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="envlp" tabindex="-1">
                                                                        <img src="images/envelop.png" alt=""/></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="hire" tabindex="-1">hire</a>
                                                                </li>
                                                            </ul>
                                                            <a href="#" title="" tabindex="-1">View Profile</a>
                                                        </div>
                                                        <div
                                                            class="user-profy slick-slide slick-cloned"
                                                            data-slick-index="-2"
                                                            aria-hidden="true"
                                                            tabindex="-1"
                                                            style="width: 158px;">
                                                            <img src="http://via.placeholder.com/57x57" alt=""/>
                                                            <h3>John Doe</h3>
                                                            <span>Graphic Designer</span>
                                                            <ul>
                                                                <li>
                                                                    <a href="#" title="" class="followw" tabindex="-1">Follow</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="envlp" tabindex="-1"><img src="images/envelop.png" alt=""/></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="hire" tabindex="-1">hire</a>
                                                                </li>
                                                            </ul>
                                                            <a href="#" title="" tabindex="-1">View Profile</a>
                                                        </div>
                                                        <div
                                                            class="user-profy slick-slide slick-cloned"
                                                            data-slick-index="-1"
                                                            aria-hidden="true"
                                                            tabindex="-1"
                                                            style="width: 158px;">
                                                            <img src="http://via.placeholder.com/57x57" alt=""/>
                                                            <h3>John Doe</h3>
                                                            <span>Graphic Designer</span>
                                                            <ul>
                                                                <li>
                                                                    <a href="#" title="" class="followw" tabindex="-1">Follow</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="envlp" tabindex="-1">
                                                                        <img src="images/envelop.png" alt=""/></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="hire" tabindex="-1">hire</a>
                                                                </li>
                                                            </ul>
                                                            <a href="#" title="" tabindex="-1">View Profile</a>
                                                        </div>
                                                        <div
                                                            class="user-profy slick-slide"
                                                            data-slick-index="0"
                                                            aria-hidden="true"
                                                            tabindex="-1"
                                                            style="width: 158px;">
                                                            <img src="http://via.placeholder.com/57x57" alt=""/>
                                                            <h3>John Doe</h3>
                                                            <span>Graphic Designer</span>
                                                            <ul>
                                                                <li>
                                                                    <a href="#" title="" class="followw" tabindex="-1">Follow</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="envlp" tabindex="-1">
                                                                        <img src="images/envelop.png" alt=""/></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="hire" tabindex="-1">hire</a>
                                                                </li>
                                                            </ul>
                                                            <a href="#" title="" tabindex="-1">View Profile</a>
                                                        </div>
                                                        <div
                                                            class="user-profy slick-slide slick-current slick-active"
                                                            data-slick-index="1"
                                                            aria-hidden="false"
                                                            tabindex="0"
                                                            style="width: 158px;">
                                                            <img src="http://via.placeholder.com/57x57" alt=""/>
                                                            <h3>John Doe</h3>
                                                            <span>Graphic Designer</span>
                                                            <ul>
                                                                <li>
                                                                    <a href="#" title="" class="followw" tabindex="0">Follow</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="envlp" tabindex="0">
                                                                        <img src="images/envelop.png" alt=""/></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="hire" tabindex="0">hire</a>
                                                                </li>
                                                            </ul>
                                                            <a href="#" title="" tabindex="0">View Profile</a>
                                                        </div>
                                                        <div
                                                            class="user-profy slick-slide slick-active"
                                                            data-slick-index="2"
                                                            aria-hidden="false"
                                                            tabindex="0"
                                                            style="width: 158px;">
                                                            <img src="http://via.placeholder.com/57x57" alt=""/>
                                                            <h3>John Doe</h3>
                                                            <span>Graphic Designer</span>
                                                            <ul>
                                                                <li>
                                                                    <a href="#" title="" class="followw" tabindex="0">Follow</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="envlp" tabindex="0">
                                                                        <img src="images/envelop.png" alt=""/></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="hire" tabindex="0">hire</a>
                                                                </li>
                                                            </ul>
                                                            <a href="#" title="" tabindex="0">View Profile</a>
                                                        </div>
                                                        <div
                                                            class="user-profy slick-slide slick-active"
                                                            data-slick-index="3"
                                                            aria-hidden="false"
                                                            tabindex="0"
                                                            style="width: 158px;">
                                                            <img src="http://via.placeholder.com/57x57" alt=""/>
                                                            <h3>John Doe</h3>
                                                            <span>Graphic Designer</span>
                                                            <ul>
                                                                <li>
                                                                    <a href="#" title="" class="followw" tabindex="0">Follow</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="envlp" tabindex="0"><img src="images/envelop.png" alt=""/></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="hire" tabindex="0">hire</a>
                                                                </li>
                                                            </ul>
                                                            <a href="#" title="" tabindex="0">View Profile</a>
                                                        </div>
                                                        <div
                                                            class="user-profy slick-slide"
                                                            data-slick-index="4"
                                                            aria-hidden="true"
                                                            tabindex="-1"
                                                            style="width: 158px;">
                                                            <img src="http://via.placeholder.com/57x57" alt=""/>
                                                            <h3>John Doe</h3>
                                                            <span>Graphic Designer</span>
                                                            <ul>
                                                                <li>
                                                                    <a href="#" title="" class="followw" tabindex="-1">Follow</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="envlp" tabindex="-1">
                                                                        <img src="images/envelop.png" alt=""/></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="hire" tabindex="-1">hire</a>
                                                                </li>
                                                            </ul>
                                                            <a href="#" title="" tabindex="-1">View Profile</a>
                                                        </div>
                                                        <div
                                                            class="user-profy slick-slide"
                                                            data-slick-index="5"
                                                            aria-hidden="true"
                                                            tabindex="-1"
                                                            style="width: 158px;">
                                                            <img src="http://via.placeholder.com/57x57" alt=""/>
                                                            <h3>John Doe</h3>
                                                            <span>Graphic Designer</span>
                                                            <ul>
                                                                <li>
                                                                    <a href="#" title="" class="followw" tabindex="-1">Follow</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="envlp" tabindex="-1">
                                                                        <img src="images/envelop.png" alt=""/></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="hire" tabindex="-1">hire</a>
                                                                </li>
                                                            </ul>
                                                            <a href="#" title="" tabindex="-1">View Profile</a>
                                                        </div>
                                                        <div
                                                            class="user-profy slick-slide slick-cloned"
                                                            data-slick-index="6"
                                                            aria-hidden="true"
                                                            tabindex="-1"
                                                            style="width: 158px;">
                                                            <img src="http://via.placeholder.com/57x57" alt=""/>
                                                            <h3>John Doe</h3>
                                                            <span>Graphic Designer</span>
                                                            <ul>
                                                                <li>
                                                                    <a href="#" title="" class="followw" tabindex="-1">Follow</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="envlp" tabindex="-1">
                                                                        <img src="images/envelop.png" alt=""/></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="hire" tabindex="-1">hire</a>
                                                                </li>
                                                            </ul>
                                                            <a href="#" title="" tabindex="-1">View Profile</a>
                                                        </div>
                                                        <div
                                                            class="user-profy slick-slide slick-cloned"
                                                            data-slick-index="7"
                                                            aria-hidden="true"
                                                            tabindex="-1"
                                                            style="width: 158px;">
                                                            <img src="http://via.placeholder.com/57x57" alt=""/>
                                                            <h3>John Doe</h3>
                                                            <span>Graphic Designer</span>
                                                            <ul>
                                                                <li>
                                                                    <a href="#" title="" class="followw" tabindex="-1">Follow</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="envlp" tabindex="-1"><img src="images/envelop.png" alt=""/></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="hire" tabindex="-1">hire</a>
                                                                </li>
                                                            </ul>
                                                            <a href="#" title="" tabindex="-1">View Profile</a>
                                                        </div>
                                                        <div
                                                            class="user-profy slick-slide slick-cloned"
                                                            data-slick-index="8"
                                                            aria-hidden="true"
                                                            tabindex="-1"
                                                            style="width: 158px;">
                                                            <img src="http://via.placeholder.com/57x57" alt=""/>
                                                            <h3>John Doe</h3>
                                                            <span>Graphic Designer</span>
                                                            <ul>
                                                                <li>
                                                                    <a href="#" title="" class="followw" tabindex="-1">Follow</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="envlp" tabindex="-1"><img src="images/envelop.png" alt=""/></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="hire" tabindex="-1">hire</a>
                                                                </li>
                                                            </ul>
                                                            <a href="#" title="" tabindex="-1">View Profile</a>
                                                        </div>
                                                        <div
                                                            class="user-profy slick-slide slick-cloned"
                                                            data-slick-index="9"
                                                            aria-hidden="true"
                                                            tabindex="-1"
                                                            style="width: 158px;">
                                                            <img src="http://via.placeholder.com/57x57" alt=""/>
                                                            <h3>John Doe</h3>
                                                            <span>Graphic Designer</span>
                                                            <ul>
                                                                <li>
                                                                    <a href="#" title="" class="followw" tabindex="-1">Follow</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="envlp" tabindex="-1">
                                                                        <img src="images/envelop.png" alt=""/></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="hire" tabindex="-1">hire</a>
                                                                </li>
                                                            </ul>
                                                            <a href="#" title="" tabindex="-1">View Profile</a>
                                                        </div>
                                                        <div
                                                            class="user-profy slick-slide slick-cloned"
                                                            data-slick-index="10"
                                                            aria-hidden="true"
                                                            tabindex="-1"
                                                            style="width: 158px;">
                                                            <img src="http://via.placeholder.com/57x57" alt=""/>
                                                            <h3>John Doe</h3>
                                                            <span>Graphic Designer</span>
                                                            <ul>
                                                                <li>
                                                                    <a href="#" title="" class="followw" tabindex="-1">Follow</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="envlp" tabindex="-1"><img src="images/envelop.png" alt=""/></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="hire" tabindex="-1">hire</a>
                                                                </li>
                                                            </ul>
                                                            <a href="#" title="" tabindex="-1">View Profile</a>
                                                        </div>
                                                        <div
                                                            class="user-profy slick-slide slick-cloned"
                                                            data-slick-index="11"
                                                            aria-hidden="true"
                                                            tabindex="-1"
                                                            style="width: 158px;">
                                                            <img src="http://via.placeholder.com/57x57" alt=""/>
                                                            <h3>John Doe</h3>
                                                            <span>Graphic Designer</span>
                                                            <ul>
                                                                <li>
                                                                    <a href="#" title="" class="followw" tabindex="-1">Follow</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="envlp" tabindex="-1"><img src="images/envelop.png" alt=""/></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" title="" class="hire" tabindex="-1">hire</a>
                                                                </li>
                                                            </ul>
                                                            <a href="#" title="" tabindex="-1">View Profile</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span class="slick-nexti slick-arrow" style="display: inline;"></span>
                                            </div>
                                        </div>
                                        <div class="post-bar">
                                            <div class="post_topbar">
                                                <div class="usy-dt">
                                                    <img src="http://via.placeholder.com/50x50" alt=""/>
                                                    <div class="usy-name">
                                                        <h3>John Doe</h3>
                                                        <span><img src="images/clock.png" alt=""/>3 min ago</span>
                                                    </div>
                                                </div>
                                                <div class="ed-opts">
                                                    <a href="#" title="" class="ed-opts-open">
                                                        <i class="la la-ellipsis-v"></i>
                                                    </a>
                                                    <ul class="ed-options">
                                                        <li>
                                                            <a href="#" title="">Edit Post</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">Unsaved</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">Unbid</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">Close</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">Hide</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="epi-sec">
                                                <ul class="descp">
                                                    <li><img src="images/icon8.png" alt=""/>
                                                        <span>Epic Coder</span>
                                                    </li>
                                                    <li><img src="images/icon9.png" alt=""/>
                                                        <span>India</span>
                                                    </li>
                                                </ul>
                                                <ul class="bk-links">
                                                    <li>
                                                        <a href="#" title="">
                                                            <i class="la la-bookmark"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="">
                                                            <i class="la la-envelope"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="" class="bid_now">Bid Now</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="job_descp">
                                                <h3>Senior Wordpress Developer</h3>
                                                <ul class="job-dt">
                                                    <li>
                                                        <a href="#" title="">Full Time</a>
                                                    </li>
                                                    <li>
                                                        <span>$30 / hr</span>
                                                    </li>
                                                </ul>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus
                                                    hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet...
                                                    <a href="#" title="">view more</a>
                                                </p>
                                                <ul class="skill-tags">
                                                    <li>
                                                        <a href="#" title="">HTML</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="">PHP</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="">CSS</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="">Javascript</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="">Wordpress</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="job-status-bar">
                                                <ul class="like-com">
                                                    <li>
                                                        <a href="#">
                                                            <i class="la la-heart"></i>
                                                            Like</a>
                                                        <img src="images/liked-img.png" alt=""/>
                                                        <span>25</span>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="" class="com"><img src="images/com.png" alt=""/>
                                                            Comment 15</a>
                                                    </li>
                                                </ul>
                                                <a>
                                                    <i class="la la-eye"></i>Views 50</a>
                                            </div>
                                        </div>
                                        <div class="posty">
                                            <div class="post-bar no-margin">
                                                <div class="post_topbar">
                                                    <div class="usy-dt">
                                                        <img src="http://via.placeholder.com/50x50" alt=""/>
                                                        <div class="usy-name">
                                                            <h3>John Doe</h3>
                                                            <span><img src="images/clock.png" alt=""/>3 min ago</span>
                                                        </div>
                                                    </div>
                                                    <div class="ed-opts">
                                                        <a href="#" title="" class="ed-opts-open">
                                                            <i class="la la-ellipsis-v"></i>
                                                        </a>
                                                        <ul class="ed-options">
                                                            <li>
                                                                <a href="#" title="">Edit Post</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" title="">Unsaved</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" title="">Unbid</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" title="">Close</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" title="">Hide</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="epi-sec">
                                                    <ul class="descp">
                                                        <li><img src="images/icon8.png" alt=""/>
                                                            <span>Epic Coder</span>
                                                        </li>
                                                        <li><img src="images/icon9.png" alt=""/>
                                                            <span>India</span>
                                                        </li>
                                                    </ul>
                                                    <ul class="bk-links">
                                                        <li>
                                                            <a href="#" title="">
                                                                <i class="la la-bookmark"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                <i class="la la-envelope"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="job_descp">
                                                    <h3>Senior Wordpress Developer</h3>
                                                    <ul class="job-dt">
                                                        <li>
                                                            <a href="#" title="">Full Time</a>
                                                        </li>
                                                        <li>
                                                            <span>$30 / hr</span>
                                                        </li>
                                                    </ul>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus
                                                        hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet...
                                                        <a href="#" title="">view more</a>
                                                    </p>
                                                    <ul class="skill-tags">
                                                        <li>
                                                            <a href="#" title="">HTML</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">PHP</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">CSS</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">Javascript</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">Wordpress</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="job-status-bar">
                                                    <ul class="like-com">
                                                        <li>
                                                            <a href="#">
                                                                <i class="la la-heart"></i>
                                                                Like</a>
                                                            <img src="images/liked-img.png" alt=""/>
                                                            <span>25</span>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="" class="com"><img src="images/com.png" alt=""/>
                                                                Comment 15</a>
                                                        </li>
                                                    </ul>
                                                    <a>
                                                        <i class="la la-eye"></i>Views 50</a>
                                                </div>
                                            </div>
                                            <div class="comment-section">
                                                <div class="plus-ic">
                                                    <i class="la la-plus"></i>
                                                </div>
                                                <div class="comment-sec">
                                                    <ul>
                                                        <li>
                                                            <div class="comment-list">
                                                                <div class="bg-img">
                                                                    <img src="http://via.placeholder.com/40x40" alt=""/>
                                                                </div>
                                                                <div class="comment">
                                                                    <h3>John Doe</h3>
                                                                    <span><img src="images/clock.png" alt=""/>
                                                                        3 min ago</span>
                                                                    <p>Lorem ipsum dolor sit amet,
                                                                    </p>
                                                                    <a href="#" title="" class="active">
                                                                        <i class="fa fa-reply-all"></i>Reply</a>
                                                                </div>
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <div class="comment-list">
                                                                        <div class="bg-img">
                                                                            <img src="http://via.placeholder.com/40x40" alt=""/>
                                                                        </div>
                                                                        <div class="comment">
                                                                            <h3>John Doe</h3>
                                                                            <span><img src="images/clock.png" alt=""/>
                                                                                3 min ago</span>
                                                                            <p>Hi John
                                                                            </p>
                                                                            <a href="#" title="">
                                                                                <i class="fa fa-reply-all"></i>Reply</a>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <div class="comment-list">
                                                                <div class="bg-img">
                                                                    <img src="http://via.placeholder.com/40x40" alt=""/>
                                                                </div>
                                                                <div class="comment">
                                                                    <h3>John Doe</h3>
                                                                    <span><img src="images/clock.png" alt=""/>
                                                                        3 min ago</span>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus
                                                                        hendrerit metus, ut ullamcorper quam finibus at.</p>
                                                                    <a href="#" title="">
                                                                        <i class="fa fa-reply-all"></i>Reply</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="post-comment">
                                                    <div class="cm_img">
                                                        <img src="http://via.placeholder.com/40x40" alt=""/>
                                                    </div>
                                                    <div class="comment_box">
                                                        <form>
                                                            <input type="text" placeholder="Post a comment"/>
                                                            <button type="submit">Send</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="process-comm">
                                            <div class="spinner">
                                                <div class="bounce1"></div>
                                                <div class="bounce2"></div>
                                                <div class="bounce3"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 pd-right-none no-pd">
                                <div class="right-sidebar">
                                    <div class="widget widget-about">
                                        <img src="images/wd-logo.png" alt=""/>
                                        <h3>Track Time on Workwise</h3>
                                        <span>Pay only for the Hours worked</span>
                                        <div class="sign_link">
                                            <h3>
                                                <a href="#" title="">Sign up</a>
                                            </h3>
                                            <a href="#" title="">Learn More</a>
                                        </div>
                                    </div>
                                    <div class="widget widget-jobs">
                                        <div class="sd-title">
                                            <h3>Top Jobs</h3>
                                            <i class="la la-ellipsis-v"></i>
                                        </div>
                                        <div class="jobs-list">
                                            <div class="job-info">
                                                <div class="job-details">
                                                    <h3>Senior Product Designer</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                </div>
                                                <div class="hr-rate">
                                                    <span>$25/hr</span>
                                                </div>
                                            </div>
                                            <div class="job-info">
                                                <div class="job-details">
                                                    <h3>Senior UI / UX Designer</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                </div>
                                                <div class="hr-rate">
                                                    <span>$25/hr</span>
                                                </div>
                                            </div>
                                            <div class="job-info">
                                                <div class="job-details">
                                                    <h3>Junior Seo Designer</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                </div>
                                                <div class="hr-rate">
                                                    <span>$25/hr</span>
                                                </div>
                                            </div>
                                            <div class="job-info">
                                                <div class="job-details">
                                                    <h3>Senior PHP Designer</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                </div>
                                                <div class="hr-rate">
                                                    <span>$25/hr</span>
                                                </div>
                                            </div>
                                            <div class="job-info">
                                                <div class="job-details">
                                                    <h3>Senior Developer Designer</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                </div>
                                                <div class="hr-rate">
                                                    <span>$25/hr</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="widget widget-jobs">
                                        <div class="sd-title">
                                            <h3>Most Viewed This Week</h3>
                                            <i class="la la-ellipsis-v"></i>
                                        </div>
                                        <div class="jobs-list">
                                            <div class="job-info">
                                                <div class="job-details">
                                                    <h3>Senior Product Designer</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                </div>
                                                <div class="hr-rate">
                                                    <span>$25/hr</span>
                                                </div>
                                            </div>
                                            <div class="job-info">
                                                <div class="job-details">
                                                    <h3>Senior UI / UX Designer</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                </div>
                                                <div class="hr-rate">
                                                    <span>$25/hr</span>
                                                </div>
                                            </div>
                                            <div class="job-info">
                                                <div class="job-details">
                                                    <h3>Junior Seo Designer</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                                </div>
                                                <div class="hr-rate">
                                                    <span>$25/hr</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="widget suggestions full-width">
                                        <div class="sd-title">
                                            <h3>Most Viewed People</h3>
                                            <i class="la la-ellipsis-v"></i>
                                        </div>
                                        <div class="suggestions-list">
                                            <div class="suggestion-usd">
                                                <img src="http://via.placeholder.com/35x35" alt=""/>
                                                <div class="sgt-text">
                                                    <h4>Jessica William</h4>
                                                    <span>Graphic Designer</span>
                                                </div>
                                                <span>
                                                    <i class="la la-plus"></i>
                                                </span>
                                            </div>
                                            <div class="suggestion-usd">
                                                <img src="http://via.placeholder.com/35x35" alt=""/>
                                                <div class="sgt-text">
                                                    <h4>John Doe</h4>
                                                    <span>PHP Developer</span>
                                                </div>
                                                <span>
                                                    <i class="la la-plus"></i>
                                                </span>
                                            </div>
                                            <div class="suggestion-usd">
                                                <img src="http://via.placeholder.com/35x35" alt=""/>
                                                <div class="sgt-text">
                                                    <h4>Poonam</h4>
                                                    <span>Wordpress Developer</span>
                                                </div>
                                                <span>
                                                    <i class="la la-plus"></i>
                                                </span>
                                            </div>
                                            <div class="suggestion-usd">
                                                <img src="http://via.placeholder.com/35x35" alt=""/>
                                                <div class="sgt-text">
                                                    <h4>Bill Gates</h4>
                                                    <span>C &amp; C++ Developer</span>
                                                </div>
                                                <span>
                                                    <i class="la la-plus"></i>
                                                </span>
                                            </div>
                                            <div class="suggestion-usd">
                                                <img src="http://via.placeholder.com/35x35" alt=""/>
                                                <div class="sgt-text">
                                                    <h4>Jessica William</h4>
                                                    <span>Graphic Designer</span>
                                                </div>
                                                <span>
                                                    <i class="la la-plus"></i>
                                                </span>
                                            </div>
                                            <div class="suggestion-usd">
                                                <img src="http://via.placeholder.com/35x35" alt=""/>
                                                <div class="sgt-text">
                                                    <h4>John Doe</h4>
                                                    <span>PHP Developer</span>
                                                </div>
                                                <span>
                                                    <i class="la la-plus"></i>
                                                </span>
                                            </div>
                                            <div class="view-more">
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