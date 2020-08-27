const BASE_URL = 'https://td5-presentation.firebaseio.com/';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) => delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  members: {
    list() {
      return callApi('/members.json');
    },
    create(member) {
      return callApi('/members.json', {
        method: 'POST',
        body: JSON.stringify(member),
      });
    },
    read(idMember) {
      return callApi(`/members/${idMember}.json`);
    },
    update(idMember, updates) {
      return callApi(`/members/${idMember}.json`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(idMember) {
      return callApi(`/members/${idMember}.json`, {
        method: 'DELETE',
      });
    },
  },
};

export default api;
