'use client';
import { useGlobalState } from '@/app/context/globalProvider';

import React from 'react';
import { ButtonStyled } from './styles';

interface Props {
  icon?: React.ReactNode;
  name?: string;
  background?: string;
  padding?: string;
  borderRad?: string;
  fw?: string;
  fs?: string;
  click?: () => void;
  type?: 'submit' | 'button' | 'reset' | undefined;
  border?: string;
  color?: string;
}

function Button({ icon, name, background, padding, borderRad, fw, fs, click, type, border, color }: Props) {
  const { theme } = useGlobalState();

  return (
    <ButtonStyled
      type={type}
      style={{
        background: background,
        padding: padding || '0.5rem 1rem',
        borderRadius: borderRad || '0.5rem',
        fontWeight: fw || '500',
        fontSize: fs,
        border: border || 'none',
        color: color || theme.colorGrey0,
      }}
      theme={theme}
      onClick={click}
    >
      {icon && icon}
      {name}
    </ButtonStyled>
  );
}

export default Button;
