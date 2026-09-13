import '@fontsource/nunito/400.css';
import '@fontsource/nunito/700.css';
import '@fontsource/source-sans-3/400.css';
import '@fontsource/source-sans-3/600.css';

import './styles/fonts.css';
import './styles/tokens.css';
import './styles/base.css';
import './styles/sections.css';
import './styles/decor.css';

import { initI18n } from './js/i18n.js';
import { initPanels } from './js/panels.js';

initI18n();
initPanels();
