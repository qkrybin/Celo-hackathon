import { Carousel, Descriptions } from 'antd';
import * as CSS from 'csstype';
import * as React from 'react';
import { useEffect, useState } from 'react';

const contentStyle: CSS.Properties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function MarketInfo(props: any) {

  const [Store, setStore] = useState({ id: 1,name:"",location:"",desc:"",categ:"",period:"",hour:"",website:"",mainpic:[],pic1:[],pic2:[],pic3:[],clap:0});

    useEffect(() => {

      setStore(props.detail)

    }, [props.detail])
    return (
        <div>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>{Store.mainpic}</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
          <Descriptions title="Market Info">
              <Descriptions.Item label="name"> {Store.name}</Descriptions.Item>
              <Descriptions.Item label="categ">{Store.categ}</Descriptions.Item>
              <Descriptions.Item label="intro"> {Store.desc}</Descriptions.Item>
              <Descriptions.Item label="location"> {Store.location}</Descriptions.Item>
              <Descriptions.Item label="period"> {Store.period}</Descriptions.Item>
              <Descriptions.Item label="hour"> {Store.hour}</Descriptions.Item>
              <Descriptions.Item label="website"> {Store.website}</Descriptions.Item>
          </Descriptions>
        </div>
    )
}