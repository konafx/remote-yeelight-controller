import { useState } from 'react';
import { Toggler } from 'components/Toggler';
import { DebouncedPicker } from 'components/DebouncedPicker';
import { Activeness } from 'components/Activeness';
import { Slider } from 'components/Slider';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

const ControlPanel = () => {
  const [check, setCheck] = useState(false);
  const [color, setColor] = useState('#f0f0f0');
  const [brightness, setBrightness] = useState(50);
  const [min, max] = [0, 100];

  const handleBrightness = (newValue: number) => {
    if (newValue < min) {
      setBrightness(min);
      return;
    }
    if (newValue > max) {
      setBrightness(max);
      return;
    }
    setBrightness(newValue);
  };

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
            <div className="column is-one-fifth has-text-right">
              <button className="button is-small" onClick={() => handleBrightness(brightness - 1)}>
                <FaAngleLeft />
              </button>
            </div>
            <div className="column">
              <Slider value={brightness} onChange={handleBrightness} min={min} max={max} />
            </div>
            <div className="column is-one-fifth has-text-left">
              <button className="button" onClick={() => handleBrightness(brightness + 1)}>
                <FaAngleRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlPanel;
