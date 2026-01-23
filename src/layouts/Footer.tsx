import FooterLinks from "./FooterLinks"

export default function Footer() {
  return (
    <footer>
      <FooterLinks />

      <div className="bg-rosebrown-600 border-t border-rosebrown-200">
        <div
          className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-white gap-2">
          <p>© {new Date().getFullYear()} DC Creations. All rights reserved.</p>
          <p>Made with ❤️ for modern fashion</p>
        </div>
      </div>
    </footer>
  )
}
