import React from 'react';
import {render} from '@testing-library/react';
import * as Stories from './Button.stories';

describe('<Button>', () => {
  it('should be a button', () => {
    const {debug} = render(<Stories.Large label='button'/>);
    debug()
  });
});
