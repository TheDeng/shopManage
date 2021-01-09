import React, {Fragment} from 'react'
import {Carousel, WhiteSpace, WingBlank, Button, Flex, SearchBar, NavBar, Icon, Grid, List} from 'antd-mobile';
import {Link} from "react-router-dom";
import './HomeStyle.css'
import pic1 from '../../assets/1.jpg'
import pic2 from '../../assets/2.jpg'
import p1 from '../../assets/店铺.png'
import p2 from '../../assets/充值.png'
import p3 from '../../assets/对账.png'
import {getMembers, getShops} from "../../api";


const griddata =[
    {
        icon:p1,
        text:'店铺管理'
    }, {
        icon:p2,
        text:'会员管理'
    }, {
        icon:p3,
        text:'报表分析'
    },

]
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            picdata:[pic1,pic2],
            imgHeight: 106,
            shopNum:0,
            memberNum:0,
            stockNum:500
        }
    }
    componentDidMount() {
        getShops().then((res)=>{
            this.setState({
                shopNum:res.data.length
            })
        })
        getMembers().then((res)=>{
            this.setState({
                memberNum:res.data.length
            })
        })
        setInterval(()=>{
            this.setState({
                stockNum:500+Math.floor(Math.random()*100)
            })
        },3000)
    }
    render() {
        return (

            <Fragment>
                <NavBar
                    mode="dark"

                    rightContent={[
                        <Icon key="0" type="ellipsis" style={{ marginRight: '16px' }} />,

                    ]}
                >线下商铺管理公众号</NavBar>

                <WhiteSpace />
                <SearchBar/>
                <WhiteSpace />
                <Carousel
                    autoplay={true}
                    infinite
                    slideWidth={1}

                >
                    {this.state.picdata.map((val,index) => (
                        <a
                            key={index}

                            style={{ display: 'inline-block', width: '100%' }}
                        >
                            <img
                                src={val}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                <WhiteSpace/>
                <div>

                </div>

                {/*<div style={{marginTop:20}}>*/}
                {/*    <Link to={'/shop'}>  <Button>店铺管理</Button></Link>*/}


                {/*</div>*/}
                {/*<div style={{marginTop:20}}>*/}
                {/*    <Link to={'/member'}>  <Button>会员管理</Button></Link>*/}

                {/*</div>*/}
                {/*<div style={{marginTop:20}}>*/}
                {/*    <Link to={'/table'}>  <Button>报表分析</Button></Link>*/}
                {/*</div>*/}
                <List renderHeader={() => '数据统计'}/>
                <WingBlank>

                    <Flex style={{marginTop:10}}>
                        <Flex.Item><Button  type={'primary'}>店铺数:{this.state.shopNum}</Button></Flex.Item>
                        <Flex.Item><Button type={'primary'}>会员数:{this.state.memberNum}</Button></Flex.Item>
                        <Flex.Item><Button type={'primary'}>库存数:{this.state.stockNum}</Button></Flex.Item>

                    </Flex>
                </WingBlank>
                <List renderHeader={() => '核心功能'}/>
                <Grid data={griddata} columnNum={3} onClick={(el,index)=>{
                    if(index===0){
                        this.props.history.push(`/shop`)
                    }
                    if(index===1){
                        this.props.history.push(`/member`)
                    }
                    if(index===2){
                        this.props.history.push(`/table`)
                    }
                }} />


            </Fragment>


        );
    }
}

export default Home
