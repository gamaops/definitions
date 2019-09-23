import * as grpcWeb from 'grpc-web';

import * as document_proto_kinds_pb from '../../document/web/kinds';

import {
  AddDocumentRequest,
  AddDocumentResponse} from './v1';

export class DocumentServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  addDocument(
    request: AddDocumentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: AddDocumentResponse) => void
  ): grpcWeb.ClientReadableStream<AddDocumentResponse>;

}

export class DocumentServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  addDocument(
    request: AddDocumentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<AddDocumentResponse>;

}

