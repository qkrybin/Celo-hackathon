import { PropsWithChildren } from 'react'
import { Header } from 'src/components/header/nana_Header'
import { Box } from 'src/components/layout/Box'
import { Stylesheet } from 'src/styles/types'

export function HeaderFrame(props: PropsWithChildren<unknown>) {
  return (
    <Box direction="column" styles={style.container}>
      <Header />
      <div css={style.content}>{props.children}</div>
      {/* <결제버튼></결제버튼> */}
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
}
