import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

const Search = styled(Searchbar)``;

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Search
      placeholder="Find Restaurant"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};
