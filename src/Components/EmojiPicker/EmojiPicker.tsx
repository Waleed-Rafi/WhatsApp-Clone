import React from "react";
import Picker, { IEmojiData } from "emoji-picker-react";

interface Props {
  containerStyles?: React.CSSProperties;
  pickerStyles?: object;
  onEmojiClick: (
    event: React.MouseEvent<Element, MouseEvent>,
    emojiObject: IEmojiData
  ) => void;
}

const EmojiPicker: React.FC<Props> = ({
  containerStyles = {},
  pickerStyles = {},
  onEmojiClick,
}) => {
  return (
    <div style={{ ...containerStyles }}>
      <Picker
        pickerStyle={{ ...pickerStyles }}
        onEmojiClick={(event, other) => onEmojiClick(event, other)}
      />
    </div>
  );
};

export default EmojiPicker;
