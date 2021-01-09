import React, { Component, Fragment } from "react";
import {Link,withRouter} from "react-router-dom";
import {List, Button, NavBar, Icon} from "antd-mobile";
import Navigater from "../../components/Navigater";
import './ShopStyle.css'
import icon from '../../assets/商品.png'
const Item = List.Item;
const Brief = Item.Brief;
const data=[
    {
        name:'华为手机',
        num:'100',
        money:100000
    },{
        name:'荣耀手机',
        num:'100',
        money:100000
    },{
        name:'小米手机',
        num:'100',
        money:100000
    },{
        name:'电灯',
        num:'100',
        money:100000
    },{
        name:'桌子',
        num:'100',
        money:100000
    },{
        name:'大米',
        num:'100',
        money:100000
    },{
        name:'小麦',
        num:'100',
        money:100000
    },{
        name:'方便面',
        num:'100',
        money:100000
    },
]



class Good extends Component {
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
            >{'商品管理'}</NavBar>
            <List renderHeader={() => '商品列表'}>
                {

                    data.map((val,index)=>{
                        return(
                            <Item
                                arrow="horizontal"
                                thumb={icon}
                                multipleLine
                                onClick={() => {}}
                            >   {val.name}
                                <Brief>
                                    <span>销售量:{val.num}</span> <span>销售额:{val.money}</span>
                                </Brief>
                            </Item>
                        )
                    })
                }


            </List>

        </Fragment>;
    }
}
export default withRouter(Good);
