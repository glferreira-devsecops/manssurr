import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface DoctorInfo {
  name: string;
  crm: string;
  experience: string;
  education: string;
  address: string;
  phone: string;
  whatsappClean: string; // For API links
}