import { profile } from '../../content/profile'
import './Footer.css'

// Read once when the page loads; rendering stays pure.
const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span className="footer__copyright">
          © {YEAR} {profile.name}
        </span>
      </div>
    </footer>
  )
}
