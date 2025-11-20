import FooterBody from "./FooterBody";

const Footer = () => {
    return (
        <footer className="bg-brown w-full pt-5 pb-1 px-4 flex flex-col text-white">
            <FooterBody />
            <div className="w-full text-center underline italic">
                &copy; {new Date().getFullYear()} Pablo Planells
            </div>
        </footer>

        
    )
}

export default Footer