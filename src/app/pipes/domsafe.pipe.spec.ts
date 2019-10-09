import { DOMsafePipe } from './domsafe.pipe';

describe('DOMsafePipe', () => {
  it('create an instance', () => {
    const pipe = new DOMsafePipe();
    expect(pipe).toBeTruthy();
  });
});
