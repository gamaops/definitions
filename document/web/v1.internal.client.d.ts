import * as grpcWeb from 'grpc-web';

import {
  setDocumentRuleRequest,
  setDocumentRuleResponse} from './v1.internal_pb';

export class DocumentAdminServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  setDocumentRule(
    request: setDocumentRuleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: setDocumentRuleResponse) => void
  ): grpcWeb.ClientReadableStream<setDocumentRuleResponse>;

}

export class DocumentAdminServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  setDocumentRule(
    request: setDocumentRuleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<setDocumentRuleResponse>;

}

