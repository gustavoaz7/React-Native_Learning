import React, {
  Fragment,
  ReactNode,
  RefObject,
  createContext,
  useRef,
  useContext,
} from 'react';
import DropdownAlert from 'react-native-dropdownalert';

interface IAlertProviderProps {
  children: ReactNode;
}

type IAlert = RefObject<DropdownAlert>;

const AlertContext = createContext<IAlert>(null as any);

export const AlertConsumer = AlertContext.Consumer;

export const AlertProvider = (props: IAlertProviderProps) => {
  const alert = useRef(null);
  return (
    <Fragment>
      <AlertContext.Provider value={alert}>
        {props.children}
      </AlertContext.Provider>
      <DropdownAlert ref={alert} />
    </Fragment>
  );
};

export const useAlert = () => useContext(AlertContext);
