import React, { Component } from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/core";
import { connect } from "react-redux";

import { removeItem as remove } from "../actions";

class ItemDescription extends Component {
    constructor() {
        super();
        this.item = {
            id: "a74fe73e-0880-403d-91e3-2f7802eb6626",
            name: "Carrots 1Kg",
            note: "The carrot is a root vegetable, usually orange in color, though purple, black, red, white, and yellow cultivars exist. They are a domesticated form of the wild carrot, Daucus carota, native to Europe and Southwestern Asia. The plant probably originated in Persia and was originally cultivated for its leaves and seeds.",
            imageUrl: "https://5.imimg.com/data5/EX/PC/MY-51545753/selection_587-500x500.png",
            category: "Fruits and Vegetables"
        }
    }
    render() {
        console.log(this.props.items)
        return (
            <Box w='25vw' h='100vh' p='30px' position='relative'>
                <Button bg='transparent' border='none' color='#f9a109' mt='-20px' ml='-20px' fontWeight='400'>&lt; back</Button>
                <Flex justifyContent='center' mt='20px'>
                    <Image
                        size="10vw"
                        src={this.item.imageUrl}
                        border='1px solid black'
                        rounded='15px'
                    />
                </Flex>
                <Text mt='25px' fontSize='13px' color='grey'>name</Text>
                <Text mt='17px' fontSize='22px'>{this.item.name}</Text>
                <Text mt='30px' fontSize='13px' color='grey'>category</Text>
                <Text mt='17px'>{this.item.category}</Text>
                <Text mt='30px' fontSize='13px' color='grey'>note</Text>
                <Text mt='17px'>{this.item.note}</Text>

        <Button
          border="none"
          bg="transparent"
          position="absolute"
          rounded="8px"
          bottom="30px"
          left="25%"
          size="sm"
          onClick={() => this.props.remove(this.item.id)}
        >
          delete
        </Button>
        <Button
          bg="#f9a109"
          color="white"
          border="none"
          rounded="8px"
          position="absolute"
          bottom="30px"
          right="25%"
          size="sm"
        >
          Add to list
        </Button>
      </Box>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (id) => {
      dispatch(remove(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(ItemDescription);
