import React from 'react';
import { TabBar } from 'antd-mobile';

class MyLayout extends React.Component {

  render() {
    return (
      <div style={ { position: 'fixed', height: '100%', width: '100%', top: 0 } }>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Home"
            icon={<span className="iconfont icon-home" />}
            selectedIcon={<span className="iconfont icon-home" />}
            selected={this.props.match.url === "/"}
            onPress={() => { this.props.history.push("/") }}
          >
            {this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<span className="iconfont icon-shop" />}
            selectedIcon={<span className="iconfont icon-shop" />}
            title="店铺"
            key="shop"

            selected={this.props.match.url === "/shop"}
            onPress={() => { this.props.history.push("/shop") }}
          >
            {this.props.children}
          </TabBar.Item>
          <TabBar.Item
              icon={<span className="iconfont icon-xiazai17" />}
              selectedIcon={<span className="iconfont icon-xiazai17" />}
              title="报表"
              key="table"

              selected={this.props.match.url === "/table"}
              onPress={() => { this.props.history.push("/table") }}
          >
            {this.props.children}
          </TabBar.Item>
          <TabBar.Item
              icon={<span className="iconfont icon-kefu"/>}
              selectedIcon={<span className="iconfont icon-kefu " />}
              title="会员"
              key="member"

              selected={this.props.match.url === "/member"}
              onPress={() => { this.props.history.push("/member") }}
          >
            {this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<span className="iconfont icon-weibiaoti2fuzhi12" />}
            selectedIcon={<span className="iconfont icon-weibiaoti2fuzhi12" />}
            title="个人"
            key="profile"

             selected={this.props.match.url === "/profile"}
            onPress={() => { this.props.history.push("/profile") }}
          >
            {this.props.children}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}


export default MyLayout;
