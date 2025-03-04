const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2 h-20">
      <div className="flex flex-col justify-center items-center">
        <p className="text-sm mb-1">
          Designed and Developed by Wildan Egy Ardiawan
        </p>
        <p className="text-sm">
          Built with <span className="text-emerald-400">Next.js</span> &{" "}
          <span className="text-emerald-400">Shadcn UI</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
