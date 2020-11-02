import React, { Component } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/core";
import { connect } from "react-redux";
import { MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { FiTrash } from "react-icons/fi";

import {
  decreaseQuantity,
  increaseQuantity,
  removeItemFromCurrentList,
  addNameSave,
  cancelCurrentList,
  completeCurrentList,
  addList,
  clearCurrentList,
} from "../actions";

class List extends Component {
  state = {
    listName: "",
    saved: false,
    openModal: false,
  };

  save = () => {
    this.props.addNameSave(this.state.listName);
    this.setState({ saved: true, listName: "" });
  };
  displayItems = () => {
    const categories = {};
    Object.entries(this.props.currentList.items).forEach((item) => {
      if (categories.hasOwnProperty(this.props.items[item[0]].category)) {
        categories[this.props.items[item[0]].category].push(item[0]);
      } else {
        categories[this.props.items[item[0]].category] = [item[0]];
      }
    });

    return Object.entries(categories).map((category) => {
      return (
        <Box key={category[0]}>
          <Text fontSize="0.7em" color="grey">
            {category[0]}
          </Text>
          {category[1].map((item) => {
            return (
              <Flex
                style={{ marginTop: "1rem" }}
                alignItems="center"
                key={item}
              >
                <Text flex="1" my="0.5em">
                  {this.props.items[item].name}
                </Text>
                <Flex background=" white" justifyContent="space-evenly">
                  <div
                    onClick={() => this.props.removeItemFromCurrentList(item)}
                    style={{
                      padding: "0.7rem",
                      background: "#F9A109",
                      borderRadius: "0.7rem",
                      cursor: "pointer",
                    }}
                  >
                    <FiTrash size="1.3rem" color="white" />
                  </div>
                  <div style={{ padding: "0.5rem" }}>
                    <Box
                      color="#f9a109"
                      ml="0.4em"
                      cursor="pointer"
                      fontSize="1.5rem"
                      onClick={() => this.props.decreaseQuantity(item)}
                    >
                      -
                    </Box>
                  </div>
                  <div style={{ padding: "0.5rem" }}>
                    <Box
                      border="3px solid #f9a109"
                      color="#f9a109"
                      rounded="15px"
                      alignItems="center"
                      padding="0.2rem"
                    >
                      <Text fontSize="0.8em" my="3px" mx="1em">
                        {this.props.currentList.items[item].quantity} pcs
                      </Text>
                    </Box>
                  </div>
                  <div style={{ padding: "0.5rem" }}>
                    <Box
                      color="#f9a109"
                      mr="0.4em"
                      cursor="pointer"
                      fontSize="1.5rem"
                      onClick={() => this.props.increaseQuantity(item)}
                    >
                      +
                    </Box>
                  </div>
                </Flex>
              </Flex>
            );
          })}
        </Box>
      );
    });
  };

  render() {
    return (
      <>
        <Box
          bg="#FFF0DE"
          w="25vw"
          h="100vh"
          p="30px"
          position="relative"
          boxSizing="border-box"
        >
          <Flex p="15px" bg="#80485b" rounded="8px">
            <Box flex="0.4"></Box>
            <Box color="white" flex="0.6" fontSize="14px">
              Didn't find what you need?<br></br>
              <Link to="/addItem">
                <Button
                  border="none"
                  bg="white"
                  size="sm"
                  rounded="8px"
                  fontSize="11px"
                  mt="10px"
                >
                  Add item
                </Button>
              </Link>
            </Box>
          </Flex>
          <Flex mt="40px" fontWeight="bold" alignItems="center">
            <Text flex="1">Shopping list</Text>
            <Button border="none" bg="transparent">
              <MdModeEdit />
            </Button>
          </Flex>

          {this.displayItems()}

          <Flex
            bg="white"
            position="absolute"
            bottom="0"
            left="0"
            p="30px"
            width="100%"
            boxSizing="border-box"
            display={this.state.saved ? "none" : "flex"}
          >
            <Input
              value={this.state.listName}
              placeholder="Enter a name"
              border="2px solid"
              color="#f9a109"
              rounded="8px"
              focusBorderColor="#f9a109"
              onChange={(e) => this.setState({ listName: e.target.value })}
            />
            <Button
              bg="#f9a109"
              color="white"
              border="none"
              rounded="8px"
              fontSize="12px"
              ml="-12px"
              zIndex="1"
              size="auto"
              onClick={this.save}
            >
              Save
            </Button>
          </Flex>

          <Flex
            bg="white"
            position="absolute"
            bottom="0"
            left="0"
            p="30px"
            width="100%"
            boxSizing="border-box"
            display={this.state.saved ? "flex" : "none"}
          >
            <Button
              cursor="pointer"
              margin="2px"
              fontFamily="Quicksand"
              border="none"
              bg="white"
              onClick={() => this.setState({ openModal: true })}
            >
              Cancel
            </Button>
            <Button
              cursor="pointer"
              margin="2px"
              border="none"
              rounded="8px"
              color="white"
              fontFamily="Quicksand"
              bg="#56CCF2"
              onClick={() => {
                this.props.completeCurrentList();
                this.props.addList(this.props.currentList);
                this.props.clearCurrentList();
                this.setState({ saved: false });
              }}
            >
              Complete
            </Button>
          </Flex>
        </Box>

        <Modal isOpen={this.state.openModal}>
          <ModalOverlay />
          <ModalContent rounded="1rem">
            <ModalCloseButton
              color="lightgrey"
              background="white"
              border="none"
              cursor="pointer"
              onClick={() => this.setState({ openModal: false })}
            />
            <ModalBody fontFamily="Quicksand" padding="1rem">
              Are you sure that you want to cancel this list?
            </ModalBody>

            <ModalFooter>
              <Button
                cursor="pointer"
                margin="2px"
                fontFamily="Quicksand"
                border="none"
                bg="white"
                variant="ghost"
                onClick={() => this.setState({ openModal: false })}
              >
                Close
              </Button>
              <Button
                cursor="pointer"
                margin="2px"
                border="none"
                rounded="8px"
                color="white"
                fontFamily="Quicksand"
                onClick={() => {
                  this.props.cancelCurrentList();
                  this.props.addList(this.props.currentList);
                  this.props.clearCurrentList();
                  this.setState({ saved: false, openModal: false });
                }}
                variantColor="red"
                mr={3}
              >
                Yes
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentList: state.currentList,
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    decreaseQuantity: (id) => {
      dispatch(decreaseQuantity(id));
    },
    increaseQuantity: (id) => {
      dispatch(increaseQuantity(id));
    },
    removeItemFromCurrentList: (id) => {
      dispatch(removeItemFromCurrentList(id));
    },
    addNameSave: (name) => {
      dispatch(addNameSave(name));
    },
    cancelCurrentList: () => {
      dispatch(cancelCurrentList());
    },
    completeCurrentList: () => {
      dispatch(completeCurrentList());
    },
    addList: (list) => {
      dispatch(addList(list));
    },
    clearCurrentList: () => {
      dispatch(clearCurrentList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
