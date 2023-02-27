import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Text,Flex } from '@chakra-ui/react'
import ReactPlayer from 'react-player'

function SlidingImage() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
       
        <div style={{ marginLeft: "5px", paddingLeft:"30px",paddingTop:"20px",backgroundColor:"#F7FAFC"}}>
            <Carousel
                responsive={responsive}
                showDots={false}
                infinite={true}
                arrows={true}
                autoPlaySpeed={1000}
            >
                <div >
                    <img
                        width="400px"

                        alt=""
                        src="https://cb.scene7.com/is/image/Crate/cb_dHP_202302_RoomCarousel_CoffeeTablesV2?wid=841&qlt=90&op_sharpen=1"
                    />
                    <Text fontSize='sm' as='b'>IN-STOCK FURNITURE</Text>
                    <span>&#8594;</span>
                </div>

                <div >
                    <img
                        alt=""
                        width="400px"
                        src="https://cb.scene7.com/is/image/Crate/cb_dHP_202302_RoomCarousel_InstockV3?wid=841&qlt=90&op_sharpen=1"
                    />
                       <Text fontSize='sm' as='b'>COFFEE TABLES</Text>
                    <span>&#8594;</span>
                </div>

                <div >
                    <img
                        alt=""
                        width="400px"
                        src="https://cb.scene7.com/is/image/Crate/cb_dHP_202302_RoomCarousel_RugsV2?wid=841&qlt=90&op_sharpen=1"
                    />
                        <Text fontSize='sm' as='b'>RUGS</Text>
                    <span>&#8594;</span>
                </div>

                <div >
                    <img
                        alt=""
                        width="400px"
                        src="https://cb.scene7.com/is/image/Crate/cb_dHP_202302_RoomCarousel_ThrowPillowsV2?wid=841&qlt=90&op_sharpen=1"
                    />
                        <Text fontSize='sm' as='b'>THROW PILLOWS</Text>
                    <span>&#8594;</span>
                </div>

                <div >
                    <img
                        alt=""
                        width="400px"
                        src="https://cb.scene7.com/is/image/Crate/cb_dHP_202302_RoomCarousel_MediaStorageV2?wid=841&qlt=90&op_sharpen=1"
                    />
                        <Text fontSize='sm' as='b'>MEDIA STORAGE</Text>
                    <span>&#8594;</span>
                </div>

                <div >
                    <img
                        alt=""
                        width="400px"
                        src="https://cb.scene7.com/is/image/Crate/cb_dHP_202302_RoomCarousel_AccentChairsV2?wid=841&qlt=90&op_sharpen=1"
                    />
                        <Text fontSize='sm' as='b'>IACCENT CHAIRS</Text>
                    <span>&#8594;</span>
                </div>
            </Carousel>

        </div>
       
    );
}

export default SlidingImage
