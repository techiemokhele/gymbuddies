export type TopNavDataProps = {
   id: number;
   label: string;
   href: string;
   icon?: React.ReactNode;
}

export interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset' | undefined;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    isLoading?: boolean;
    isYellow?: boolean;
    isPurple?: boolean;
 }

 export interface TextInputProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    type?: 'text' | 'password' | 'email' | 'tel' | 'search' | undefined;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    required?: boolean;
    error?: string;
    onBlur?: () => void;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
 }