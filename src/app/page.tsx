import Metadata from "next";

export const metadata : Metadata = {
  title : 'Home - VAN CODE STUDIO',
  description : 'Aplikasi untuk belajar Next Js',
  authors : [{
    name : 'Irvan Maulana', 
    url : 'http://localhost:3000'
  }],
  icons : {
    icon : '/icon.png',
  },
  openGraph : {
    title : 'Home - VAN CODE STUDIO',
  },
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello World
    </main>
  );
}
