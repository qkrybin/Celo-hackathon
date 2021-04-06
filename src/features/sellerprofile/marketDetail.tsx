import { Col, Row } from 'antd';
import Axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
//import ProductImage from './Sections/ProductImage';
import MarketInfo from './utils/MarketInfo';


export default function DetailMarketPage(props: any) {
    const dispatch = useDispatch();
    const marketId = props.match.params.marketId
    const [market, setMarket] = useState({ marketname: "", category: "", intro: "",address:"" });

    useEffect(() => {
        Axios.get(`/api/markets/markets_by_id?id=${marketId}&type=single`)
            .then(response => {
                setMarket(response.data[0])
            })

    }, [])

    return (
        <div className="postPage" style={{ width: '100%', padding: '3rem 4rem' }}>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>{market.marketname}</h1>
            </div>

            <br />

            <Row gutter={[16, 16]} >
                <Col lg={12} xs={24}>
                  
                </Col>
                <Col lg={12} xs={24}>
                    <MarketInfo detail={market} />
                </Col>
            </Row>
        </div>
    )
}


