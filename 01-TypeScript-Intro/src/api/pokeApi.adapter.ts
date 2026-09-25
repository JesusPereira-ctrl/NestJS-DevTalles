import axios from 'axios';

export class PokeApiAdapter {
  private readonly axios = axios;

  async get(url: string) {
    const { data } = await this.axios.get(url);
    return data;
  }

  async post(_url: string, _payload: any) {}

  async patch(_url: string, _payload: any) {}

  async delete(_url: string) {}
}
