import React, { Component } from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/core";
<<<<<<< HEAD
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
=======
import { connect } from "react-redux";
>>>>>>> 83ef4272b02fc089ea51579a936cefd04a3f4333

import { removeItem as remove } from "../actions";

class ItemDescription extends Component {
    constructor() {
        super();
        this.state = {
            item: {}
        }
    }
    componentDidMount() {
        this.setState({
            item: this.props.items[this.props.match.params.id]
        })
    }
    render() {
        return (
            <Box w='25vw' h='100vh' p='30px' position='relative' boxSizing='border-box'>
                <Button bg='transparent' border='none' color='#f9a109' mt='-20px' ml='-20px' fontWeight='400'>&lt; back</Button>
                <Flex justifyContent='center' mt='20px'>
                    <Image
                        size="10vw"
                        src={this.state.item.imageUrl}
                        border='1px solid black'
                        rounded='15px'
                    />
                </Flex>
                <Text mt='25px' fontSize='13px' color='grey'>name</Text>
                <Text mt='17px' fontSize='22px'>{this.state.item.name}</Text>
                <Text mt='30px' fontSize='13px' color='grey'>category</Text>
                <Text mt='17px'>{this.state.item.category}</Text>
                <Text mt='30px' fontSize='13px' color='grey'>note</Text>
                <Text mt='17px'>{this.state.item.note}</Text>

<<<<<<< HEAD
                <Link to='/'>
                    <Button
                        border="none"
                        bg="transparent"
                        position="absolute"
                        rounded="8px"
                        bottom="30px"
                        left="25%"
                        size='sm'
                        onClick={() => this.props.remove(this.state.item.id)}
                    >
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
                    size='sm'
                >
                    Add to list
                </Button>
            </Box>
        )
    }
=======
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
>>>>>>> 83ef4272b02fc089ea51579a936cefd04a3f4333
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (id) => {
      dispatch(remove(id));
    },
  };
};

<<<<<<< HEAD
export default connect(mapStateToProps, mapDispatchToProps)(ItemDescription);
=======
export default connect(null, mapDispatchToProps)(ItemDescription);
>>>>>>> 83ef4272b02fc089ea51579a936cefd04a3f4333
