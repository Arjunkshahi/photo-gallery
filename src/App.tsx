import { useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import Lightbox from "yet-another-react-lightbox";
import { slides } from "./data";
import "yet-another-react-lightbox/styles.css";
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Images from "./Images";

function App() {
  // const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);
  const { signOut } = useAuthenticator();

  return (
    <>
      {/* <button onClick={() => setOpen(true)}>Open Lightbox</button>  */}

      <Images
        data={slides}
        onClick={(currentIndex) => setIndex(currentIndex)}
      />

      <Lightbox
        plugins={[Captions, Download, Fullscreen, Thumbnails]}
        captions={{
          showToggle: true,
          descriptionTextAlign: "start",
        }}
        // open={open}
        // close={() => setOpen(false)}

        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default App;
