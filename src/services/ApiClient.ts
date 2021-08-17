type BodyResponse = {
  body?: any
  error?: any
}

class ApiClient {
  public static get(url: string): Promise<any> {
    return this._handleFetch(url, {
      method: 'GET'
    })
  }

  private static async _handleFetch(
    url: string,
    options: RequestInit
  ): Promise<any> {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers
      }
    })

    const { body } = await this._parseBody(response)

    return body
  }

  private static async _parseBody(response: Response): Promise<BodyResponse> {
    try {
      const body = await response.json()
      return { body, error: null }
    } catch (error) {
      return { body: null, error }
    }
  }
}

export default ApiClient
