import { useEffect, useState } from 'react';
import { Keyboard, Platform, KeyboardEventName } from 'react-native';

export type KeyboardType = 'show' | 'hide';

export default function useKeyboard() {
  const [keyboard, setKeyboard] = useState<KeyboardType>('hide');

  useEffect(() => {
    const keyboardShow = () => {
      setKeyboard('show');
    };
    const keyboardHide = () => {
      setKeyboard('hide');
    };

    // Only 'Did' events are available on android
    let showListener: KeyboardEventName = 'keyboardWillShow';
    let hideListener: KeyboardEventName = 'keyboardWillHide';
    if (Platform.OS === 'android') {
      showListener = 'keyboardDidShow';
      hideListener = 'keyboardDidHide';
    }
    Keyboard.addListener(showListener, keyboardShow);
    Keyboard.addListener(hideListener, keyboardHide);

    return () => {
      Keyboard.removeListener(showListener, keyboardShow);
      Keyboard.removeListener(hideListener, keyboardHide);
    };
  }, [keyboard]);

  return keyboard;
}
