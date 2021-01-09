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
        num:100,
        date:Date()
    },{
        name:'炸鸡腿',
        num:100,
        date:Date()
    },{
        name:'华为手机',
        num:100,
        date:Date()
    },{
        name:'荣耀手机',
        num:100,
        date:Date()
    },{
        name:'鲜花',
        num:100,
        date:Date()
    },{
        name:'地板砖',
        num:100,
        date:Date()
    },{
        name:'王老吉',
        num:100,
        date:Date()
    },{
        name:'恒大冰泉',
        num:100,
        date:Date()
    },
]
class Stock extends Component {
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
            >{'进货日志'}</NavBar>
            <List renderHeader={() => '进货信息'}>
                {
                    data.map((val,index)=>{
                        return(
                            <Item multipleLine style={{height:80}} extra={<div>
                                <p>个数:{val.num}个</p>
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
export default withRouter(Stock);
