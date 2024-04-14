import { showMenu } from "./nav/openNav.js";
import { closeMenu } from "./nav/closeNav.js";
import { modalEventListeners, addOpenModalListeners, addCloseModalListeners } from "./modals/index.js";

showMenu();
closeMenu();
modalEventListeners();
addOpenModalListeners();
addCloseModalListeners();
