import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { useDebounce } from 'hooks';

// TODO: color type define
type Props = {
  color: string;
  onChange: (color: string) => void;
  time?: number;
};

export const DebouncedPicker = (props: Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'> & Props) => {
  const [color, setColor] = useState(props.color);

  const debounce = useDebounce(props.time ?? 200);
  const handleChange = (newColor: string) => {
    setColor(newColor);
    debounce(() => props.onChange(newColor));
  };

  return <HexColorPicker {...props} onChange={handleChange} color={color} />;
};
