interface License{
    identityId: string,
    clientId: string,
    userId: string
}

interface FileInfo{
    shipment: Shipment,
    transactions: Transaction[],
    agreementSettings: AgreementSettings
}

interface Shipment{
    // id: string,
    messageId: string,
    bankName: string,
    transferAt: string,
}

interface Agreement{
    id: string,
    license: License,
    agreementId: string,
    accountNumber: string,
    agreementNumber: string
    properties: string // (JSON)
}

interface Capsule{
    agreementSettings: AgreementSettings
    transactions: Transaction[],
}

interface AgreementSettings{
    batchBooking: boolean,
}


interface Transaction{
    id: Id
}

interface Id {
    // id: string,
    value: string
}
interface ValidationContainer {
    transaction: Transaction
}

interface DbBankFile {
    id?: string,
    license: string
    transactions: FileTransaction[],
    fileContent: string,
    clientId: string,
    employeeId: string,
    passportId: string,
    bankName: string,
    messageId: string,
    fileName: string,
    transferAt: string
}

interface ApiBankFile {
    fileId: string,
    clientId: string,
    transactions: FileTransaction[],
    fileContent: string,
    bankName: string,
    messageId: string,
    fileName: string,
    locked: boolean,
    lockId?: string,
    transferAt: string
}

interface FileTransaction {
    transactionId: string
    endToEndId: string
    batchId: string,
}

interface FileResponse {
    fileContent: string,
    format: string,
    messageType: string,
    messageId: string,
    details: Detail[],
    fileName?: string
}

interface Detail {
    transactionId: string,
    pmtInfId: string,
    endToEndId: string
}
interface ApiInboundFile{
    fileId: number
    fileContent: string
    bankName: string
    fileName: string
    locked: boolean
    createdAt: string
}