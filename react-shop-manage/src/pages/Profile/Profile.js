import React, { Component, Fragment } from "react";
import Navigater from "../../components/Navigater";
import {Button, Card, List, Toast, WhiteSpace} from 'antd-mobile'
import avatar from '../../assets/girl.png'
import icon from "../../assets/shop-icon.png";
import {Link,withRouter} from "react-router-dom";
import {getUsername,getIsLogin} from "../../store";

const Item=List.Item
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state={
      isLogin:false,
      username:"游客"
    }
  }
  componentDidMount() {
    this.setState({
      isLogin:getIsLogin(),
      username:getUsername()
    })
  }

  render() {
    return <Fragment>
      <Navigater name={"个人中心"}></Navigater>
      <div>

        <Card full>
          <Card.Header
              title={this.state.username}
              thumb={avatar}
              thumbStyle={{width:80,height:80}}

          />

        </Card>
        <List >
          <Item
              thumb={icon}
              arrow="horizontal"
              onClick={() => {Toast.info('本项目是基于react的线下店铺管理公众号',2)}}
          >关于我们</Item>
          <Item
              thumb={icon}
              onClick={() => {this.props.history.push('/login')}}
              arrow="horizontal"
          >
            {this.state.isLogin?"退出登录":"点击登录"}
          </Item>

        </List>
      </div>
    </Fragment>;
  }
}
export default withRouter(Profile);
