import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';

import ClearButton from '../ClearButton';
import Providers from '../../Providers';

describe('ClearButton', () => {
  const onPressMock = jest.fn();
  const { getByProps } = render(
    <Providers>
      <ClearButton text="Test button" onPress={onPressMock} />,
    </Providers>,
  );
  const element = getByProps({ text: 'Test button' });
  test('displays button text ', () => {
    expect(element).toBeTruthy();
  });
  test('responds to press event', () => {
    fireEvent.press(element);
    expect(onPressMock).toHaveBeenCalled();
  });
});
