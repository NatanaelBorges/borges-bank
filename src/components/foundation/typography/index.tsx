import * as Styled from './styles';

export type TypographyProps = {
  children: React.ReactNode;
  align?: 'start' | 'end' | 'center' | 'justify';
  italic?: boolean;
  uppercase?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  size?: 'xsmall' | 'small' | 'medium' | 'big';
  underline?: boolean;
  bold?: boolean;
  color?: 'primary' | 'secondary' | 'white' | 'black';
  display?:
    | 'none'
    | 'display1'
    | 'display2'
    | 'display3'
    | 'display4'
    | 'display5'
    | 'display6';
};

export const Typography = ({
  children,
  align = 'start',
  italic = false,
  uppercase = false,
  as = 'h1',
  display = 'none',
  size = 'medium',
  underline = false,
  bold = false,
  color = 'primary',
}: TypographyProps) => {
  return (
    <Styled.Text
      align={align}
      italic={italic}
      uppercase={uppercase}
      as={as}
      display={display}
      size={size}
      underline={underline}
      bold={bold}
      color={color}
    >
      {children}
    </Styled.Text>
  );
};
