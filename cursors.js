// https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
(function(window) {

  var cursors = window.CURSORS = [];

  // General Cursors
  addCursor('General', 'auto');
  addCursor('General', 'default');
  addCursor('General', 'none');

  // Links & Status Cursors
  addCursor('Links & Status', 'context-menu');
  addCursor('Links & Status', 'help');
  addCursor('Links & Status', 'pointer');
  addCursor('Links & Status', 'progress');
  addCursor('Links & Status', 'wait');

  // Selection Cursors
  addCursor('Selection', 'cell');
  addCursor('Selection', 'crosshair');
  addCursor('Selection', 'text');
  addCursor('Selection', 'vertical-text');

  // Drag & Drop Cursors
  addCursor('Drag & Drop', 'alias');
  addCursor('Drag & Drop', 'copy');
  addCursor('Drag & Drop', 'move');
  addCursor('Drag & Drop', 'no-drop');
  addCursor('Drag & Drop', 'not-allowed');

  // Resize & Scrolling Cursors
  addCursor('Resize & Scrolling', 'all-scroll');
  addCursor('Resize & Scrolling', 'col-resize');
  addCursor('Resize & Scrolling', 'row-resize');
  addCursor('Resize & Scrolling', 'n-resize');
  addCursor('Resize & Scrolling', 'e-resize');
  addCursor('Resize & Scrolling', 's-resize');
  addCursor('Resize & Scrolling', 'w-resize');
  addCursor('Resize & Scrolling', 'ne-resize');
  addCursor('Resize & Scrolling', 'nw-resize');
  addCursor('Resize & Scrolling', 'se-resize');
  addCursor('Resize & Scrolling', 'sw-resize');
  addCursor('Resize & Scrolling', 'ew-resize');
  addCursor('Resize & Scrolling', 'ns-resize');
  addCursor('Resize & Scrolling', 'nesw-resize');
  addCursor('Resize & Scrolling', 'nwse-resize');

  // Zoom Cursors
  addCursor('Zoom', 'zoom-in', ['webkit']);
  addCursor('Zoom', 'zoom-out', ['webkit']);

  // Grab Cursors
  addCursor('Grab', 'grab', ['moz', 'webkit']);
  addCursor('Grab', 'grabbing', ['moz', 'webkit']);

  // Add Cursor
  function addCursor(group, value, prefixes) {
    var cursor = {
      group: group,
      value: value
    };
    if (prefixes !== undefined) {
      cursor.prefixes = prefixes;
    }
    cursors.push(cursor);
  }

})(window);
