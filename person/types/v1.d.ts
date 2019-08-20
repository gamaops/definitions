import { ChannelCredentials, Client, ClientUnaryCall, handleUnaryCall, requestCallback, ServiceDefinition } from 'grpc';
export declare enum EVerificationChannel {
    EMAIL = 0,
    CELLPHONE = 1
}
export interface ILead {
    leadId?: string;
    name?: string;
    email?: string;
    cellphone?: string;
    validationChannel?: EVerificationChannel;
    createdAt?: Date | string;
    createdJobId?: string;
    updatedAt?: Date | string;
    updatedJobId?: string;
}
export interface ICreateLeadRequest {
    lead: ILead;
}
export interface ICreateLeadResponse {
    leadId: string;
}
export interface IVerifyLeadRequest {
    personId: string;
    validationCode: string;
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
export declare type TPersonServiceClient = new (address: string, credentials: ChannelCredentials, options?: any) => IPersonServiceClient;
export interface IPackageDefinition {
    person: {
        v1: {
            PersonService: TPersonServiceClient & {
                service: ServiceDefinition<IPersonServiceImplementation>;
            };
        };
    };
}
