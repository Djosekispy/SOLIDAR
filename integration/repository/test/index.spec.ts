import { isAxiosError } from "axios";
import { userImplementation } from "../implementation";

describe('Testando o Login', () => {

  it.skip('Deve retornar err quando a base Url não for definida', async () => {
    try {
        await userImplementation.login('glob@gmail.com', '123');
    } catch (error) {
        expect((error as any).message).toBe('Invalid URL: undefined/seller/login');
    }
  });
  it('Deve retornar : Ops! Nenhuma conta associada.', async () => {
    try {
        await userImplementation.login('glob@gmail.com', '123');
    } catch (error) {
        expect(isAxiosError(error) ? error.response?.data.message : error).toBe('Ops! Nenhuma conta associada.');
    }
  });

  it.skip('Deve retornar: Sucesso', async () => {
    try {
      const { data } = await userImplementation.login('globof129@gmail.com', '123');
      expect(data.seller).toMatchObject({
        id: expect.any(Number),
        reference: expect.any(String),
        username: expect.any(String),
        email: expect.any(String),
        password: expect.any(String),
        address: expect.any(String),
        countState: expect.any(String),
        biNumber: expect.any(String),
        phoneNumber: expect.any(String),
        emailVerified: expect.any(Boolean),
        verificationCode: expect.any(String),
        resetCode: expect.any(String),
        createdAt: expect.any(String),
        biUrl: expect.any(String),
      });
    } catch (error) {
      console.error('Erro inesperado no login:', error);
      throw error;
    }
  });
  it.skip('Erro de conexão com internet', async () => {
    try {
        await userImplementation.login('glob@gmail.com', '123');
    } catch (error) {
        expect((error as any).message).toBe('getaddrinfo ENOTFOUND landaki-backend.vercel.app');
    }
  });
});
