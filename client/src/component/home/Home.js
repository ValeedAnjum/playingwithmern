import React from 'react'
import { connect } from 'react-redux';
import UserData from './UserData'
import Suggestion from './Suggestion'
import PostTabBar from './PostTabBar'
import WidgetJob from './WidgetJob'
import Posts from './Posts'
import { OpenPostJobForNewPost } from '../../store/actions/ModelActions';
const Home = props => {
    const { OpenPostJobForNewPost  } = props;
    return (
        <React.Fragment>
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
                                        <PostTabBar 
                                        OpenPostJobForNewPost={OpenPostJobForNewPost} />
                                        <div className="posts-section">
                                            <Posts />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 pd-right-none no-pd">
                                    <div className="right-sidebar">
                                        <WidgetJob/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}

const mapState = state => {
    return {

    }
}
const mapDispatch = dispatch => {
    return {
        OpenPostJobForNewPost:() => dispatch(OpenPostJobForNewPost())
    }
}
export default connect(mapState,mapDispatch)(Home);
