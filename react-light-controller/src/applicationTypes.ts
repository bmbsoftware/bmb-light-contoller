import { AppDomainState } from 'domains/app/reducer';
import { LightsDomainState } from 'domains/lights/reducer';
import { EntityState } from 'rootReducer';

export interface Action {
	type?: string;
	payload?: any;
}

export interface ApiAction extends Action {
	promise?: (client: any) => any;
}

export interface ApiResultAction extends Action {
	result?: any;
}

export interface ApiClient {
	get: (path: string, { params, data }?: any) => Promise<any>; 
	post: (path: string, { params, data }?: any) => Promise<any>; 
	put: (path: string, { params, data }?: any) => Promise<any>; 
	patch: (path: string, { params, data }?: any) => Promise<any>; 
	delete: (path: string, { params, data }?: any) => Promise<any>; 
}

export interface ApplicationState {
	domains: {
		app: AppDomainState;
		lights: LightsDomainState;
	};
	entities: EntityState;
}
