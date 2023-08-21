import { setConfig } from "@faustwp/core";
import templates from "./wp-templates";
import possibleTypes from "./possibleTypes.json";
import { CustomToolbarPlugin } from './plugins/CustomToolbarPlugin';

/**
 * @type {import('@faustwp/core').FaustConfig}
 **/
export default setConfig({
  templates,
  experimentalPlugins: [new CustomToolbarPlugin()],
  experimentalToolbar: true,
  possibleTypes,
});
