
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { Divider, Text, Center } from '@chakra-ui/react'
import { Tabs, TabList, Tab, } from '@chakra-ui/react'
import Typewriter from 'typewriter-effect';


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
            <div className={styles.beyondhashingbox}>
              <div style={{color: '#F08080'}}>
                <Text as='b' fontFamily={'sans-serif'} fontSize={40}>Beyond Cryptographic Hashing.</Text>
              </div>
              <div style={{width: '600px', lineHeight:'30px', display: 'inline-block'}}>
                <Text>Lorem ipsum dolor sit amet, fierent iracundia qui ad. Vel ex molestiae rationibus, te stet aliquip scriptorem vis. An agam deserunt theophrastus his. Pri et probo autem molestie. Cum no erant dicant, ea sit noluisse accusata, ludus doctus accusamus ad mea.

Quo an velit noster torquatos, ius vocent instructior no, ridens graecis prodesset eum in. Sed no quem laboramus conceptam, duo lorem tation perfecto ei. Ut falli dicunt est, ut pri blandit efficiendi adversarium. No probo equidem est.</Text>
              </div>
            </div>
            <div>
              <Text>Image</Text>
            </div>
          </div>
          
          <div style={{display:'flex'}}>
            <div style={{width:'48%'}}>
              <Text>Image</Text>
            </div>
            <div style={{padding:'30px'}}>
              <div style={{color: '#F08080'}}>
                <Text as='b' fontFamily={'sans-serif'} fontSize={40}>All of Ethereum Right to You.</Text>
              </div>
              <div style={{width: '600px', lineHeight:'30px', display: 'inline-block'}}>
                <Text>Lorem ipsum dolor sit amet, fierent iracundia qui ad. Vel ex molestiae rationibus, te stet aliquip scriptorem vis. An agam deserunt theophrastus his. Pri et probo autem molestie. Cum no erant dicant, ea sit noluisse accusata, ludus doctus accusamus ad mea.

Quo an velit noster torquatos, ius vocent instructior no, ridens graecis prodesset eum in. Sed no quem laboramus conceptam, duo lorem tation perfecto ei. Ut falli dicunt est, ut pri blandit efficiendi adversarium. No probo equidem est.</Text>
              </div>
            </div>

          </div>

          <div className={styles.videoBox}>
            <Center>
              <div style={{padding: '30px', color:'#6d6875'}}>
                <Text as='b' fontFamily={'sans-serif'} fontSize={50}>Walkthrough</Text>
              </div>

            </Center>
            <Center>
              <div style={{height:'500px', width:'1000px', border: '2px solid black'}}>
                <Text>Video</Text>
              </div>
            </Center>
          </div>



        </div>
      

    </div>
  )
}
