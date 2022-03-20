import { useState, useRef } from 'react';
import { Toggler } from 'components/Toggler';
import { DebouncedPicker } from 'components/DebouncedPicker';
import { Activeness } from 'components/Activeness';
import { Slider } from 'components/Slider';

const ControlPanel = () => {
  const inputRef = useRef(null);
  const [check, setCheck] = useState(false);
  const [color, setColor] = useState('#f0f0f0');
  const [brightness, setBrightness] = useState(50);

  return (
    <section className="section">
      <div className="container">
        <div className="content has-text-centered">
          <Activeness />
          <Toggler check={check} onChange={() => setCheck(!check)} label="Light" />
          <p>current switch is: {check ? 'on' : 'off'}</p>
          <DebouncedPicker color={color} onChange={setColor} time={1000} className="mx-auto" />
          <p>current color is: {color}</p>
          <div className="columns is-mobile is-vcentered">
            <div className="column is-one-fifth has-text-right"> 0 </div>
            <div className="column">
              <Slider ref={inputRef} value={brightness} onChange={setBrightness} min={0} max={100} />
            </div>
            <div className="column is-one-fifth has-text-left">100</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlPanel;
