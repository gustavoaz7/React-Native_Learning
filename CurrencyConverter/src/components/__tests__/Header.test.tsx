import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import Header from '../Header';
import Providers from '../../Providers';

describe('Header', () => {
  const onPressMock = jest.fn();
  const { getByProps } = render(
    <Providers>
      <Header onPress={onPressMock} />,
    </Providers>,
  );
  test('displays gear image ', () => {
    const imageElement = getByProps({ resizeMode: 'contain' });
    expect(imageElement).toBeTruthy();
  });
  test('responds to press event', () => {
    const touchableElement = getByProps({ useOpacity: true });
    fireEvent.press(touchableElement);
    expect(onPressMock).toHaveBeenCalled();
  });
});
