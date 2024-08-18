import Input from "@/components/Input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AboutPage from "@/components/AboutPage";
import styles from '@/app/app.module.css'
import Profile from "@/components/DisplayData";
import ConditionalRendering from "@/components/ConditionalRendering";
import Rendering from "@/components/RenderingList"
import CommonButton from "@/components/Button"
export default function Home() {
  return (
  <main>
    Home
    <div className="flex gap-4 mt-5">
   <Button variant={"secondary"}> ShadCn UI Button </Button> 
   <Input />
    </div>
    
   <AboutPage />
   <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfDB8MHx8fDA%3D" className={styles.avatar} alt="" />
   <Profile />
   <ConditionalRendering />
   <Rendering />
   <CommonButton />
  </main> 
  );
}
