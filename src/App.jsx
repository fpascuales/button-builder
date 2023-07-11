import './App.scss'
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import { Button, Flex, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { MyContext } from './shared/Context/Context';
import { useState } from 'react';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [state, setState] = useState({
    width: 100,
    height: 60,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    fontSize: 16,
    fontWeight: 400,
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'none',
    backgroundColor: '#3d3d3d'
  });

  return (
    <MyContext.Provider value={{ state, setState }}>
    <Flex>
        <Sidebar/>
        <Flex flexDirection={'column'}>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
          </Button>

          <Content/>
        </Flex>
    </Flex>
    </MyContext.Provider>
  )
}

export default App
