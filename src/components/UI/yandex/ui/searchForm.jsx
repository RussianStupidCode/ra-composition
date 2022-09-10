import { Button } from "bootstrap";
import React from "react";
import Image from "../common/image";
import TextInput from "../common/textInput";

/**
 * Поиск с кнопкой и лого
 */
const SearchForm = ({ logoUrl, buttonText }) => {
  return (
    <>
      <Image src={logoUrl}></Image>
      <TextInput></TextInput>
      <Button>{buttonText}</Button>
    </>
  );
};

export default SearchForm;
