'use strict'

const _ = null

const mapValuesByKeys = (o) =>
  Object.keys(o).reduce((newObject, k) => {
    newObject[k] = k.toLowerCase().replace(/_/g, '-')
    return newObject
  }, {})

// Messages between webview and main browser process
const messages = {
  /**
   * webview -> browser
   * browser must respond with GOT_INIT_DATA
   */
  GET_INIT_DATA: _,
  /**
   * browser -> webview
   * browser must send null if saved value does not exist
   */
  GOT_INIT_DATA: _, /* @param {Uint8Array|null} seed, @param {Uint8Array|null} deviceId */
  /**
   * webview -> browser
   * browser must save values in persistent storage and then send GOT_INIT_DATA
   * with the saved values
   */
  SAVE_INIT_DATA: _, /* @param {Uint8Array} seed, @param {Uint8Array} deviceId */
  /**
   * webview -> browser
   * browser must update its local values with the new sync records, performing
   * conflict-resolution as necessary.
   */
  RECEIVE_SYNC_RECORDS: _, /* @param {{bookmarks: [], historySites: [], siteSettings: []}} */
  /**
   * browser -> webview
   * browser sends this to the webview with the data that needs to be synced
   * to the sync server.
   */
  SEND_SYNC_RECORDS: _ /* @param {{bookmarks: [], historySites: [], siteSettings: []}} */
}

module.exports = mapValuesByKeys(messages)