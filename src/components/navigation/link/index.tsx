import NextLink from '../../../infra/components/link';
import * as Styled from './styles';

export type LinkProps = {
  children: React.ReactNode;
  link: string;
  onPress?(): void;
  newTab?: boolean;
};

export const Link = ({
  children,
  link,
  onPress,
  newTab = false,
}: LinkProps) => {
  const target = newTab ? '_blank' : '_self';
  const nextLink = link.match(/^\//) ? true : false;

  if (nextLink) {
    return (
      <NextLink href={link}>
        <Styled.Link target={target} onClick={onPress}>
          {children}
        </Styled.Link>
      </NextLink>
    );
  }

  return (
    <Styled.Link href={link} target={target} onClick={onPress}>
      {children}
    </Styled.Link>
  );
};
