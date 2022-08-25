import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../services/location/location.context";

const Search = styled(Searchbar)``;

export const SearchBar = () => {
  const { keyWord, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = React.useState(keyWord);

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Search
      placeholder="Search for a location"
      onChangeText={onChangeSearch}
      value={searchQuery}
      onSubmitEditing={() => {
        search(searchQuery);
      }}
    />
  );
};
