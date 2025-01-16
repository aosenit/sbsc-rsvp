export interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  menuSelection: {
    starter: string;
    mainCourse: string;
    dessert: string;
  };
}

export type Step = "landing" | "form" | "thankyou" | "success";

export interface MenuItem {
  name: string;
  description?: string;
}

export interface MenuSection {
  starters: MenuItem[];
  mains: MenuItem[];
  desserts: MenuItem[];
}
