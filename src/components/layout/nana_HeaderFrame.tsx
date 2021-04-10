import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from 'src/components/header/nana_Header';
import { Box } from 'src/components/layout/Box';
import { Stylesheet } from 'src/styles/types';

export function HeaderFrame(props: PropsWithChildren<unknown>) {
  const navigate = useNavigate()
  //const Pay = (Pay:any) => <Icon component={Pay} />
  return (
    <Box direction="column" styles={style.container}>
      <Header />
      <div css={style.content}>{props.children}</div>
        <button style={style.floating} onClick={()=>navigate('/send')} >
        </button>
    </Box>
  )
}

const style: Stylesheet = {
  container: {
    height: '100vh',
  },
  content: {
    flex: 1,
    overflow: 'auto',
  },
  floating:{
    border:'none',
    borderRadius: '50%',
    width: '64px',
    height: '64px',
    position:'fixed',
    right: '50px',
    bottom: '50px',
    background: 'url("src/components/icons/wallet.png" )',
  },
  
}
