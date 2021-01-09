import React, { Component, Fragment } from "react";
import {Link,withRouter} from "react-router-dom";
import {List, Button, NavBar, Icon, Stepper, InputItem, WingBlank, Flex, Toast} from "antd-mobile";
import './ShopStyle.css'
import icon from '../../assets/shop-icon.png'
import {addShopsDetail} from "../../api";
const Item = List.Item;
const Brief=List.Brief

class AddShop extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            money:'',
            person:'',
            location:'',
        }
    }

    handelAdd(){
        let data={
            name:this.state.name,
            money:this.state.money,
            person:this.state.person,
            location:this.state.location
        }
        addShopsDetail(data).then((res)=>{

            if(res.status===201){
                Toast.info('添加成功',1)
                this.props.history.goBack()
            }else {
                Toast.info('添加失败',1)
            }

        })
    }
    render() {
        return <Fragment>

            <NavBar

                mode="dark"
                leftContent={
                    <Icon type="left"  onClick={()=>this.props.history.goBack()}/>

                }
            >{'添加店铺'}</NavBar>
            <List renderHeader={() => '店铺信息'}>
                <InputItem
                    clear
                    placeholder={'请输入店铺名字'}
                    onChange={(v) => {this.setState({
                        name:v
                    })}}

                >名字</InputItem>
                <InputItem
                    clear
                    placeholder={'请输入注册资金(万)'}
                    onChange={(v) => {this.setState({
                        money:v
                    })}}

                >注册资金</InputItem>
                <InputItem

                    clear
                    placeholder={'请输入注册人'}
                    onChange={(v) => {this.setState({
                        person:v
                    })}}

                >注册人</InputItem>
                <InputItem
                    clear
                    placeholder={'请输入注册地点'}
                    onChange={(v) => {this.setState({
                        location:v
                    })}}

                >注册区域</InputItem>

            </List>

            <WingBlank>
                <Flex style={{marginTop:10}}>
                    <Flex.Item><Button type={'primary'} onClick={this.handelAdd.bind(this)}>确认添加</Button></Flex.Item>


                </Flex>
            </WingBlank>

        </Fragment>;
    }
}
export default withRouter(AddShop);
