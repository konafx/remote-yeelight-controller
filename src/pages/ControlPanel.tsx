import {useState, useEffect} from 'react';
import {Toggler} from 'components/Toggler';
import {DebouncedPicker} from 'components/DebouncedPicker';
import {Activeness} from 'components/Activeness';

const ControlPanel = () => {
  const [check, setCheck] = useState(false);
  const [color, setColor] = useState('#f0f0f0');

  return (
    <section className="section">
      <div className="container">
        <div className="content">
          <Activeness />
          <Toggler check={check} onChange={() => setCheck(!check)} label="Light"/>
          <p>current switch is: {check ? "on":"off"}</p>
          <DebouncedPicker color={color} onChange={setColor} time={1000} />
          <p>current color is: {color}</p>
        </div>
      </div>
    </section>
  );
};

export default ControlPanel;
