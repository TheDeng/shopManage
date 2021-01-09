import React, {Fragment} from 'react'
import {withRouter,Link} from 'react-router-dom'
import {Button, InputItem, List, WingBlank,Toast} from "antd-mobile";
import {setUsername,setIsLogin} from '../../store'
import "./LoginStyle.css"
class Login extends React.Component{
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
                <div className={'container'}>


                <p className={'title'}>欢迎登录</p>
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
                    </List>
                    <Link   to={'/register'}><p className={'tip'}>还没注册？</p></Link>
                    <Button className={'loginbtn'} type={'primary'} onClick={()=>{
                        Toast.info("登录成功",1)
                        setUsername(this.state.username)
                        setIsLogin(true)
                        this.props.history.push('/')

                    }}>点击登录</Button>
                </div>
                </WingBlank>
                </div>

            </Fragment>
        )
    }
}
export default withRouter(Login)
