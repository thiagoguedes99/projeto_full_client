import { ProdutosPage } from './app.po';

describe('produtos App', () => {
  let page: ProdutosPage;

  beforeEach(() => {
    page = new ProdutosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
