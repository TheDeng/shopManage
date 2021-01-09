import React, {Fragment} from 'react'
import {Icon, NavBar} from "antd-mobile";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
class Navigater extends React.Component{
    render() {
        return(
            <NavBar

                mode="dark"
                leftContent={
                    // <Icon type="left"  onClick={()=>this.props.history.goBack()}/>
                    <Link to={'/'}>
                        <Icon type="left"></Icon>
                    </Link>
              }
            >{this.props.name}</NavBar>
        )
    }
}
export default withRouter(Navigater)
