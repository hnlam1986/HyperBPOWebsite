import { AboutUs } from "./pages/AboutUs";
import { DataEntry } from "./pages/DataEntry";
import { DataLabeling } from "./pages/DataLabeling";
import { DocumentAdjusting } from "./pages/DocumentAdjusting";
import { DocumentDigitization, DocumentScanning } from "./pages/DocumentScanning";
import { DocumentProcessing } from "./pages/DocumentProcessing";
import { Error404 } from "./pages/Error404";
import { Home } from "./pages/Home";
import { ImageProcessing } from "./pages/ImageProcessing";
import { UnderContraction } from "./pages/ComingSoon";
import { CallCenter } from "./pages/CallCenter";
import { Contact } from "./pages/Contact";

const AppRoutes = [

    {
      index: true,
      element: <Home />
    },
    {
        path: '/about-us',
        element: <AboutUs />
    },
    {
        path: '/data-entry',
        element: <DataEntry />
    },
    {
        path: '/document-adjusting',
        element: <DocumentAdjusting />
    },
    {
        path: '/document-scanning',
        element: <DocumentScanning />
    },
    {
        path: '/document-processing',
        element: <DocumentProcessing />
    },
    {
        path: '/data-labeling',
        element: <DataLabeling />
    },
    {
        path: '/image-processing',
        element: <ImageProcessing />
    }
    ,
    {
        path: '/contact',
        element: <Contact />
    }
    
];

export default AppRoutes;
