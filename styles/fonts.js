import { Love_Ya_Like_A_Sister,Poppins } from "next/font/google";
import localFont from "next/font/local";



// Google Fonts

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins"
});




// Variable Fonts
const duel = localFont({
  src: "./DUEL Regular.ttf",
  variable: "--font-duel"
});

const instrumentSans = localFont({
  src: "./InstrumentSans-VariableFont_wdth,wght.ttf",
  variable: "--font-sans"
});





export {  duel, poppins, instrumentSans };
