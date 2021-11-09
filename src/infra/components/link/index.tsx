import NextLink from 'next/link';

export type LinkProps = {
  children: React.ReactNode;
  href?: string;
};

function Link({ children, href }: LinkProps) {
  return (
    <NextLink href={href} passHref>
      {children}
    </NextLink>
  );
}

export default Link;
