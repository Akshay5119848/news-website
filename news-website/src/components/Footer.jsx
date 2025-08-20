export default function Footer() {
    return (
      <footer className="bg-blue-900 text-white px-4 py-5 mt-8">
        <div className="flex flex-col items-center gap-1">
          <div className="font-bold text-lg">Web Daily</div>
          <div>Created by Sakshi Sinha</div>
          <div className="flex gap-3 mt-2 text-sm opacity-80">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
        <div className="mt-2 text-xs text-center opacity-60">&copy; {new Date().getFullYear()} Web Daily. All rights reserved.</div>
      </footer>
    );
  }
  