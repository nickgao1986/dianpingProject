import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Ad from './subpage/Ad'
import Category from '../../components/Category'
import List from './subpage/List'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        console.log('this.props.userinfo.cityName=',this.props.userinfo)
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <Category/>
                <Ad/>
                <List cityName={this.props.userinfo.cityName}/>
            </div>
        )
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

