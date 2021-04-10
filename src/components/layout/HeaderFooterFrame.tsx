import { Button } from 'antd';
import { PropsWithChildren, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from 'src/components/footer/Footer';
import { Header } from 'src/components/header/Header';
import Logo from 'src/components/icons/logo.svg';
import { Box } from 'src/components/layout/Box';
import { Stylesheet } from 'src/styles/types';

export function HeaderFooterFrame(props: PropsWithChildren<unknown>) {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  return (
    <Box direction="column" styles={style.container}>
      <Header />
      <div css={style.content}>{props.children}</div>
      <div className={style.floating}>
      <Button type="primary" shape="circle" icon={Logo} onClick={()=>navigate('/send')} >
        pay
      </Button>
      </div>
      <Footer />
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
    position: 'fixed',
    bottom: 'true',
    right: 'true',
  }
}