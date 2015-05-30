
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
					title: '"Smog Beijing" Photography Exhibition',
					start: '2015-05-11',
					end: '2015-05-16',
					url:'#pex'
				},

				{
					title: 'Exb Start',
					start: '2015-05-11T10:30:00',
				},
				{
					title: 'Exb End',
					start: '2015-05-15T17:30:00',
				},
				{
					title: '"Breathing Free" Smog Safty Presentation',
					start: '2015-05-18',
					end: '2015-05-23',
				},
				{
					title: 'Presnt ST',
					start: '2015-05-18T17:30:00',
				},
				{
					title: 'Presnt END',
					start: '2015-05-22T10:30:00',
				},
				{
					title: '"Anti-Smog" cycling activity',
					start: '2015-05-28',
					end: '2015-05-30',
				},
				{
					title: 'Start',
					start: '2015-05-28T10:30:00',
				},
				{
					title: 'End',
					start: '2015-05-29T17:30:00',
				},
			]
		});
		
	});
