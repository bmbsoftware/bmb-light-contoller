export interface LightState {
	on: boolean;
	bri?: number;
	hue?: number;
	alert?: string;
	reachable?: boolean;
}

export interface SoftwareUpdate {
	state: string;
	lastInstall: string;
}

export interface Light {
	id: number;
	state: LightState;
	swupdate: SoftwareUpdate;
	type: string;
	name: string;
	modelid?: string;
	manufacturername?: string;
	uniqueid?: string;
	swversion?: string;
	swconfigid?: string;
	productid?: string;
}
