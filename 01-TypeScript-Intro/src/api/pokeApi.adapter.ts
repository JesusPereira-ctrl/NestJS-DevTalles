import axios from 'axios';

export class PokeApiFetchAdapter {
  async get<T>(url: string): Promise<T> {
    const resp = await fetch(url);
    const data: T = await resp.json();

    return data;
  }
}

export class PokeApiAdapter {
  private readonly axios = axios;

  async get<T>(url: string): Promise<T> {
    const { data } = await this.axios.get<T>(url);
    return data;
  }

  async post(_url: string, _payload: any) {}

  async patch(_url: string, _payload: any) {}

  async delete(_url: string) {}
}
