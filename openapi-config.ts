import type {ConfigFile} from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
    schemaFile: 'http://localhost:8080/v2/api-docs',
    apiFile: './src/configs/serviceConfig.ts',
    apiImport: 'baseApi',
    hooks: true,
    outputFiles: {
        './src/services/authentication.ts': {
            filterEndpoints: [/authentication/i],
        },
        './src/services/transactionParty.ts': {
            filterEndpoints: [/transaction-party/i],
        },
        './src/services/applicant.ts': {
            filterEndpoints: [/applicant/i],
        },
    }
}

export default config
