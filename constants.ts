import { 
  Scissors, 
  Microscope, 
  FileText, 
  Stethoscope,
  PlusCircle
} from 'lucide-react';
import { DoctorInfo, ServiceItem } from './types';

export const DOCTOR_INFO: DoctorInfo = {
  name: "Dr Mansur",
  crm: "CRM-RJ 34.702-6",
  experience: "Com mais de 40 anos de vasta experiência em medicina cirúrgica",
  education: "Médico formado por uma universidade federal do Rio de Janeiro",
  address: "Rua Oto de Alencar, nº 35, Maracanã",
  phone: "21 96515-7097",
  whatsappClean: "5521965157097",
  instagram: "@drmansurbiopsias"
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Retirada de nódulos ou verrugas",
    description: "Retirada de nódulos ou verrugas em qualquer lugar do corpo, como face, órgãos genitais, couro cabeludo, pele em geral, etc.",
    icon: Scissors
  },
  {
    title: "Biópsias Superficiais",
    description: "Realização de biópsias superficiais para análise histopatológica da patologia.",
    icon: Microscope
  },
  {
    title: "Cirurgias Ambulatoriais",
    description: "Realizamos todo tipo de cirurgia ambulatorial.",
    icon: Stethoscope
  },
  {
    title: "Exame e Laudo",
    description: "Envio do material para exame e laudo histopatológico.",
    icon: FileText
  },
  {
    title: "Outras",
    description: "Consulte-nos para outros procedimentos.",
    icon: PlusCircle
  }
];