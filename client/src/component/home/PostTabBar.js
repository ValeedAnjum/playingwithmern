import React from 'react'

const PostTabBar = ({ OpenPostJobForNewPost }) => {
    return (
        <div className="post-topbar">
            <div className="user-picy">
                <img src="http://via.placeholder.com/100x100" alt=""/>
            </div>
            <div className="post-st">
                <ul>
                    <li>
                        <a className="" href="#" title="" onClick={OpenPostJobForNewPost}>Post a Project</a>
                    </li>
                    <li>
                        <a className="" href="#" title="" onClick={OpenPostJobForNewPost}>Post a Job</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PostTabBar
