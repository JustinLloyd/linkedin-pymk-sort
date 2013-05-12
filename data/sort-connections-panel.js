$('#sort-by-connections-ascending').click(function() 
{
  self.port.emit("sort-by-connections-ascending");
});

$('#sort-by-connections-descending').click(function() 
{
  self.port.emit("sort-by-connections-descending");
});

$('#sort-by-first-name').click(function() 
{
  self.port.emit("sort-by-first-name");
});

$('#sort-by-last-name').click(function() 
{
  self.port.emit("sort-by-last-name");
});

$('#sort-by-title').click(function() 
{
  self.port.emit("sort-by-title");
});

$('#sort-by-location').click(function() 
{
  self.port.emit("sort-by-location");
});
