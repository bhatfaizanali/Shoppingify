import React, { Component } from 'react';
import { Box, Button, Flex, Input, Text } from "@chakra-ui/core";
import { connect } from 'react-redux';
import { MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { decreaseQuantity, increaseQuantity } from '../actions'

class List extends Component {
    displayItems = () => {
        const categories = {};
        Object.entries(this.props.currentList.items).forEach(item => {
            if (categories.hasOwnProperty(this.props.items[item[0]].category)) {
                categories[this.props.items[item[0]].category].push(item[0])
            } else {
                categories[this.props.items[item[0]].category] = [item[0]]
            }

        })

        return Object.entries(categories).map(category => {
            return (
                <Box key={category[0]}>
                    <Text fontSize='0.7em' color='grey'>{category[0]}</Text>
                    {
                        category[1].map(item => {
                            return (
                                <Flex alignItems='center' key={item}>
                                    <Text flex='1' my='0.5em'>{this.props.items[item].name}</Text>
                                    <Flex border='2px solid #f9a109' color='#f9a109' rounded='15px' alignItems='center'>
                                        <Box color='#f9a109' ml='0.4em' cursor='pointer' onClick={() => this.props.decreaseQuantity(item)}>-</Box>
                                        <Text fontSize='0.8em' my='3px' mx='1em' >{this.props.currentList.items[item].quantity} pcs</Text>
                                        <Box color='#f9a109' mr='0.4em' cursor='pointer' onClick={() => this.props.increaseQuantity(item)}>+</Box>
                                    </Flex>
                                </Flex>
                            )
                        })
                    }
                </Box>
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

const mapDispatchToProps = dispatch => {
    return {
        decreaseQuantity: (id) => {
            dispatch(decreaseQuantity(id))
        },
        increaseQuantity: (id) => {
            dispatch(increaseQuantity(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);