import React, {Fragment} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Button, InputItem, List, WingBlank,Toast} from "antd-mobile";
import {setUsername,setIsLogin} from '../../store'
import "./LoginStyle.css"
class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
        }
    }
    render() {
        return(
            <Fragment >
                <div className={'content'}>
                <div className={'container'}>
                    <p className={'title'}>欢迎注册</p>
                    <WingBlank>
                        <div>
                            <List >
                                <InputItem
                                    clear
                                    type={'phone'}
                                    placeholder={"请输入手机号"}
                                    onChange={(v) => { this.setState({
                                        username:v
                                    }) }}


                                >手机号</InputItem>

                                <InputItem
                                    clear
                                    type={'password'}
                                    placeholder={"请输入密码"}


                                >密码</InputItem>


                                <InputItem
                                    clear
                                    type={'password'}
                                    placeholder={"请确认密码"}


                                >确认密码</InputItem>
                            </List>
                            <Link   to={'/login'}><p className={'tip'}>返回登录</p></Link>

                            <Button className={'loginbtn'} type={'primary'} onClick={()=>{
                                Toast.info("注册成功,自动登录",1)
                                setUsername(this.state.username)
                                setIsLogin(true)
                                this.props.history.push('/')

                            }}>点击注册</Button>
                        </div>
                    </WingBlank>
                </div>
                </div>
            </Fragment>
        )
    }
}
export default withRouter(Register)
