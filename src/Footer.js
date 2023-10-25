import { pageLinks, socialLinks } from "./data"
const Footer = () => {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {pageLinks.map(link => {
                    return (
                        <li key={link.id}>
                            <a href={link.href} rel="noreferrer" className="footer-link">{link.text}</a>
                        </li>
                    )
                })}
            </ul>
            <ul className="footer-icons">
                {
                    socialLinks.map(link => {
                        return (
                            <li>
                                <a href={link.href} target="_blank" className="footer-icon" rel="noreferrer"
                                ><i className={link.icon}>
                                    </i></a>
                            </li>
                        )
                    })
                }

            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date"></span> all rights reserved
            </p>
        </footer>
    )
}
export default Footer