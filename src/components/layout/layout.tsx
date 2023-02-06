
type LayoutProps = React.PropsWithChildren<{
    title?: string;
    description?: string;
}>

const Layout: React.FC<LayoutProps> = ({
    children,
    title = 'Trivia',
    description = 'TV Trivia'
}) => {
    return (
        <>
        </>
    )
}

export default Layout