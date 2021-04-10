import { Col, Row } from 'antd';
import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import MarketInfo from './utils/MarketInfo';


export default function DetailMarketPage(props: any) {
    const storeId = props.match.params.storeId
    const [Store, setStore] = useState({ id: 1,name:"",location:"",desc:"",categ:"",period:"",hour:"",website:"",mainpic:[],pic1:[],pic2:[],pic3:[],clap:0});

    useEffect(() => {
        axios.get(`http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/server/store/?id=${storeId}&type=single`)
            .then(response => {
                setStore(response.data[0])
            })

    }, [])

    return (
        <div className="postPage" style={{ width: '100%', padding: '3rem 4rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>{Store.name}</h1>
            </div>
            <br />
            <Row gutter={[16, 16]} >
                <Col lg={12} xs={24}>
                    <MarketInfo detail={Store} />
                </Col>
            </Row>
        </div>
    )
}


