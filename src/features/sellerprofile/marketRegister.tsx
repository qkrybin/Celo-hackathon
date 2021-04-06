import { TimePicker } from 'antd';
import axios from 'axios';
import * as React from "react";
import { useState } from "react";
import { Button } from 'src/components/buttons/Button';
import { Box } from 'src/components/layout/Box';
import { Color } from 'src/styles/Color';
import { mq } from 'src/styles/mediaQueries';
import { Stylesheet } from 'src/styles/types';
import Uploading from "./utils/Uploading";

export default function MarketRegister() {

  const [market, setMarket] = useState({ marketname: "", category: "", intro: "",address:"" });
  const [Images, setImage] = useState([]);
  const [FileList,setFileList]=useState([]as any)

  const handleFormChange = (e:any) => {
    setMarket({
      ...market,
      [e.target.name]: e.target.value,
    });
  };
  
  const onSubmit = () => {
    //event.preventDefault();

    const variables = {
        //writer: props.user.userData._id,
        marketname:market.marketname,
        address:market.address,
        intro:market.intro,
        category:market.category,
        images: Images,
    }
		axios
			.post("/api/market/", variables)
      .then(res=>{
        if(res.data.success){
          console.log('register succeed')
        }else alert('fail');
      })
      .catch();
  }

  return (
    <div onSubmit={onSubmit}>
      <Box direction="column" align="center" styles={style.inputContainer}>
      <Uploading/>
      <Box direction="row" margin="2em 0 0 0">
        <span css={style.inputLabel}>market name</span>
        <input               
          name="marketname"
          type="text"
          value={market.marketname}
        onChange={handleFormChange}/>
      </Box>
      <Box direction="row" margin="2em 0 0 0">
        <span css={style.inputLabel}>category</span>
        <input               
          name="category"
          type="text"
          value={market.category}
        onChange={handleFormChange}
        />
      </Box>
      <Box direction="row" margin="2em 0 0 0">
        <span css={style.inputLabel}>intro</span>
        <input               
          name="intro"
          type="text"
          value={market.intro}
        onChange={handleFormChange}
        />
      </Box>
      <Box direction="row" margin="2em 0 0 0">
        <span css={style.inputLabel}>address</span>
        <input               
          name="address"
          type="text"
          value={market.address}
          onChange={handleFormChange}/>
      </Box>
      <TimePicker.RangePicker onChange={handleFormChange}/>
      <Button onClick={onSubmit}>Submit</Button>
      </Box>
    </div>
  )
}

const style: Stylesheet = {
  formContent: {
    [mq[480]]: {
      marginLeft: '-1.3em',
    },
  },
  inputContainer: {
    marginTop: '1.5em',
    textAlign: 'right',
  },
  inputLabel: {
    textAlign: 'left',
    width: '6em',
    paddingRight: '1em',
    [mq[480]]: {
      width: '8em',
    },
  },
  input: {
    width: '8.6em',
    height: '1.8em',
    textAlign: 'center',
    letterSpacing: '0.6em',
    fontSize: '1.4em',
    '::placeholder': {
      letterSpacing: '0.3em',
      color: Color.borderInactive,
      opacity: 1 /* Firefox */,
    },
    ':focus': {
      '::placeholder': {
        color: Color.primaryWhite,
        opacity: 0,
      },
    },
  },
}
