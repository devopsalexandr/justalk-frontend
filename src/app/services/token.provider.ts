export class TokenProvider {

  public setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public clearToken(): void {
    localStorage.removeItem('token');
  }

  public hasToken(): boolean {
    return this.getToken() !== null;
  }
}
