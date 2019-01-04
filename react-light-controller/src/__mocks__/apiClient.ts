import { ApiClient } from '../applicationTypes';

export default class ApiClientImpl implements ApiClient {
	public get = (path: string, { params, data }: any = {}) => new Promise((resolve, reject) => true);
	public post = (path: string, { params, data }: any = {}) => new Promise((resolve, reject) => true);
	public put = (path: string, { params, data }: any = {}) => new Promise((resolve, reject) => true);
	public patch = (path: string, { params, data }: any = {}) => new Promise((resolve, reject) => true);
	public delete = (path: string, { params, data }: any = {}) => new Promise((resolve, reject) => true);
}
