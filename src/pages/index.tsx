
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { Divider, Text, Center } from '@chakra-ui/react'
import { Tabs, TabList, Tab, } from '@chakra-ui/react'
import Typewriter from 'typewriter-effect';
import { HStack, VStack } from '@chakra-ui/react';


import {AiOutlineChrome, AiFillGithub, AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai'





export default function Home() {

  const scrollDown = () => {
    console.log("clicking")
    window.scrollBy(0, 1000);
  }



  return (
    <div>
        <div style={{display:'flex'}}>
            <div style={{padding:'10px', paddingLeft:'39px'}}>
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
            
              <div style={{fontSize:"70px", color:'#b5838d', fontFamily: "Euclid Circular B, sans-serif"}}>

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
                    <div style={{marginLeft:'10px', fontSize:'40px', marginTop:'1px'}}>
                     <AiOutlineChrome />
                    </div>
                  </div>
                </button>
              </div>

            </div>
            <Center>
            <div>
              <HStack spacing= '-20px'>
                <div style={{boxShadow: '0 0 90px 1px white'}}>
                <Image src="/Image2.png" width={300} height={300} alt="FireWallet logo"/>
                </div>
                <div style={{zIndex: '3', boxShadow: '0 0 90px 15px #ECECEC'}}>
                  <Image src="/Image1.png" width={380} height={380} alt="FireWallet logo"/>
                </div>
                <div style={{marginRight:'100px', boxShadow: '0 0 90px 1px white'}}>
                  <Image src="/Image9.png" width={300} height={300} alt="FireWallet logo"/>
                </div>
                

                
              </HStack>
              
            </div>
            </Center>
          </div>
          
          <div style={{display:'flex', marginLeft:'200px'}}>
            <div className={styles.beyondhashingbox}>
              <div style={{color: '#F08080'}}>
                <Text as='b' fontFamily={'sans-serif'} fontSize={40}>Beyond Cryptographic Hashing.</Text>
              </div>
              <div style={{width: '600px', lineHeight:'40px', display: 'inline-block'}}>
                <Text fontFamily={'sans-serif'} fontSize={20}> FireWallet is an innovative Ethereum wallet designed to safeguard users against spam-transaction attacks. It employs a unique security protocol that partitions larger wallets, concealing them both on the Polygon chain and in terms of their value. </Text>
          
              </div>
              <div style={{width: '600px', lineHeight:'40px', display: 'inline-block', marginTop: '20px'}}>
                  <Text fontFamily={'sans-serif'} fontSize={20}>FireWallet's Partioning Protocol generates hidden sub-wallets connected to the main wallet and employs a partitioning tree algorithm to distribute tokens randomly among wallets, giving the appearance that they all hold <Text as='b'>{'<'}1 ETH</Text>.</Text>
              </div>
              <div style={{width: '600px', lineHeight:'40px', display: 'inline-block', marginTop: '20px'}}>
                <Text fontFamily={'sans-serif'} fontSize={20}>This approach discourages attackers, as each wallet seems to contain only a minimal amount of ETH, making it an unattractive target for depletion. Even if an attacker does target one of user's the wallets, only a small fraction of the original tokens sent through the algorithm is at risk, safeguarding <Text as='b'>97%</Text> of the user's original tokens.</Text>
              </div>

            </div>
            <div>
              <div style={{marginLeft:'10px', marginTop: '40px', boxShadow: '0 0 90px 25px #ECECEC'}}>
                    <Image src="/Image5.png" width={400} height={400} alt="FireWallet logo"/>
              </div>

            </div>

              

          </div>
          
          <div style={{display:'flex'}}>
            <div>
              <HStack spacing='1px'>

                <div style={{marginTop: '50px', marginLeft: '50px', boxShadow: '0 0 90px 1px #ECECEC'}}>
                      <Image src="/Image11.png" width={880} height={880} alt="FireWallet logo"/>
                </div>
                <div style={{marginTop: '50px', zIndex: '3', boxShadow: '0 0 90px 25px #ECECEC'}}>
                      <Image src="/Image4.png" width={900} height={900} alt="FireWallet logo"/>
                </div>
                <div style={{marginTop: '50px',  boxShadow: '0 0 90px 1px #ECECEC'}}>
                      <Image src="/Image10.png" width={880} height={880} alt="FireWallet logo"/>
                </div>
              </HStack>
            </div>
            
            <div style={{padding:'30px', marginLeft: '60px', marginTop: '50px'}}>
              <div style={{color: '#F08080'}}>
                <Text as='b' fontFamily={'sans-serif'} fontSize={40}>All of Ethereum Right to You.</Text>
              </div>
              <div style={{width: '600px', lineHeight:'40px', display: 'inline-block'}}>
                <Text fontFamily={'sans-serif'} fontSize={20}>Fetch recent Ethereum data including the top NFTs and ERC20 tokens right at your finger tips. </Text>
              </div>
              <div style={{width: '600px', lineHeight:'40px', display: 'inline-block', marginTop:'20px'}}>
                <Text fontFamily={'sans-serif'} fontSize={20}>FireWallet updates external sources and courses about web3 development, cryptography, and Ethereum in general for users to expand their web3 brain. </Text>
              </div>
              <div style={{width: '600px', lineHeight:'40px', display: 'inline-block', marginTop: '20px'}}>
                <Text as='b' fontFamily={'sans-serif'} fontSize={20}>FireWallet reduces the number of sites the user has to visit to fetch recent Ethereum-related information by <Text as='b'>{'>'}5</Text> on average.  </Text>
              </div>
            </div>

          </div>

          <div className={styles.videoBox}>
            <Center>
              <div style={{padding: '10px', color:'black'}}>
                <Text as='b' fontFamily={'sans-serif'} fontSize={50}>Walkthrough</Text>
              </div>

            </Center>
            <Center>
              <div style={{height:'600px', width:'1300px', border: '2px solid black'}}>
                <div style={{position: "relative", paddingBottom: "64.63195691202873%", height: "0"}}>
                  <iframe src="https://www.loom.com/embed/6d0cf87793e7448280fc9fed499590ef?sid=00e2e944-7229-40a6-9c14-17dca0e9cb56" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{position: "absolute", top: '0', left: "0", width: "1300px", height: "600px"}}></iframe></div>
              </div>
            </Center>
          </div>

          <div style={{display:'flex', marginTop:'20px'}}>
            <div style={{marginLeft:'250px', marginTop: '40px', background: 'white', boxShadow: '4px 4px 10px gray', borderRadius: '12px', paddingBottom: '80px', padding:'40px', paddingLeft:'50px', paddingRight:'60px', position: 'relative'}}>
              <Center>
              <div style={{boxShadow: '1px 4px 5px gray', marginTop:'20px'}}>
                      <Image src="/Image8.png" width={350} height={350} alt="FireWallet logo"/>
              </div>
              </Center>
              <div className={styles.docsButton}>
                <button>
                  <Text as='b' fontFamily={'sans-serif'} fontSize={20}>Docs {'>'}{'>'} </Text>
                </button>
              </div>

            </div>

            <div style={{padding:'30px', marginLeft:'10%'}}>
              <div style={{color: '#F08080'}}>
                <Text as='b' fontFamily={'sans-serif'} fontSize={90}>Learn</Text>
              </div>
              <div style={{width: '600px', lineHeight:'50px', display: 'inline-block'}}>
              <div>
                <Text as='b' fontFamily={'sans-serif'} fontSize={40}>Check out the Docs to learn everything about FireWallet.</Text>
              </div>
              <div style={{marginTop:'15px', textAlign: 'left'}}>
                <Text fontFamily={'sans-serif'} fontSize={20}>From learning about FireWallet's Partition Protocols to all its Features, the docs has an answer for all - The docs also links tutorials, resources, and bug fixes that the user may run into. </Text>
              </div>
              <Center>
                <div style={{marginTop: '30px'}}>
                  <Text as='b' fontFamily={'sans-serif'} fontSize={20}>The Docs will be Coming Soon!</Text>
                </div>
              </Center>

              </div>

              
            </div>

          </div> 


          <div style={{display:'flex', padding:'30px', marginTop:'150px'}}>
            <div style={{width: '70%'}}>
              <Center>
              <div style={{color: '#F08080', width:'320px', marginLeft:'70px'}}>
                <Text as='b' fontFamily={'sans-serif'} fontSize={90}>Get</Text> <br />
                <Text as='b' fontFamily={'sans-serif'} fontSize={90}>Started</Text> <br />
                <Text as='b' fontFamily={'sans-serif'} fontSize={90}>Today</Text>
                
          

              </div>
              </Center>

            </div>
            <div style={{padding: '30px', marginTop: '60px', marginBottom:'200px'}}>

              <div style={{textAlign:'center'}}>
                <Text as='b' fontFamily={'sans-serif'} fontSize={40}>Download For Any Browser that Supports Chrome Extensions.</Text>
              </div>

              <Center>
              <div className={styles.downloadButton}>
                <button>
                  <div style={{display: 'flex'}}>
                    <Text as='b' fontFamily={'sans-serif'} fontSize={30}>Download for </Text>
                    <div style={{marginLeft:'10px', fontSize:'40px', marginTop:'1px'}}>
                     <AiOutlineChrome />
                    </div>
                  </div>
                </button>
              </div>
              </Center>
            </div>

            
          </div>

          <hr />

          <div>

          </div>
          <div>
            <Center>
              <HStack spacing='400px'>
                <VStack spacing='4'>
                  <div>
                    <div>
                      <Text fontFamily={'sans-serif'} fontSize={20}>@2023 FireWallet</Text>
                    </div>
                    <div>
                      <Text>Made by Jaival Patel with ❤️</Text>
                    </div>
                  </div>
                </VStack>
                <VStack align='stretch' spacing='4'>
                  <div style={{marginTop:'10px'}}>
                    <Text fontFamily={'sans-serif'} fontSize={20}>Discover</Text>
                  </div>
                  <Text fontFamily={'sans-serif'} fontSize={20}>Docs</Text>
                  <Text fontFamily={'sans-serif'} fontSize={20}>Download</Text>
                </VStack>
                <HStack>
                  <div style={{fontSize:'40px'}}>
                    <button>
                      <AiFillGithub />
                    </button>
                  </div>
                  <div style={{fontSize:'40px'}}>
                    <button>
                      <AiOutlineTwitter />
                    </button>
                  </div>
                  <div style={{fontSize:'40px'}}>
                    <button>
                      <AiFillLinkedin />
                    </button>
                  </div>
                </HStack>
                
              </HStack>
            </Center>
          </div>

        </div>
        
      

    </div>
  )
}
