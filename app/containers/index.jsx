import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }
    render() {
        <div>
            {
                this.state.initDone
                    ? this.props.children
                    : <div>正在加载...</div>
            }
        </div>
    }
}

export default App
