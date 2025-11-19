import { 
  Scissors, 
  Microscope, 
  Activity, 
  FileText, 
  Stethoscope 
} from 'lucide-react';
import { DoctorInfo, ServiceItem } from './types';

export const DOCTOR_INFO: DoctorInfo = {
  name: "Dr. J. Mansur",
  crm: "CRM-RJ 34.702-6",
  experience: "Mais de 40 anos de vasta experiência em medicina cirúrgica",
  education: "Médico formado por uma universidade federal do Rio de Janeiro",
  address: "Rua Oto de Alencar, nº 35, Maracanã, Rio de Janeiro",
  phone: "(21) 98822-0502",
  whatsappClean: "5521988220502"
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Remoção de Nódulos e Verrugas",
    description: "Retirada segura de lesões em qualquer lugar do corpo, incluindo face, couro cabeludo e órgãos genitais.",
    icon: Scissors
  },
  {
    title: "Biópsias Superficiais",
    description: "Procedimentos precisos para coleta de material e análise histopatológica de patologias.",
    icon: Microscope
  },
  {
    title: "Cirurgias Ambulatoriais",
    description: "Realização de todo tipo de pequena cirurgia com anestesia local e rápida recuperação.",
    icon: Stethoscope
  },
  {
    title: "Laudos Histopatológicos",
    description: "Envio completo do material coletado para exame laboratorial e emissão de laudo detalhado.",
    icon: FileText
  },
  {
    title: "Dermatologia Cirúrgica",
    description: "Tratamento de lesões de pele em geral com foco estético e funcional.",
    icon: Activity
  }
];