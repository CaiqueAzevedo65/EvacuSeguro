export const newsletterService = {
  async subscribeToNewsletter(email) {
    if (!email) {
      throw new Error('Por favor, insira um e-mail válido');
    }

    const apiURL = import.meta.env.VITE_APP_NEWSLETTER_ENDPOINT;

    const response = await fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error('Erro ao cadastrar e-mail. Tente novamente.');
    }
    return response;
  }
};