import superagent from 'superagent';

const basePath = `http://10.0.1.151/api/${process.env.REACT_APP_API_USER}`;

const methods = ['get', 'post', 'put', 'patch', 'delete'];

class ApiClient {
	constructor() {
		methods.forEach((method) =>
			this[method] = (path: string, { params, data }: any = {}) => new Promise((resolve, reject) => {
				// superagent uses 'del' instead of 'delete'
				const saMethod = method === 'delete' ? 'del' : method;

				const request = superagent[saMethod](basePath + path);

				if (params) {
					request.query(params);
				}

				if (data) {
					request.send(data);
				}

				request.end(
					(err: any, { body }: any = {}) => {
						err ? reject(body || err) : resolve(body);
					}
				);
			}));
	}
}

export default ApiClient;