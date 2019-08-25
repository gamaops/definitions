import {
	ChannelCredentials,
	Client,
	ClientUnaryCall,
	handleUnaryCall,
	requestCallback,
	ServiceDefinition,
} from 'grpc';

export enum FileProcessor {
	NONE = 0,
	DOCUMENT = 1.
}

export enum Status {
	STORED = 0,
	UPLOADING = 1,
	FAILED = 2,
}

export interface IFile {
	fileId?: string;
	path?: string;
	name?: string;
	mimeType?: string;
	bucketId?: string;
	uploadUrl?: string;
	subject?: string;
	size?: number;
	tags?: Array<string>;
	status?: Status;
	processor?: FileProcessor;
	createdAt?: Date | string;
	createdJobId?: string;
	updatedAt?: Date | string;
	updatedJobId?: string;
}

export interface IBucketUpload {
	url?: string;
	fieldName?: string;
	tokenExpirationSeconds?: number;
	maxCount?: number;
}

export interface IBucket {
	bucketId?: string;
	name?: string;
	acceptedMimeTypes?: Array<string>;
	tags?: Array<string>;
	maxSize?: number;
	upload?: IBucketUpload;
	processor?: FileProcessor;
	createdAt?: Date | string;
	createdJobId?: string;
	updatedAt?: Date | string;
	updatedJobId?: string;
}

export interface ICreateFileRequest {
	file: IFile;
}

export interface ICreateBucketRequest {
	bucket: IBucket;
}

export interface ICreateBucketResponse {
	bucketId: string;
}

export interface ICreateUploadUrlRequest {
	bucketId: string;
	subject?: string;
}

export interface ICreateUploadUrlResponse {
	success: boolean;
	uploadToken?: string;
}

export interface IUploadServiceImplementation {
	createUploadUrl: handleUnaryCall<ICreateUploadUrlRequest, ICreateUploadUrlResponse>;
}

export interface IUploadServiceClient extends Client {
	createUploadUrl(request: ICreateUploadUrlRequest, callback: requestCallback<ICreateUploadUrlResponse>): ClientUnaryCall;
}

export type TUploadServiceClient = new (
	address: string,
	credentials: ChannelCredentials,
	options?: any,
) => IUploadServiceClient;

export interface IStorageServiceImplementation {
	createBucket: handleUnaryCall<ICreateBucketRequest, ICreateBucketResponse>;
}

export interface IStorageServiceClient extends Client {
	createBucket(request: ICreateBucketRequest, callback: requestCallback<ICreateBucketResponse>): ClientUnaryCall;
}

export type TStorageServiceClient = new (
	address: string,
	credentials: ChannelCredentials,
	options?: any,
) => IStorageServiceClient;

export interface IPackageDefinition {
	storage: {
		v1: {
			UploadService: TUploadServiceClient & {
				service: ServiceDefinition<IUploadServiceImplementation>,
			},
			StorageService: TStorageServiceClient & {
				service: ServiceDefinition<IStorageServiceImplementation>,
			},
		},
	};
}
