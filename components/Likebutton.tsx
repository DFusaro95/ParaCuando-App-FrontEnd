import { useState } from 'react';

const Likebutton = () => {
  const [buttonSwitch, setButtonSwitch] = useState(false);

  const handleButton = () => {
    if (buttonSwitch) {
      setButtonSwitch(false);
    } else {
      setButtonSwitch(true);
    }
  };

  return (
    <button className="w-12 h-12" onClick={handleButton}>
      <img
        src={buttonSwitch ? '/like-enable.jpg' : '/like-disable.jpg'}
        alt="like-button  "
      />
    </button>
  );
};

export default Likebutton;
