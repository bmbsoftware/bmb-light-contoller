export interface Action {
	type: string;
	payload: any;
}

export interface ApiAction {
	promise: (client: any) => any;
	result?: any;
	error?: any;
}