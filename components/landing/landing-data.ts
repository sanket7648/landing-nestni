import {
  BadgeCheck,
  BedDouble,
  Building2,
  FileCheck2,
  FileText,
  ShieldCheck,
  WalletCards,
} from 'lucide-react'

export const features = [
  { icon: FileText, title: 'Document Management', text: 'Store and manage all tenant documents in one safe place.' },
  { icon: BadgeCheck, title: 'Tenant Verification', text: 'Verify tenant identity and reduce the risk of fake documents.' },
  { icon: BedDouble, title: 'Room Availability', text: 'Quickly check how many rooms are vacant and how many are occupied.' },
  { icon: WalletCards, title: 'Track Payments', text: 'See who has paid rent, whose rent is pending, and payment history.' },
]

export const solutionFeatures = [
  { icon: FileCheck2, title: 'Documents & records', text: 'Keep current and old tenant records together.' },
  { icon: ShieldCheck, title: 'Tenant verification', text: 'Keep identity checks in your tenant workflow.' },
  { icon: WalletCards, title: 'Rent tracking', text: 'See paid and pending rent at a glance.' },
  { icon: BedDouble, title: 'Room availability', text: 'Quickly check vacant and occupied rooms.' },
]

export const solutionOverview = [
  { icon: WalletCards, title: 'Rent', status: 'Tracked' },
  { icon: BedDouble, title: 'Rooms', status: 'Visible' },
  { icon: FileCheck2, title: 'Records', status: 'Organized' },
]

export const solutionTasks = [
  { icon: ShieldCheck, title: 'Tenant verification', text: 'Identity check ready', status: 'Verified', tone: 'text-blue-700 bg-blue-50' },
  { icon: WalletCards, title: 'Rent tracking', text: 'Payment status recorded', status: 'Tracked', tone: 'text-violet-700 bg-violet-50' },
  { icon: BedDouble, title: 'Room availability', text: 'Vacancies easy to see', status: 'Updated', tone: 'text-emerald-700 bg-emerald-50' },
]

export const steps = [
  {
    number: '01',
    title: 'Add your homes',
    text: 'Enter the address, rooms, beds, rent amount, and availability. Upload photos and any documents you already have.',
    icon: Building2,
  },
  {
    number: '02',
    title: 'Add & verify tenants',
    text: 'Save tenant details, upload documents, and verify identity using Aadhaar-based verification.',
    icon: ShieldCheck,
  },
  {
    number: '03',
    title: 'Track rent & vacant rooms',
    text: 'Know who has paid rent, whose rent is pending, and which rooms are vacant or occupied.',
    icon: WalletCards,
  },
]
