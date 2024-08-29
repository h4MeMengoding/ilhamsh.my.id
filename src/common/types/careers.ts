export interface CareerProps {
  position: string;
  company: string;
  company_legal_name?: string | null;
  logo: string | null;
  location: string;
  type: string;
  start_date: string;
  end_date: string | null;
  link: string | null;
  responsibilities?: string[];
}
