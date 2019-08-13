import {
	ChannelCredentials,
	Client,
	ClientUnaryCall,
	handleUnaryCall,
	requestCallback,
	ServiceDefinition,
} from 'grpc';

export interface ILead {
	personId?: string;
	name?: string;
	email?: string;
	cellphone?: string;
}

export interface ICreateLeadRequest {
	lead: ILead;
}

export interface ICreateLeadResponse {
	personId: string;
}

export interface IVerifyLeadRequest {
	personId: string;
	code: string;
}

export interface IVerifyLeadResponse {
	success: boolean;
}

export interface IPersonServiceImplementation {
	createLead: handleUnaryCall<ICreateLeadRequest, ICreateLeadResponse>;
	verifyLead: handleUnaryCall<IVerifyLeadRequest, IVerifyLeadResponse>;
}

export interface IPersonServiceClient extends Client {
	createLead(request: ICreateLeadRequest, callback: requestCallback<ICreateLeadResponse>): ClientUnaryCall;
	verifyLead(request: IVerifyLeadRequest, callback: requestCallback<IVerifyLeadResponse>): ClientUnaryCall;
}

export type TPersonServiceClient = new (
	address: string,
	credentials: ChannelCredentials,
	options?: any,
) => IPersonServiceClient;

export interface IPackageDefinition {
	person: {
		v1: {
			PersonService: TPersonServiceClient & {
				service: ServiceDefinition<IPersonServiceImplementation>,
			},
		},
	};
}
