import ApiClient from './ApiClient'

class DevtoService {
  public static async getDevtoArticles () {
    const url = 'https://dev.to/api/articles?username=miangame'

    const articles = await ApiClient.get(url)

    return articles
  }

  public static async getArticle (id: string | number) {
    const url = `https://dev.to/api/articles/${id}`

    const articles = await ApiClient.get(url)

    return articles
  }
}

export default DevtoService
