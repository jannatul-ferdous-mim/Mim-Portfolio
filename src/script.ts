import './style.css';

import Application from './Application/Application';
import { getOsUrl } from './Application/World/MonitorScreen';

// The 3D scene is hard to use on phones, so send them to the one-page
// MimOS view. Add ?desktop to the URL to force the 3D scene anyway.
const params = new URLSearchParams(window.location.search);
if (window.innerWidth < 768 && !params.has('desktop')) {
    window.location.replace(`${getOsUrl()}simple`);
} else {
    const app: Application = new Application();
}
