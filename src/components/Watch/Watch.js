import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';
import Tablet from '../Tablet/Tablet';

const Watch = () => {
  const [steps, setSteps] = useState(0);

  const increaseSteps = () => {
    setSteps(steps + 1);
  };
  useEffect(() => {
    console.log(steps);
  }, [steps]);

  return (
    <div style={{ border: '2px solid purple', margin: '20px' }}>
      <h2>This is my smart watch</h2>
      <h3>My Current Steps: {steps} </h3>
      <button onClick={() => increaseSteps()}>De Dour.............</button>
      <Display name='garmin' steps={steps} />
      <Tablet />
    </div>
  );
};

export default Watch;
