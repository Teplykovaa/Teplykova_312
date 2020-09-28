function init() {
  $('#makeMeDraggable').draggable( {
    containment: '#content',
    cursor: 'move',
    snap: '#content'
  } );
}
$( init );
function init() {
  $('#makeMeDraggable').draggable( {
    cursor: 'move',
    containment: 'document',
    stop: handleDragStop
  } );
}
function handleDragStop( event, ui ) {
  var offsetXPos = parseInt( ui.offset.left );
  var offsetYPos = parseInt( ui.offset.top );
  alert( "Перетаскивание завершено!\n\nСмещение: (" + offsetXPos + ", " + offsetYPos + ")\n");
}
</script>