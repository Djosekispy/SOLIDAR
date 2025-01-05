
# **S.O.L.I.D.A.R**


## **Descrição do Projeto**  
Este projeto é uma aplicação desenvolvida utilizando uma arquitetura limpa, modular e escalável, com foco na separação de responsabilidades entre camadas. Ele foi projetado para facilitar a manutenção, teste e expansão, reduzindo o custo de exploração e mitigando riscos de alterações não intencionais.

A arquitetura segue os princípios descritos por Robert C. Martin no livro _"Clean Architecture"_, implementando camadas bem definidas:

1. **Request**: Gerenciamento de requisições externas (API).
2. **Integration**: Repositórios e serviços encapsulando regras de negócio.
3. **View**: Interface de usuário para interação.


## **Estrutura do Projeto**

A estrutura de pastas foi organizada para refletir claramente as responsabilidades de cada camada, sem esquecer:

```plaintext
SOLIDAR/
├── request/
│   ├── utils/
│   ├── method/
│   │   ├── POST/
│   │   └── GET/
├── integration/
│   ├── model/
│   ├── repository/
│   │   ├── implementation/
│   │   └── interface/
│   ├── service/
│   │   ├── implementation/
│   │   └── interface/
```

---

## **Fluxo de Comunicação**

O fluxo de comunicação entre as camadas segue este padrão:

1. A **View** solicita dados ou ações à camada **Integration**.
2. A camada **Integration** delega tarefas para os **Repositórios**, que interagem com a camada **Request** para obter ou enviar dados às APIs externas.
3. Dados retornados pela camada **Request** passam pelos **Repositórios**, onde são processados e enviados aos **Serviços**, que aplicam regras de negócio e formatam os dados.
4. Os dados processados são retornados à **View**, atualizando a interface do usuário.

---

## **Tecnologias Utilizadas**

- **Linguagem**: TypeScript  
- **Frameworks e Bibliotecas**:  
  - Axios (para requisições HTTP)  
  - React Native (para interface de usuário)  
- **Arquitetura**: S.O.L.I.D.A.R  
- **Padrões de Design**: Repository Pattern, Dependency Injection  
- **Testes**: Jest 

---

## **Funcionalidades Principais**

### **Autenticação de Usuários**
- Login com validação de e-mail e senha.
- Tratamento de erros centralizado para mensagens amigáveis ao usuário.

### **Separação de Camadas**
- Requisições API gerenciadas pela camada `Request` com Axios.  
- Lógica de negócio encapsulada na camada `Service`.  
- Modelos de domínio na camada `Repository` garantem integridade de dados.

### **Facilidade de Expansão**
- Adição de novos endpoints sem impacto direto na View.  
- Camadas desacopladas tornam o sistema testável e escalável.

---

## **Como Executar o Projeto**

### **Pré-requisitos**
- Node.js (v16 ou superior)  
- Gerenciador de Pacotes (npm ou yarn)  

### **Passo a Passo**
1. Clone o repositório:
   ```bash
   git clone https://github.com/usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` com os seguintes campos:
     ```env
     API_BASE_URL=https://sua-api.com
     ```

4. Execute o projeto:
   ```bash
   npm start
   # ou
   yarn start
   ```

---

## **Arquitetura em Detalhes**

### **Request**
Gerencia todas as requisições para APIs externas.  
Exemplo de método de login:
```typescript
class PostRequests implements IPostRequest {
  async login(email: string, password: string): Promise<ILoginResponse> {
    try {
      const { data } = await api.post<ILoginResponse>('/login', { email, password });
      return {
        sucess: true,
        token: data.token,
        seller: data.seller,
        message: "Login feito com sucesso"
      };
    } catch (error) {
      const message = isAxiosError(error) && error.response ? error.response.data : error;
      return {
        sucess: false,
        message
      };
    }
  }
}
```

### **Integration**
Centraliza regras de negócio e manipulação de dados.  
Exemplo de repositório:
```typescript
// Repository
class UserImplementation implements IUserRepository {
  constructor(private postMethod: IPostRequest) {}
  login = async (email: string, password: string): Promise<Euser> => {
        const response = await this.postMethod.login(email, password);
        if(response.sucess){
            return new User(response?.seller as Euser);
        }
        throw response.message;
  };
}

// Service
class AuthService implements IAuthService {
  constructor(private userRepository: IUserRepository) {}

  signIn = async (email: string, password: string) => {
    try {
      const sanitizedEmail = email.trim().toLowerCase();
      const sanitizedPassword = password.trim();
      const user =  await this.userRepository.login(sanitizedEmail, sanitizedPassword);
      return user;
    } catch (error) {
       throw (error as any).message
    }
  };
}
```

---

## **Contribuindo**

Contribuições são bem-vindas!  
Para colaborar:
1. Faça um fork do projeto.
2. Crie uma branch com sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Submeta um pull request.

---

## **Licença**

Este projeto está licenciado sob a [Licença MIT](LICENSE).  

---

## **Contato**

Para dúvidas ou sugestões:  
**Nome do Desenvolvedor**  
E-mail: [Osvaldo Victor](mailto:globof129@gmail.com)  
GitHub: [github.com/Djosekispy](https://github.com/Djosekispy)  

---
