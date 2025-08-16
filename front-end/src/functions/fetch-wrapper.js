/* This is a wrapper for the javascript fetch function*/

async function fetchWrapper(API_URL) {
  try {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    };
    const response = await fetch(API_URL, requestOptions); 
    if (response.ok) {
      const data = await response.json(); 
      return data;
    } 
  } catch (error) {
    console.error('Network or other error:', error);
    return {message: 'Network or other error:', err: true};
  }
}

export default fetchWrapper;