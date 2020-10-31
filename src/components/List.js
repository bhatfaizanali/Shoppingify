import React, { Component } from 'react';
import { Box, Button, Flex, Input, Text } from "@chakra-ui/core";
import { connect } from 'react-redux';
import { MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';

class List extends Component {


    displayItems = () => {
        return Object.entries(this.props.currentList.items).map(item => {
            return (
                <Flex alignItems='center' key={item[0]}>
                    <Text flex='1'>{this.props.items[item[0]].name}</Text>
                    <Flex border='2px solid #f9a109' color='#f9a109' rounded='15px' alignItems='center'>
                        <Box color='#f9a109' ml='0.4em' cursor='pointer'>-</Box>
                        <Text fontSize='0.8em' my='3px' mx='1em'>{item[1].quantity} pcs</Text>
                        <Box color='#f9a109' mr='0.4em' cursor='pointer'>+</Box>
                    </Flex>
                </Flex>
            )
        })
    }

    render() {
        return (
            <Box bg='#FFF0DE' w='25vw' h='100vh' p='30px' position='relative' boxSizing='border-box'>
                <Flex p='15px' bg='#80485b' rounded='8px'>
                    <Box flex='0.4'>

                    </Box>
                    <Box color='white' flex='0.6' fontSize='14px'>
                        Didn't find what you need?<br></br>
                        <Link to='/addItem'>
                            <Button border='none' bg='white' size='sm' rounded='8px' fontSize='11px' mt='10px'>Add item</Button>
                        </Link>
                    </Box>
                </Flex>
                <Flex mt='40px' fontWeight='bold' alignItems='center'>
                    <Text flex='1'>Shopping list</Text>
                    <Button border='none' bg='transparent'>
                        < MdModeEdit />
                    </Button>
                </Flex>

                {this.displayItems()}

                <Flex bg='white' position='absolute' bottom='0' left='0' p='30px' width='100%' boxSizing='border-box'>
                    <Input placeholder='Enter a name' border='2px solid' color='#f9a109' rounded='8px' focusBorderColor='#f9a109' />
                    <Button bg='#f9a109' color='white' border='none' rounded='8px' fontSize='12px' ml='-12px' zIndex='1' size='auto'>Save</Button>
                </Flex>
            </Box>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentList: state.currentList,
        items: state.items
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         add: board => {
//             dispatch(add(board))
//         },
//         remove: id => {
//             dispatch(remove(id))
//         },
//         get: () => {
//             dispatch(get())
//         }
//     }
// }
export default connect(mapStateToProps)(List);