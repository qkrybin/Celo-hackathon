import { Carousel } from 'antd';
import * as React from 'react';
import { HrDivider } from 'src/components/HrDivider';
import period from 'src/components/icons/calendar.svg';
import hour from 'src/components/icons/clock.svg';
import location from 'src/components/icons/map-pin.svg';
import website from 'src/components/icons/phone-call.svg';
import { Box } from 'src/components/layout/Box';
import { Stylesheet } from 'src/styles/types';


export default function MarketInfo() {
  //const [Store, setStore] = useState({ id: 1,name:"",location:"",desc:"",categ:"",period:"",hour:"",website:"",mainpic:"",pic1:"",pic2:"",pic3:"",clap:0});
  //const [Store, setStore] = useState({});

    // useEffect(() => {

    //   setStore(props.detail)

    // }, [props.detail])
    const Store =({id:1,name:"ybstore",location:"somwhere",desc:"nothing",categ:"food",period:"4/12",hour:"1pm~5pm",website:"aa", 
    mainpic:'src/components/icons/wallet.png',
    pic1:'src/components/icons/wallet.png',
    pic2:'src/components/icons/wallet.png'
    ,pic3:'src/components/icons/wallet.png',clap:0});
    return (
        <div>
              <Carousel autoplay>
            <div style={style.scrollwrap}>
              <div style={style.pic}>
              <img src={Store.mainpic}></img>
              </div>
              <div style={style.pic}>
                <img src={Store.pic1}></img>
              </div>
              <div style={style.pic}>
                <img src={Store.pic2}></img>
              </div>
              <div style={style.pic}>
                <img src={Store.pic3}></img>
              </div>
            </div>
            </Carousel>
          <Box direction="column" align="center"> 
            <Box direction="column" align="start">
              <h1 css={style.header}>{Store.name}</h1>
              <p style={style.subdesc}> {Store.clap}</p>
              <button style={style.categ}>#{Store.categ}</button>
            </Box>
            <HrDivider styles={style.divider} />
            <Box direction="column" align="start"> 
              <h2 css={style.header3}>Intro</h2>
              <h3 style={style.desc}>{Store.desc}</h3>
            </Box>
            <Box direction="row" align="start">  
            <img src={location} css={style.icon} alt="loc" />
            <p style={style.subdesc}>{Store.location}</p>
            </Box>
            <Box direction="row" align="start">  
            <img src={period} css={style.icon} alt="period"/>
            <p style={style.subdesc}> {Store.period}</p>
            </Box>
            <Box direction="row" align="start">  
            <img src={hour} css={style.icon} alt="hour" />
            <p style={style.subdesc}> {Store.hour}</p>
            </Box>
            <Box direction="row" align="start">  
            <img src={website} css={style.icon} alt="web" />
            <p style={style.subdesc}> {Store.website}</p>
            </Box>

          </Box>
        </div>
    )
}
const style: Stylesheet = {
  header: {
    fontWeight: 'bold',
  },
  pic:{
    width:'96px',
    height:'96px'
  },
  header3: {
    fontWeight: 'bold',
  },
  categ: {
    borderRadius: '17pt',
    height:'24px',
    border:'none',
    background: 'rgba(47, 207, 87)',
    color:'white'
  },
  divider: {
    border: 2,
    margin: '2.2em 0',
    backgroundColor: '#B2B7BC',
    color: '#B2B7BC',
  },
  icon: {
    marginRight: '0.5em',
    height: '16px',
    width: '16px',
  },
  scroppwrap:{
    "overflow-x": 'scroll',
    "overflow-y": 'hidden',
    whiteSpace: 'nowrap',
    pic: {
      display: 'inline-block',
    }
  },
}