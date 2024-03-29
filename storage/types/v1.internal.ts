import {
	ChannelCredentials,
	Client,
	ClientUnaryCall,
	handleUnaryCall,
	requestCallback,
	ServiceDefinition,
} from 'grpc';

export interface IUploadUrlRuleLimits {
	maxFileCount?: number;
}

export interface IUploadUrlRule {
	audience?: string;
	limits?: IUploadUrlRuleLimits;
	bucketId?: string;
}

export interface ISetUploadUrlRuleRequest {
	uploadUrlRule: IUploadUrlRule;
}

export interface ISetUploadUrlRuleResponse {
	success: boolean;
}

export interface IUploadAdminServiceImplementation {
	setUploadUrlRule: handleUnaryCall<ISetUploadUrlRuleRequest, ISetUploadUrlRuleResponse>;
}

export interface IUploadAdminServiceClient extends Client {
	setUploadUrlRule(request: ISetUploadUrlRuleRequest, callback: requestCallback<ISetUploadUrlRuleResponse>): ClientUnaryCall;
}

export type TUploadAdminServiceClient = new (
	address: string,
	credentials: ChannelCredentials,
	options?: any,
) => IUploadAdminServiceClient;

export interface IPackageDefinition {
	storage: {
		v1: {
			internal: {
				UploadAdminService: TUploadAdminServiceClient & {
					service: ServiceDefinition<IUploadAdminServiceImplementation>,
				},
			}
		},
	};
}
