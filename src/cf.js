// Connecting Cloudflare app options with the Swetrix.js script here
(function (window, options) {
  if (!window.swetrix) {
    return;
  }

  if (!options.projectID) {
    if (options.debug) {
      console.log('Swetrix: Project ID is missing');
    }
    return;
  }

  const swetrix = window.swetrix;

  swetrix.init(options.projectID, {
    debug: options.debug,
    respectDNT: options.respectDNT,
    apiURL: options.apiURL || 'https://api.swetrix.com/log',
  });

  swetrix.trackViews({
    unique: options.unique,
    ignore: options.ignore,
    noHeartbeat: options.noHeartbeat,
    heartbeatOnBackground: options.heartbeatOnBackground,
  })
})(
  window,
  {
    projectID: INSTALL_OPTIONS.projectID,
    respectDNT: INSTALL_OPTIONS.respect_dnt,
    apiURL: INSTALL_OPTIONS.advanced_settings_toggle && INSTALL_OPTIONS.custom_api,
    debug: INSTALL_OPTIONS.advanced_settings_toggle && INSTALL_OPTIONS.debug,
    unique: INSTALL_OPTIONS.advanced_settings_toggle && INSTALL_OPTIONS.tv_unique,
    ignore: INSTALL_OPTIONS.advanced_settings_toggle && INSTALL_OPTIONS.tv_ignore,
    noHeartbeat: INSTALL_OPTIONS.advanced_settings_toggle && INSTALL_OPTIONS.tv_no_heartbeat,
    heartbeatOnBackground: INSTALL_OPTIONS.advanced_settings_toggle && INSTALL_OPTIONS.tv_heartbeat_on_background,
  }
);
