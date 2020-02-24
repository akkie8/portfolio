import React from 'react';
import styled from 'styled-components';

type Props = {
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Wrap = styled.div`
  font-size: 20;
`;

const _Template_props: React.FC<Props> = () => {
  return (
    <Wrap>
      _Template_props
    </Wrap>
  )
}
export default _Template_props;
