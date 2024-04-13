import Fridge from "./Fridge";
import Wardrobe from "./Wardrobe";
import Tv from "./Tv";
import Desk from "./Desk";
import Curtains from "./Curtains";
import WM from "./WM";
import OfficeChair from "./OfficeChair";
import Dinning from "./Dinning";
import Bed from "./Bed";
import Tablelamp from "./Tablelamp";
import Lift from "./Lift";
import Water from "./Water";
import Security from "./Security";
import DeskTable from "./DeskTable";
import Metro from "./Metro";
import Bus from "./Bus";

// Amenities object
export const amenities = {
    Tv: <Tv />,
    Fridge: <Fridge />,
    Wardrobe: <Wardrobe />,
    Desk: <Desk />,
    Curtains: <Curtains />,
    WashingMachine: <WM />,
    OfficeChair: <OfficeChair />,
    Dinning: <Dinning />,
    Bed: <Bed />,
    Tablelamp: <Tablelamp />,
};

// Preferences object
export const mobilities = {
    Metro: <Metro />,
    Bus: <Bus />
};

// Add-ons object
export const features = {
    Lift: <Lift />,
    Water: <Water />,
    Security: <Security />,
    DeskTable: <DeskTable />,
};
