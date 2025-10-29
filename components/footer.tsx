import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Adil Saaly. All rights reserved.
          </p>
          <a href="#">
            <Image src={"/adil-logo2.png"} alt="" height={64} width={64} />
          </a>
          <p className="text-sm text-muted-foreground">
            Feel free to reach out
          </p>
        </div>
      </div>
    </footer>
  );
}
