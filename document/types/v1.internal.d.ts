import { ChannelCredentials, Client, ClientUnaryCall, handleUnaryCall, requestCallback, ServiceDefinition } from 'grpc';
export interface IDocumentRuleLimits {
    maxFileCount?: number;
    maxValueCount?: number;
}
export interface IDocumentRule {
    documentKind?: string;
    limits?: IDocumentRuleLimits;
    allowedAudiences?: Array<string>;
}
export interface ISetDocumentRuleRequest {
    documentRule: IDocumentRule;
}
export interface ISetDocumentRuleResponse {
    success: boolean;
}
export interface IDocumentAdminServiceImplementation {
    setDocumentRule: handleUnaryCall<ISetDocumentRuleRequest, ISetDocumentRuleResponse>;
}
export interface IDocumentAdminServiceClient extends Client {
    setDocumentRule(request: ISetDocumentRuleRequest, callback: requestCallback<ISetDocumentRuleResponse>): ClientUnaryCall;
}
export declare type TDocumentAdminServiceClient = new (address: string, credentials: ChannelCredentials, options?: any) => IDocumentAdminServiceClient;
export interface IPackageDefinition {
    document: {
        v1: {
            DocumentAdminService: TDocumentAdminServiceClient & {
                service: ServiceDefinition<IDocumentAdminServiceImplementation>;
            };
        };
    };
}
