export default {
  definitions: {
    TenantProcessRule: {
      type: 'object',
      properties: {
        applications: {
          type: 'array',
          items: {
            $ref: '#/definitions/ApplicationProcessRule',
          },
        },
        tenant_id: {
          type: 'string',
        },
      },
    },
    Recipe: {
      type: 'object',
      properties: {
        actionParams: {
          type: 'object',
          additionalProperties: {
            type: 'string',
          },
        },
        actionTemplateId: {
          type: 'string',
        },
        active: {
          type: 'boolean',
        },
        categoryId: {
          type: 'string',
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        id: {
          type: 'string',
        },
        modifiedAt: {
          type: 'string',
          format: 'date-time',
        },
        ruleIds: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        scope: {
          type: 'string',
          enum: ['TENANT', 'USER'],
        },
        tenantId: {
          type: 'string',
        },
        title: {
          type: 'string',
        },
        triggerParams: {
          type: 'object',
          additionalProperties: {
            type: 'string',
          },
        },
        triggerTemplateId: {
          type: 'string',
        },
        userId: {
          type: 'string',
        },
      },
    },
    Customer: {
      type: 'object',
      required: ['identifier', 'type'],
      properties: {
        partners: {
          type: 'array',
          items: {
            $ref: '#/definitions/Partner',
          },
        },
        properties: {
          type: 'object',
          additionalProperties: {
            type: 'string',
          },
        },
        status: {
          type: 'string',
          enum: ['ACTIVE', 'SUSPENDED'],
        },
        zones: {
          type: 'array',
          items: {
            $ref: '#/definitions/Zone',
          },
        },
        identifier: {
          type: 'string',
          description: 'identifier',
        },
        type: {
          type: 'string',
          description: 'type',
        },
        name: {
          type: 'string',
          description: 'name',
        },
      },
      description: 'Base Metadata Object Type',
    },
    ServiceOptions: {
      type: 'object',
      properties: {
        allFields: {
          type: 'object',
          additionalProperties: {
            type: 'object',
          },
        },
        defaultInstanceForType: {
          $ref: '#/definitions/ServiceOptions',
        },
        descriptorForType: {
          $ref: '#/definitions/Descriptor',
        },
        initializationErrorString: {
          type: 'string',
        },
        initialized: {
          type: 'boolean',
        },
        parserForType: {
          $ref: '#/definitions/Parser«ServiceOptions»',
        },
        serializedSize: {
          type: 'integer',
          format: 'int32',
        },
        uninterpretedOptionCount: {
          type: 'integer',
          format: 'int32',
        },
        uninterpretedOptionList: {
          type: 'array',
          items: {
            $ref: '#/definitions/UninterpretedOption',
          },
        },
        uninterpretedOptionOrBuilderList: {
          type: 'array',
          items: {
            $ref: '#/definitions/UninterpretedOptionOrBuilder',
          },
        },
        unknownFields: {
          $ref: '#/definitions/UnknownFieldSet',
        },
      },
    },
    StateResult: {
      type: 'object',
      properties: {
        assetState: {
          type: 'string',
        },
        regionId: {
          type: 'string',
        },
        regionName: {
          type: 'string',
        },
        stateDwellTime: {
          type: 'integer',
          format: 'int64',
        },
        stateEntry: {
          type: 'string',
          format: 'date-time',
        },
        stateExit: {
          type: 'string',
          format: 'date-time',
        },
        streamId: {
          type: 'string',
        },
      },
    },
    ByteString: {
      type: 'object',
      properties: {
        empty: {
          type: 'boolean',
        },
        validUtf8: {
          type: 'boolean',
        },
      },
    },
    'Parser«NamePart»': {
      type: 'object',
    },
    UninterpretedOption: {
      type: 'object',
      properties: {
        aggregateValue: {
          type: 'string',
        },
        aggregateValueBytes: {
          $ref: '#/definitions/ByteString',
        },
        allFields: {
          type: 'object',
          additionalProperties: {
            type: 'object',
          },
        },
        defaultInstanceForType: {
          $ref: '#/definitions/UninterpretedOption',
        },
        descriptorForType: {
          $ref: '#/definitions/Descriptor',
        },
        doubleValue: {
          type: 'number',
          format: 'double',
        },
        identifierValue: {
          type: 'string',
        },
        identifierValueBytes: {
          $ref: '#/definitions/ByteString',
        },
        initializationErrorString: {
          type: 'string',
        },
        initialized: {
          type: 'boolean',
        },
        nameCount: {
          type: 'integer',
          format: 'int32',
        },
        nameList: {
          type: 'array',
          items: {
            $ref: '#/definitions/NamePart',
          },
        },
        nameOrBuilderList: {
          type: 'array',
          items: {
            $ref: '#/definitions/NamePartOrBuilder',
          },
        },
        negativeIntValue: {
          type: 'integer',
          format: 'int64',
        },
        parserForType: {
          $ref: '#/definitions/Parser«UninterpretedOption»',
        },
        positiveIntValue: {
          type: 'integer',
          format: 'int64',
        },
        serializedSize: {
          type: 'integer',
          format: 'int32',
        },
        stringValue: {
          $ref: '#/definitions/ByteString',
        },
        unknownFields: {
          $ref: '#/definitions/UnknownFieldSet',
        },
      },
    },
    DemoTasks: {
      type: 'object',
      properties: {
        peripheralId: {
          type: 'string',
        },
        status: {
          type: 'string',
          enum: ['ON', 'OFF'],
        },
      },
    },
    MethodOptions: {
      type: 'object',
      properties: {
        allFields: {
          type: 'object',
          additionalProperties: {
            type: 'object',
          },
        },
        defaultInstanceForType: {
          $ref: '#/definitions/MethodOptions',
        },
        descriptorForType: {
          $ref: '#/definitions/Descriptor',
        },
        initializationErrorString: {
          type: 'string',
        },
        initialized: {
          type: 'boolean',
        },
        parserForType: {
          $ref: '#/definitions/Parser«MethodOptions»',
        },
        serializedSize: {
          type: 'integer',
          format: 'int32',
        },
        uninterpretedOptionCount: {
          type: 'integer',
          format: 'int32',
        },
        uninterpretedOptionList: {
          type: 'array',
          items: {
            $ref: '#/definitions/UninterpretedOption',
          },
        },
        uninterpretedOptionOrBuilderList: {
          type: 'array',
          items: {
            $ref: '#/definitions/UninterpretedOptionOrBuilder',
          },
        },
        unknownFields: {
          $ref: '#/definitions/UnknownFieldSet',
        },
      },
    },
    EventData: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
        value: {
          type: 'string',
        },
      },
    },
    PeripheralMeta: {
      type: 'object',
      required: ['identifier'],
      properties: {
        mobilityState: {
          type: 'string',
          enum: ['FIXED', 'MOBILE', 'FENCED'],
        },
        services: {
          type: 'array',
          description: 'Service metadata list',
          items: {
            $ref: '#/definitions/ServiceMeta',
          },
        },
        tasks: {
          type: 'object',
          additionalProperties: {
            type: 'array',
            items: {
              $ref: '#/definitions/Command',
            },
          },
        },
        identifier: {
          type: 'string',
          description: 'identifier',
        },
        type: {
          type: 'string',
          description: 'type',
        },
        idPath: {
          description: 'ID/ extraction command for peripheral Command Meta Info',
          $ref: '#/definitions/IdCommand',
        },
        name: {
          type: 'string',
          description: 'name',
        },
      },
      description:
        'Peripheral Metadata Object - I/O object used to describe the metadata of a peripheral, its services, characteristics, and the tasks to be performed by CloudLeaf readers to access data on the peripheral',
    },
    TaggedAssetAssignment: {
      type: 'object',
      properties: {
        assetId: {
          type: 'string',
        },
        assetName: {
          type: 'string',
        },
        id: {
          type: 'string',
        },
        lastSeen: {
          type: 'string',
          format: 'date-time',
        },
        status: {
          type: 'string',
        },
        tag_id: {
          type: 'string',
        },
        updatedDt: {
          type: 'string',
          format: 'date-time',
        },
      },
    },
    Asset: {
      type: 'object',
      properties: {
        category: {
          type: 'string',
        },
        categoryName: {
          type: 'string',
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        description: {
          type: 'string',
        },
        externalId: {
          type: 'string',
        },
        id: {
          type: 'string',
        },
        imageURL: {
          type: 'string',
        },
        modifiedAt: {
          type: 'string',
          format: 'date-time',
        },
        name: {
          type: 'string',
        },
        payload: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        payloadOf: {
          type: 'string',
        },
        properties: {
          type: 'object',
          additionalProperties: {
            type: 'string',
          },
        },
        sortOrder: {
          type: 'integer',
          format: 'int32',
        },
        status: {
          type: 'string',
          enum: ['UNMONITORED', 'MONITORED', 'ARCHIVED'],
        },
        tenantId: {
          type: 'string',
        },
      },
    },
    StreamResultValue: {
      type: 'object',
      properties: {
        areaName: {
          type: 'object',
        },
        receiverId: {
          type: 'object',
        },
        time: {
          type: 'string',
          format: 'date-time',
        },
        value: {
          type: 'object',
        },
      },
    },
    IoctlOrBuilder: {
      type: 'object',
      properties: {
        actionType: {
          type: 'string',
          enum: [
            'BROADCAST',
            'READ',
            'WRITE_WITHOUT_RESPONSE',
            'WRITE',
            'NOTIFY',
            'INDICATE',
            'SIGNED_WRITE',
            'EXTENDED_PROPERTIES',
            'NOTIFY_ENCRYPTION_REQUIRED',
            'INDICATE_ENCRYPTION_REQUIRED',
            'WRITABLE_AUXILIARIES',
          ],
        },
        allFields: {
          type: 'object',
          additionalProperties: {
            type: 'object',
          },
        },
        cid: {
          type: 'string',
        },
        cidBytes: {
          $ref: '#/definitions/ByteString',
        },
        defaultInstanceForType: {
          $ref: '#/definitions/Message',
        },
        descriptorForType: {
          $ref: '#/definitions/Descriptor',
        },
        initializationErrorString: {
          type: 'string',
        },
        initialized: {
          type: 'boolean',
        },
        optionsCount: {
          type: 'integer',
          format: 'int32',
        },
        optionsList: {
          type: 'array',
          items: {
            $ref: '#/definitions/Option',
          },
        },
        optionsOrBuilderList: {
          type: 'array',
          items: {
            $ref: '#/definitions/OptionOrBuilder',
          },
        },
        sid: {
          type: 'string',
        },
        sidBytes: {
          $ref: '#/definitions/ByteString',
        },
        unknownFields: {
          $ref: '#/definitions/UnknownFieldSet',
        },
        value: {
          $ref: '#/definitions/ByteString',
        },
      },
    },
    Space: {
      type: 'object',
      required: ['identifier', 'type'],
      properties: {
        bounds: {
          $ref: '#/definitions/BoundingBox',
        },
        locus: {
          $ref: '#/definitions/Point',
        },
        order: {
          type: 'integer',
          format: 'int32',
        },
        tags: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        identifier: {
          type: 'string',
          description: 'identifier',
        },
        type: {
          type: 'string',
          description: 'type',
        },
        name: {
          type: 'string',
          description: 'name',
        },
      },
      description: 'Base Metadata Object Type',
    },
    RoleDTO: {
      type: 'object',
      properties: {
        editable: {
          type: 'boolean',
        },
        id: {
          type: 'string',
        },
        permissions: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        tenantId: {
          type: 'string',
        },
      },
    },
    TriggerType: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
      },
    },
    SensorTagSummary: {
      type: 'object',
      properties: {
        health: {
          $ref: '#/definitions/DeviceEventResult',
        },
        heartBeat: {
          $ref: '#/definitions/DeviceEventResult',
        },
        sensorTag: {
          $ref: '#/definitions/SensorTag',
        },
        taggedAsset: {
          $ref: '#/definitions/TaggedAsset',
        },
      },
    },
    Capability: {
      type: 'object',
      properties: {
        action: {
          $ref: '#/definitions/ActionMeta',
        },
        defaultOrder: {
          type: 'integer',
          format: 'int32',
        },
        description: {
          type: 'string',
        },
        displayable: {
          type: 'boolean',
        },
        editable: {
          type: 'boolean',
        },
        enabled: {
          type: 'boolean',
        },
        name: {
          type: 'string',
        },
        state: {
          $ref: '#/definitions/State',
        },
      },
    },
    EnumOptions: {
      type: 'object',
      properties: {
        allFields: {
          type: 'object',
          additionalProperties: {
            type: 'object',
          },
        },
        allowAlias: {
          type: 'boolean',
        },
        defaultInstanceForType: {
          $ref: '#/definitions/EnumOptions',
        },
        descriptorForType: {
          $ref: '#/definitions/Descriptor',
        },
        initializationErrorString: {
          type: 'string',
        },
        initialized: {
          type: 'boolean',
        },
        parserForType: {
          $ref: '#/definitions/Parser«EnumOptions»',
        },
        serializedSize: {
          type: 'integer',
          format: 'int32',
        },
        uninterpretedOptionCount: {
          type: 'integer',
          format: 'int32',
        },
        uninterpretedOptionList: {
          type: 'array',
          items: {
            $ref: '#/definitions/UninterpretedOption',
          },
        },
        uninterpretedOptionOrBuilderList: {
          type: 'array',
          items: {
            $ref: '#/definitions/UninterpretedOptionOrBuilder',
          },
        },
        unknownFields: {
          $ref: '#/definitions/UnknownFieldSet',
        },
      },
    },
    AssetVisitResult: {
      type: 'object',
      properties: {
        areaLocation: {
          type: 'string',
        },
        assetExternalId: {
          type: 'string',
        },
        assetName: {
          type: 'string',
        },
        assetType: {
          type: 'string',
        },
        dwellTime: {
          type: 'string',
        },
        entry: {
          type: 'string',
        },
        exit: {
          type: 'string',
        },
        site: {
          type: 'string',
        },
        status: {
          type: 'string',
        },
        taggedAssetId: {
          type: 'string',
        },
      },
    },
    PeripheralCommands: {
      type: 'object',
      properties: {
        unknownFields: {
          $ref: '#/definitions/UnknownFieldSet',
        },
      },
    },
    Ioctl: {
      type: 'object',
      required: ['action', 'cId'],
      properties: {
        options: {
          type: 'object',
          description:
            'Map of options for a specific Action, for example read frequency, or value to be written',
          additionalProperties: {
            type: 'string',
          },
        },
        cId: {
          type: 'string',
          description: 'Characteristic to act on',
        },
        action: {
          type: 'string',
          description: "Action to perform, for Id set to 'Read'",
          enum: ['Read', 'Notify', 'Write', 'WriteWithoutResponse', 'Indicate'],
        },
      },
      description: 'Task object - describes commands to be performed on the peripheral',
    },
    NamePartOrBuilder: {
      type: 'object',
      properties: {
        allFields: {
          type: 'object',
          additionalProperties: {
            type: 'object',
          },
        },
        defaultInstanceForType: {
          $ref: '#/definitions/Message',
        },
        descriptorForType: {
          $ref: '#/definitions/Descriptor',
        },
        initializationErrorString: {
          type: 'string',
        },
        initialized: {
          type: 'boolean',
        },
        isExtension: {
          type: 'boolean',
        },
        namePart: {
          type: 'string',
        },
        namePartBytes: {
          $ref: '#/definitions/ByteString',
        },
        unknownFields: {
          $ref: '#/definitions/UnknownFieldSet',
        },
      },
    },
    'Parser«Property»': {
      type: 'object',
    },
    Parser: {
      type: 'object',
    },
    AssetResultValue: {
      type: 'object',
      properties: {
        areaName: {
          type: 'object',
        },
        cId: {
          type: 'string',
        },
        receiverId: {
          type: 'object',
        },
        time: {
          type: 'string',
          format: 'date-time',
        },
        value: {
          type: 'object',
        },
      },
    },
    PostalAddress: {
      type: 'object',
      properties: {
        city: {
          type: 'string',
        },
        countryCode: {
          type: 'string',
        },
        postalCode: {
          type: 'string',
        },
        stateCode: {
          type: 'string',
        },
        streetAddr: {
          type: 'string',
        },
      },
    },
    OptionOrBuilder: {
      type: 'object',
      properties: {
        allFields: {
          type: 'object',
          additionalProperties: {
            type: 'object',
          },
        },
        defaultInstanceForType: {
          $ref: '#/definitions/Message',
        },
        descriptorForType: {
          $ref: '#/definitions/Descriptor',
        },
        initializationErrorString: {
          type: 'string',
        },
        initialized: {
          type: 'boolean',
        },
        optionType: {
          type: 'string',
          enum: [
            'CONNECTION_INTERVAL',
            'NOTIFY_TIME_IN_MILLIS',
            'NOTIFY_TIME_OUT_IN_MILLIS',
            'PRIORITY',
          ],
        },
        unknownFields: {
          $ref: '#/definitions/UnknownFieldSet',
        },
        val: {
          type: 'integer',
          format: 'int64',
        },
      },
    },
    Peripheral: {
      type: 'object',
      required: ['peripheralId', 'receiverId', 'type'],
      properties: {
        config: {
          $ref: '#/definitions/Tasks',
        },
        leafId: {
          type: 'string',
        },
        peripheralId: {
          type: 'string',
          description: 'Peripheral Id',
        },
        type: {
          type: 'string',
          description: 'Peripheral type',
        },
        deviceClass: {
          type: 'string',
          description: 'Peripheral Device Class',
        },
        name: {
          type: 'string',
          description: 'Name',
        },
        receiverId: {
          type: 'string',
          description: 'Leaf Reader Id',
        },
        data: {
          type: 'object',
          description: 'Relevant peripheral data at registration time',
          additionalProperties: {
            type: 'string',
          },
        },
        status: {
          type: 'string',
          description: 'Status',
          enum: ['UNPROVISIONED', 'PROVISIONED', 'DISABLED'],
        },
        lastUpdate: {
          type: 'string',
          format: 'date-time',
          description: 'Time of last data update from this peripheral',
        },
        tasks: {
          type: 'object',
          description: 'Map of tasks by service id',
          additionalProperties: {
            type: 'array',
            items: {
              $ref: '#/definitions/Command',
            },
          },
        },
        tenantId: {
          type: 'string',
          description: 'Owning tenant',
        },
        physicalId: {
          type: 'string',
          description: 'Physical Id, e.g., the MAC Address',
        },
        tags: {
          type: 'array',
          description: 'Tags associated with this peripheral',
          items: {
            type: 'string',
          },
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
          description: 'Peripheral provisioning date',
        },
        description: {
          type: 'string',
          description: 'Description',
        },
        categoryId: {
          type: 'string',
          description: 'category Id',
        },
        assetId: {
          type: 'string',
          description: 'asset Id',
        },
      },
      description: 'Peripheral Instance Information',
    },
    InputType: {
      type: 'object',
      properties: {
        defaultValue: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        type: {
          $ref: '#/definitions/DataType',
        },
      },
    },
    VisitResult: {
      type: 'object',
      properties: {
        dwellTime: {
          type: 'integer',
          format: 'int64',
        },
        entry: {
          type: 'string',
          format: 'date-time',
        },
        exit: {
          type: 'string',
          format: 'date-time',
        },
        regionId: {
          type: 'string',
        },
        regionName: {
          type: 'string',
        },
        regionType: {
          type: 'string',
        },
        subRegions: {
          type: 'array',
          items: {
            $ref: '#/definitions/VisitResult',
          },
        },
      },
    },
    UnknownFieldSet: {
      type: 'object',
      properties: {
        defaultInstanceForType: {
          $ref: '#/definitions/UnknownFieldSet',
        },
        initialized: {
          type: 'boolean',
        },
        parserForType: {
          $ref: '#/definitions/Parser',
        },
        serializedSize: {
          type: 'integer',
          format: 'int32',
        },
        serializedSizeAsMessageSet: {
          type: 'integer',
          format: 'int32',
        },
      },
    },
    Building: {
      type: 'object',
      required: ['identifier', 'type'],
      properties: {
        address: {
          $ref: '#/definitions/PostalAddress',
        },
        bounds: {
          $ref: '#/definitions/BoundingBox',
        },
        locus: {
          $ref: '#/definitions/Point',
        },
        numFloors: {
          type: 'integer',
          format: 'int32',
        },
        order: {
          type: 'integer',
          format: 'int32',
        },
        properties: {
          type: 'object',
          additionalProperties: {
            type: 'string',
          },
        },
        tags: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        identifier: {
          type: 'string',
          description: 'identifier',
        },
        type: {
          type: 'string',
          description: 'type',
        },
        name: {
          type: 'string',
          description: 'name',
        },
      },
      description: 'Base Metadata Object Type',
    },
    PeripheralBase: {
      type: 'object',
      required: ['peripheralId', 'type'],
      properties: {
        peripheralId: {
          type: 'string',
          description: 'Peripheral Id',
        },
        type: {
          type: 'string',
          description: 'Peripheral type',
        },
        deviceClass: {
          type: 'string',
          description: 'Peripheral Device Class',
        },
        name: {
          type: 'string',
          description: 'Name',
        },
        status: {
          type: 'string',
          description: 'Status',
          enum: ['UNPROVISIONED', 'PROVISIONED', 'DISABLED'],
        },
        lastUpdate: {
          type: 'string',
          format: 'date-time',
          description: 'Time of last data update from this peripheral',
        },
        tenantId: {
          type: 'string',
          description: 'Owning tenant',
        },
        physicalId: {
          type: 'string',
          description: 'Physical Id, e.g., the MAC Address',
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
          description: 'Peripheral provisioning date',
        },
        categoryId: {
          type: 'string',
          description: 'category Id',
        },
        assetId: {
          type: 'string',
          description: 'asset Id',
        },
      },
    },
    EnumValueOptions: {
      type: 'object',
      properties: {
        allFields: {
          type: 'object',
          additionalProperties: {
            type: 'object',
          },
        },
        defaultInstanceForType: {
          $ref: '#/definitions/EnumValueOptions',
        },
        descriptorForType: {
          $ref: '#/definitions/Descriptor',
        },
        initializationErrorString: {
          type: 'string',
        },
        initialized: {
          type: 'boolean',
        },
        parserForType: {
          $ref: '#/definitions/Parser«EnumValueOptions»',
        },
        serializedSize: {
          type: 'integer',
          format: 'int32',
        },
        uninterpretedOptionCount: {
          type: 'integer',
          format: 'int32',
        },
        uninterpretedOptionList: {
          type: 'array',
          items: {
            $ref: '#/definitions/UninterpretedOption',
          },
        },
        uninterpretedOptionOrBuilderList: {
          type: 'array',
          items: {
            $ref: '#/definitions/UninterpretedOptionOrBuilder',
          },
        },
        unknownFields: {
          $ref: '#/definitions/UnknownFieldSet',
        },
      },
    },
    Notification: {
      type: 'object',
      properties: {
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        deliveredAt: {
          type: 'string',
          format: 'date-time',
        },
        level: {
          type: 'string',
        },
        message: {
          $ref: '#/definitions/ClfMessage',
        },
        source: {
          type: 'string',
        },
        status: {
          type: 'string',
          enum: ['UNREAD', 'READ', 'DELETED'],
        },
        topic: {
          $ref: '#/definitions/NotificationTopic',
        },
        transport: {
          type: 'string',
          enum: ['web', 'email', 'application', 'pubnub', 'sms', 'voice'],
        },
        userId: {
          type: 'string',
        },
      },
    },
    ServiceMeta: {
      type: 'object',
      required: ['identifier'],
      properties: {
        characteristics: {
          type: 'array',
          description: 'Characteristics metadata list',
          items: {
            $ref: '#/definitions/CharacteristicMeta',
          },
        },
        identifier: {
          type: 'string',
          description: 'identifier',
        },
        type: {
          type: 'string',
          description: 'type',
        },
        name: {
          type: 'string',
          description: 'name',
        },
      },
      description: 'Base Metadata Object Type',
    },
    NotificationContext: {
      type: 'object',
      properties: {
        applicableId: {
          type: 'string',
        },
        categoryId: {
          type: 'string',
        },
        deviceId: {
          type: 'string',
        },
        level: {
          type: 'string',
        },
        message: {
          type: 'string',
        },
        notifTime: {
          type: 'integer',
          format: 'int64',
        },
        notifType: {
          type: 'string',
        },
        tenantId: {
          type: 'string',
        },
        transport: {
          type: 'string',
        },
        userId: {
          type: 'string',
        },
      },
    },
    ObjectType: {
      type: 'object',
      required: ['identifier'],
      properties: {
        identifier: {
          type: 'string',
          description: 'identifier',
        },
        type: {
          type: 'string',
          description: 'type',
        },
        name: {
          type: 'string',
          description: 'name',
        },
      },
      description: 'Base Metadata Object Type',
    },
    'Parser«Tasks»': {
      type: 'object',
    },
    MessageOptions: {
      type: 'object',
      properties: {
        allFields: {
          type: 'object',
          additionalProperties: {
            type: 'object',
          },
        },
        defaultInstanceForType: {
          $ref: '#/definitions/MessageOptions',
        },
        descriptorForType: {
          $ref: '#/definitions/Descriptor',
        },
        initializationErrorString: {
          type: 'string',
        },
        initialized: {
          type: 'boolean',
        },
        messageSetWireFormat: {
          type: 'boolean',
        },
        noStandardDescriptorAccessor: {
          type: 'boolean',
        },
        parserForType: {
          $ref: '#/definitions/Parser«MessageOptions»',
        },
        serializedSize: {
          type: 'integer',
          format: 'int32',
        },
        uninterpretedOptionCount: {
          type: 'integer',
          format: 'int32',
        },
        uninterpretedOptionList: {
          type: 'array',
          items: {
            $ref: '#/definitions/UninterpretedOption',
          },
        },
        uninterpretedOptionOrBuilderList: {
          type: 'array',
          items: {
            $ref: '#/definitions/UninterpretedOptionOrBuilder',
          },
        },
        unknownFields: {
          $ref: '#/definitions/UnknownFieldSet',
        },
      },
    },
    ActionMeta: {
      type: 'object',
      properties: {
        actionId: {
          type: 'string',
        },
        bulkEnabled: {
          type: 'boolean',
        },
        inputTypes: {
          type: 'array',
          items: {
            $ref: '#/definitions/InputType',
          },
        },
      },
    },
    BatteryStatResult: {
      type: 'object',
      properties: {
        assetExternalId: {
          type: 'string',
        },
        assetName: {
          type: 'string',
        },
        assetType: {
          type: 'string',
        },
        bLevel: {
          type: 'string',
        },
        lastLocation: {
          type: 'string',
        },
        lastUpdated: {
          type: 'string',
        },
        taggedAssetId: {
          type: 'string',
        },
      },
    },
    BoundingBox: {
      type: 'object',
      properties: {
        bottomRight: {
          $ref: '#/definitions/Point',
        },
        topLeft: {
          $ref: '#/definitions/Point',
        },
      },
    },
    MetricsValueResult: {
      type: 'object',
      properties: {
        metrics: {
          type: 'array',
          items: {
            $ref: '#/definitions/MetricsValue',
          },
        },
        scope: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
      },
    },
    DataType: {
      type: 'object',
      properties: {
        format: {
          type: 'string',
        },
        unitType: {
          type: 'string',
        },
      },
    },
    Partner: {
      type: 'object',
      required: ['identifier', 'type'],
      properties: {
        customers: {
          type: 'array',
          items: {
            $ref: '#/definitions/Customer',
          },
        },
        peripheralTypes: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        identifier: {
          type: 'string',
          description: 'identifier',
        },
        type: {
          type: 'string',
          description: 'type',
        },
        name: {
          type: 'string',
          description: 'name',
        },
      },
      description: 'Base Metadata Object Type',
    },
    Property: {
      type: 'object',
      properties: {
        allFields: {
          type: 'object',
          additionalProperties: {
            type: 'object',
          },
        },
        defaultInstanceForType: {
          $ref: '#/definitions/Property',
        },
        descriptorForType: {
          $ref: '#/definitions/Descriptor',
        },
        initializationErrorString: {
          type: 'string',
        },
        initialized: {
          type: 'boolean',
        },
        name: {
          type: 'string',
        },
        nameBytes: {
          $ref: '#/definitions/ByteString',
        },
        parserForType: {
          $ref: '#/definitions/Parser«Property»',
        },
        serializedSize: {
          type: 'integer',
          format: 'int32',
        },
        unknownFields: {
          $ref: '#/definitions/UnknownFieldSet',
        },
        value: {
          type: 'string',
        },
        valueBytes: {
          $ref: '#/definitions/ByteString',
        },
      },
    },
    EnumValueDescriptor: {
      type: 'object',
      properties: {
        file: {
          $ref: '#/definitions/FileDescriptor',
        },
        fullName: {
          type: 'string',
        },
        index: {
          type: 'integer',
          format: 'int32',
        },
        name: {
          type: 'string',
        },
        number: {
          type: 'integer',
          format: 'int32',
        },
        options: {
          $ref: '#/definitions/EnumValueOptions',
        },
        type: {
          $ref: '#/definitions/EnumDescriptor',
        },
      },
    },
    ObjectMeta: {
      type: 'object',
      properties: {
        applicationName: {
          type: 'string',
        },
        categories: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        id: {
          type: 'string',
        },
        metric: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        properties: {
          type: 'array',
          items: {
            $ref: '#/definitions/PropertyMeta',
          },
        },
        stage: {
          type: 'string',
        },
        triggerGroups: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        type: {
          type: 'string',
        },
      },
    },
    ReceiverSummary: {
      type: 'object',
      properties: {
        health: {
          $ref: '#/definitions/DeviceEventResult',
        },
        heartBeat: {
          $ref: '#/definitions/DeviceEventResult',
        },
        receiverSummaryDetail: {
          $ref: '#/definitions/ReceiverSummaryDetail',
        },
      },
    },
    CommandOrBuilder: {
      type: 'object',
      properties: {
        allFields: {
          type: 'object',
          additionalProperties: {
            type: 'object',
          },
        },
        defaultInstanceForType: {
          $ref: '#/definitions/Message',
        },
        descriptorForType: {
          $ref: '#/definitions/Descriptor',
        },
        exec: {
          $ref: '#/definitions/Ioctl',
        },
        execOrBuilder: {
          $ref: '#/definitions/IoctlOrBuilder',
        },
        initializationErrorString: {
          type: 'string',
        },
        initialized: {
          type: 'boolean',
        },
        setup: {
          $ref: '#/definitions/Ioctl',
        },
        setupOrBuilder: {
          $ref: '#/definitions/IoctlOrBuilder',
        },
        teardown: {
          $ref: '#/definitions/Ioctl',
        },
        teardownOrBuilder: {
          $ref: '#/definitions/IoctlOrBuilder',
        },
        unknownFields: {
          $ref: '#/definitions/UnknownFieldSet',
        },
      },
    },
    ReceiverConfig: {
      type: 'object',
      required: ['identifier'],
      properties: {
        allowedTypes: {
          type: 'array',
          items: {
            $ref: '#/definitions/PeripheralTypeMeta',
          },
        },
        children: {
          type: 'array',
          items: {
            $ref: '#/definitions/ReceiverConfig',
          },
        },
        config: {
          type: 'object',
          additionalProperties: {
            type: 'string',
          },
        },
        id: {
          type: 'string',
        },
        mqttConfig: {
          $ref: '#/definitions/MQTTConfigBean',
        },
        parent: {
          type: 'string',
        },
        physicalId: {
          type: 'string',
        },
        serverTime: {
          type: 'integer',
          format: 'int64',
        },
        status: {
          type: 'string',
          enum: ['UNPROVISIONED', 'PROVISIONED', 'UP', 'DOWN', 'DEPROVISIONED', 'SOFTPROVISIONED'],
        },
        tenantId: {
          type: 'string',
        },
        identifier: {
          type: 'string',
          description: 'identifier',
        },
        type: {
          type: 'string',
          description: 'type',
        },
        name: {
          type: 'string',
          description: 'name',
        },
      },
      description: 'Base Metadata Object Type',
    },
    ReceiverSummaryDetail: {
      type: 'object',
      properties: {
        areaId: {
          type: 'string',
        },
        areaName: {
          type: 'string',
        },
        buildingId: {
          type: 'string',
        },
        buildingName: {
          type: 'string',
        },
        identifier: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        parentId: {
          type: 'string',
        },
        parentName: {
          type: 'string',
        },
        physicalId: {
          type: 'string',
        },
        status: {
          type: 'string',
          enum: ['UNPROVISIONED', 'PROVISIONED', 'UP', 'DOWN', 'DEPROVISIONED', 'SOFTPROVISIONED'],
        },
        tenantId: {
          type: 'string',
        },
        type: {
          type: 'string',
          enum: [
            'OMNI_RECEIVER',
            'MOBILE_RECEIVER',
            'OUT_OF_COVERAGE_PSEUDO_RECEIVER',
            'SOFT_RECEIVER',
            'LOCATION_MARKER',
            'CLOUD_CONNECTOR',
            'MICRO_CLOUD_CONNECTOR',
          ],
        },
      },
    },
    ReceiverCredentials: {
      type: 'object',
      properties: {
        apiKey: {
          type: 'string',
        },
        apiSecret: {
          type: 'string',
        },
        leafId: {
          type: 'string',
        },
        receiverId: {
          type: 'string',
        },
      },
    },
    'Parser«EnumValueOptions»': {
      type: 'object',
    },
    'Parser«MessageOptions»': {
      type: 'object',
    },
    'Parser«Command»': {
      type: 'object',
    },
    ActionTemplate: {
      type: 'object',
      properties: {
        applicableTriggerTemplates: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        description: {
          type: 'string',
        },
        id: {
          type: 'string',
        },
        inputForm: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        preResolvedParams: {
          type: 'object',
          additionalProperties: {
            type: 'string',
          },
        },
        status: {
          type: 'string',
          enum: ['PARTIAL', 'RESOLVED', 'ARCHIVED'],
        },
        tenantId: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
      },
    },
    JarFile: {
      type: 'object',
      properties: {
        jarFileName: {
          type: 'string',
        },
      },
    },
    UserDevice: {
      type: 'object',
      properties: {
        appPlatform: {
          type: 'string',
          enum: ['ios', 'android', 'windows'],
        },
        confirmationKey: {
          type: 'string',
        },
        deviceIdentifier: {
          type: 'string',
        },
        deviceName: {
          type: 'string',
        },
        id: {
          type: 'string',
        },
        providerDetails: {
          type: 'string',
        },
        status: {
          type: 'string',
          enum: ['UNSUBSCRIBED', 'PENDING_CONFIRMATION', 'CONFIRMED', 'SUBSCRIBED', 'UNREACHABLE'],
        },
        transport: {
          type: 'string',
          enum: ['web', 'email', 'application', 'pubnub', 'sms', 'voice'],
        },
        userId: {
          type: 'string',
        },
      },
    },
    MqttRequest: {
      type: 'object',
      properties: {
        unknownFields: {
          $ref: '#/definitions/UnknownFieldSet',
        },
      },
    },
    MessageLite: {
      type: 'object',
      properties: {
        defaultInstanceForType: {
          $ref: '#/definitions/MessageLite',
        },
        initialized: {
          type: 'boolean',
        },
        parserForType: {
          $ref: '#/definitions/Parser«MessageLite»',
        },
        serializedSize: {
          type: 'integer',
          format: 'int32',
        },
      },
    },
    TripData: {
      type: 'object',
      properties: {
        destination: {
          type: 'string',
        },
        destinationId: {
          type: 'string',
        },
        distance: {
          type: 'number',
          format: 'double',
        },
        dwellTime: {
          type: 'integer',
          format: 'int64',
        },
        entry: {
          type: 'string',
          format: 'date-time',
        },
        exit: {
          type: 'string',
          format: 'date-time',
        },
        origin: {
          type: 'string',
        },
        originId: {
          type: 'string',
        },
      },
    },
    ProcessRuleDTO: {
      type: 'object',
      properties: {
        app_id: {
          type: 'string',
        },
        is_ruleset: {
          type: 'boolean',
        },
        properties: {
          type: 'object',
          additionalProperties: {
            type: 'string',
          },
        },
        recipe_id: {
          type: 'string',
        },
        rule_class: {
          type: 'string',
        },
        rule_id: {
          type: 'string',
        },
        rule_type: {
          type: 'string',
        },
        stage_id: {
          type: 'string',
          enum: [
            'ConvertValue',
            'ChangeTransformToMetrics',
            'ChangeTransformToStream',
            'Transition',
            'AlertSession',
            'StateAlertSession',
            'CountAlertSession',
            'PresenceTrackingSession',
            'Metrics',
            'Stats',
            'HealthStateAlertSession',
          ],
        },
        tenant_id: {
          type: 'string',
        },
      },
    },
    AssetsSensorTag: {
      type: 'object',
      properties: {
        assets: {
          type: 'array',
          items: {
            $ref: '#/definitions/Asset',
          },
        },
        sensorTags: {
          type: 'array',
          items: {
            $ref: '#/definitions/SensorTag',
          },
        },
      },
    },
    'Parser«EventData»': {
      type: 'object',
    },
    NotificationAlert: {
      type: 'object',
      properties: {
        alertType: {
          type: 'string',
        },
        areaName: {
          type: 'string',
        },
        assetCategoryId: {
          type: 'string',
        },
        assetCategoryName: {
          type: 'string',
        },
        assetId: {
          type: 'string',
        },
        assetName: {
          type: 'string',
        },
        level: {
          type: 'string',
        },
        message: {
          type: 'string',
        },
        properties: {
          type: 'object',
          additionalProperties: {
            type: 'string',
          },
        },
        siteName: {
          type: 'string',
        },
        sourceId: {
          type: 'string',
        },
        sourceType: {
          type: 'string',
        },
        tagId: {
          type: 'string',
        },
        tenantId: {
          type: 'string',
        },
        time: {
          type: 'string',
          format: 'date-time',
        },
      },
    },
    PropertyOrBuilder: {
      type: 'object',
      properties: {
        allFields: {
          type: 'object',
          additionalProperties: {
            type: 'object',
          },
        },
        defaultInstanceForType: {
          $ref: '#/definitions/Message',
        },
        descriptorForType: {
          $ref: '#/definitions/Descriptor',
        },
        initializationErrorString: {
          type: 'string',
        },
        initialized: {
          type: 'boolean',
        },
        name: {
          type: 'string',
        },
        nameBytes: {
          $ref: '#/definitions/ByteString',
        },
        unknownFields: {
          $ref: '#/definitions/UnknownFieldSet',
        },
        value: {
          type: 'string',
        },
        valueBytes: {
          $ref: '#/definitions/ByteString',
        },
      },
    },
    MetricsValue: {
      type: 'object',
      properties: {
        group: {
          type: 'string',
        },
        interval: {
          type: 'integer',
          format: 'int64',
        },
        metrics: {
          type: 'object',
          additionalProperties: {
            type: 'string',
          },
        },
        name: {
          type: 'string',
        },
        scope: {
          type: 'string',
        },
        time: {
          type: 'string',
          format: 'date-time',
        },
        type: {
          type: 'string',
        },
      },
    },
    NotificationAlertExt: {
      type: 'object',
      properties: {
        alertType: {
          type: 'string',
        },
        areaName: {
          type: 'string',
        },
        assetCategoryId: {
          type: 'string',
        },
        assetCategoryName: {
          type: 'string',
        },
        assetExternalId: {
          type: 'string',
        },
        assetId: {
          type: 'string',
        },
        assetName: {
          type: 'string',
        },
        level: {
          type: 'string',
        },
        message: {
          type: 'string',
        },
        properties: {
          type: 'object',
          additionalProperties: {
            type: 'string',
          },
        },
        siteName: {
          type: 'string',
        },
        sourceId: {
          type: 'string',
        },
        sourceType: {
          type: 'string',
        },
        tagId: {
          type: 'string',
        },
        taggedAssetId: {
          type: 'string',
        },
        tenantId: {
          type: 'string',
        },
        time: {
          type: 'string',
          format: 'date-time',
        },
      },
    },
    FileOptions: {
      type: 'object',
      properties: {
        allFields: {
          type: 'object',
          additionalProperties: {
            type: 'object',
          },
        },
        ccGenericServices: {
          type: 'boolean',
        },
        defaultInstanceForType: {
          $ref: '#/definitions/FileOptions',
        },
        descriptorForType: {
          $ref: '#/definitions/Descriptor',
        },
        goPackage: {
          type: 'string',
        },
        goPackageBytes: {
          $ref: '#/definitions/ByteString',
        },
        initializationErrorString: {
          type: 'string',
        },
        initialized: {
          type: 'boolean',
        },
        javaGenerateEqualsAndHash: {
          type: 'boolean',
        },
        javaGenericServices: {
          type: 'boolean',
        },
        javaMultipleFiles: {
          type: 'boolean',
        },
        javaOuterClassname: {
          type: 'string',
        },
        javaOuterClassnameBytes: {
          $ref: '#/definitions/ByteString',
        },
        javaPackage: {
          type: 'string',
        },
        javaPackageBytes: {
          $ref: '#/definitions/ByteString',
        },
        optimizeFor: {
          type: 'string',
          enum: ['SPEED', 'CODE_SIZE', 'LITE_RUNTIME'],
        },
        parserForType: {
          $ref: '#/definitions/Parser«FileOptions»',
        },
        pyGenericServices: {
          type: 'boolean',
        },
        serializedSize: {
          type: 'integer',
          format: 'int32',
        },
        uninterpretedOptionCount: {
          type: 'integer',
          format: 'int32',
        },
        uninterpretedOptionList: {
          type: 'array',
          items: {
            $ref: '#/definitions/UninterpretedOption',
          },
        },
        uninterpretedOptionOrBuilderList: {
          type: 'array',
          items: {
            $ref: '#/definitions/UninterpretedOptionOrBuilder',
          },
        },
        unknownFields: {
          $ref: '#/definitions/UnknownFieldSet',
        },
      },
    },
    DescriptorMeta: {
      type: 'object',
      required: ['identifier'],
      properties: {
        standard: {
          type: 'boolean',
        },
        value: {
          type: 'string',
        },
        identifier: {
          type: 'string',
          description: 'identifier',
        },
        type: {
          type: 'string',
          description: 'type',
        },
        name: {
          type: 'string',
          description: 'name',
        },
      },
      description: 'Base Metadata Object Type',
    },
    TaggedAsset: {
      type: 'object',
      properties: {
        areaName: {
          type: 'string',
        },
        asset: {
          $ref: '#/definitions/Asset',
        },
        assetState: {
          type: 'string',
        },
        buildingName: {
          type: 'string',
        },
        categoryImageURL: {
          type: 'string',
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        currentArea: {
          type: 'string',
        },
        currentAreaId: {
          type: 'string',
        },
        currentConnector: {
          type: 'string',
        },
        currentConnectorId: {
          type: 'string',
        },
        currentConnectorName: {
          type: 'string',
        },
        id: {
          type: 'string',
        },
        lastSeen: {
          type: 'string',
          format: 'date-time',
        },
        modifiedAt: {
          type: 'string',
          format: 'date-time',
        },
        position: {
          $ref: '#/definitions/GeoPoint',
        },
        properties: {
          type: 'object',
          additionalProperties: {
            type: 'string',
          },
        },
        sensorTag: {
          $ref: '#/definitions/SensorTag',
        },
        status: {
          type: 'string',
          enum: ['UNPROVISIONED', 'PROVISIONED', 'DISABLED'],
        },
        tagImageURL: {
          type: 'string',
        },
        tenantId: {
          type: 'string',
        },
        tenantName: {
          type: 'string',
        },
      },
    },
    ActionType: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
      },
    },
    UserDTO: {
      type: 'object',
      required: ['id', 'password', 'tenantId'],
      properties: {
        details: {
          type: 'object',
          additionalProperties: {
            type: 'string',
          },
        },
        id: {
          type: 'string',
          description: 'user id',
        },
        modifiedTime: {
          type: 'string',
          format: 'date-time',
        },
        primaryEmail: {
          type: 'string',
        },
        securityQset: {
          type: 'boolean',
        },
        securityQuestions: {
          type: 'object',
          additionalProperties: {
            type: 'string',
          },
        },
        userDevices: {
          type: 'array',
          items: {
            $ref: '#/definitions/UserDevice',
          },
        },
        tenantId: {
          type: 'string',
          description: 'organization id the user belongs',
        },
        password: {
          type: 'string',
          description: 'user login password',
        },
        name: {
          type: 'string',
          description: 'user display name',
        },
        enabled: {
          type: 'boolean',
          example: false,
          description: 'active user',
        },
        type: {
          type: 'string',
          description: 'user type',
          enum: ['NORMAL_USER', 'API_USER'],
        },
        roles: {
          type: 'array',
          description: 'roles',
          items: {
            type: 'string',
          },
        },
        permissions: {
          type: 'array',
          description: 'permissions',
          items: {
            type: 'string',
          },
        },
        properties: {
          type: 'object',
          description: 'custom properties',
          additionalProperties: {
            type: 'string',
          },
        },
      },
      description: 'Application or API User',
    },
    ReportDTO: {
      type: 'object',
      properties: {
        rows: {
          type: 'array',
          items: {
            type: 'object',
          },
        },
      },
    },
    FieldOptions: {
      type: 'object',
      properties: {
        allFields: {
          type: 'object',
          additionalProperties: {
            type: 'object',
          },
        },
        ctype: {
          type: 'string',
          enum: ['STRING', 'CORD', 'STRING_PIECE'],
        },
        defaultInstanceForType: {
          $ref: '#/definitions/FieldOptions',
        },
        deprecated: {
          type: 'boolean',
        },
        descriptorForType: {
          $ref: '#/definitions/Descriptor',
        },
        experimentalMapKey: {
          type: 'string',
        },
        experimentalMapKeyBytes: {
          $ref: '#/definitions/ByteString',
        },
        initializationErrorString: {
          type: 'string',
        },
        initialized: {
          type: 'boolean',
        },
        lazy: {
          type: 'boolean',
        },
        packed: {
          type: 'boolean',
        },
        parserForType: {
          $ref: '#/definitions/Parser«FieldOptions»',
        },
        serializedSize: {
          type: 'integer',
          format: 'int32',
        },
        uninterpretedOptionCount: {
          type: 'integer',
          format: 'int32',
        },
        uninterpretedOptionList: {
          type: 'array',
          items: {
            $ref: '#/definitions/UninterpretedOption',
          },
        },
        uninterpretedOptionOrBuilderList: {
          type: 'array',
          items: {
            $ref: '#/definitions/UninterpretedOptionOrBuilder',
          },
        },
        unknownFields: {
          $ref: '#/definitions/UnknownFieldSet',
        },
        weak: {
          type: 'boolean',
        },
      },
    },
    Result: {
      type: 'object',
      required: ['cId', 'format', 'oId', 'oType', 'sId', 'unit'],
      properties: {
        cId: {
          type: 'string',
          description: 'characteristic Id',
        },
        cName: {
          type: 'string',
          description: 'human readable characteristic name',
        },
        data: {
          type: 'array',
          description: 'array of data values and the time the data was recorded',
          items: {
            $ref: '#/definitions/StreamResultValue',
          },
        },
        format: {
          type: 'string',
          description:
            "format type - CloudLeaf known system types are: 'STRING_TYPE', 'INT_TYPE', 'FLOAT_TYPE', 'DOUBLE_TYPE'. Custom types can be defined. 'UNKNOWN_TYPE' if format is not known",
        },
        oId: {
          type: 'string',
          description: 'object Id',
        },
        oName: {
          type: 'string',
          description: 'object Name',
        },
        oType: {
          type: 'string',
          description: 'object Type',
          enum: ['PERIPHERAL', 'RECEIVER', 'ORGANIZATION', 'SITE', 'AREA', 'USER'],
        },
        sId: {
          type: 'string',
          description: 'service Id',
        },
        sName: {
          type: 'string',
          description: 'human readable service name',
        },
        sourceData: {
          type: 'array',
          description: 'array of data values for a source and the time the data was recorded',
          items: {
            $ref: '#/definitions/ResultValue',
          },
        },
        unit: {
          type: 'string',
          description: "unit type - 'UNKNOWN_TYPE' if type information is not known",
        },
      },
      description: 'Data Stream Values For different objects within the platform',
    },
    MQTTConfigBean: {
      type: 'object',
      properties: {
        brokerurl: {
          type: 'string',
        },
        enabled: {
          type: 'boolean',
        },
        externalBrokerurl: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
        userid: {
          type: 'string',
        },
      },
    },
    ProcessRule: {
      type: 'object',
      properties: {
        properties: {
          type: 'object',
          additionalProperties: {
            type: 'string',
          },
        },
        rule_class: {
          type: 'string',
        },
        rule_id: {
          type: 'string',
        },
      },
    },
    GeoPoint: {
      type: 'object',
      properties: {
        latitude: {
          type: 'number',
          format: 'double',
        },
        longitude: {
          type: 'number',
          format: 'double',
        },
      },
    },
    NotificationTopic: {
      type: 'object',
      properties: {
        category: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        id: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        notificationType: {
          type: 'string',
        },
        tenantId: {
          type: 'string',
        },
      },
    },
    'Parser«Ioctl»': {
      type: 'object',
    },
    GeoEventData: {
      type: 'object',
      properties: {
        cId: {
          type: 'string',
        },
        eventTime: {
          type: 'integer',
          format: 'int64',
        },
        leafId: {
          type: 'string',
        },
        peripheralId: {
          type: 'string',
        },
        sId: {
          type: 'string',
        },
        time: {
          type: 'integer',
          format: 'int64',
        },
        value: {
          type: 'string',
        },
      },
    },
    PeripheralTasks: {
      type: 'object',
      properties: {
        peripheralId: {
          type: 'string',
        },
        tasks: {
          type: 'object',
          additionalProperties: {
            type: 'array',
            items: {
              $ref: '#/definitions/Command',
            },
          },
        },
        type: {
          type: 'string',
        },
      },
    },
    ServiceDescriptor: {
      type: 'object',
      properties: {
        file: {
          $ref: '#/definitions/FileDescriptor',
        },
        fullName: {
          type: 'string',
        },
        index: {
          type: 'integer',
          format: 'int32',
        },
        methods: {
          type: 'array',
          items: {
            $ref: '#/definitions/MethodDescriptor',
          },
        },
        name: {
          type: 'string',
        },
        options: {
          $ref: '#/definitions/ServiceOptions',
        },
      },
    },
    ReceiverAuth: {
      type: 'object',
      properties: {
        physicalId: {
          type: 'string',
        },
        secret: {
          type: 'string',
        },
      },
    },
    AccessToken: {
      type: 'object',
      properties: {
        expiry: {
          type: 'string',
          format: 'date-time',
        },
        token: {
          type: 'string',
        },
      },
    },
    MqttResponse: {
      type: 'object',
      properties: {
        allFields: {
          type: 'object',
          additionalProperties: {
            type: 'object',
          },
        },
        correlationId: {
          type: 'string',
        },
        correlationIdBytes: {
          $ref: '#/definitions/ByteString',
        },
        dataCount: {
          type: 'integer',
          format: 'int32',
        },
        dataList: {
          type: 'array',
          items: {
            $ref: '#/definitions/Property',
          },
        },
        dataOrBuilderList: {
          type: 'array',
          items: {
            $ref: '#/definitions/PropertyOrBuilder',
          },
        },
        defaultInstanceForType: {
          $ref: '#/definitions/MqttResponse',
        },
        descriptorForType: {
          $ref: '#/definitions/Descriptor',
        },
        initializationErrorString: {
          type: 'string',
        },
        initialized: {
          type: 'boolean',
        },
        parserForType: {
          $ref: '#/definitions/Parser«MqttResponse»',
        },
        responseCode: {
          type: 'integer',
          format: 'int32',
        },
        responseTime: {
          type: 'integer',
          format: 'int64',
        },
        responseType: {
          type: 'string',
        },
        responseTypeBytes: {
          $ref: '#/definitions/ByteString',
        },
        serializedSize: {
          type: 'integer',
          format: 'int32',
        },
        unknownFields: {
          $ref: '#/definitions/UnknownFieldSet',
        },
      },
    },
    'Parser«UninterpretedOption»': {
      type: 'object',
    },
    JobData: {
      type: 'object',
      properties: {
        cassandraContactPt: {
          type: 'string',
        },
        dataSource: {
          type: 'string',
        },
        endTime: {
          type: 'string',
        },
        fileName: {
          type: 'string',
        },
        startTime: {
          type: 'string',
        },
        tenantId: {
          type: 'string',
        },
      },
    },
    'Parser«Option»': {
      type: 'object',
    },
    'Parser«FieldOptions»': {
      type: 'object',
    },
    Tasks: {
      type: 'object',
      properties: {
        allFields: {
          type: 'object',
          additionalProperties: {
            type: 'object',
          },
        },
        commandsCount: {
          type: 'integer',
          format: 'int32',
        },
        commandsList: {
          type: 'array',
          items: {
            $ref: '#/definitions/Command',
          },
        },
        commandsOrBuilderList: {
          type: 'array',
          items: {
            $ref: '#/definitions/CommandOrBuilder',
          },
        },
        defaultInstanceForType: {
          $ref: '#/definitions/Tasks',
        },
        descriptorForType: {
          $ref: '#/definitions/Descriptor',
        },
        initializationErrorString: {
          type: 'string',
        },
        initialized: {
          type: 'boolean',
        },
        parserForType: {
          $ref: '#/definitions/Parser«Tasks»',
        },
        serializedSize: {
          type: 'integer',
          format: 'int32',
        },
        unknownFields: {
          $ref: '#/definitions/UnknownFieldSet',
        },
      },
    },
    AssetResult: {
      type: 'object',
      required: ['cId', 'format', 'oId', 'oType', 'sId', 'unit'],
      properties: {
        areaName: {
          type: 'string',
          description: 'Area Name',
        },
        assetData: {
          type: 'array',
          description: 'array of data values and the time the data was recorded',
          items: {
            $ref: '#/definitions/AssetResultValue',
          },
        },
        assetName: {
          type: 'string',
          description: 'Asset Name',
        },
        cId: {
          type: 'string',
          description: 'characteristic Id',
        },
        cName: {
          type: 'string',
          description: 'human readable characteristic name',
        },
        data: {
          type: 'array',
          description: 'array of data values and the time the data was recorded',
          items: {
            $ref: '#/definitions/StreamResultValue',
          },
        },
        format: {
          type: 'string',
          description:
            "format type - CloudLeaf known system types are: 'STRING_TYPE', 'INT_TYPE', 'FLOAT_TYPE', 'DOUBLE_TYPE'. Custom types can be defined. 'UNKNOWN_TYPE' if format is not known",
        },
        oId: {
          type: 'string',
          description: 'object Id',
        },
        oName: {
          type: 'string',
          description: 'object Name',
        },
        oType: {
          type: 'string',
          description: 'object Type',
          enum: ['PERIPHERAL', 'RECEIVER', 'ORGANIZATION', 'SITE', 'AREA', 'USER'],
        },
        sId: {
          type: 'string',
          description: 'service Id',
        },
        sName: {
          type: 'string',
          description: 'human readable service name',
        },
        sourceData: {
          type: 'array',
          description: 'array of data values for a source and the time the data was recorded',
          items: {
            $ref: '#/definitions/ResultValue',
          },
        },
        unit: {
          type: 'string',
          description: "unit type - 'UNKNOWN_TYPE' if type information is not known",
        },
      },
      description: 'Data Stream Values For Asset objects within the platform',
    },
    DevicePropertyMeta: {
      type: 'object',
      properties: {
        modLevel: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
        value: {
          type: 'string',
        },
      },
    },
    Receiver: {
      type: 'object',
      required: ['identifier'],
      properties: {
        parent: {
          type: 'string',
        },
        physicalId: {
          type: 'string',
        },
        status: {
          type: 'string',
          enum: ['UNPROVISIONED', 'PROVISIONED', 'UP', 'DOWN', 'DEPROVISIONED', 'SOFTPROVISIONED'],
        },
        tenantId: {
          type: 'string',
        },
        identifier: {
          type: 'string',
          description: 'identifier',
        },
        type: {
          type: 'string',
          description: 'type',
        },
        name: {
          type: 'string',
          description: 'name',
        },
      },
      description: 'Base Metadata Object Type',
    },
    EnumDescriptor: {
      type: 'object',
      properties: {
        containingType: {
          $ref: '#/definitions/Descriptor',
        },
        file: {
          $ref: '#/definitions/FileDescriptor',
        },
        fullName: {
          type: 'string',
        },
        index: {
          type: 'integer',
          format: 'int32',
        },
        name: {
          type: 'string',
        },
        options: {
          $ref: '#/definitions/EnumOptions',
        },
        values: {
          type: 'array',
          items: {
            $ref: '#/definitions/EnumValueDescriptor',
          },
        },
      },
    },
    StatsValue: {
      type: 'object',
      properties: {
        count: {
          type: 'integer',
          format: 'int64',
        },
        max: {
          type: 'number',
          format: 'double',
        },
        mean: {
          type: 'number',
          format: 'double',
        },
        min: {
          type: 'number',
          format: 'double',
        },
        stdev: {
          type: 'number',
          format: 'double',
        },
        time: {
          type: 'string',
          format: 'date-time',
        },
      },
    },
    Role: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
        permissions: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        tenantId: {
          type: 'string',
        },
      },
    },
    Area: {
      type: 'object',
      required: ['identifier', 'type'],
      properties: {
        bounds: {
          $ref: '#/definitions/BoundingBox',
        },
        deleted: {
          type: 'boolean',
        },
        locus: {
          $ref: '#/definitions/Point',
        },
        order: {
          type: 'integer',
          format: 'int32',
        },
        receiver: {
          $ref: '#/definitions/Receiver',
        },
        tags: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        identifier: {
          type: 'string',
          description: 'identifier',
        },
        type: {
          type: 'string',
          description: 'type',
        },
        name: {
          type: 'string',
          description: 'name',
        },
      },
      description: 'Base Metadata Object Type',
    },
    NamePart: {
      type: 'object',
      properties: {
        allFields: {
          type: 'object',
          additionalProperties: {
            type: 'object',
          },
        },
        defaultInstanceForType: {
          $ref: '#/definitions/NamePart',
        },
        descriptorForType: {
          $ref: '#/definitions/Descriptor',
        },
        initializationErrorString: {
          type: 'string',
        },
        initialized: {
          type: 'boolean',
        },
        isExtension: {
          type: 'boolean',
        },
        namePart: {
          type: 'string',
        },
        namePartBytes: {
          $ref: '#/definitions/ByteString',
        },
        parserForType: {
          $ref: '#/definitions/Parser«NamePart»',
        },
        serializedSize: {
          type: 'integer',
          format: 'int32',
        },
        unknownFields: {
          $ref: '#/definitions/UnknownFieldSet',
        },
      },
    },
    TriggerTemplate: {
      type: 'object',
      properties: {
        applicableMetric: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        id: {
          type: 'string',
        },
        inputForm: {
          type: 'string',
        },
        msgDetail: {
          type: 'string',
        },
        msgSummary: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        preResolvedParams: {
          type: 'object',
          additionalProperties: {
            type: 'string',
          },
        },
        status: {
          type: 'string',
          enum: ['PARTIAL', 'RESOLVED', 'ARCHIVED'],
        },
        tenantId: {
          type: 'string',
        },
        triggerGroups: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        type: {
          type: 'string',
        },
      },
    },
    'Parser«Message»': {
      type: 'object',
    },
    State: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        type: {
          $ref: '#/definitions/DataType',
        },
      },
    },
    Stats: {
      type: 'object',
      properties: {
        data: {
          type: 'array',
          description: 'array of data values and the time the data was recorded',
          items: {
            $ref: '#/definitions/StatsValue',
          },
        },
      },
      description: 'Statistics metrics for different objects within the platform',
    },
    ClfMessage: {
      type: 'object',
      properties: {
        altBody: {
          type: 'string',
        },
        body: {
          type: 'string',
        },
        subject: {
          type: 'string',
        },
        transport: {
          type: 'string',
          enum: ['web', 'email', 'application', 'pubnub', 'sms', 'voice'],
        },
      },
    },
    Descriptor: {
      type: 'object',
      properties: {
        containingType: {
          $ref: '#/definitions/Descriptor',
        },
        enumTypes: {
          type: 'array',
          items: {
            $ref: '#/definitions/EnumDescriptor',
          },
        },
        extensions: {
          type: 'array',
          items: {
            $ref: '#/definitions/FieldDescriptor',
          },
        },
        fields: {
          type: 'array',
          items: {
            $ref: '#/definitions/FieldDescriptor',
          },
        },
        file: {
          $ref: '#/definitions/FileDescriptor',
        },
        fullName: {
          type: 'string',
        },
        index: {
          type: 'integer',
          format: 'int32',
        },
        name: {
          type: 'string',
        },
        nestedTypes: {
          type: 'array',
          items: {
            $ref: '#/definitions/Descriptor',
          },
        },
        options: {
          $ref: '#/definitions/MessageOptions',
        },
      },
    },
    Option: {
      type: 'object',
      properties: {
        allFields: {
          type: 'object',
          additionalProperties: {
            type: 'object',
          },
        },
        defaultInstanceForType: {
          $ref: '#/definitions/Option',
        },
        descriptorForType: {
          $ref: '#/definitions/Descriptor',
        },
        initializationErrorString: {
          type: 'string',
        },
        initialized: {
          type: 'boolean',
        },
        optionType: {
          type: 'string',
          enum: [
            'CONNECTION_INTERVAL',
            'NOTIFY_TIME_IN_MILLIS',
            'NOTIFY_TIME_OUT_IN_MILLIS',
            'PRIORITY',
          ],
        },
        parserForType: {
          $ref: '#/definitions/Parser«Option»',
        },
        serializedSize: {
          type: 'integer',
          format: 'int32',
        },
        unknownFields: {
          $ref: '#/definitions/UnknownFieldSet',
        },
        val: {
          type: 'integer',
          format: 'int64',
        },
      },
    },
    ReceiverDetail: {
      type: 'object',
      required: ['identifier'],
      properties: {
        area: {
          $ref: '#/definitions/Area',
        },
        areaId: {
          type: 'string',
        },
        attributes: {
          type: 'object',
          additionalProperties: {
            type: 'string',
          },
        },
        building: {
          $ref: '#/definitions/Building',
        },
        lastReported: {
          type: 'string',
          format: 'date-time',
        },
        parent: {
          type: 'string',
        },
        physicalId: {
          type: 'string',
        },
        position: {
          $ref: '#/definitions/GeoPoint',
        },
        provisionedAt: {
          type: 'string',
          format: 'date-time',
        },
        status: {
          type: 'string',
          enum: ['UNPROVISIONED', 'PROVISIONED', 'UP', 'DOWN', 'DEPROVISIONED', 'SOFTPROVISIONED'],
        },
        tags: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        tenantId: {
          type: 'string',
        },
        tenantName: {
          type: 'string',
        },
        identifier: {
          type: 'string',
          description: 'identifier',
        },
        type: {
          type: 'string',
          description: 'type',
        },
        name: {
          type: 'string',
          description: 'name',
        },
      },
      description: 'Base Metadata Object Type',
    },
    DeviceEvent: {
      type: 'object',
      properties: {
        deviceId: {
          type: 'string',
        },
        deviceType: {
          type: 'string',
        },
        level: {
          type: 'string',
        },
        payload: {
          type: 'object',
          additionalProperties: {
            type: 'array',
            items: {
              $ref: '#/definitions/EventData',
            },
          },
        },
        time: {
          type: 'string',
          format: 'date-time',
        },
      },
    },
    Action: {
      type: 'object',
      properties: {
        targetId: {
          type: 'string',
        },
        targetType: {
          type: 'string',
        },
      },
    },
    Category: {
      type: 'object',
      properties: {
        assetStateValues: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        description: {
          type: 'string',
        },
        id: {
          type: 'string',
        },
        imageURL: {
          type: 'string',
        },
        metrics: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        modifiedAt: {
          type: 'string',
          format: 'date-time',
        },
        name: {
          type: 'string',
        },
        properties: {
          type: 'object',
          additionalProperties: {
            type: 'string',
          },
        },
        sortOrder: {
          type: 'integer',
          format: 'int32',
        },
        status: {
          type: 'string',
          enum: ['ACTIVE', 'ARCHIVED', 'DELETED'],
        },
        tenantId: {
          type: 'string',
        },
      },
    },
    Message: {
      type: 'object',
      properties: {
        allFields: {
          type: 'object',
          additionalProperties: {
            type: 'object',
          },
        },
        defaultInstanceForType: {
          $ref: '#/definitions/MessageLite',
        },
        descriptorForType: {
          $ref: '#/definitions/Descriptor',
        },
        initializationErrorString: {
          type: 'string',
        },
        initialized: {
          type: 'boolean',
        },
        parserForType: {
          $ref: '#/definitions/Parser«Message»',
        },
        serializedSize: {
          type: 'integer',
          format: 'int32',
        },
        unknownFields: {
          $ref: '#/definitions/UnknownFieldSet',
        },
      },
    },
    DeviceMeta: {
      type: 'object',
      properties: {
        payload: {
          type: 'array',
          items: {
            $ref: '#/definitions/DeviceTypeMeta',
          },
        },
        time: {
          type: 'string',
          format: 'date-time',
        },
      },
    },
    IdCommand: {
      type: 'object',
      required: ['action', 'cId', 'inAdvert'],
      properties: {
        options: {
          type: 'object',
          description:
            'Map of options for a specific Action, for example read frequency, or value to be written',
          additionalProperties: {
            type: 'string',
          },
        },
        cId: {
          type: 'string',
          description: 'Characteristic to act on',
        },
        action: {
          type: 'string',
          description: "Action to perform, for Id set to 'Read'",
          enum: ['Read', 'Notify', 'Write', 'WriteWithoutResponse', 'Indicate'],
        },
        inAdvert: {
          type: 'boolean',
          example: false,
          description: 'Specifies whether Id is in the Advertisement',
        },
        sId: {
          type: 'string',
          description:
            'Service from which to extract the Id of the peripheral - set if inAdvert is false',
        },
      },
      description: 'Command to determine how to extract the identity of the peripheral',
    },
    UserCredsModifier: {
      type: 'object',
      required: ['newSecret', 'oldSecret'],
      properties: {
        newSecret: {
          type: 'string',
        },
        oldSecret: {
          type: 'string',
        },
      },
    },
    DeviceEventResult: {
      type: 'object',
      properties: {
        deviceId: {
          type: 'string',
        },
        deviceType: {
          type: 'string',
        },
        events: {
          type: 'array',
          items: {
            $ref: '#/definitions/EventDataResult',
          },
        },
      },
    },
    DeviceTypeMeta: {
      type: 'object',
      properties: {
        command: {
          type: 'object',
          additionalProperties: {
            type: 'array',
            items: {
              $ref: '#/definitions/DevicePropertyMeta',
            },
          },
        },
        configuration: {
          type: 'object',
          additionalProperties: {
            type: 'array',
            items: {
              $ref: '#/definitions/DevicePropertyMeta',
            },
          },
        },
        deviceID: {
          type: 'string',
        },
        deviceType: {
          type: 'string',
        },
        monitor: {
          type: 'object',
          additionalProperties: {
            type: 'array',
            items: {
              $ref: '#/definitions/DevicePropertyMeta',
            },
          },
        },
      },
    },
    'Parser«MqttResponse»': {
      type: 'object',
    },
    FieldDescriptor: {
      type: 'object',
      properties: {
        containingType: {
          $ref: '#/definitions/Descriptor',
        },
        defaultValue: {
          type: 'object',
        },
        enumType: {
          $ref: '#/definitions/EnumDescriptor',
        },
        extension: {
          type: 'boolean',
        },
        extensionScope: {
          $ref: '#/definitions/Descriptor',
        },
        file: {
          $ref: '#/definitions/FileDescriptor',
        },
        fullName: {
          type: 'string',
        },
        index: {
          type: 'integer',
          format: 'int32',
        },
        javaType: {
          type: 'string',
          enum: [
            'INT',
            'LONG',
            'FLOAT',
            'DOUBLE',
            'BOOLEAN',
            'STRING',
            'BYTE_STRING',
            'ENUM',
            'MESSAGE',
          ],
        },
        liteJavaType: {
          type: 'string',
          enum: [
            'INT',
            'LONG',
            'FLOAT',
            'DOUBLE',
            'BOOLEAN',
            'STRING',
            'BYTE_STRING',
            'ENUM',
            'MESSAGE',
          ],
        },
        liteType: {
          type: 'string',
          enum: [
            'DOUBLE',
            'FLOAT',
            'INT64',
            'UINT64',
            'INT32',
            'FIXED64',
            'FIXED32',
            'BOOL',
            'STRING',
            'GROUP',
            'MESSAGE',
            'BYTES',
            'UINT32',
            'ENUM',
            'SFIXED32',
            'SFIXED64',
            'SINT32',
            'SINT64',
          ],
        },
        messageType: {
          $ref: '#/definitions/Descriptor',
        },
        name: {
          type: 'string',
        },
        number: {
          type: 'integer',
          format: 'int32',
        },
        optional: {
          type: 'boolean',
        },
        options: {
          $ref: '#/definitions/FieldOptions',
        },
        packable: {
          type: 'boolean',
        },
        packed: {
          type: 'boolean',
        },
        repeated: {
          type: 'boolean',
        },
        required: {
          type: 'boolean',
        },
        type: {
          type: 'string',
          enum: [
            'DOUBLE',
            'FLOAT',
            'INT64',
            'UINT64',
            'INT32',
            'FIXED64',
            'FIXED32',
            'BOOL',
            'STRING',
            'GROUP',
            'MESSAGE',
            'BYTES',
            'UINT32',
            'ENUM',
            'SFIXED32',
            'SFIXED64',
            'SINT32',
            'SINT64',
          ],
        },
      },
    },
    PropertyMeta: {
      type: 'object',
      properties: {
        appType: {
          type: 'string',
          enum: [
            'TENANT',
            'USER',
            'USER_DEVICE',
            'SITE',
            'AREA',
            'RECEIVER',
            'PERIPHERAL',
            'CATEGORY',
            'PERIPHERALMETA',
            'ASSET',
            'SENSORTAG',
            'TAGGEDASSET',
            'RULES',
            'ROLE',
            'changelog',
            'TRIGGER_TEMPLATE',
            'ACTION_TEMPLATE',
            'RECIPE',
            'SYSRECIPE',
            'NOTIFLEVEL',
            'OTHER',
          ],
        },
        defaultValue: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        keyName: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        required: {
          type: 'boolean',
        },
        simpleClassName: {
          type: 'string',
        },
        type: {
          type: 'string',
          enum: ['KNOWN_APPLICATION_TYPE', 'JAVA_CLASS_TYPE'],
        },
      },
    },
    ProcessRuleStage: {
      type: 'object',
      properties: {
        ruleset: {
          $ref: '#/definitions/ProcessRuleSet',
        },
        stage_id: {
          type: 'string',
        },
      },
    },
    'Parser«MethodOptions»': {
      type: 'object',
    },
    SensorTag: {
      type: 'object',
      properties: {
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        id: {
          type: 'string',
        },
        modifiedAt: {
          type: 'string',
          format: 'date-time',
        },
        properties: {
          type: 'object',
          additionalProperties: {
            type: 'string',
          },
        },
        status: {
          type: 'string',
          enum: ['READY', 'ACTIVE', 'INACTIVE', 'FAILED'],
        },
        tenantId: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
      },
    },
    PeripheralTypeMeta: {
      type: 'object',
      properties: {
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        deviceClass: {
          type: 'string',
        },
        enabled: {
          type: 'boolean',
        },
        idCommand: {
          $ref: '#/definitions/IdCommand',
        },
        modifiedAt: {
          type: 'string',
          format: 'date-time',
        },
        regEx: {
          type: 'string',
        },
      },
      description:
        'Peripheral Type Metadata Object - I/O object used to describe a type of peripheral, how to extract its ID, etc.',
    },
    'Parser«EnumOptions»': {
      type: 'object',
    },
    UninterpretedOptionOrBuilder: {
      type: 'object',
      properties: {
        aggregateValue: {
          type: 'string',
        },
        aggregateValueBytes: {
          $ref: '#/definitions/ByteString',
        },
        allFields: {
          type: 'object',
          additionalProperties: {
            type: 'object',
          },
        },
        defaultInstanceForType: {
          $ref: '#/definitions/Message',
        },
        descriptorForType: {
          $ref: '#/definitions/Descriptor',
        },
        doubleValue: {
          type: 'number',
          format: 'double',
        },
        identifierValue: {
          type: 'string',
        },
        identifierValueBytes: {
          $ref: '#/definitions/ByteString',
        },
        initializationErrorString: {
          type: 'string',
        },
        initialized: {
          type: 'boolean',
        },
        nameCount: {
          type: 'integer',
          format: 'int32',
        },
        nameList: {
          type: 'array',
          items: {
            $ref: '#/definitions/NamePart',
          },
        },
        nameOrBuilderList: {
          type: 'array',
          items: {
            $ref: '#/definitions/NamePartOrBuilder',
          },
        },
        negativeIntValue: {
          type: 'integer',
          format: 'int64',
        },
        positiveIntValue: {
          type: 'integer',
          format: 'int64',
        },
        stringValue: {
          $ref: '#/definitions/ByteString',
        },
        unknownFields: {
          $ref: '#/definitions/UnknownFieldSet',
        },
      },
    },
    ApplicationProcessRule: {
      type: 'object',
      properties: {
        app_id: {
          type: 'string',
        },
        stages: {
          type: 'array',
          items: {
            $ref: '#/definitions/ProcessRuleStage',
          },
        },
      },
    },
    Zone: {
      type: 'object',
      required: ['identifier'],
      properties: {
        regions: {
          type: 'array',
          items: {
            $ref: '#/definitions/Space',
          },
        },
        identifier: {
          type: 'string',
          description: 'identifier',
        },
        type: {
          type: 'string',
          description: 'type',
        },
        name: {
          type: 'string',
          description: 'name',
        },
      },
      description: 'Base Metadata Object Type',
    },
    Point: {
      type: 'object',
      properties: {
        height: {
          type: 'number',
          format: 'double',
        },
        lat: {
          type: 'number',
          format: 'double',
        },
        lng: {
          type: 'number',
          format: 'double',
        },
      },
    },
    ResultValue: {
      type: 'object',
      properties: {
        reporterId: {
          type: 'object',
        },
        reporterName: {
          type: 'object',
        },
        time: {
          type: 'string',
          format: 'date-time',
        },
        value: {
          type: 'object',
        },
      },
    },
    EventDataResult: {
      type: 'object',
      properties: {
        level: {
          type: 'string',
        },
        module: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        time: {
          type: 'string',
          format: 'date-time',
        },
        type: {
          type: 'string',
        },
        value: {
          type: 'string',
        },
      },
    },
    PeripheralCapabilities: {
      type: 'object',
      properties: {
        capabilities: {
          type: 'array',
          items: {
            $ref: '#/definitions/Capability',
          },
        },
        peripheralActions: {
          type: 'array',
          items: {
            $ref: '#/definitions/ActionMeta',
          },
        },
      },
    },
    MethodDescriptor: {
      type: 'object',
      properties: {
        file: {
          $ref: '#/definitions/FileDescriptor',
        },
        fullName: {
          type: 'string',
        },
        index: {
          type: 'integer',
          format: 'int32',
        },
        inputType: {
          $ref: '#/definitions/Descriptor',
        },
        name: {
          type: 'string',
        },
        options: {
          $ref: '#/definitions/MethodOptions',
        },
        outputType: {
          $ref: '#/definitions/Descriptor',
        },
        service: {
          $ref: '#/definitions/ServiceDescriptor',
        },
      },
    },
    NotificationSubscription: {
      type: 'object',
      properties: {
        categoryRegEx: {
          type: 'string',
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
        },
        device: {
          $ref: '#/definitions/UserDevice',
        },
        levelRegEx: {
          type: 'string',
        },
        modifiedAt: {
          type: 'string',
          format: 'date-time',
        },
        notifTypeRegEx: {
          type: 'string',
        },
        notificationStatus: {
          type: 'string',
        },
        regExString: {
          type: 'string',
        },
        tenantId: {
          type: 'string',
        },
        userId: {
          type: 'string',
        },
      },
    },
    FileDescriptor: {
      type: 'object',
      properties: {
        dependencies: {
          type: 'array',
          items: {
            $ref: '#/definitions/FileDescriptor',
          },
        },
        enumTypes: {
          type: 'array',
          items: {
            $ref: '#/definitions/EnumDescriptor',
          },
        },
        extensions: {
          type: 'array',
          items: {
            $ref: '#/definitions/FieldDescriptor',
          },
        },
        messageTypes: {
          type: 'array',
          items: {
            $ref: '#/definitions/Descriptor',
          },
        },
        name: {
          type: 'string',
        },
        options: {
          $ref: '#/definitions/FileOptions',
        },
        package: {
          type: 'string',
        },
        publicDependencies: {
          type: 'array',
          items: {
            $ref: '#/definitions/FileDescriptor',
          },
        },
        services: {
          type: 'array',
          items: {
            $ref: '#/definitions/ServiceDescriptor',
          },
        },
      },
    },
    'Parser«FileOptions»': {
      type: 'object',
    },
    'Parser«MessageLite»': {
      type: 'object',
    },
    'Parser«ServiceOptions»': {
      type: 'object',
    },
    ProcessRuleSet: {
      type: 'object',
      properties: {
        properties: {
          type: 'object',
          additionalProperties: {
            type: 'string',
          },
        },
        rule_class: {
          type: 'string',
        },
        rule_id: {
          type: 'string',
        },
        rules: {
          type: 'array',
          items: {
            $ref: '#/definitions/ProcessRule',
          },
        },
      },
    },
    Command: {
      type: 'object',
      required: ['action', 'cId'],
      properties: {
        config: {
          type: 'array',
          items: {
            $ref: '#/definitions/Ioctl',
          },
        },
        options: {
          type: 'object',
          description:
            'Map of options for a specific Action, for example read frequency, or value to be written',
          additionalProperties: {
            type: 'string',
          },
        },
        cId: {
          type: 'string',
          description: 'Characteristic to act on',
        },
        action: {
          type: 'string',
          description: "Action to perform, for Id set to 'Read'",
          enum: ['Read', 'Notify', 'Write', 'WriteWithoutResponse', 'Indicate'],
        },
      },
      description: 'Task object - describes commands to be performed on the peripheral',
    },
    UserCredentials: {
      type: 'object',
      required: ['login', 'secret'],
      properties: {
        login: {
          type: 'string',
        },
        secret: {
          type: 'string',
        },
      },
    },
    CharacteristicMeta: {
      type: 'object',
      required: ['identifier'],
      properties: {
        descriptors: {
          type: 'array',
          description: 'Descriptor list',
          items: {
            $ref: '#/definitions/DescriptorMeta',
          },
        },
        properties: {
          type: 'array',
          description: 'Actions allowed on this characteristic',
          items: {
            type: 'string',
            enum: [
              'Broadcast',
              'Read',
              'WriteWithoutResponse',
              'Write',
              'Notify',
              'Indicate',
              'SignedWrite',
              'ExtendedProperties',
              'NotifyEncryptionRequired',
              'IndicateEncryptionRequired',
              'WritableAuxiliaries',
            ],
          },
        },
        unitType: {
          type: 'string',
          description: 'Unit type of the characteristic',
        },
        identifier: {
          type: 'string',
          description: 'identifier',
        },
        type: {
          type: 'string',
          description: 'type',
        },
        name: {
          type: 'string',
          description: 'name',
        },
      },
      description: 'Base Metadata Object Type',
    },
    NotifEvent: {
      type: 'object',
      properties: {
        unknownFields: {
          $ref: '#/definitions/UnknownFieldSet',
        },
      },
    },
  },
};
