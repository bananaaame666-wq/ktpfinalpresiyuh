export interface EventItem {
  id: string;
  title: string;
  category: 'football' | 'basketball' | 'commencement' | 'traditions';
  venue: string;
  date: string;
  time: string;
  standLocation: string;
  standHours: string;
  expectedAttendance: string;
  featured?: boolean;
  notes: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  unit: string;
  description: string;
  features: string[];
  popular?: boolean;
  badge?: string;
}

export interface Reservation {
  id: string;
  confirmationCode: string;
  fullName: string;
  phone: string;
  eventId: string;
  eventTitle: string;
  venue: string;
  standLocation: string;
  peopleCount: number;
  umbrellaCount: number;
  keepClearBag: boolean;
  estimatedArrival: string;
  totalAmount: number;
  timestamp: string;
  status: 'confirmed' | 'checked-in' | 'ready-pickup' | 'completed';
}

export interface BagTrackingRecord {
  tagNumber: string;
  ownerName: string;
  eventTitle: string;
  venue: string;
  standLocation: string;
  bagDescription: string;
  sealNumber: string;
  intakeTime: string;
  status: 'intake' | 'stored' | 'ready' | 'retrieved';
  statusHeadline: string;
  statusDescription: string;
  rackLocation: string;
  staffAttendant: string;
  photoUrl?: string;
  itemsLent: string;
  umbrellaCount?: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}
