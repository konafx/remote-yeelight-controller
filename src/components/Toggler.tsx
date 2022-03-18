import React, { useState } from 'react';
import { getHtmlId } from 'utils';
import 'bulma-switch/dist/css/bulma-switch.min.css';

type Props = {
  label: string;
  check: boolean;
  onChange: (check: boolean) => void;
}

export const Toggler = (props: Props) => {
  const [id] = useState(() => getHtmlId());

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(!props.check);
  };

  return (
    <div className="field">
      <input id={id} type="checkbox" className="switch control"
        onChange={handle} checked={props.check}
      />
      <label htmlFor={id}>{props.label}</label>
    </div>
  );
};
