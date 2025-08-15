type Props = {
    children: React.ReactNode;
};

export default function Modal({ children }: Props) {
    return <div className='fixed inset-0 z-50 flex items-center justify-center'>{children}</div>;
}
