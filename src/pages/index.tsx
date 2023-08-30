
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { Text } from '@chakra-ui/react'
import { HStack } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Typewriter from 'typewriter-effect';


export default function Home() {
  return (
    <div>
        <div style={{display:'flex'}}>
            <div style={{padding:'10px', paddingLeft:'20px'}}>
              <Text as='b' fontFamily={'sans-serif'} fontSize={40}>FireWallet</Text>
            </div>
            <div style={{marginTop:'10px'}}>
              <Image src="/logo.png" width={50} height={50} alt="FireWallet logo"/>
            </div>
            <div style={{marginTop:'20px', position: 'absolute', right:'0', paddingRight:'20px'}}>
              <Tabs variant='soft-rounded' colorScheme='green'>
                <TabList>
                  <Tab onClick={() => console.log("Clicked")}>Discover</Tab>
                  <Tab>Docs</Tab>
                  <Tab>Download</Tab>
                </TabList>
              </Tabs>
            </div>
        </div>


        <div>
          <div className={styles.titleBox}>
            <div>
              <div>
                <Text>web3</Text>
              </div>
            
            <div>
              <Typewriter
                  options={{
                    strings: ['wallets re-defined', 'security re-defined', 'tokens re-defined', 'algorithms re-defined'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            <div>
              <Text>Images of Chrome Extension</Text>
            </div>
          </div>
        </div>
      

    </div>
  )
}
