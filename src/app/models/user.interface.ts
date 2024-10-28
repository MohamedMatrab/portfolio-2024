export interface User {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  footerLabel:string;
  phoneLabel: string;
  url: string;
  summary: string;
  location: {
    address: string;
    map: string;
  };
  profiles: Media[];
}

export interface Media {
  url: string;
  network: string;
  username: string;
  icon: string;
}
