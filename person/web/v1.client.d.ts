import * as grpcWeb from 'grpc-web';

import {
  CreateLeadRequest,
  CreateLeadResponse,
  VerifyLeadRequest,
  VerifyLeadResponse} from './v1_pb';

export class PersonServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  createLead(
    request: CreateLeadRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: CreateLeadResponse) => void
  ): grpcWeb.ClientReadableStream<CreateLeadResponse>;

  verifyLead(
    request: VerifyLeadRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: VerifyLeadResponse) => void
  ): grpcWeb.ClientReadableStream<VerifyLeadResponse>;

}

export class PersonServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  createLead(
    request: CreateLeadRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<CreateLeadResponse>;

  verifyLead(
    request: VerifyLeadRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<VerifyLeadResponse>;

}

