export interface OperationGroup {
	percentComplete: number;
	numberOfItems: number;
}

export interface ApplicationState {
	loading: boolean;
	operationGroups: OperationGroup[]; 
}
