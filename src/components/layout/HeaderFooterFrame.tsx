import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import { PropsWithChildren, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from 'src/components/footer/Footer';
import { Header } from 'src/components/header/Header';
import Logo from 'src/components/icons/logo.svg';
import { Box } from 'src/components/layout/Box';
import { Stylesheet } from 'src/styles/types';

export function HeaderFooterFrame(props: PropsWithChildren<unknown>) {
  const navigate = useNavigate()
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <Box direction="column" styles={style.container}>
      <Header />
      <div css={style.content}>{props.children}</div>
      {/* <div className={style.floating}>
      <Button type="primary" shape="circle" icon={Logo} onClick={()=>navigate('/send')} >
        pay
      </Button>
      </div> */}
      <div className={classes.root}>
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        className={classes.speedDial}
        icon={Logo}
        onOpen={()=>navigate('/send')}
        open={open}
        FabProps={{
          color: 'default',
          size: 'small',
        }}
      ></SpeedDial>
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: 1,
      color: '#fff',
    },
    root: {
      height: 0,
      flexGrow: 1,
    },
    speedDial: {
      position: 'fixed',
      bottom: theme.spacing(2),
      left: theme.spacing(2),
    },
  })
);