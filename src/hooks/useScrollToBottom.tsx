import React, { useEffect } from "react";

const useScrollBottom = (elementId: string, chat: any) => {
  const updateScroll = () => {
    var element = document.getElementById(elementId)!;
    element.scrollTop = element.scrollHeight;
  };

  useEffect(() => {
    updateScroll();
  }, [chat]);
};

export default useScrollBottom;
