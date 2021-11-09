import * as Styled from './styles';

export type ButtonProps = {
  children: React.ReactNode;
  fontBig?: boolean;
  big?: boolean;
  primary?: boolean;
  dark?: boolean;
};
export const Button = ({
  children,
  fontBig = false,
  big = false,
  primary = true,
  dark = false,
}: ButtonProps) => {
  return (
    <Styled.Button fontBig={fontBig} big={big} primary={primary} dark={dark}>
      {children}
    </Styled.Button>
  );
};
