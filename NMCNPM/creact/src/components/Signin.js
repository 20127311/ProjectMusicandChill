import React from 'react'
import Todolist from "./Todolist";
import Button from '@atlaskit/button';
import Textfield from '@atlaskit/textfield';
import { useState } from "react";
import { v4 } from 'uuid'

function Signin() {

  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  const onTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const onAddBtnClick = (e) => {
    setTodoList([...todoList, {id: v4(), name: textInput, isCompleted: false}]);
    setTextInput("")
  };

  return (
    <>
      <h1>
        Music and Chill
      </h1>
      <Textfield 
        name='Name'
        placeholder='Tên bài hát'
        elemAfterInput={
          <Button
            isDisabled={!textInput}
            onClick={onAddBtnClick}>
            Tìm kiếm
          </Button>
        }
        css={{padding: "2px 4px 2px"}}
        value={textInput}
        onChange={onTextInputChange}
      ></Textfield>
      <Todolist todoList={todoList} />
    </>
  );
}

export default Signin

