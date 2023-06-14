import React from "react";

export const useModal = () => {
  const [isOpen, setIsopen] = React.useState(false);
  const open = () => setIsopen(true);
  const close = () => setIsopen(false);
  const toggle = () => setIsopen(!isOpen);
  const getVal = (val) => setIsopen(val);
  return { isOpen, open, close, toggle, getVal };
};
