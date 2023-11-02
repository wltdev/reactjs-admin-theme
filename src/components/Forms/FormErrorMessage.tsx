type Props = {
    error: string;
};

export const FormErrorMessage = ({ error }: Props) => {
    return <div style={{ color: 'red' }}>{error}</div>;
};
