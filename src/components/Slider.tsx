import React from 'react';
import 'bulma-slider/dist/css/bulma-slider.min.css';
import styled from 'styled-components';

type Props = {
  value: number;
  onChange: (value: number) => void;
  max: number;
  min: number;
  step?: number;
  ref?: React.MutableRefObject<null>;
};

const Input = styled.input`
  appearance: none;
  background: 0 0
  width: 100%;
  display: block;
  margin: 1rem 0;
  touch-action: none;
  outline: 0;
  &:focus {
    box-shadow: 0 0 3px rgb(0, 161, 255);
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none; // デフォルトのつまみのスタイルを解除
    background: #53aeff; // 背景色
    width: 24px; // 幅
    height: 24px; // 高さ
    border-radius: 50%;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15); // 影
  }
  &::-webkit-slider-runnable-track {
    animate: 0.2s;
    box-shadow: 0;
    background: linear-gradient(to right, #555, #eee);
    border-radius: 1rem;
    border: 1;
    height: 0.4rem;
    width: 100%;
  }

  // -moz-向けのつまみ
  &::-moz-range-thumb {
    background: #53aeff; // 背景色
    width: 24px; // 幅
    height: 24px; // 高さ
    border-radius: 100%; // 円形に
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15); // 影
    border: none; // デフォルトの線を消す
  }
`;

export const Slider = (props: Props) => {
  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: number = +e.target.value;
    props.onChange(newValue);
  };

  return (
    <>
      <Input
        type="range"
        max={props.max}
        min={props.min}
        step={props.step ?? 1}
        value={props.value}
        onChange={handler}
        ref={props.ref}
      />
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
    </>
  );
};
