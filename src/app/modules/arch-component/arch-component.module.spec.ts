import { ArchComponentModule } from './arch-component.module';

describe('ArchComponentModule', () => {
  let archComponentModule: ArchComponentModule;

  beforeEach(() => {
    archComponentModule = new ArchComponentModule();
  });

  it('should create an instance', () => {
    expect(archComponentModule).toBeTruthy();
  });
});
