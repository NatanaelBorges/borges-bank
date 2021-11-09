import * as Styled from './styles';

export type VideoProps = {
  src: string;
  poster?: string;
};

export const Video = ({ src, poster }: VideoProps) => {
  return (
    <Styled.Video data-testid="MyVideo" poster={poster} autoPlay loop muted>
      <source src={src} type="video/mp4" />
    </Styled.Video>
  );
};
