import { Descriptions } from 'antd';
import * as React from 'react';
import { useEffect, useState } from 'react';

export default function MarketInfo(props: any) {

    const [market, setMarket] = useState({ marketname: "", category: "", intro: "",address:"" });

    useEffect(() => {

      setMarket(props.detail)

    }, [props.detail])
    return (
        <div>
            <Descriptions title="Market Info">
                <Descriptions.Item label="marketname"> {market.marketname}</Descriptions.Item>
                <Descriptions.Item label="category">{market.category}</Descriptions.Item>
                <Descriptions.Item label="intro"> {market.intro}</Descriptions.Item>
                <Descriptions.Item label="address"> {market.address}</Descriptions.Item>
            </Descriptions>
        </div>
    )
}