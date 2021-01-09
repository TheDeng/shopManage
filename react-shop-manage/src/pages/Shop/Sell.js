import React, { Component, Fragment } from "react";
import {Link,withRouter} from "react-router-dom";
import {List, Button, NavBar, Icon,Stepper} from "antd-mobile";
import Navigater from "../../components/Navigater";
import './ShopStyle.css'
import icon from '../../assets/shop-icon.png'
const Item = List.Item;
const Brief=List.Brief
const data=[
    {
        name:'棒米花',
        sold:100,
        date:Date()
    }, {
        name:'荣耀手机',
        sold:100,
        date:Date()
    }, {
        name:'华为手机',
        sold:100,
        date:Date()
    }, {
        name:'王老吉',
        sold:100,
        date:Date()
    }, {
        name:'大白菜',
        sold:100,
        date:Date()
    }, {
        name:'衣服',
        sold:100,
        date:Date()
    }, {
        name:'电脑',
        sold:100,
        date:Date()
    }, {
        name:'台灯',
        sold:100,
        date:Date()
    },

]

class Sell extends Component {
    componentDidMount() {
        data.sort(function() {
            return Math.random() - 0.5;
        })
    }

    render() {
        return <Fragment>

            <NavBar

                mode="dark"
                leftContent={
                    <Icon type="left"  onClick={()=>this.props.history.goBack()}/>

                }
            >{'销售日志'}</NavBar>
            <List renderHeader={() => '销售信息'}>
                {
                    data.map((val,index)=>{
                        return(
                            <Item multipleLine style={{height:80}} extra={<div>
                                <p>个数:{val.sold}个</p>
                                <p>{val.date}</p>


                            </div>}>
                                {val.name}

                            </Item>
                        )
                    })
                }

            </List>

        </Fragment>;
    }
}
export default withRouter(Sell);
