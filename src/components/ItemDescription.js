import React, { Component } from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/core";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { removeItem, removeItemFromCategories, removeItemFromCurrentList } from "../actions";

class ItemDescription extends Component {

  constructor() {
    super();
    this.state = {
      item: {}
    }
  }

  render() {
    const item = this.props.items[this.props.match.params.id]
    return (
      <Box w='25vw' h='100vh' p='30px' position='relative' boxSizing='border-box'>
        <Button bg='transparent' border='none' color='#f9a109' mt='-20px' ml='-20px' fontWeight='400'>&lt; back</Button>
        <Flex justifyContent='center' mt='20px'>
          <Image
            size="10vw"
            src={item.imageUrl}
            border='1px solid black'
            rounded='15px'
          />
        </Flex>
        <Text mt='25px' fontSize='13px' color='grey'>name</Text>
        <Text mt='17px' fontSize='22px'>{item.name}</Text>
        <Text mt='30px' fontSize='13px' color='grey'>category</Text>
        <Text mt='17px'>{item.category}</Text>
        <Text mt='30px' fontSize='13px' color='grey'>note</Text>
        <Text mt='17px'>{item.note}</Text>

        <Link to='/'>
          <Button
            border="none"
            bg="white"
            position="absolute"
            rounded="8px"
            bottom="30px"
            left="25%"
            size='sm'
            onClick={() => {
              this.props.removeItemFromCurrentList(item.id);
              this.props.removeItem(item.id);
              this.props.removeItemFromCategories(item.id, item.category);

            }}>

            delete
                </Button>
        </Link>

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

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    removeItemFromCategories: (id, name) => {
      dispatch(removeItemFromCategories(id, name));
    },
    removeItemFromCurrentList: (id) => {
      dispatch(removeItemFromCurrentList(id))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDescription);
