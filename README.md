
# Projeto de API de Livraria com Node.js e MongoDB

Este projeto consiste no desenvolvimento de uma API para gerenciar uma livraria, utilizando Node.js e MongoDB. A API permite realizar operações CRUD (Create, Read, Update, Delete) para livros, autores. Com uma arquitetura RESTful, a API oferece endpoints para a integração com aplicações front-end e outras plataformas.


## Funcionalidades

- **Gerenciamento de Livros:** Criação, leitura, atualização e exclusão de informações sobre livros.

- **Gerenciamento de Autores:** Criação, leitura, atualização e exclusão de perfis de autores.

- **Pesquisa e Filtros:** Endpoints para pesquisar livros por título, autor e filtrar resultados com base em critérios específicos.



## Stack utilizada

**Node.js:** Plataforma de desenvolvimento back-end para construir a API.

**Express.js:** Framework para Node.js, utilizado para criar e gerenciar as rotas da API.

**MongoDB:** Banco de dados NoSQL utilizado para armazenar e gerenciar os dados da livraria.

**Mongoose:** Biblioteca de modelagem de dados para 
MongoDB, facilitando a interação entre a aplicação Node.js e o banco de dados.
## Documentação da API

#### Retorna todos os livros

```http
  GET /api/livros
```

#### Retorna um livro

```http
  GET /api/livros/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do livro que você deseja cadastrar |

#### Cadastar um livro

```http
  POST /api/livros
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O TÍTULO do livro que você quer |

#### Editar livro

```http
  PUT /api/livros/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do livro que você deseja atualizar|

#### Deletar um livro

```http
  DELETE /api/livros/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do livro que você deseja excluir |

####

#### Retorna todos os livros

```http
  GET /api/livros
```

#### Retorna um livro

```http
  GET /api/autor/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do livro que você deseja cadastrar |

#### Cadastar um livro

```http
  POST /api/autor
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O NOME do autor que você quer |

#### Editar livro

```http
  PUT /api/autor/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do autor que você deseja atualizar|

#### Deletar um livro

```http
  DELETE /api/autor/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do autor que você deseja excluir |

