import React, {Fragment} from 'react';

function Visible({visible, children}) {
  return visible ? children : <Fragment />;
}

export default Visible;
