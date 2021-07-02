import React from "react";
import Picker, { IEmojiData } from "emoji-picker-react";

const EmojiPicker = ({ containerStyles = {}, pickerStyles = {} }) => {
  const onEmojiClick = (
    event: React.MouseEvent<Element, MouseEvent>,
    emojiObject: IEmojiData
  ) => {
    console.log(emojiObject);
  };
  return (
    <div>
      <Picker
        pickerStyle={{ ...pickerStyles }}
        onEmojiClick={(event, other) => onEmojiClick(event, other)}
      />
    </div>
  );
};

export default EmojiPicker;
