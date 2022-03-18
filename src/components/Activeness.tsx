import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "hooks";
import { getHtmlId } from "utils";
import {Toggler} from "./Toggler";
import { activate, deactivate } from "slices/assassin";

export const Activeness = () => {
  const activeness = useAppSelector((state) => state.assassin.value);
  const [label, setLabel] = useState('Active')
  useEffect(() => setLabel(activeness ? 'Active' : 'Deactive'), [activeness])

  const dispatch = useAppDispatch();
  useEffect(() => {
    // TODO: dev 
    setTimeout(() => {
      dispatch(activeness ? deactivate() : activate())
    }, 5*1000);
  }, [activeness, dispatch]);

  return <Toggler check={activeness} onChange={()=>function(){}} label={label} disabled />;
};

