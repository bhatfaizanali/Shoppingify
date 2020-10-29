import React, { Component } from 'react';
import { Box, Button, Flex, Input, Text } from "@chakra-ui/core";
import { connect } from 'react-redux';
import { MdModeEdit } from 'react-icons/md';

class List extends Component {
    render() {
        return (
            <Box bg='#FFF0DE' w='25vw' h='100vh' p='30px' position='relative' display={this.props.isOpen ? 'block' : 'none'}>
                <Flex p='15px' bg='#80485b' rounded='8px'>
                    <Box flex='0.4'>

                    </Box>
                    <Box color='white' flex='0.6' fontSize='14px'>
                        Didn't find what you need?<br></br>
                        <Button border='none' bg='white' size='sm' rounded='8px' fontSize='11px' mt='10px'>Add item</Button>
                    </Box>
                </Flex>
                <Flex mt='40px' fontWeight='bold' alignItems='center'>
                    <Text flex='1'>Shopping list</Text>
                    <Button border='none' bg='transparent'>
                        < MdModeEdit />
                    </Button>
                </Flex>
                <Flex bg='white' w='100%' position='absolute' bottom='0' left='0' p='30px'>
                    <Input placeholder='Enter a name' border='2px solid' color='#f9a109' rounded='8px' focusBorderColor='#f9a109' />
                    <Button bg='#f9a109' color='white' border='none' rounded='8px' fontSize='12px' ml='-12px' zIndex='1'>Save</Button>
                </Flex>
            </Box>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.list
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