import React, { useMemo, useRef } from 'react';
import { Slider } from 'components/Slider';

import styled from 'styled-components';

type Props = {
  tooltipBox: string;
  value: number;
  onChange: (value: number) => void;
  max: number;
  min: number;
  step?: number;
};

export const Tooltip = (props: Props) => {
  const box = useRef(null);
  const slider = useRef(null);
  const TooltipBox = styled.div`
    position: absolute;
    min-width: 200px;
    z-index: 10;
    top: calc(100% - 5.5rem);
    left: ${(100 * (props.value - props.min)) / (props.max - props.min)}%;
    transform: translateY(-50%);
    background-color: black;
    color: white;
    padding: 0.5em 1em;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
  `;

  const step = useMemo(() => props.step ?? 1, [props.step]);

  return (
    <>
      <div className="columns is-mobile is-vcentered">
        <div className="column is-one-fifth has-text-right">
          <button className="button" onClick={() => props.onChange(props.value - step)}>
            {props.min}
          </button>
        </div>
        <div className="column">
          <Slider ref={slider} value={props.value} onChange={props.onChange} min={props.min} max={props.max} />
        </div>
        <div className="column is-one-fifth has-text-left">
          <button className="button" onClick={() => props.onChange(props.value + step)}>
            {props.max}
          </button>
        </div>
      </div>
      <TooltipBox ref={box}>{props.tooltipBox}</TooltipBox>
    </>
  );
};
