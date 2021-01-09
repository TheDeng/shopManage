import React, { Component, Fragment } from "react";
import {Link,withRouter} from "react-router-dom";
import {List, Button, NavBar, Icon} from "antd-mobile";
import Navigater from "../../components/Navigater";

import icon from '../../assets/商品.png'
const Item = List.Item;
const Brief = Item.Brief;
const data=[
    {   content:"充值",
        date:new Date().toLocaleDateString(),
        money:12000,
    },  {   content:"消费",
        date:new Date().toLocaleDateString(),
        money:22000,
    },  {   content:"充值",
        date:new Date().toLocaleDateString(),
        money:32000,
    },  {   content:"消费",
        date:new Date().toLocaleDateString(),
        money:42000,
    },  {   content:"充值",
        date:new Date().toLocaleDateString(),
        money:52000,
    },{   content:"消费",
        date:new Date().toLocaleDateString(),
        money:62000,
    },{   content:"充值",
        date:new Date().toLocaleDateString(),
        money:12000,
    },
]

class Operation extends Component {
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
            >{'客户日志'}</NavBar>
            <List renderHeader={() => '日志信息'}>
                {
                    data.map((val,index)=>{
                        return(
                            <Item
                                arrow="horizontal"
                                thumb={icon}
                                multipleLine
                                onClick={() => {}}
                            >   {val.content}
                                <Brief>
                                    <span>时间:{val.date}</span>
                                    <span style={{paddingLeft:10}}>金额:{val.money}元</span>
                                </Brief>
                            </Item>
                        )
                    })
                }



            </List>

        </Fragment>;
    }
}
export default withRouter(Operation);
