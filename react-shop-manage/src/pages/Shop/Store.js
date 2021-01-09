import React, { Component, Fragment } from "react";
import {Link,withRouter} from "react-router-dom";
import {List, Button, NavBar, Icon,Stepper} from "antd-mobile";
import Navigater from "../../components/Navigater";
import './ShopStyle.css'
import icon from '../../assets/shop-icon.png'
const Item = List.Item;
const data=[
    {
        name:'电灯',
        num:200,
    }, {
        name:'课本',
        num:200,
    }, {
        name:'桌子',
        num:200,
    }, {
        name:'椅子',
        num:200,
    }, {
        name:'衣服',
        num:200,
    }, {
        name:'铅笔',
        num:200,
    }, {
        name:'小米',
        num:200,
    }, {
        name:'大米',
        num:200,
    },{
        name:'红米',
        num:200,
    },{
        name:'紫米',
        num:200,
    },{
        name:'黑米',
        num:200,
    },
]

class Store extends Component {
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
            >{'库存查询'}</NavBar>
            <List renderHeader={() => '库存信息'}>
                {data.map((val,index)=>{
                    return(
                        <Item extra={val.num}>{val.name}</Item>
                    )
                })}

            </List>

        </Fragment>;
    }
}
export default withRouter(Store);
