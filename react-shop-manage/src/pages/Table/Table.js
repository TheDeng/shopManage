import React, { Component } from 'react';
import {CapsuleChart,ActiveRingChart,ScrollBoard} from '@jiaminghi/data-view-react'
import Navigater from "../../components/Navigater";
import {List} from "antd-mobile";
import './TableStyles.css'
const config={
    data: [
        {
            name: '电子',
            value: 167
        },
        {
            name: '日用',
            value: 67
        },
        {
            name: '衣服',
            value: 123
        },
        {
            name: '五金',
            value: 55
        },
        {
            name: '保健',
            value: 98
        }
    ]
}

const config2={
    data: [
        {
            name: '电子',
            value: 55
        },
        {
            name: '日用',
            value: 12
        },
        {
            name: '衣服',
            value: 78
        },
        {
            name: '五金',
            value: 66
        },
        {
            name: '保健',
            value: 80
        }
    ]
}

const config3={
    header: ['商品名', '毛利率', '净利率'],
    data: [
        ['五金', '10', '5'],
        ['电子', '15', '10'],
        ['日用', '20', '15'],
        ['保健', '15', '8'],
        ['衣服', '25', '20'],
        ['餐饮','15','10']

    ]
}

class Table extends Component {
    render() {
        return (

            <div className={'bg'}>
                <Navigater name={"报表分析"}></Navigater>
                <List renderHeader={()=>'销售量分析'}/>
                <CapsuleChart className={'chart1'} config={config} style={{width:300,height:200}} />
                <List renderHeader={()=>'库存剩余'}/>
                <ActiveRingChart  className={'chart2'} config={config2} style={{ width: '300px', height: '300px'}} />
                <List renderHeader={()=>'利润统计'}/>
                <ScrollBoard  className={'chart3'} config={config3} style={{width: '90%', height: '200px'}} />

            </div>
        );
    }
}

export default Table;
