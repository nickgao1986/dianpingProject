import './style.less'
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <div className="home-header-left float-left">
                    <span>{this.props.cityName}</span>
                    &nbsp;
                    <i className="icon-angle-down"></i>
                </div>
            </div>
        )
    }
}

export default HomeHeader