import { Pracownik } from './pracownik';

describe('Pracownik', () => {
  it('should create an instance', () => {
    expect(new Pracownik("","","", "", "", "")).toBeTruthy();
  });
});
