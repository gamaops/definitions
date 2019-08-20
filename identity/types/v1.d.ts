import { ChannelCredentials, Client, ClientUnaryCall, handleUnaryCall, requestCallback, ServiceDefinition } from 'grpc';
export declare enum ValidationChannel {
    EMAIL = 0,
    CELLPHONE = 1
}
export interface ISignUpLead {
    signUpId?: string;
    name?: string;
    email?: string;
    cellphone?: string;
    validationChannel?: ValidationChannel;
    createdAt?: Date | string;
    createdJobId?: string;
    updatedAt?: Date | string;
    updatedJobId?: string;
    signedUpAt?: Date | string;
    signedUpJobId?: string;
}
export interface ISignUpLeadRequest {
    signUpLead: ISignUpLead;
}
export interface ISignUpResponse {
    signUpId: string;
}
export interface IValidateSignUpRequest {
    signUpId: string;
    validationCode: string;
}
export interface IValidateSignUpResponse {
    success: boolean;
    identityToken?: string;
}
export interface ISignUpServiceImplementation {
    signUpLead: handleUnaryCall<ISignUpLeadRequest, ISignUpResponse>;
    validateSignUp: handleUnaryCall<IValidateSignUpRequest, IValidateSignUpResponse>;
}
export interface ISignUpServiceClient extends Client {
    signUpLead(request: ISignUpLeadRequest, callback: requestCallback<ISignUpResponse>): ClientUnaryCall;
    validateSignUp(request: IValidateSignUpRequest, callback: requestCallback<IValidateSignUpResponse>): ClientUnaryCall;
}
export declare type TSignUpServiceClient = new (address: string, credentials: ChannelCredentials, options?: any) => ISignUpServiceClient;
export interface IPackageDefinition {
    identity: {
        v1: {
            SignUpService: TSignUpServiceClient & {
                service: ServiceDefinition<ISignUpServiceImplementation>;
            };
        };
    };
}
