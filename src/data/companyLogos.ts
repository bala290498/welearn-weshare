// Company logo mappings
// Add logo files to public/logos/ folder with these exact names

export interface CompanyLogoData {
  name: string
  logoPath: string
}

export const companyLogos: CompanyLogoData[] = [
  { name: 'Google', logoPath: '/logos/google.svg' },
  { name: 'Microsoft', logoPath: '/logos/microsoft.svg' },
  { name: 'Amazon', logoPath: '/logos/amazon.svg' },
  { name: 'Meta', logoPath: '/logos/meta.svg' },
  { name: 'Oracle', logoPath: '/logos/oracle.svg' },
  { name: 'IBM', logoPath: '/logos/ibm.svg' },
  { name: 'Cisco', logoPath: '/logos/cisco.svg' },
  { name: 'Dell', logoPath: '/logos/dell.svg' },
]

