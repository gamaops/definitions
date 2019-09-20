{
  "nested": {
    "carrier": {
      "nested": {
        "v1": {
          "nested": {
            "Vehicle": {
              "fields": {
                "vehicleId": {
                  "type": "string",
                  "id": 1
                },
                "personId": {
                  "type": "string",
                  "id": 2
                },
                "kind": {
                  "type": "VehicleKind",
                  "id": 3
                },
                "brandId": {
                  "type": "string",
                  "id": 4
                },
                "modelId": {
                  "type": "string",
                  "id": 5
                },
                "color": {
                  "type": "string",
                  "id": 6
                },
                "licensePlate": {
                  "type": "string",
                  "id": 7
                }
              },
              "nested": {
                "VehicleKind": {
                  "values": {
                    "MOTORCYCLE": 0,
                    "CAR": 1
                  }
                }
              }
            },
            "AddVehicleRequest": {
              "fields": {
                "vehicle": {
                  "type": "Vehicle",
                  "id": 1
                }
              }
            },
            "AddVehicleResponse": {
              "fields": {
                "vehicleId": {
                  "type": "string",
                  "id": 1
                }
              }
            },
            "CarrierService": {
              "methods": {
                "AddVehicle": {
                  "requestType": "AddVehicleRequest",
                  "responseType": "AddVehicleResponse"
                }
              }
            }
          }
        }
      }
    }
  }
}