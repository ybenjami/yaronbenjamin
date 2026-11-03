import { PixelCairn } from '@/components/pixel-cairn';
import { Container, PillLink, PixelLabel } from '@/components/ui';

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start gap-6 py-32">
      <PixelCairn width={84} />
      <PixelLabel accent>404</PixelLabel>
      <h1 className="text-5xl font-semibold tracking-[-0.04em] text-white">
        This page wandered off.
      </h1>
      <PillLink href="/">Back home</PillLink>
    </Container>
  );
}
