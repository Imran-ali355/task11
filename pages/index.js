import Image from "next/image";
import EventItem from "../Components/EventItem";

export default function Home() {
 

  return (
    <div >
        <EventItem id="1" title="programming for everyone" date="01-02-2022" desc="this is some dummy content 1"  />
        <EventItem id="2" title="programming for everyone 2" date="01-02-2023" desc="this is some dummy content 2"  />

        
        <EventItem id="2" title="programming for everyone 2" date="01-02-2023" desc="this is some dummy content 2"  />
     
    </div>
  );
}
