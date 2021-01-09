import React, {Fragment} from 'react'
import {Icon, NavBar, List, InputItem, Flex, Button, WingBlank, WhiteSpace, Grid, Toast} from "antd-mobile";
import {withRouter} from "react-router-dom";
import {
    getMembersDetail,
    updateMembersDetail,
    deleteMembersDetail,

} from "../../api";
import p1 from '../../assets/积分 (1).png'
import p2 from '../../assets/充值.png'
import p3 from '../../assets/对账.png'
import p4 from '../../assets/积分.png'

const griddata =[
    {
        icon:p1,
        text:'会员等级'
    }, {
        icon:p2,
        text:'会员余额'
    }, {
        icon:p3,
        text:'充值次数'
    }, {
        icon:p4,
        text:'客户日志'
    }
]
class MemberDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            id:this.props.match.params.id,
            name:'',
            sex:'',
            phone:'',
            value:'',

    }
    }
    componentDidMount() {
        getMembersDetail(this.state.id).then((res)=>{
            let data=res.data
            this.setState({
                name:data.name,
                sex:data.sex,
                phone:data.phone,
                value:data.value,
            })
        })

    }
    handelModify(){
        let data={
            name:this.state.name,
            sex:this.state.sex,
            phone:this.state.phone,
            value:this.state.value
        }
        updateMembersDetail(this.state.id,data).then((res)=>{
            if(res.status===200){
                Toast.info('修改成功',1)
            }else {
                Toast.info('修改失败',1)
            }

        })
    }

    handelDelete(){
        deleteMembersDetail(this.state.id).then((res)=>{

            if(res.status===204){
                Toast.info('删除成功',1)
                this.props.history.goBack()
            }else {
                Toast.info('删除失败',1)
            }

        })
    }
    render() {
        return(
            <Fragment>
                <NavBar

                    mode="dark"
                    leftContent={
                        <Icon type="left"  onClick={()=>this.props.history.goBack()}/>

                    }
                >{'会员详情'}</NavBar>
                <List renderHeader={() => '财务信息'}>
                </List>
                <Grid data={griddata} columnNum={4} onClick={(el,index)=>{
                    if (index===0){
                        Toast.info(`会员等级为${Math.floor((Math.random()-0.5)*10+15)}级`,1)
                    }
                    if (index===1){
                        Toast.info(`会员余额为${Math.floor((Math.random()-0.5)*1000+1500)}元`,1)
                    }
                    if (index===2){
                        Toast.info(`会员已充值${Math.floor((Math.random()-0.5)*100+150)}次`,1)
                    }
                    if (index===3){
                        this.props.history.push(`/operation/${0}`)
                    }
                }} />
                <List renderHeader={() => '详细信息'}>
                    <InputItem
                        clear
                        value={this.state.name}
                        onChange={(v) => {this.setState({
                            name:v
                        })}}


                    >姓名</InputItem>
                    <InputItem
                        clear
                        value={this.state.sex}
                        onChange={(v) => { this.setState({
                            sex:v
                        }) }}


                    >性别</InputItem>
                    <InputItem
                        type={this.state.phone}
                        clear
                        value={this.state.phone}
                        onChange={(v) => { this.setState({
                            phone:v
                        })}}


                    >手机号</InputItem>
                    <InputItem
                        clear
                        value={this.state.value}
                        onChange={(v) => { this.setState({
                            value:v
                        }) }}


                    >积分值</InputItem>

                </List>

                <WingBlank>
                    <Flex style={{marginTop:10}}>
                        <Flex.Item><Button type={'primary'} onClick={this.handelModify.bind(this)}>保存修改</Button></Flex.Item>
                        <Flex.Item><Button type={'primary'} onClick={this.handelDelete.bind(this)}>删除会员</Button></Flex.Item>

                    </Flex>
                </WingBlank>
                <WhiteSpace/>


            </Fragment>
        )
    }
}
export default withRouter(MemberDetail)
