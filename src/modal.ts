type CareerEntry = {
    id: number;
    title: string;
    company: string;
    image: string;
    from: number | string;
    to: number | string;
    description: string[];
};

export type CareerGroup = {
    name: string;
    data: CareerEntry[];
};

export type PersonalInfo = {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
};

export type SkillEntry = {
    icon: string;
    label: string;
};