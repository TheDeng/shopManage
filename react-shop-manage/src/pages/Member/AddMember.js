import React, { Component, Fragment } from "react";
import {Link,withRouter} from "react-router-dom";
import {List, Button, NavBar, Icon, Stepper, InputItem, WingBlank, Flex, Toast} from "antd-mobile";
import {addMembersDetail} from "../../api";


class AddMember extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            sex:'',
            phone:'',
            value:'',
        }
    }


    handelAdd(){
        let data={
            name:this.state.name,
            sex:this.state.sex,
            phone:this.state.phone,
            value:this.state.value
        }
        addMembersDetail(data).then((res)=>{

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
            >{'添加会员'}</NavBar>
            <List renderHeader={() => '会员信息'}>
                <InputItem
                    clear
                    placeholder={'请输入会员姓名'}
                    onChange={(v) => { this.setState({
                        name:v
                    }) }}

                >姓名</InputItem>
                <InputItem
                    clear
                    placeholder={'请输入会员性别'}
                    onChange={(v) => { this.setState({
                        sex:v
                    })}}

                >性别</InputItem>
                <InputItem
                    type={'phone'}
                    clear
                    placeholder={'请输入会员手机号'}
                    onChange={(v) => { this.setState({
                        phone:v
                    }) }}

                >手机号</InputItem>
                <InputItem
                    clear
                    placeholder={'请输入会员积分值'}
                    onChange={(v) => { this.setState({
                        value:v
                    }) }}

                >积分值</InputItem>

            </List>

            <WingBlank>
                <Flex style={{marginTop:10}}>
                    <Flex.Item><Button type={'primary'} onClick={this.handelAdd.bind(this)}>确认添加</Button></Flex.Item>


                </Flex>
            </WingBlank>

        </Fragment>;
    }
}
export default withRouter(AddMember);
