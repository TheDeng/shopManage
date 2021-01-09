import React, { Component, Fragment } from "react";
import Navigater from "../../components/Navigater";
import {Button, List} from "antd-mobile";
import {Link,withRouter} from "react-router-dom";
import icon from "../../assets/member.png"
import {getMembers} from "../../api";

const Item=List.Item

class Member extends Component {
  constructor(props) {
    super(props);
    this.state={
      memberdata:[]
    }
  }
  componentDidMount() {
    getMembers().then((res)=>{
      this.setState({
        memberdata:res.data
      })
    })
  }

  render() {
    return <Fragment>
      <Navigater name={"会员"}></Navigater>
      <List renderHeader={() => '会员列表'}>
        {
          this.state.memberdata.map((val,index)=>{
            return(<Item
                key={val.id}
                thumb={icon}
                arrow="horizontal"
                onClick={() => {this.props.history.push(`/memberDetail/${val.id}`)}}
            >{val.name}</Item>)

          })
        }



        <div className={'addbtn'}>
          <Link to={'/addMember'}>
            <Button>添加会员</Button>
          </Link>


        </div>
      </List>
    </Fragment>;
  }
}
export default withRouter(Member);
