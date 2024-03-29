import React from 'react';

export type FloatMenuOption = {
  id: string,
  label: React.JSX.Element,
  handleClick: () => void,
};

export type NavbarButtonProps = {
  text?: string,
  onClick?: () => void;
};
