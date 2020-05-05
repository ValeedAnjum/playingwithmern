import React from 'react'

const PostTabBar = () => {
    return (
        <div className="post-topbar">
            <div className="user-picy">
                <img src="http://via.placeholder.com/100x100" alt=""/>
            </div>
            <div className="post-st">
                <ul>
                    <li>
                        <a className="post_project" href="#" title="">Post a Project</a>
                    </li>
                    <li>
                        <a className="post-jb active" href="#" title="">Post a Job</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PostTabBar
