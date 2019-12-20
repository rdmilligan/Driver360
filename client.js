import {ReactInstance} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  // Render to location
  r360.renderToLocation(r360.createRoot('Ryzon'), r360.getDefaultLocation());

  // Render your app content to the default cylinder surface
  const surface = r360.getDefaultSurface();
  surface.resize(600, 300);

  r360.renderToSurface(
    r360.createRoot('Driver360', {}),
    surface
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
