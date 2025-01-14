import { isAxiosError } from "axios";
import { authService } from "..";

describe('Testando o Login', () => {
  it('Deve retornar : Ops! Nenhuma conta associada.', async () => {
    try {
        await authService.signIn('glob@gmail.com', '123');
    } catch (error) {
        expect((error as any).message).toBe('Ops! Nenhuma conta associada.');
    }
  });

  it('Deve retornar: Sucesso', async () => {
    try {
      const user = await authService.signIn('globof129@gmail.com', '123');
      expect(user.seller).toMatchObject({
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
        await authService.signIn('glob@gmail.com', '123');
    } catch (error) {
        expect(error).toBe('getaddrinfo ENOTFOUND landaki-backend.vercel.app');
    }
  });

  
});
