import {
	ChannelCredentials,
	Client,
	ClientUnaryCall,
	handleUnaryCall,
	requestCallback,
	ServiceDefinition,
} from 'grpc';

import * as kinds from './kinds';

export interface IDocumentFile {
	documentId?: string;
	fileId?: string;
	isValid?: boolean;
	validatedAt?: Date | string;
	createdAt?: Date | string;
	createdJobId?: string;
	updatedAt?: Date | string;
	updatedJobId?: string;
}

export enum DocumentValue {
	BRACPF = 'braCpf',
	BRACNH = 'braCpf',
}

export interface IDocument {
	documentId?: string;
	subject?: string;
	audience?: string;
	braCpf?: kinds.IBraCpf;
	braCnh?: kinds.IBraCnh;
	value?: DocumentValue;
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

export type TDocumentServiceClient = new (
	address: string,
	credentials: ChannelCredentials,
	options?: any,
) => IDocumentServiceClient;

export interface IPackageDefinition {
	document: {
		v1: {
			DocumentService: TDocumentServiceClient & {
				service: ServiceDefinition<IDocumentServiceImplementation>,
			},
		},
	};
}
