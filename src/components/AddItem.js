import React, { Component } from "react";
import random from "random-int";
import {
  Box,
  Button,
  Input,
  InputGroup,
  Text,
  Textarea,
  Popover,
  PopoverBody,
  List,
  PopoverContent,
  PopoverTrigger,
  ListItem,
} from "@chakra-ui/core";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

import { addItem as add, setCategoryItems } from "../actions";

class AddItem extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      note: "",
      imageUrl: "",
      category: "",
      category_id: "",
      showCategories: false,
    };
  }
  componentWillUnmount() {
    this.props.setCategoryItems();
  }
  componentDidUpdate() {
    this.props.setCategoryItems();
  }
  clearInputs = () => {
    this.setState({
      id: "",
      name: "",
      note: "",
      imageUrl: "",
      category: "",
      category_id: "",
      showCategories: false,
    });
  };
  createItem = () => {
    const item = {
      id: uuid(),
      name: this.state.name,
      note: this.state.note,
      imageUrl: this.state.imageUrl,
      category: this.state.category,
      category_id: this.state.category_id,
    };
    this.clearInputs();
    if (this.state.category_id !== "") {
      this.props.add(
        item.name,
        item.note,
        item.imageUrl,
        item.category_id,
        item.category,
      );
    } else {
      this.props.add(
        item.name,
        item.note,
        item.imageUrl,
        random(1000, 100000),
        item.category,
      );
    }
  };
  render() {
    const categories = Object.entries(this.props.categories).map((category) => {
      return (
        <ListItem
          onClick={() =>
            this.setState({
              category: category[1].category_name,
              category_id: category[0],
              showCategories: false,
            })
          }
          style={{
            cursor: "pointer",
            fontFamily: "'Quicksand', sans-serif",
            fontStyle: "normal",
            fontSize: "18px",
          }}
          key={category[0]}
        >
          {category[1].category_name}
        </ListItem>
      );
    });
    return (
      <Box bg="#fafafe" w="25vw" h="100vh" p="30px" position="relative">
        <Text fontSize="xl" mb="40px">
          Add a new item
        </Text>
        <Text fontSize="md" mb="7px">
          Name
        </Text>
        <Input
          placeholder="Enter a name"
          mb="30px"
          focusBorderColor="#f9a109"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />

        <Text fontSize="md" mb="7px">
          Note (optional)
        </Text>
        <Textarea
          placeholder="Enter a note"
          mb="30px"
          focusBorderColor="#f9a109"
          value={this.state.note}
          onChange={(e) => this.setState({ note: e.target.value })}
        />

        <Text fontSize="md" mb="7px">
          Image (optional)
        </Text>
        <Input
          placeholder="Enter a url"
          type="url"
          mb="30px"
          focusBorderColor="#f9a109"
          value={this.state.imageUrl}
          onChange={(e) => this.setState({ imageUrl: e.target.value })}
        />

        <Text fontSize="md" mb="7px">
          Category
        </Text>
        <Input
          onClick={() => this.setState({ showCategories: true })}
          placeholder="Enter a category"
          mb="30px"
          focusBorderColor="#f9a109"
          value={this.state.category}
          onChange={(e) => this.setState({ category: e.target.value })}
        />
        <InputGroup>
          <Popover isOpen={this.state.showCategories}>
            <PopoverContent zIndex={4}>
              <PopoverBody>
                <List spacing={3}>{categories}</List>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </InputGroup>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            border="none"
            bg="transparent"
            position="absolute"
            rounded="8px"
            bottom="30px"
            left="25%"
            onClick={this.clearInputs}
          >
            cancel
          </Button>
        </Link>
        <Button
          bg="#f9a109"
          color="white"
          border="none"
          rounded="8px"
          position="absolute"
          bottom="30px"
          right="30%"
          onClick={this.createItem}
        >
          Save
        </Button>
      </Box>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    add: (name, note, imageUrl, category_id, category) => {
      add(name, note, imageUrl, category_id, category)(dispatch);
    },
    setCategoryItems: () => {
      dispatch(setCategoryItems());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
