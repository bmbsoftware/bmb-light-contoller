import superagent from 'superagent';
import { ApiClient } from 'applicationTypes';

class ApiClientImpl implements ApiClient {
	private performApiRequest(method: string, path: string, { params, data }: any = {}) {
		return new Promise((resolve, reject) => {
			// superagent uses 'del' instead of 'delete'
			const saMethod = method === 'delete' ? 'del' : method;

			const request = superagent[saMethod](path);

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

		});
	}

	public get = (path: string, { params, data }: any = {}) => this.performApiRequest('get', path, { params, data });
	public post = (path: string, { params, data }: any = {}) => this.performApiRequest('post', path, { params, data });
	public put = (path: string, { params, data }: any = {}) => this.performApiRequest('put', path, { params, data });
	public patch = (path: string, { params, data }: any = {}) => this.performApiRequest('patch', path, { params, data });
	public delete = (path: string, { params, data }: any = {}) => this.performApiRequest('delete', path, { params, data });
}
export default ApiClientImpl;
