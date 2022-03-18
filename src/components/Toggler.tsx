import React, { useState } from 'react';
import { getHtmlId } from 'utils';
import 'bulma-switch/dist/css/bulma-switch.min.css';

type Props = {
  check: boolean;
  onChange: (check: boolean) => void;
  label: string;
  disabled?: boolean;
}

export const Toggler = (props: Props) => {
  const [id] = useState(() => getHtmlId());

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(!props.check);
  };

  return (
    <div className="field">
      <input id={id} type="checkbox" className="switch"
        onChange={handle} checked={props.check}
        disabled={props.disabled}
      />
      <label htmlFor={id}>{props.label}</label>
    </div>
  );
};
