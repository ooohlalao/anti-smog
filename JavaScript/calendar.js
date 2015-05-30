
	$(document).ready(function() {
		
		$('#calendar').fullCalendar({
			theme: true,
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			selectable: false,
			selectHelper: true,
			select: function(start, end) {
				var title = prompt('Event Title:');
				var eventData;
				if (title) {
					eventData = {
						title: title,
						start: start,
						end: end
					};
					$('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
				}
				$('#calendar').fullCalendar('unselect');
			},
			editable: false,
			eventLimit: true, // allow "more" link when too many events
			events: [
				{
					title: '"Beijing: Now and Then" Photography Exhibition',
					start: '2015-06-11',
					end: '2015-06-16',
					url:'#pex'
				},

				{
					title: 'Exb Start',
					start: '2015-06-11T10:30:00',
				},
				{
					title: 'Exb End',
					start: '2015-06-15T17:30:00',
				},
				{
					title: '"Breathing Free" Smog Safty Presentation',
					start: '2015-06-18',
					end: '2015-06-23',
					url:'#pex2'
				},
				{
					title: 'Presnt ST',
					start: '2015-06-18T10:30:00',
				},
				{
					title: 'Presnt END',
					start: '2015-06-22T17:30:00',
				},
				{
					title: '"Anti-Smog" cycling race',
					start: '2015-06-27',
					end: '2015-06-29',
					url:'#pex3'
				},
				{
					title: 'Start',
					start: '2015-06-27T10:30:00',
				},
				{
					title: 'End',
					start: '2015-06-28T17:30:00',
				},
			]
		});
		
	});
