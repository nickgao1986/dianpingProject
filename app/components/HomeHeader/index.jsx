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
            <div>header
            </div>
        )
    }
}

export default HomeHeader