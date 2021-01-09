import React, {Fragment} from 'react'
import {Icon, NavBar, List, InputItem, Flex, Button, WingBlank,WhiteSpace,Grid,Toast} from "antd-mobile";
import {withRouter} from "react-router-dom";
import {getShopsDetail,updateShopsDetail,deleteShopsDetail} from "../../api";

import p1 from '../../assets/积分 (1).png'
import p2 from '../../assets/充值.png'
import p3 from '../../assets/对账.png'
import p4 from '../../assets/积分.png'

const griddata =[
    {
        icon:p1,
        text:'商品管理'
    }, {
        icon:p2,
        text:'库存查询'
    }, {
        icon:p3,
        text:'销售日志'
    }, {
        icon:p4,
        text:'进货日志'
    }
]
class ShopDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state={

            id:this.props.match.params.id,
            name:'',
            money:'',
            person:'',
            location:'',
        }
    }
    componentDidMount() {
       getShopsDetail(this.state.id).then((res)=>{
           let data=res.data
           this.setState({
               name:data.name,
               money:data.money,
               person:data.person,
               location:data.location
           })

       }).catch((err)=>{
           console.log(err)
       })

    }
    handelModify(){
        let data={
            name:this.state.name,
            money:this.state.money,
            person:this.state.person,
            location:this.state.location
        }
        updateShopsDetail(this.state.id,data).then((res)=>{
            if(res.status===200){
                Toast.info('修改成功',1)
            }else {
                Toast.info('修改失败',1)
            }

        })
    }

    handelDelete(){
        deleteShopsDetail(this.state.id).then((res)=>{

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
                >{'店铺详情'}</NavBar>

                <List renderHeader={() => '店铺管理'}>
                </List>
                <Grid data={griddata} columnNum={4} onClick={(el,index)=>{
                    if(index===0){
                        this.props.history.push(`/good/${0}`)
                    }
                    if(index===1){
                        this.props.history.push(`/store/${0}`)
                    }
                    if(index===2){
                        this.props.history.push(`/sell/${0}`)
                    }
                    if(index===3){
                        this.props.history.push(`/stock/${0}`)
                    }
                }} />
                <List renderHeader={() => '基础信息'}>
                    <InputItem
                        key={1}
                        clear
                        value={this.state.name}
                        onChange={(v) => {this.setState({
                            name:v
                        })}}


                    >名字</InputItem>
                    <InputItem
                        key={2}
                        clear
                        value={this.state.money}
                        onChange={(v) => { this.setState({
                            money:v
                        }) }}


                    >资金(万)</InputItem>
                    <InputItem
                        key={3}
                        clear
                        value={this.state.person}
                        onChange={(v) => { this.setState({
                            person:v
                        })  }}


                    >注册人</InputItem>
                    <InputItem
                        key={4}
                        clear
                        value={this.state.location}
                        onChange={(v) => { this.setState({
                            location:v
                        }) }}


                    >注册区域</InputItem>

                </List>

                <WingBlank>
                    <Flex style={{marginTop:10}}>
                        <Flex.Item><Button type={'primary'} onClick={this.handelModify.bind(this)}>保存修改</Button></Flex.Item>
                        <Flex.Item><Button type={'primary'} onClick={this.handelDelete.bind(this)}>删除店铺</Button></Flex.Item>

                    </Flex>
                </WingBlank>
                <WhiteSpace/>


            </Fragment>
        )
    }
}
export default withRouter(ShopDetail)
