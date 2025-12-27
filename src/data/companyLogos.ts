// Company logo mappings
// Add logo files to public/companies/ folder with these exact names

export interface CompanyLogoData {
  name: string
  logoPath: string
}

export const companyLogos: CompanyLogoData[] = [
  { name: 'Google', logoPath: '/companies/google.svg' },
  { name: 'Microsoft', logoPath: '/companies/microsoft.svg' },
  { name: 'Amazon', logoPath: '/companies/amazon.svg' },
  { name: 'Meta', logoPath: '/companies/meta.svg' },
  { name: 'Oracle', logoPath: '/companies/oracle.svg' },
  { name: 'IBM', logoPath: '/companies/ibm.svg' },
  { name: 'Cisco', logoPath: '/companies/cisco.svg' },
  { name: 'Dell', logoPath: '/companies/dell.svg' },
]

