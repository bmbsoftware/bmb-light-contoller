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
