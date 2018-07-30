// ?storageMin={from}&storageMax={to}&ram={ram}&hdd={hdd}&location={location}
// eg., http://85.17.31.99:4300/api/servers?storageMin=250&
// storageMax=44000&ram=2,4,6,34&hdd=SAS,SATA2&location=AmsterdamAMS-01
export interface ISearch {
    storageMin?: number,
    storageMax?: number,
    ram?: [string],
    hdd?: [string],
    location?: [string]
}
