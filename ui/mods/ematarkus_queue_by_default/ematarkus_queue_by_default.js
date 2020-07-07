(function() {
  lgir.shouldAppendFab = function(event) {
    return !(event.shiftKey || event.ctrlKey);
  }
  lgir.shouldExitModeFab = function(event) {
    return false;
  }

  lgir.shouldAppendCommand = function(event) {
    return !(event.shiftKey || event.ctrlKey);
  }

  lgir.shouldExitModeCommand = function(event) {
    return event.keyCode === keyboard.esc || event.keyCode === keyboard.enter || event.ctrlKey;
  }

  lgir.shouldAppendContext = function(event) {
    return !(event.shiftKey || event.ctrlKey);
  }

  var unselect = function() {
    api.select.empty();
    model.selection(null);
    model.playSelectionSound(true, null, false, null);
  }

  var LeftButton = 0;
  var MiddleButton = 1;
  var RightButton = 2;

  lgir.holodeckModeMouseDown.fab = function (mdevent) {
    if (mdevent.button === LeftButton) {
      lgir.beginFabDown(mdevent);
      return true;
    }
    else if (mdevent.button === RightButton) {
      model.endFabMode();
      return true;
    }
    return false;
  };
})();
