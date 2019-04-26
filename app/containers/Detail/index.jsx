import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Info from './subpage/Info'
import Header from '../../components/Header'
import Comment from './subpage/Comment'
import Buy from './subpage/buy'

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        // 获取商户ID
        const id = this.props.params.id
        return (
            <div>
                <Header title="商户详情" type="share"/>
                <Info id={id}/>
                <Buy id={id}/>
                <Comment id={id}/>
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default DetailInfo
module.exports = Detail