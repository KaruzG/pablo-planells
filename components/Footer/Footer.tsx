import FooterBody from "./FooterBody";

const Footer = () => {
    return (
        <footer className="bg-grey w-full pt-8 pb-2 px-6 md:px-12 flex flex-col text-white">
            <FooterBody />
            <div className="w-full mt-12 pt-2 border-t border-white/20 text-center text-sm text-white/70">
                &copy; {new Date().getFullYear()} Pablo Planells
            </div>
        </footer>
    )
}

export default Footer