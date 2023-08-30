
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { Divider, Text } from '@chakra-ui/react'
import { Tabs, TabList, Tab, } from '@chakra-ui/react'
import Typewriter from 'typewriter-effect';
import { Highlight } from '@chakra-ui/react'

import {AiFillChrome} from 'react-icons/ai'


export default function Home() {

  const scrollDown = () => {
    console.log("clicking")
    window.scrollBy(0, 1000);
  }



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
              <Tabs variant='soft-rounded' colorScheme='red'>
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
            <div className={styles.introTextBox}>
              <div>
              <Text as='b' fontFamily={'sans-serif'} fontSize={120}>Ethereum</Text>
              </div>
            
              <div style={{fontSize:"90px", color:'#b5838d', fontFamily: "Euclid Circular B, sans-serif"}}>

                <Text as='b'>
                <Typewriter
                    options={{
                      strings: ['Wallets Re-defined', 'Security Re-defined', 'Tokens Re-defined', 'Protocols Re-defined'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Text>
              </div>
              <div style={{width:'70%', marginTop:'2%', color: '#6d6875'}}>
                <Text fontFamily={'sans-serif'} fontSize={32}>The wallet that does not depend on cryptography for your security.</Text>
              </div>
              <div className={styles.downloadButton}>
                <button>
                  <div style={{display: 'flex'}}>
                    <Text as='b' fontFamily={'sans-serif'} fontSize={30}>Download for </Text>
                    <div style={{marginLeft:'12px', fontSize:'40px', marginTop:'4px'}}>
                     <AiFillChrome />
                    </div>
                  </div>
                </button>
              </div>

            </div>
            <div>
              <Text>Images of Chrome Extension</Text>
            </div>
          </div>
          
          <div style={{display:'flex'}}>
            <div>
              <Text>Beyond Cryptographic Hashing</Text>
            </div>
          </div>



        </div>
      

    </div>
  )
}
