import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'hooks';
import { Toggler } from './Toggler';
import { activate, deactivate } from 'slices/assassin';

export const Activeness = () => {
  const activeness = useAppSelector((state) => state.assassin.value);

  const dispatch = useAppDispatch();

  const timeMax = 10;
  const timeMin = 2;
  useEffect(() => {
    // TODO: dev
    const time = Math.floor(Math.random() * (timeMax - timeMin) + timeMin);
    console.debug(`activeness [${time}] toggler start!`);
    setTimeout(() => {
      dispatch(activeness ? deactivate() : activate());
      console.debug(`STOP activeness [${time}] toggler`);
    }, time * 1000);
  }, [activeness, dispatch]);
  function emp() {
    // do nothing
  }

  return <Toggler check={activeness} onChange={() => emp()} label={activeness ? 'Active' : 'Deactive'} disabled />;
};
