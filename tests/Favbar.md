# test-case - Project PraticeAutomatin

## Feature: FavBar in QaAutomation Aplication

### TC-01: Deve adicionar um item ao FavBar

- **Pré-condição:** Usuário estar Conectado na Aplicação
  1. Acessar a página de produtos.
  2. Identificar um produto válido na listagem.
  3. Clicar no botão/ícone de favoritar (FavBar) no produto.
- **Resultado Esperado:** O produto deve ser adicionado à barra de favoritos (FavBar) com sucesso.

### TC-02: Validar o funcionamento da FavBar

- **Pré-condição:** Usuário possuir um item válido visível na página
  1. Acionar a função de favoritar o item correspondente.
- **Resultado Esperado:** O comportamento de adicionar o item aos favoritos deve funcionar de forma válida sem erros no console ou falha na aplicação.

### TC-03: Adição de itens aos Favoritos

- **Pré-condição:** Usuário estar Conectado na Aplicação
  1. Visualizar e navegar por opções de produtos.
  2. Adicionar múltiplos produtos ou itens específicos à lista de favoritos.
- **Resultado Esperado:** A lista de favoritos deve ser atualizada para conter os novos itens selecionados.

### TC-04: Validar exclusão de itens na FavBar

- **Pré-condição:** Usuário deve possuir itens previamente adicionados aos favoritos
  1. Acessar a barra ou lista de favoritos (FavBar).
  2. Clicar no botão de remover/excluir de um item correspondente na lista.
- **Resultado Esperado:** O item selecionado deve ser removido e não deve mais aparecer na exibição da lista de favoritos.

### TC-05: Validar exibição da Página WishList

- **Pré-condição:** Usuário deve possuir itens favoritos e acessar a funcionalidade apropriada
  1. Interagir com o atalho da FavBar ou menu correspondente.
  2. Acessar a página dedicada de lista de desejos (WishList).
- **Resultado Esperado:** A página WishList deve ser carregada com sucesso e exibir de forma correta e visível todos os itens favoritados pelo usuário.
