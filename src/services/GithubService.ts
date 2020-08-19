import ApiClient from './ApiClient'

class GithubService {
  public static async getGithubAvatar () {
    const url = 'https://api.github.com/users/miangame'

    const ghUser = await ApiClient.get(url)

    return ghUser
  }
}

export default GithubService
