import * as $protobuf from "protobufjs";
/** Namespace carrier. */
export namespace carrier {

    /** Namespace v1. */
    namespace v1 {

        /** Properties of a Vehicle. */
        interface IVehicle {

            /** Vehicle vehicleId */
            vehicleId?: (string|null);

            /** Vehicle personId */
            personId?: (string|null);

            /** Vehicle kind */
            kind?: (carrier.v1.Vehicle.VehicleKind|null);

            /** Vehicle brandId */
            brandId?: (string|null);

            /** Vehicle modelId */
            modelId?: (string|null);

            /** Vehicle color */
            color?: (string|null);

            /** Vehicle licensePlate */
            licensePlate?: (string|null);
        }

        /** Represents a Vehicle. */
        class Vehicle implements IVehicle {

            /**
             * Constructs a new Vehicle.
             * @param [properties] Properties to set
             */
            constructor(properties?: carrier.v1.IVehicle);

            /** Vehicle vehicleId. */
            public vehicleId: string;

            /** Vehicle personId. */
            public personId: string;

            /** Vehicle kind. */
            public kind: carrier.v1.Vehicle.VehicleKind;

            /** Vehicle brandId. */
            public brandId: string;

            /** Vehicle modelId. */
            public modelId: string;

            /** Vehicle color. */
            public color: string;

            /** Vehicle licensePlate. */
            public licensePlate: string;

            /**
             * Creates a new Vehicle instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Vehicle instance
             */
            public static create(properties?: carrier.v1.IVehicle): carrier.v1.Vehicle;

            /**
             * Encodes the specified Vehicle message. Does not implicitly {@link carrier.v1.Vehicle.verify|verify} messages.
             * @param message Vehicle message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: carrier.v1.IVehicle, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Vehicle message, length delimited. Does not implicitly {@link carrier.v1.Vehicle.verify|verify} messages.
             * @param message Vehicle message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: carrier.v1.IVehicle, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Vehicle message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Vehicle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): carrier.v1.Vehicle;

            /**
             * Decodes a Vehicle message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Vehicle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): carrier.v1.Vehicle;

            /**
             * Verifies a Vehicle message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Vehicle message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Vehicle
             */
            public static fromObject(object: { [k: string]: any }): carrier.v1.Vehicle;

            /**
             * Creates a plain object from a Vehicle message. Also converts values to other types if specified.
             * @param message Vehicle
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: carrier.v1.Vehicle, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Vehicle to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Vehicle {

            /** VehicleKind enum. */
            enum VehicleKind {
                MOTORCYCLE = 0,
                CAR = 1
            }
        }

        /** Properties of an AddVehicleRequest. */
        interface IAddVehicleRequest {

            /** AddVehicleRequest vehicle */
            vehicle?: (carrier.v1.IVehicle|null);
        }

        /** Represents an AddVehicleRequest. */
        class AddVehicleRequest implements IAddVehicleRequest {

            /**
             * Constructs a new AddVehicleRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: carrier.v1.IAddVehicleRequest);

            /** AddVehicleRequest vehicle. */
            public vehicle?: (carrier.v1.IVehicle|null);

            /**
             * Creates a new AddVehicleRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AddVehicleRequest instance
             */
            public static create(properties?: carrier.v1.IAddVehicleRequest): carrier.v1.AddVehicleRequest;

            /**
             * Encodes the specified AddVehicleRequest message. Does not implicitly {@link carrier.v1.AddVehicleRequest.verify|verify} messages.
             * @param message AddVehicleRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: carrier.v1.IAddVehicleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AddVehicleRequest message, length delimited. Does not implicitly {@link carrier.v1.AddVehicleRequest.verify|verify} messages.
             * @param message AddVehicleRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: carrier.v1.IAddVehicleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AddVehicleRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AddVehicleRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): carrier.v1.AddVehicleRequest;

            /**
             * Decodes an AddVehicleRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AddVehicleRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): carrier.v1.AddVehicleRequest;

            /**
             * Verifies an AddVehicleRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AddVehicleRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AddVehicleRequest
             */
            public static fromObject(object: { [k: string]: any }): carrier.v1.AddVehicleRequest;

            /**
             * Creates a plain object from an AddVehicleRequest message. Also converts values to other types if specified.
             * @param message AddVehicleRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: carrier.v1.AddVehicleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AddVehicleRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AddVehicleResponse. */
        interface IAddVehicleResponse {

            /** AddVehicleResponse vehicleId */
            vehicleId?: (string|null);
        }

        /** Represents an AddVehicleResponse. */
        class AddVehicleResponse implements IAddVehicleResponse {

            /**
             * Constructs a new AddVehicleResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: carrier.v1.IAddVehicleResponse);

            /** AddVehicleResponse vehicleId. */
            public vehicleId: string;

            /**
             * Creates a new AddVehicleResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AddVehicleResponse instance
             */
            public static create(properties?: carrier.v1.IAddVehicleResponse): carrier.v1.AddVehicleResponse;

            /**
             * Encodes the specified AddVehicleResponse message. Does not implicitly {@link carrier.v1.AddVehicleResponse.verify|verify} messages.
             * @param message AddVehicleResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: carrier.v1.IAddVehicleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AddVehicleResponse message, length delimited. Does not implicitly {@link carrier.v1.AddVehicleResponse.verify|verify} messages.
             * @param message AddVehicleResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: carrier.v1.IAddVehicleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AddVehicleResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AddVehicleResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): carrier.v1.AddVehicleResponse;

            /**
             * Decodes an AddVehicleResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AddVehicleResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): carrier.v1.AddVehicleResponse;

            /**
             * Verifies an AddVehicleResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AddVehicleResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AddVehicleResponse
             */
            public static fromObject(object: { [k: string]: any }): carrier.v1.AddVehicleResponse;

            /**
             * Creates a plain object from an AddVehicleResponse message. Also converts values to other types if specified.
             * @param message AddVehicleResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: carrier.v1.AddVehicleResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AddVehicleResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a CarrierService */
        class CarrierService extends $protobuf.rpc.Service {

            /**
             * Constructs a new CarrierService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new CarrierService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CarrierService;

            /**
             * Calls AddVehicle.
             * @param request AddVehicleRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and AddVehicleResponse
             */
            public addVehicle(request: carrier.v1.IAddVehicleRequest, callback: carrier.v1.CarrierService.AddVehicleCallback): void;

            /**
             * Calls AddVehicle.
             * @param request AddVehicleRequest message or plain object
             * @returns Promise
             */
            public addVehicle(request: carrier.v1.IAddVehicleRequest): Promise<carrier.v1.AddVehicleResponse>;
        }

        namespace CarrierService {

            /**
             * Callback as used by {@link carrier.v1.CarrierService#addVehicle}.
             * @param error Error, if any
             * @param [response] AddVehicleResponse
             */
            type AddVehicleCallback = (error: (Error|null), response?: carrier.v1.AddVehicleResponse) => void;
        }
    }
}
