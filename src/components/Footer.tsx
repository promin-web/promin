const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-20 text-center">
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Promin Studio
      </p>
    </footer>
  );
};

export default Footer;
