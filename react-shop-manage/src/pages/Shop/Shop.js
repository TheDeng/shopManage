import React, { Component, Fragment } from "react";
import {Link,withRouter} from "react-router-dom";
import {List, Button} from "antd-mobile";
import Navigater from "../../components/Navigater";
import './ShopStyle.css'
import icon from '../../assets/shop-icon.png'
import {getShops} from "../../api";
const Item = List.Item;

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state={
            shopdata:[]
        }
    }


    componentDidMount() {
        getShops().then(
            (res)=>{

                this.setState({
                    shopdata:res.data
                })
            }
        ).catch((err)=>{
            console.log(err)
        })
    }

    render() {
    return <Fragment>
   <Navigater name={"店铺"}></Navigater>
        <List renderHeader={() => '店铺列表'}>
            {
                this.state.shopdata.map((val,index)=>{
                    return(
                        <Link to={`/shopdetail/${val.id}`}>
                        <Item
                            key={val.id}
                            thumb={icon}
                            arrow="horizontal"
                        >{val.name}</Item>
                        </Link>
                    )
                })
            }



            <div className={'addbtn'}>
                <Link to={'/addShop'}>
                    <Button >添加店铺</Button>
                </Link>


            </div>
        </List>

    </Fragment>;
  }
}
export default withRouter(Shop);
