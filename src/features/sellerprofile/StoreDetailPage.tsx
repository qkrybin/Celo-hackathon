import * as React from 'react';
import { useState } from 'react';
import { ScreenContentFrame } from 'src/components/layout/ScreenContentFrame';
import MarketInfo from './utils/MarketInfo';


export default function StoreDetailPage() {
    //const storeId = props.marketId
    const [Store, setStore] = useState({ id: 1,name:"",location:"",desc:"",categ:"",period:"",hour:"",website:"",mainpic:"",pic1:"",pic2:"",pic3:"",clap:0});

    // useEffect(() => {
    //     axios.get(`http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/server/store/?id=${storeId}&type=single`)
    //         .then(response => {
    //             setStore(response.data[0])
    //         })

    // }, [])
    
    return (
        <ScreenContentFrame>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>{Store.name}</h1>
            </div>
            <MarketInfo />
        </ScreenContentFrame>
    )
}


