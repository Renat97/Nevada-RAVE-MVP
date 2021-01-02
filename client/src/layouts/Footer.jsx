import React, {useState} from 'react';
import styled from 'styled-components';

var footer = styled.div`text-align: center; position: absolute; bottom: 0; background: #302b2c;`

var Footer = () => {
  return (
    <div>
      <footer>Copyright Renat Norderhaug</footer>
    </div>
  );
}

export default Footer;