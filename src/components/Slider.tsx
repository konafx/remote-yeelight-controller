import React from 'react';
import 'bulma-slider/dist/css/bulma-slider.min.css';

type Props = {
  value: number;
  onChange: (value: number) => void;
  max: number;
  min: number;
  step?: number;
  ref?: React.MutableRefObject<null>;
};

export const Slider = (props: Props) => {
  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: number = +e.target.value;
    props.onChange(newValue);
  };

  return (
    <input
      className="slider is-fullwidth"
      type="range"
      max={props.max}
      min={props.min}
      step={props.step ?? 1}
      value={props.value}
      onChange={handler}
      ref={props.ref}
    />
  );
};
