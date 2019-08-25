import { ChannelCredentials, Client, ClientUnaryCall, handleUnaryCall, requestCallback, ServiceDefinition } from 'grpc';
import * as kinds from './kinds';
export interface IDocument {
    documentId?: string;
    subjectId?: string;
    braCpf?: kinds.IBraCpf;
    braCnh?: kinds.IBraCnh;
    createdAt?: Date | string;
    createdJobId?: string;
    updatedAt?: Date | string;
    updatedJobId?: string;
}
export interface IAddDocumentRequest {
    document: IDocument;
}
export interface IAddDocumentResponse {
    documentId: string;
    bucketId: string;
}
export interface IDocumentServiceImplementation {
    addDocument: handleUnaryCall<IAddDocumentRequest, IAddDocumentResponse>;
}
export interface IDocumentServiceClient extends Client {
    addDocument(request: IAddDocumentRequest, callback: requestCallback<IAddDocumentResponse>): ClientUnaryCall;
}
export declare type TDocumentServiceClient = new (address: string, credentials: ChannelCredentials, options?: any) => IDocumentServiceClient;
export interface IPackageDefinition {
    document: {
        v1: {
            DocumentService: TDocumentServiceClient & {
                service: ServiceDefinition<IDocumentServiceImplementation>;
            };
        };
    };
}
