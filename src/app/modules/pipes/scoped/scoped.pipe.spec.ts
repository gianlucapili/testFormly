import { ScopedPipe } from './scoped.pipe';

describe('ScopedPipe', () => {
  it('create an instance', () => {
    const pipe = new ScopedPipe();
    expect(pipe).toBeTruthy();
  });
});
