import { Dispatch, SetStateAction } from 'react';

export interface HeaderProps {
  setIsHeaderMenuOpen: Dispatch<SetStateAction<boolean>>;
  date: string;
  setDate: Dispatch<SetStateAction<string>>;
}
